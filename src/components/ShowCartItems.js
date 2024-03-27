import React from 'react';
import { IMG_ITEM_URL } from '../utils/constants';
import { deleteItem, emptyCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const ShowCartItems = ({items}) => {
  
   // const cartItems = useSelector((store) => store.cart.items);
    let price=0;
    const dispatch = useDispatch();
    function clearCart(){
        dispatch(emptyCart())
    }

    function deleteThisItem(item){
            dispatch(deleteItem(item))
    }

    return (
        <div className="w-6/12  m-auto border-2 p-4 bg-gray-100 rounded-lg ">
        {items.map((item,index)=> <div  key={index} className="flex flex-row px-16 border-b-2 justify-between w-12/12 m-auto">
                                
                                <div className=" w-5/6 ">
                                    <div className="mt-8 text-lg font-semibold">{item?.card?.info?.name}</div>
                                    <div className="mb-2"> ₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</div>
                                    
                                </div>

                                <div className="relative flex mt-6 ml-8 mb-8 w-1/6 h-24 rounded-md overflow-hidden ">
                                     <img onClick={()=>deleteThisItem(item)} className=" w-3 h-3 hover:scale-125 relative left-[84px] top-1 rounded-md cursor-pointer " src="data:image/png;base64,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"/>
                                     <img className="mt-2 rounded-md shadow-xl" src={IMG_ITEM_URL+item?.card?.info?.imageId} alt="Jar" />
                                   
                                </div>
                                
            
                            </div>)} 

            <div className="bg-emerald-400 font-semibold text-center py-2 px-3 m-1 items-center w-[100%] border-1">Cart Value - ₹ { price = items.reduce((totalprice,itemprice)=>{totalprice=totalprice+(itemprice?.card?.info?.defaultPrice/100||itemprice?.card?.info?.price/100); return totalprice},0)}</div>
            <div className='flex justify-between '> <button className="w-[49.5%] bg-emerald-400 font-semibold text-center py-2 m-1  items-center"> Place Order</button>
                    <button className="w-[49.5%] bg-emerald-400 font-semibold text-center py-2 m-1 items-center" onClick={clearCart}> Clear Cart</button>
             </div>
                            
    </div>
  )
}

export default ShowCartItems;
