/* eslint-disable react/no-unescaped-entities */
import { GiTakeMyMoney } from 'react-icons/gi'
import { FaPeopleCarryBox } from 'react-icons/fa6'
import { useContext } from 'react';
import { authContext } from '../../Authprovider/Authprovider';
const Offer = () => {
    const { theme } = useContext(authContext);
    return (
        <div>
            <div className=" min-h-screen flex justify-center items-center">
                <div className=" text-center  space-y-8 mt-[100px]">
                    <p className={`${theme ? ' text-slate-200' : ' text-gray-800'}`}>HELPS YOU TO FIND YOUR NEXT CAR EASILY
                    </p>
                    <h1 className={` ${theme ? ' text-slate-200' : ' text-slate-900'} font-oxanium font-bold lg:text-5xl md:text-5xl text-3xl`}>Welcome to <span className=" text-[coral] ">SHIFT UP</span></h1>
                    <div className=" grid lg:grid-cols-3 md:grid-cols-2 place-items-center grid-cols-1 mt-9">
                        <div className={`  w-[400px] h-[300px] md:border-r-2  lg:border-r-2 ${!theme ? ' border-slate-800' : ''} flex flex-col items-center justify-center p-8 text-center space-y-5`}>
                            <h1 className={` ${theme ? ' text-white' : ' text-slate-800'} text-5xl`}><GiTakeMyMoney></GiTakeMyMoney></h1>
                            <h3 className={` text-xl ${theme ? ' text-white' : ' text-slate-800'}  font-oxanium`}>WE OFFERS LOWER CARS PRICES</h3>
                            <p className={` text-sm font-oxanium ${theme ? ' text-slate-400' : ' text-slate-800'}`}>Fruitful seed female multiply lights blessed above Bearing in so two every together forth so can't seas darkness years rule.</p>
                        </div>
                        <div className={` w-[400px] h-[300px] lg:border-r-2  ${!theme ? ' border-slate-800' : ''} flex flex-col items-center justify-center p-8 text-center space-y-5`}>
                            <h1 className={` ${theme ? ' text-white' : ' text-slate-800'} text-5xl`}><FaPeopleCarryBox></FaPeopleCarryBox></h1>
                            <h3 className={` text-xl ${theme ? ' text-white' : ' text-slate-800'}  font-oxanium`}>LARGEST CARS DEALERSHIP</h3>
                            <p className={` text-sm font-oxanium ${theme ? ' text-slate-400' : ' text-slate-800'}`}>Evening together evening given fill upon darkness, i were lesser first fly. Had divide him called seas first after night god.</p>

                        </div>
                        <div className=" w-[400px] h-[300px]  flex flex-col items-center justify-center p-8 text-center space-y-5">
                            <h1 className={` ${theme ? ' text-white' : ' text-slate-800'} text-5xl`}><GiTakeMyMoney></GiTakeMyMoney></h1>
                            <h3 className={` text-xl ${theme ? ' text-white' : ' text-slate-800'}  font-oxanium`}>MULTIPOINT SAFETY CHECKS OFFERS</h3>
                            <p className={` text-sm font-oxanium ${theme ? ' text-slate-400' : ' text-slate-800'}`}>Also sixth be replenish third our also their moving unto hath whales beginning unto set you'll us let above dry shall greater.</p>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Offer;