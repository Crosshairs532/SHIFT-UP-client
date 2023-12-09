import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../mainlayout/Root";
import Error from "../Error/Error";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/Addproduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CarByBrand from "../pages/CarByBrand/CarByBrand";
import Detail from "../pages/Detail/Detail";
import Privateroute from "../Privateroute/Privateroute";
import Mycart from "../pages/Mycart/Mycart";
import Update from "../pages/Update/Update";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: '/addproduct',
                element: <Privateroute><AddProduct></AddProduct></Privateroute>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allcars/:Bname',
                element: <CarByBrand></CarByBrand>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/allcars/${params.id}`),
                element: <Privateroute><Detail></Detail></Privateroute>
            },
            {
                path: '/mycart',
                loader: () => fetch('https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/addedtocart'),
                element: <Privateroute><Mycart></Mycart></Privateroute>
            }
            ,
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://shift-up-server-59ij4ja0d-md-samsul-areifns-projects.vercel.app/allcars/${params.id}`),
                element: <Privateroute><Update></Update></Privateroute >
            }



        ]
    }]);
export default router;