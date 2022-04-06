import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import { signup } from '../api/auth';

import './../pages/assets/vendor/fonts/boxicons.css';
import './../pages/assets/vendor/css/pages/page-auth.css';





type TypeInputs = {
    name: string,
    email: string,
    password: string
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        signup(data);
        navigate("/signin");
    }
    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" placeholder='Tên' {...register('name')} />
        //     <input type="email" placeholder='Email' {...register('email')} />
        //     <input type="password" placeholder='Mật khẩu' {...register('password')} />
        //     <button>Đăng ký</button>
        // </form>

        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    {/* Register Card */}
                    <div className="card">
                        <div className="card-body">
                            {/* Logo */}
                            <div className="app-brand justify-content-center">
                                <a href="index.html" className="app-brand-link gap-2">
                                    <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648496099/1024px-Starbucks_Corporation_Logo_2011.svg_lkbznl.png" alt="" width="150px" />
                                </a>
                            </div>
                            {/* /Logo */}
                            <h4 className="mb-2">Adventure starts here 🚀</h4>
                            <p className="mb-4">Make your app management easy and fun!</p>
                            <form id="formAuthentication" className="mb-3" action="index.html" method="POST"
                                onSubmit={handleSubmit(onSubmit)} >
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder='user name' {...register('name')} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" placeholder='email' {...register('email')} />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <div className="input-group input-group-merge">
                                        <input type="password" id="password" className="form-control" placeholder='password' {...register('password')} aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide" /></span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="terms-conditions" name="terms" />
                                        <label className="form-check-label" htmlFor="terms-conditions">
                                            I agree to
                                            <a href="javascript:void(0);">privacy policy &amp; terms</a>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary d-grid w-100">Sign up</button>
                            </form>
                            <p className="text-center">
                                <span>Already have an account?</span>
                                <a>
                                    <span> <NavLink to="/signin">Sign in instead</NavLink> </span>
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* Register Card */}
                </div>
            </div>
        </div>

    



    )
}

export default Signup