import MenuItemList from "./MenuItemList";
import { useState } from "react";

const RestaurantMenuTitles = ({section,showItems, setShowIndex}) =>{

        //const [accordian, setAccordian] = useState(false);

        const handleAccordian =  () =>{
           //  setAccordian(!accordian)
           setShowIndex()
        }
        //console.log(section)
        return (
        <div>
            <div className="flex justify-between font-semibold text-2xl p-4 border-b-2 shadow-md cursor-pointer" onClick={handleAccordian}>
                <div>{section?.card?.card?.title}({section?.card?.card?.categories?.length || section?.card?.card?.itemCards?.length})</div>
                <div>^</div>

            </div>
            {showItems && <MenuItemList items={section?.card?.card?.itemCards}/>}
        </div>
        );


}

export default RestaurantMenuTitles;