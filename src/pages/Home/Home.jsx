/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Brands from "../../component/Brand/Brands";

import Offer from "../Offer/Offer";
import Contact from "../Contact/Contact";

const Home = () => {
    const [brands, useBrands] = useState([]);
    useEffect(() => {
        fetch('/brands.json')
            .then(res => res.json())
            .then(data => useBrands(data))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(brands);
    return (
        <div className=" mt-10 min-h-screen mb-10">
            <div>
                <h1 className=" text-center font-oxanium  text-4xl lg:text-6xl font-semibold">All brands :{brands.length} </h1>
            </div>
            <div className=" brands grid lg:grid-cols-3 md:grid-cols-1 place-items-center gap-3 grid-cols-1">
                <>
                    {
                        brands && brands.map((i, idx) => <Brands key={idx} brand={i}></Brands>)
                    }
                </>


            </div>
            <Offer></Offer>

            <Contact></Contact>


        </div >
    );
};

export default Home;