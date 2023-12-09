import { useLoaderData } from "react-router-dom";
import Eachproduct from "../Eachproduct/Eachproduct";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../Authprovider/Authprovider";

const Mycart = () => {
    const load = useLoaderData();
    const { user } = useContext(authContext)
    const [allProducts, setProducts] = useState(load);

    useEffect(() => {
        const filterd = load.filter(i => i.email == user.email);
        setProducts(filterd)

    }, [user.email])




    console.log(load);
    return (
        <div className=" space-y-4 ">
            <h1 className=" text-center font-oxanium text-xl text-slate-200">You have {allProducts.length} on the list</h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2 place-items-center place-content-center">
                {allProducts &&
                    allProducts.map(i => <Eachproduct allProducts={allProducts} key={i._id} setProducts={setProducts} product={i} ></Eachproduct>)
                }

            </div>

        </div>
    );
};

export default Mycart;