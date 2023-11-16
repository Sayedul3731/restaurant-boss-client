import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const {logInWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handleLogInWithGoogle = () => {
        logInWithGoogle()
        .then(res => {
            console.log(res.user);
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="flex justify-center">
                <button onClick={handleLogInWithGoogle} className="flex justify-center items-center gap-3 mb-5">
                    <FaGoogle></FaGoogle>
                    Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;