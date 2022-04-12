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


        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Product /</span> Edit</h4>
            <div className="row">
                <div className="col-xl">
                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Edit</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-fullname">Name Product</label>
                                    <input type="text" className="form-control" id="basic-default-fullname" placeholder="name" {...register('name', { required: true })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-fullname">Photo Product</label>
                                    <input type="file" className="form-control" id="basic-default-fullname" {...register('img')} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-email">Price Product</label>
                                    <div className="input-group input-group-merge">
                                        <input type="text" id="basic-default-email" className="form-control" placeholder="price" {...register("price")} />
                                        <span className="input-group-text" id="basic-default-email2">$</span>
                                    </div>
                                </div>

                                {/* <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-message">desc</label>
                                    <textarea id="basic-default-message" className="form-control" placeholder="Hi, Do you have a moment to talk Joe?" defaultValue={""} />
                                </div> */}
                                <button className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit;



