/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Brands = ({ brand }) => {
    const { brand_image, brand_name } = brand;
    return (
        <div>
            <Link to={`/allcars/${brand_name}`}>
                <div className="card w-96 h-[280px] bg-base-100 shadow-xl image-full">
                    <figure><img src={brand_image} alt="Shoes" /></figure>
                    <div className="card-body flex justify-center items-center">
                        <h1 className=" font-oxanium text-xl uppercase font-bold">{brand_name}</h1>
                        <div className="">
                            {/* <button className=" bg-gray-800 p-3 rounded-lg font-oxanium font-medium">Explore</button> */}
                        </div>
                    </div>

                </div>
            </Link>

        </div>
    );
};

export default Brands;

