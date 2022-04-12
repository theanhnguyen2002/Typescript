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

        data.img = url;
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

        <div className="container-xxl flex-grow-1 container-p-y">
            <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Product /</span> Add</h4>
            <div className="row">
                <div className="col-xl">
                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Add</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {props.name}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-fullname">Name Product</label>
                                    <input type="text" className="form-control" id="basic-default-fullname" placeholder="name" {...register('name')}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-fullname">Photo Product</label>
                                    <input type="file" className="form-control" id="basic-default-fullname" {...imgField} onChange={(e) => { imgField.onChange(e); imgProduct(e) }}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-email">Price Product</label>
                                    <div className="input-group input-group-merge">
                                        <input type="text" id="basic-default-email" className="form-control" placeholder="price" {...register('price')}/>
                                        <span className="input-group-text" id="basic-default-email2">$</span>
                                    </div>
                                </div>

                                {/* <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-message">desc</label>
                                    <textarea id="basic-default-message" className="form-control" placeholder="Hi, Do you have a moment to talk Joe?" defaultValue={""} />
                                </div> */}
                                <button className="btn btn-primary">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default ProductAdd