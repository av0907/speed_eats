import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { UseSelector, useSelector } from "react-redux";


const Header =() => {

    const [loginbtn_text, setLoginbtn_text]=useState("Login");
    const status = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return(
        <div className=" w-[100%] flex justify-between p-4 border-b-2 fixed top-0 z-50 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 ...">

            <div className="logo">
                <h3 className="p-3 font-mono font-bold text-2xl text-black hover:cursor-pointer pacifico-regular hover:scale-110 "><Link to="/">Speed Eats</Link></h3>
            </div>

            <div className="nav_items">
                <ul className="flex">
                    <li className="p-3">Status {status?"\u{1F7E2}":"\u{1F534}"}</li>
                    <li className="p-3"> <Link to="/about"> Help </Link></li> 
                    <li className="p-3"><Link to="/"> Home </Link></li>
                    <li className="p-3 text-lg"><Link to="/cart" className="flex"> 

                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                        <sup className="text-sm rounded-xl px-1 font-bold ">{cartItems.length}</sup>
                        </Link>
                    </li>
                    <li className="p-3"> <Link to="/login"><button className="login-btn" onClick={()=>{setLoginbtn_text("LogIn")}}>{loginbtn_text}</button></Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header;