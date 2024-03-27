import Restaurant_card from "./Restaurant_card";
import {resObj} from "../utils/mockData";
import { useState, useEffect } from "react"; 
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { WHATSONYOURMINDITEMS_URL } from "../utils/constants";

const Body = () => {

    let [listOfRestaurants, setListOfRestaurants]=useState([]);
    let [filteredrestaurants, setFilteredRestaurants]=useState([]);
    const [whatsOnYourMindItems, setWhatsOnYourMindItems]=useState([])
    let [text, setText]=useState("")
    
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const data = await fetch(SWIGGY_API_URL);

        const json = await data.json();
       //console.log(json)
       // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //console.log(listOfRestaurants)
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setWhatsOnYourMindItems(json.data.cards[0].card.card.gridElements.infoWithStyle.info)
    };
    const listOfRestaurants_duplicate=listOfRestaurants;
    if(listOfRestaurants.length===0)
    {
        return <Shimmer />
    }

    //console.log(whatsOnYourMindItems)
    return(
        <div className="bg-gray-100">
            
            <div className="w-5/6 pl-8 py-4 font-bold text-2xl text-emerald-700 m-auto ">What's On Your Mind ? </div>
            <div className="flex h-44 w-[5/6] mx-36 overflow-x-auto  ">
                
                { whatsOnYourMindItems.map((item)=>
                    <div key={item?.id} className="flex-shrink-0 w-[110px] h-30 m-2 rounded-full  ">
                    
                    <Link to={"/"+ item.action.text}> <img className="rounded-full hover:scale-[95%]" src={WHATSONYOURMINDITEMS_URL+item?.imageId}/></Link>

                    </div>
                ) }
                
                

            </div>

            <div className="m-auto w-5/6 text-center"> 

                <input type="text" className=" m-3 border-2 radius rounded-3xl px-3 py-1 w-72 border-emerald-400" value={text} onChange={(e)=>{setText(e.target.value);}}/>
                
                <button className="border-0 m-3 px-3 py-1 rounded-3xl bg-emerald-400 drop-shadow-md" onClick={()=>{
                    const search_list= listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(text.toLowerCase()));
                    //console.log(search_list);
                    setFilteredRestaurants(search_list);
                    }}>Search</button>

                <button className="border-1 m-3 px-3 py-1 rounded-3xl bg-emerald-400 drop-shadow-md" onClick={()=> {filtered_list=listOfRestaurants.filter((res)=> res.info?.avgRating  > 4.0 );
                                                                    setFilteredRestaurants(filtered_list);}}>Top Rated</button>

                <button className="border-1 m-3 px-3 py-1 rounded-3xl bg-emerald-400 drop-shadow-md" onClick={()=> {filtered_list=listOfRestaurants.filter((res)=> res.info?.veg === true );
                                                                    setFilteredRestaurants(filtered_list);}}>Pure Veg</button>

                <button className="border-1 m-3 px-3 py-1 rounded-3xl bg-emerald-400 drop-shadow-md" onClick={()=> {setFilteredRestaurants(listOfRestaurants_duplicate.sort((a,b)=> a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime) )
                                                                    }}>Fastest Delivery</button>
                <button className="border-1 m-3 px-3  py-1 rounded-3xl bg-emerald-400 drop-shadow-md" onClick={()=> {setFilteredRestaurants(listOfRestaurants)
                                                                    }}>All Restaurants</button>
            
            </div>

            <div className="flex flex-wrap mx-48 items-center ">
                
                {filteredrestaurants.map((restaurant)=>  <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> <Restaurant_card resData={restaurant}/> </Link> )}
                
            </div>
        </div>
    )
}

export default Body;