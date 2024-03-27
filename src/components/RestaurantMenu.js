import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_ITEM_URL } from "../utils/constants";
import useFetchMenu from "../utils/useFetchMenu";
import RestaurantMenuTitles from "./RestaurantMenuTitles";

const RestaurantMenu = () =>{

    const {resId} = useParams();
    const resInfo= useFetchMenu(resId);

    console.log(resInfo);
    
    const [showIndex, setShowIndex] = useState(0);


    if (resInfo === null)
    {
        return <Shimmer/>
    }

    
    const {name,avgRating,cuisines,costForTwoMessage,areaName, avgRatingString, totalRatingsString}=resInfo?.cards[0]?.card?.card?.info || resInfo?.cards[2]?.card?.card?.info;
    const sections=(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ).filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    sections.shift();

   
    return(
        <div className="mx-72 bg-gray-100">

            <div className="border-2 flex justify-between py-7 px-16">
                <div>
                    <div className="text-lg font-bold mb-1">{name}</div>
                    <div className="text-md">{cuisines.join(",")}</div>
                    <div className="text-md">{areaName}</div>
                </div>

                <div className="border-2 border-emerald-400 rounded-md" >

                    <div className="border-b-2 p-2 text-center font-bold text-emerald-600">{"\u2605"
                        } {avgRatingString}
                    </div>

                    <div className="text-sm text-center p-2">{totalRatingsString}</div>

                </div>
            </div>                   
            {sections.map((section,index)=> <RestaurantMenuTitles showItems={index === showIndex ? true:false} setShowIndex={()=>setShowIndex(index)}  key={index} section={section}/>  )}

        </div>
    );
};

export default RestaurantMenu;

