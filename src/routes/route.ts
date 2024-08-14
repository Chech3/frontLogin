import Customers from "../pages/Customers";
import Home from "../pages/Home";
import Base from "../pages/layout/Base";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = [
    {
        path:"/",
        element: Home
    },
    {
        path:"/login",
        element: Login
    },
    {
        path:"register",
        element: Register
    },
    {
        path:"/dash",
        element: Base,
        children: [
            {
                path:"",
                element: Customers,
            }
        ] 
    }
]