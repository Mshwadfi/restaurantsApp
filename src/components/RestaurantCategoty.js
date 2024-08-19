
import { useState } from "react";
import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({category , showItems , setShowIndex}) =>{
    

    const handleClick = (e) =>{
       setShowIndex(e.target.index)
       
    }
    const {
        title,
    } = category;
    
    const idx = title.indexOf('(');
    const name = title.slice(0,idx);
    return(
        <div className="res-cat bg-slate-50 w-6/12 mx-auto my-3 shadow-md p-4">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                {/*header*/}
                <span className="font-bold">{name} ({category.itemCards.length})</span>
                <span>↓</span>
           </div>
            {showItems && <MenuItemList items = {category.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;