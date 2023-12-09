/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EachCar from '../EachCar/EachCar';
import { useContext } from "react";
import { authContext } from "../../Authprovider/Authprovider";
import Carousel from "./Carousel/Carousel";
import { Triangle } from "react-loader-spinner";


const CarByBrand = () => {
    const { Bname } = useParams();
    const [cars, setCar] = useState([]);
    const { loader } = useContext(authContext)
    const [images, setImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/allcars`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(i => i.Bname == Bname);
                setCar(filtered)
                setLoading(false)

            }

            )
    }, [Bname])
    useEffect(() => {
        fetch('/carousel.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(i => i.brand_name == Bname)
                setImage(filtered)

            })
    }, [Bname])



    console.log(cars, "hello");
    console.log(images);


    return (
        <>
            <div className=" mb-[50px] mt-[70px]">

                <div className=" -z-50">
                    {
                        (images, cars?.length > 0) && <Carousel images={images} Bname={Bname}></Carousel>
                    }
                </div>
                <h1 className=" text-center font-oxanium text-5xl text-slate-200 font-bold mb-20">{Bname}</h1>

                {
                    loading ? <>
                        <div className=" flex justify-center ">
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
                    </> :

                        cars.length > 0 ? (
                            <>

                                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">


                                    {
                                        cars.map(car => <EachCar key={car._id} car={car} ></EachCar>)
                                    }
                                </div>
                            </>)
                            :
                            (
                                <>

                                    < h1 className=" text-xl text-center font-oxanium text-slate-200">No Cars Found......!</h1>
                                </>


                            )}


            </div >
        </>
    );
};

export default CarByBrand;