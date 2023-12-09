/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
const AddProduct = () => {
    const handleProduct = (e) => {
        e.preventDefault();
        const image = e.target.Cphoto.value;
        const Cname = e.target.Cname.value;
        const Bname = e.target.Bname.value;
        const price = e.target.price.value;
        const Ctype = e.target.Ctype.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const SingleCar = { image, Cname, Bname, price, Ctype, description, rating };
        console.log(SingleCar);
        fetch('https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/allcars', {

            method: "POST",
            headers: {
                "content-type": 'application/json'
            }
            ,
            body: JSON.stringify(SingleCar)
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'product added',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset();
            })

    }
    return (
        <div>

            <div className="min-h-screen p-6 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h1 className=" text-white  md:text-6xl text-3xl lg:text-6xl text-center font-oxanium font-bold" >Add Products</h1>

                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div>
                                    <h1 className=" text-5xl font-oxanium font-extralight "> SHIFT UP</h1>
                                </div>

                                <div className="lg:col-span-2">
                                    <form onSubmit={handleProduct}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-2 font-oxanium">
                                                <label htmlFor="Cname" className=" font-oxanium">Car Name:</label>
                                                <input type="text" name="Cname" id="Cname" placeholder=" car name..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>
                                            <div className="md:col-span-3 font-oxanium">
                                                <label htmlFor="Cphoto" className=" font-oxanium">Car photo url:</label>
                                                <input type="text" name="Cphoto" id="Cphoto" placeholder=" photo url..." className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-5 font-oxanium">
                                                <label htmlFor="Bname" className=" font-oxanium">Brand Name:</label>
                                                <input type="text" name="Bname" id="Bname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=" type brand name" />
                                            </div>

                                            <div className="md:col-span-3 font-oxanium">
                                                <label htmlFor="Ctype" className=" font-oxanium">Car Type:</label> <br />
                                                <select name="Ctype" id="Ctype" className=" bg-gray-50 h-10 border mt-1 rounded px-4 w-full">
                                                    <option >SUV</option>
                                                    <option >Cross-over</option>
                                                    <option >Sedan</option>
                                                    <option >Electric Car</option>
                                                    <option >Hybrid</option>
                                                    <option >Sports Car</option>
                                                    <option >Coupe</option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-2 font-oxanium">
                                                <label htmlFor="price" className=" font-oxanium">Price</label>
                                                <input type="text" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Price.." />
                                            </div>
                                            <div className=" md:col-span-5 font-oxanium">
                                                <label htmlFor="description">Description:</label>
                                                <textarea name="description" id="description" cols="30" rows="10" className=" bg-slate-50 w-full" placeholder="Enter about description car..."></textarea>
                                            </div>
                                            <div className="md:col-span-2 font-oxanium">
                                                <label htmlFor="rating" className=" font-oxanium">Rating</label>
                                                <input type="text" name="rating" id="rating" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="rating." />
                                            </div>


                                            <div className="md:col-span-5 text-right font-oxanium">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-[coral] hover:bg-[#a14828] text-white font-bold py-2 px-4 rounded">Add Product</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddProduct;




