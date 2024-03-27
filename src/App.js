import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { RouterProvider,createBrowserRouter, Outlet} from "react-router-dom";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu"
import Errorpage from "./components/Errorpage";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Biryani from "./components/Biryani";
import Pizzas from "./components/Pizzas";
import North_Indian from "./components/North_Indian";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Dosa from "./components/Dosa";
import Cakes from "./components/Cakes";
import Parotta from "./components/Parotta";
import Burger from "./components/Burger";

/*const Ap=React.createElement("h1",{},"I am Aditya");*/

const App =() => {
    return (
        <Provider store={appStore}>
            <div>
                <div className="relative">  <Header/> </div>
                <div className="relative top-[85px]"> <Outlet/></div>

            </div>
        </Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/login",
                element:<Login/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/Biryani",
                element:<Biryani/>
            },

            {
                path:"/Pizzas",
                element:<Pizzas/>
            },
            {
                path:"/North Indian",
                element:<North_Indian/>
            },
            {
                path:"/dosa",
                element:<Dosa/>
            },
            {
                path:"/cakes",
                element:<Cakes/>
            },
            {
                path:"/paratha",
                element:<Parotta/>
            },
            {
                path:"/Burgers",
                element:<Burger/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<Errorpage/>
    }
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);