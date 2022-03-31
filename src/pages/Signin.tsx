import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';
import { authenticated } from '../utils/localStorage';


type TypeInputs = {
    email: string,
    password: string
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TypeInputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        const {data: user} = await signin(data);
        console.log(user);

        //localStorage
        authenticated(user, () => {
            navigate('/');
        })
    }
  return (
      <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="email" placeholder='Email' {...register('email')} />
              <input type="password" placeholder='Mật khẩu' {...register('password')} />
              <button>Đăng nhập</button>
          </form>
      </div>
  )
}


export default Signin