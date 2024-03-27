import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const useFetchMenu = (resId) => {

   const [resInfo, setResInfo] = useState(null);
    //const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data);
        console.log(resInfo);
    }
    return resInfo;
}

export default useFetchMenu;