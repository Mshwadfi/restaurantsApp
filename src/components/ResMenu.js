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
    } = resInfo.cards[2].card.card.info;

    const { itemCards } =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
      
    );
  
 
   
return (
    <div className="menuItems text-center">
      <div>
        <h2 className="font-bold">{name}</h2>
        <p>{cuisines.join(", ")}</p>
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
