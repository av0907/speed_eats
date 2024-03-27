import React,{useEffect, useState} from 'react'
import ItemHotel from './ItemHotel';

const Pizzas = () => {

  const [pizzahotels, setPizzaHotels] = useState([]);
  let json_flitered=[];

  
  useEffect(()=>{
    fetchData()
},[])

  async function fetchData(){
    const get_data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

    const json = await get_data.json();

    json_flitered = json?.data?.cards.filter((card)=> card?.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    console.log(json_flitered);
    setPizzaHotels(json_flitered);

  }
   
  if (pizzahotels.length===0){
    return <h1>Empty Page</h1>
  }

  

  return (
    <div className="w-5/6 m-auto flex flex-wrap items-center">
      {pizzahotels.map((hotel)=><ItemHotel hotel={hotel}/>)}
    </div>
  );
}

export default Pizzas;
