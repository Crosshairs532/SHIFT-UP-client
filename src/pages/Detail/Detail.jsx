import { useLoaderData, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io'
import AddProduct from "../Addproduct";
import Swal from "sweetalert2";
import { useContext } from "react";
import { authContext } from "../../Authprovider/Authprovider";

const Detail = () => {
    const navigate = useNavigate();
    const { user, theme } = useContext(authContext);
    const { email } = user;
    console.log(email);
    const load = useLoaderData();
    const { Cname, description, image, Bname, Ctype } = load
    const handleback = () => {
        navigate(-1)
    }
    const Addtocart = () => {
        const product = { Bname, Cname, image, Ctype, email }
        fetch('https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/addedtocart', {
            method: "POST",
            headers: {
                "content-type": "application/json"
                ,
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added to cart',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    }


    return (
        <div className=" min-h-screen ">
            <div className=" flex lg:flex-row flex-col mt-32 justify-center lg:justify-between items-center ">
                <div className=" w-[90%] lg:w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className=" font-oxanium text-[grey] space-y-4 w-[90%] lg:w-1/2">
                    <h1 className=" font-oxanium font-bold text-4xl text-slate-200">{Bname}</h1>
                    <p> <span className={` font-bold text-xl ${theme ? 'text-slate-200' : 'text-slate-800'} `}>Car Type: </span>{Ctype}</p>
                    <h1><span className={` font-bold text-xl ${theme ? 'text-slate-200' : 'text-slate-800'} `}>Car Name: </span>{Cname}</h1>
                    <p> <span className={` font-bold text-xl ${theme ? 'text-slate-200' : 'text-slate-800'} `}>Description: <br /></span> {description}</p>
                    <button onClick={Addtocart} className=" bg-[#e79358] font-semibold p-2 rounded hover:bg-[#ff6900]  duration-200 font-oxanium text-sm">Add to cart</button>

                </div>

            </div>
            <button onClick={handleback} className={`text-5xl ${theme ? 'text-white' : ' text-slate-800'}`}><IoIosArrowRoundBack></IoIosArrowRoundBack></button>
        </div >

    );
};

export default Detail;