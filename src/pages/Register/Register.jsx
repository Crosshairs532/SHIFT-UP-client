/* eslint-disable no-useless-escape */
import { useContext } from "react";
import { authContext } from "../../Authprovider/Authprovider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate();
    const { signUp } = useContext(authContext);
    const createUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, password, photo);

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~\-={}\[\]:;"'<>,.?]).{6,}$/;
        const isEmailvalid = emailRegex.test(email);
        const isPasswordValid = passwordRegex.test(password);

        if (!isEmailvalid) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Email?',
                footer: '<p> check your email</p>'
            })
            e.target.reset();

        }

        else {
            if (!isPasswordValid) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password must include 6 characters, capital letter, and special characters',
                    footer: '<p>check your password</p>'
                })
                e.target.reset()
            }
            else {
                signUp(email, password)
                    .then((rslt) => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'successfully registered',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        updateProfile(rslt.user, {
                            displayName: name,
                            photoURL: photo

                        })
                        const user = { name, email, photo }

                        fetch('https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/user', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"

                            }
                            ,
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))
                        navigate('/')
                        console.log(rslt.user)

                    })
                    .catch(er => {

                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong with register',
                            footer: `${er.message}`
                        })
                    })
            }


        }




    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={createUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Click to Register</button>
                            </div>
                        </form>
                        <p className=" px-9 pb-3">Already have an account? <Link to="/login" className=" font-semibold">Login Now</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );

};
export default Register;