import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { ITEM_IMJ } from "../utils/constants";

const MenuItemList = ({ items , button }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item , action) =>{
    action === 'Add'? dispatch(addItem(item)) : dispatch(removeItem());
    // console.log(e.target.parentNode)
  }
  console.log(items,'hello')
  
  return (
    <div className="flex flex-col gap-2">
      {items?.map((item) => (
        <div key={item?.card?.info?.id} 
        className="flex justify-between  gap-2 p-2 border-gray-150 border-b-2 
        text-left" data-testid='menuItem'>
          <div className="flex flex-col gap-1 ">
            <h2 className="font-bold">{item.card.info.name} - {item.card.info?.price / 100 || 20}$</h2>
            <p className="hidden sm:block sm:text-xs">{item.card.info.description}</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <img alt="item" src={ITEM_IMJ + item?.card?.info?.imageId} className="min-w-24 w-24 h-24 rounded-md" loading="lazy"/>
            <button className={`${button === 'Remove'? 'bg-red-700 hover:bg-red-800' : 'bg-orange-500 hover:bg-orange-600' } text-white px-2 py-1 rounded text-lg mb-3`}
            onClick={() => handleAddItem(item , button)}>
              {button === 'Add'? 'Add+' : 'Remove'}
            </button>
            {console.log('jj')}
          </div>

        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
