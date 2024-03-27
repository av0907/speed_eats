import { useDispatch, useSelector } from "react-redux";
import ShowCartItems from "./ShowCartItems";
import { emptyCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);
    if (cartItems.length===0)  
    return (
            <div className="flex-col ">
                <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="GIF" className="w-[500px] m-auto "/>
                <div className=" items-center w-[500px] text-center text-emerald-600 font-bold text-2xl m-auto">Your Cart is Empty</div>
                <div className=" border-2 p-2 items-center w-[500px] text-center text-emerald-500 font-bold text-2xl m-auto mt-5 rounded-3xl bg-gray-200"> <Link to="/"><button className=" hover:text-emerald-700">Go To Restaurants</button></Link></div>
                </div>)

    return <div>
                
                
               {<ShowCartItems items={cartItems}/>}
           </div>


}

export default Cart;