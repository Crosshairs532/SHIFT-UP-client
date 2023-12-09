/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../Authprovider/Authprovider";
import { Triangle } from 'react-loader-spinner'
import { Navigate, useLocation } from "react-router-dom";
const Privateroute = ({ children }) => {
    const location = useLocation();
    console.log(location.pathname);
    const { user, loader } = useContext(authContext)
    console.log(user);
    if (loader) {
        return <div className=" flex justify-center items-center">
            <Triangle
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname} replace></Navigate>

};

export default Privateroute;