/* eslint-disable react/no-unescaped-entities */
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState, useContext } from "react"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";
    console.log('location in the login page', from);
    const { signIn } = useContext(AuthContext)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "User Logged in Successfully.",
                    showClass: {
                        popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                    },
                    hideClass: {
                        popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                    }
                });
                navigate(from, { replace: true })
                console.log('from', from);
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha above..." className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't Have An Account? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;