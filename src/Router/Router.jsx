import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authantication/Login/Login";
import Register from "../Pages/Authantication/Register/Register";
import Covarage from "../Covarage/Covarage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/coverage',
                Component: Covarage,
                loader: ()=>fetch("public/servicsCenter.json")
            }
    ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
]);