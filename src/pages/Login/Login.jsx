/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Authprovider/Authprovider";
import { FcGoogle } from 'react-icons/fc'
import Swal from 'sweetalert2'

const Login = () => {
    const location = useLocation();
    console.log(location);
    const { signIn, signInGoogle } = useContext(authContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(rst => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location?.state ? location.state : '/')

            })
            .catch(er => Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong with login',
                footer: `${er.message}`
            }))
    }

    const SigninwithGoogle = () => {
        signInGoogle()
            .then((rslt) => {
                console.log(rslt, "google");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'logged in with google',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location?.state ? location.state : '/')

            })
            .then(er => console.log(er))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 font-oxanium">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className=" px-9">
                            <p className=" text-lg ">login with google </p>
                            <button onClick={SigninwithGoogle} className=" text-xl outline-2 outline-zinc-700 outline w-[50px] flex justify-center items-center"><FcGoogle></FcGoogle></button>
                        </div>
                        <p className=" px-9  pb-3">Dont have any account? <Link to="/register" className=" font-semibold">Register Now</Link> </p>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Login;