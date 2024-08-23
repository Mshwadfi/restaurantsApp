
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
        <div className="res-cat bg-white w-6/12 mx-auto my-3 ">
           <div className="flex justify-between cursor-pointer bg-gray-50 p-2 rounded-md" onClick={handleClick}>
                <span className="font-bold">{name} ({category.itemCards.length})</span>
                <span>↓</span>
           </div>
            {showItems && <MenuItemList items = {category.itemCards} button={'Add'}/>}
        </div>
    )
}

export default RestaurantCategory;