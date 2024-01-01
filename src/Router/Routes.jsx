import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from './../page/Home';
import Login from "../page/Login";
import Register from "../page/Register";





const route=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>("news.json")
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])
export default route;