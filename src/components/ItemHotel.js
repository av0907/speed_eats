import { Link } from "react-router-dom";
import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemHotel = ({hotel}) =>{


    const {name, avgRating, cuisines, costForTwo, cloudinaryImageId} = hotel?.card?.card?.info;
    return(
        
        <Link to={"/restaurants/"+ hotel?.card?.card?.info?.id}>
        <div key={hotel?.card?.card?.info?.id} className="m-4 w-[250px] h-[325px] border-2 rounded-md drop-shadow-md hover:scale-[98%]">

              <img className="w-[250px] h-[200px] rounded-md" alt=" Item picture"  src={CDN_URL+cloudinaryImageId} />
              <h4 className="font-semibold">{name}</h4>
              <h5 className="font-medium">{avgRating} stars</h5>
              <h5 className="w-[250px] truncate">{cuisines.join(",")}</h5>
              <h5>{costForTwo}</h5>
        </div>
    </Link>
    
    );


}

export default ItemHotel;