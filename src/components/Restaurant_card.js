import {CDN_URL} from "../utils/constants"

const Restaurant_card = (props) =>{

    const {resData}=props;
    const {name,cloudinaryImageId,cuisines,avgRating,costForTwo}=resData?.info;
    return( 
        <div className="m-4 w-[250px] h-[325px] border-2 rounded-md drop-shadow-md hover:scale-[98%]">
                <img className="w-[250px] h-[200px] rounded-md" alt=" Noodles"  src={CDN_URL+cloudinaryImageId} />

                <h4 className="font-semibold">{name}</h4>
                <h5 className="font-medium">{avgRating} stars</h5>
                <h5 className="w-[250px] truncate">{cuisines.join(",")}</h5>
                <h5>{costForTwo}</h5>
        </div>
    )

}

export default Restaurant_card;