/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react"

const PrivetRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from : location}} replace></Navigate>;
};

export default PrivetRoutes;