import React,{useEffect, useState} from 'react'
import ItemHotel from './ItemHotel';

const Biryani = () => {

  const [biriyanihotels, setBiriyaniHotels] = useState([]);
  let json_flitered=[];

  
  useEffect(()=>{
    fetchData()
},[])

  async function fetchData(){
    const get_data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

    const json = await get_data.json();

    json_flitered = json?.data?.cards.filter((card)=> card?.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    console.log(json_flitered);
    setBiriyaniHotels(json_flitered);

  }
   
  if (biriyanihotels.length===0){
    return <h1>Empty Page</h1>
  }

  

  return (
    <div className="">
          <div className="w-5/6 m-auto p-4 text-3xl pacifico-regular text-gray-800"> Biryani's</div>
          <div className="w-5/6 m-auto pl-4 text-md madimi-one-regular">Taste these delectable classics, delectable biryanis to make your day.</div>
          <div className="w-5/6 m-auto flex flex-wrap items-center">
              {biriyanihotels.map((hotel)=><ItemHotel hotel={hotel}/>)}
          </div>
    </div>
  );
}

export default Biryani;
