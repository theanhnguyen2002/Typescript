import axios from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


type ProductAddProps = {
    name: string,
    onAdd: (product: TypeInputs) => void
};
type TypeInputs = {
    name: string,
    price: number,
    img: string
}
type EventChange = any

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();
    const [url, setUrl] = useState<string>('');
    const onSubmit: SubmitHandler<TypeInputs> = data => {
        
        data.img=url;
        // console.log(data)
        props.onAdd(data);
        navigate("/admin/products")

    }
    const imgProduct = (event: EventChange) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "jkbdphzy");

        axios({
            url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-formendcoded",
            },
            data: formData,
        }).then((res) => {
            //  reset({img: res.data.url});
            setUrl(res.data.url);
        });
    }
    const imgField = register('img', { required: true });
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {props.name}
            <input type="text" placeholder='Ten san pham' {...register('name')} />
            <input type="number" placeholder='Gia san pham' {...register('price')} />
            <input type="file" placeholder='Anh san pham' {...imgField} onChange={(e) => { imgField.onChange(e); imgProduct(e) }} />
            <button>Add</button>
        </form>
    )
}

export default ProductAdd