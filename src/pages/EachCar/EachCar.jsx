/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
import { authContext } from "../../Authprovider/Authprovider";


const EachCar = ({ car }) => {
    const { theme } = useContext(authContext)
    const { _id, image, Bname, Cname, price, Ctype, description, rating } = car;
    // console.log(image, "eachcar");
    // console.log(car, "eeeeeeee");

    const handleDetail = (id) => {
        fetch(`https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/allcars/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log(data, "details");
            })
    }
    return (

        <div className="font-oxanium w-[350px] rounded-sm h-[440px] hover:outline flex justify-between items-center flex-col duration-1000 hover:shadow-lg hover:shadow-slate-600  p-3">
            <div className=" rounded-lg mb-4">
                <img className=" w-full rounded-lg" src={image} alt="" />
            </div>
            <div className=" space-y-4 flex justify-between flex-col">
                <div className={` ${theme ? 'text-slate-200' : 'text-slate-800'} flex gap-2`}>
                    <h1 className={` border-r-2 pr-2`}>{Bname}</h1>
                    <h1 className={` border-r-2 pr-2`}>{Cname}</h1>
                    <h1>{Ctype}</h1>

                </div>
                <div className=" flex justify-evenly gap-2 items-center">
                    <p className=" text-2xl text-slate-400">{price}</p>
                    <p className=" text-slate-300 flex items-center gap-1"><FcRating></FcRating>{rating}</p>
                    <Link to={`/details/${_id}`}> <button onClick={() => handleDetail(_id)} className=" bg-[#e79358] font-semibold p-2 rounded hover:bg-[#ff6900] duration-200 font-oxanium text-sm">Details</button> </Link>
                    {/* <button onClick={() => handleDetail(_id)} className=" bg-[#e79358] font-semibold p-2 rounded hover:bg-[#ff6900] duration-200 font-oxanium text-xl">Details</button> */}
                    <Link to={`/update/${_id}`}><button className=" bg-[#e79358] font-semibold p-2 rounded hover:bg-[#ff6900]  duration-200 font-oxanium text-sm">Update</button></Link>

                </div>
            </div>
        </div >

    );
};

export default EachCar;







