import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductTye } from '../types/product'


type ProductEditProps = {
    onUpdate: (product: ProductTye) => void
}

type FromInputs = {
    name: string,
    img: string,
    price: number
}
type EventChange = any


const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FromInputs>();
    const navigate = useNavigate();
    const [url, setUrl] = useState<string>('');
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, [])
    // const imgProduct = (event: EventChange) => {
    //     const file = event.target.files[0];
    //     const formData = new FormData();
    //     formData.append("file", file);
    //     formData.append("upload_preset", "jkbdphzy");

    //     axios({
    //         url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/x-www-formendcoded",
    //         },
    //         data: formData,
    //     }).then((res) => {
    //         //  reset({img: res.data.url});
    //         setUrl(res.data.url);
    //     });
    // }
    let imageload = ""
    const onSubmit: SubmitHandler<FromInputs> = async data => {
        // console.log(data)
        console.log(data.img[0]);
        if (data.img[0] != "h") {
            const file = data.img[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "jkbdphzy");

            const { data: newImage } = await axios({
                url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-formendcoded",
                },
                data: formData,
            })
            imageload = newImage.url
            data.img = imageload
            props.onUpdate(data);
            navigate("/admin/products")


        }else{
            navigate("/admin/products")
            console.log('abc')

        }

        //băn data ra ngoài app.js
        //redirect sang trang product
    }
    // const imgField = register('img', { required: true });

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text"  {...register('name', { required: true })} />
            <input type="file"  {...register('img')} />
            <input type="number"  {...register("price")} />
            <button>Update</button>
        </form>
    )
}

export default ProductEdit;



