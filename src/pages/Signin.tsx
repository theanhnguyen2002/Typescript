import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, NavLink } from 'react-router-dom';
import { signin, signup } from '../api/auth';
import { authenticated } from '../utils/localStorage';

type TypeInputs = {
    email: string,
    password: string
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const { data: user } = await signin(data);
        console.log(user);
        // localstorage
        authenticated(user, () => {
            navigate('/');
        })
    }
    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="email" placeholder='Email' {...register('email')} />
        //     <input type="password" placeholder='Mật khẩu' {...register('password')} />
        //     <button>Đăng nhập</button>
        // </form>

        


        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                {/* Register */}
                <div className="card">
                    <div className="card-body">
                    {/* Logo */}
                    <div className="app-brand justify-content-center">
                        <a href="index.html" className="app-brand-link gap-2">
                            <img src="https://res.cloudinary.com/dsirnbuyv/image/upload/v1648496099/1024px-Starbucks_Corporation_Logo_2011.svg_lkbznl.png" alt="" width="150px" />
                        </a>
                    </div>
                    {/* /Logo */}
                    <h4 className="mb-2">Welcome to Sneat! 👋</h4>
                    <p className="mb-4">Please sign-in to your account and start the adventure</p>
                    <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email or Username</label>
                        <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username"  />
                        </div>
                        <div className="mb-3 form-password-toggle">
                        <div className="d-flex justify-content-between">
                            <label className="form-label" htmlFor="password">Password</label>
                            <a href="auth-forgot-password-basic.html">
                            <small>Forgot Password?</small>
                            </a>
                        </div>
                        <div className="input-group input-group-merge">
                            <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" />
                            <span className="input-group-text cursor-pointer"><i className="bx bx-hide" /></span>
                        </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="remember-me" />
                            <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                        </div>
                        </div>
                        <div className="mb-3">
                        <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                        </div>
                    </form>
                    <p className="text-center">
                        <span>New on our platform?</span>
                        <a href="auth-register-basic.html">
                            <span> <NavLink to="/signup">Create an account</NavLink> </span>
                        </a>
                    </p>
                    </div>
                </div>
                {/* /Register */}
                </div>
            </div>
        </div>



    )
}

export default Signin