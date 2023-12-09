/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";
import { GiSplash } from "react-icons/gi";

const Header = () => {
    const { user, logOut, theme, setTheme } = useContext(authContext)
    console.log(user);
    const location = useLocation();
    const navigate = useNavigate();
    const links =

        <>
            <li className=" font-oxanium text-xl font-medium text-black"><NavLink to='/'>Home</NavLink></li>
            <li className=" font-oxanium text-xl font-medium text-black"><NavLink to='/addproduct'>Addproduct</NavLink></li>
            <li className=" font-oxanium text-xl font-medium text-black"><NavLink to='/mycart'>MyCart</NavLink></li>

            <li className=" font-oxanium text-xl lg:hidden md:hidden block font-medium text-black"><Link to='/login'>Sign In</Link></li>





        </>


    const handleout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'logged out',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/login')
            }
            )
            .catch(er => console.log(er))


    }

    return (
        <div>
            <div className={`navbar p-4 ${location.pathname == '/' ? 'bg-transparent text-slate-200' : ' text-slate-600'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center flex items-center gap-2">
                    <h1 className=" md:text-4xl text-2xl lg:text-4xl"><GiSplash></GiSplash></h1>
                    <h1 className=" font-oxanium font-bold md:text-4xl text-2xl lg:text-4xl"><Link to="/">SHIFT UP</Link></h1>
                </div>
                <div className="navbar-end">
                    <input onClick={() => setTheme(!theme)} type="checkbox" className="toggle mr-3" />

                    {
                        user ? <>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 text-black font-oxanium rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li className=" p-2">Name: {user.displayName} </li>
                                    <li><a>Settings</a></li>
                                    <li><button onClick={handleout}>Logout</button></li>
                                </ul>
                            </div>

                        </>
                            :
                            <>
                                <div className=" hidden md:flex lg:flex  gap-10">
                                    <Link to='/login'>sign in</Link>

                                    {/* <Link to='/register'>sign up</Link> */}
                                </div>
                            </>
                    }

                </div>
            </div>

        </div >
    );
};

export default Header;