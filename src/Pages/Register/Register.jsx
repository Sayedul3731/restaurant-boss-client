import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react"
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { register, handleSubmit,reset, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => { 
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        console.log('User profile updated.');
                        axiosPublic.post('/users', userInfo)
                        .then(res => {
                            console.log(res.data);
                            if(res.data?.insertedId){
                                reset()
                                Swal.fire({
                                    title: "Created!",
                                    text: "User created Successfully.",
                                    icon: "success"
                                  });
                                  navigate('/')
                            }
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            })
            .catch(errors => {
                console.error(errors);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" {...register("name", { required: true })} name="name" placeholder="User Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 mt-2">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="User photoURL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600 mt-2">PhotoURL is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 mt-2">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'pattern' && <span className="text-red-600 mt-2">Password must have a capital letter, a special character, a number and a small letter</span>}
                            {errors.password?.type === 'required' && <span className="text-red-600 mt-2">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600 mt-2">Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600 mt-2">Password must be less then 20 characters</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p>Already Have An Account? Please <Link to="/login" className='text-blue-600'>Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;