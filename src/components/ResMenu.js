import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { ITEM_IMJ } from "../utils/constants";
import RestaurantCategory from './RestaurantCategoty'
import useRestaurantMenu from "../utils/useRestaurantMenu";



const ResMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);
   const [showIndex , setShowIndex] = useState();
    if (!resInfo) return <Shimmer />;

    const {
        name,
        cuisines,
        areaName,
        sla,
        cloudinaryImageId,
        avgRating,
        costForTwo,

    } = resInfo.cards[2].card.card.info;
    console.log(resInfo.cards[2].card.card.info)

    const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
      
    );
  
 
   
return (
    <div className="menuItems text-center">
      <div>
        <div className="flex items-center gap-2 border-2 border-solid rounded-md p-2 w-6/12 mx-auto my-4">
          <img className="restaurant-img rounded-md  h-[130px] w-[200px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Restaurant" />
          <div className="">
            <h2 className="font-bold">{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <div className="flex items-center justify-between gap-2 m-2 text-sm font-bold">
              <p className="bg-green-600 text-white p-1 rounded-md">{avgRating} ✰</p>
              <h4>•</h4>
              <p className="delivery-time"> {sla?.deliveryTime || 5} MIN</p>
              <h4>•</h4>
              <p className="delivery-time"> {costForTwo/1000}$</p>
            </div>
          </div>
        </div>
        {
          categories.map((cat , index)=>(
            <RestaurantCategory category = {cat?.card?.card}
            showItems = {index === showIndex? true : false}
            setShowIndex={() => setShowIndex(index)}
            key={index}
            />
          ))
        }
      </div>
    </div>
  );
  
  
};

export default ResMenu;
