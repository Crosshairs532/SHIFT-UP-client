import Marquee from "react-fast-marquee";
import './Contact.css'
import { AiOutlinePlus } from "react-icons/ai"
import { FcGoogle } from 'react-icons/fc'
import { LuFacebook } from 'react-icons/lu'
const Contact = () => {
    return (
        <div className={` contact min-h-screen mt-8 space-y-28`}>
            <Marquee pauseOnHover gradient={true} gradientColor="black" gradientWidth={400}>

                <h1 className=" text-slate-200 text-3xl mr-20">New buyers will get free service for one year !!!!!</h1> <br />
                <h1 className=" text-slate-200 text-3xl mr-20">Also 10 % discount on registration</h1>
            </Marquee>
            <div className=" flex lg:flex-row flex-col justify-evenly gap-7 items-center">
                <div className=" w-[600px] h-[300px] bgblur bg-[#80808056] relative hidden lg:block md:block">

                    <div className=" flex lg:hidden flex-col gap-3 justify-center items-center border-2 h-full">
                        <p className=" text-5xl font-oxanium text-slate-300">Contact us Through</p>
                        <button className=" text-5xl bg-white w-[200px] rounded-lg flex gap-4 items-center justify-center"><FcGoogle></FcGoogle> <h1 className=" text-2xl"> Google</h1></button>
                        <button className=" text-5xl bg-white w-[200px] rounded-lg flex gap-4 items-center justify-center"><LuFacebook></LuFacebook> <h1 className=" text-2xl">Facebook</h1></button>
                    </div>
                    <div className="mockup-phone border-[coral] hidden lg:block ml-[100px] mt-10 absolute">
                        <div>

                        </div>
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1 bg-zinc-700">
                                <h1 className=" font-oxanium text-black font-semibold text-xl">Find  your dream car</h1>
                                <input type="text" placeholder="hello" className=" bg-white rounded-md px-3" /> <br />
                                <input type="text" placeholder="hello" className=" bg-white rounded-md px-3" /> <br />
                                <input type="text" placeholder="hello" className=" bg-white rounded-md px-3" /> <br />

                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-auto md:w-[600px] lg:w-[600px] h-[300px] bgblur bg-[#80808056] px-7 flex-col lg:flex-row items-center gap-7">
                    <h1 className=" font-oxanium text-4xl lg:text-5xl font-bold text-slate-300">How To buy a car?</h1>
                    <div>
                        <ul>
                            <li className=" flex gap-4 items-center p-3 bg-[grey] mb-2"><AiOutlinePlus className=" text-[coral] font-extrabold text-xl"></AiOutlinePlus><h1>best deals     </h1></li>
                            <li className=" flex gap-4 items-center p-3 bg-[grey] mb-2"><AiOutlinePlus className=" text-[coral] font-extrabold text-xl"></AiOutlinePlus><h1>sell your car  </h1></li>
                            <li className=" flex gap-4 items-center p-3 bg-[grey] mb-2"><AiOutlinePlus className=" text-[coral] font-extrabold text-xl"></AiOutlinePlus><h1>compare prices </h1></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;