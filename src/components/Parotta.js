import React,{useEffect, useState} from 'react'
import ItemHotel from './ItemHotel';
const Parotta = () => {

  const [dosahotels, setdosahotels] = useState([]);
  let json_flitered=[];

  
  useEffect(()=>{
    fetchData()
},[])

  async function fetchData(){
    const get_data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

    const json = await get_data.json();

    json_flitered = json?.data?.cards.filter((card)=> card?.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    console.log(json_flitered);
    setdosahotels(json_flitered);

  }
   
  if (dosahotels.length===0){
    return <h1>Empty Page</h1>
  }

  

  return (
    <div className="w-5/6 m-auto flex flex-wrap items-center">
      {dosahotels.map((hotel)=><ItemHotel hotel={hotel}/>)}
    </div>
  );
}

export default Parotta;
