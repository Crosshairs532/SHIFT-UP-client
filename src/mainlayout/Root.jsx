import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";
import './Root.css'
import BannerInfo from "./banner/BannerInfo";
import { useContext } from "react";
import { authContext } from "../Authprovider/Authprovider";
// import { useContext } from "react";
// import { authContext } from "../Authprovider/Authprovider";

const Root = () => {
    const location = useLocation();
    const { theme, setTheme } = useContext(authContext);

    return (
        <div className={`${theme ? 'bg-black' : ' bg-slate-200'} `}>
            <div className={` ${location.pathname == '/' ? ' banner h-[100vh] ' : ' '} `}>
                <div className="  container mx-auto relative">
                    <Header></Header>

                    {
                        location.pathname == '/' && <BannerInfo />
                    }

                </div>

            </div>
            <div className=" container mx-auto min-h-screen ">
                {
                    <Outlet></Outlet>

                }
            </div>


            <Footer></Footer>
        </div >
    );
};

export default Root;