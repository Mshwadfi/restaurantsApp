import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const MenuItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    dispatch(addItem(item));
    // console.log(e.target.parentNode)
  }
  
  return (
    <div className="">
      {items.map((item) => (
        <div key={item.card.info.id} 
        className="p-2 m-2 border-gray-150 border-b-2 
        text-left" data-testid='menuItem'>
          <div>
            <span className="py-2">{item.card.info.name}</span> - 
            <span> {item.card.info.price / 100}</span>
          </div>
          <p className="text-xs">{item.card.info.description}</p>
          
          <button className="bg-blue-500 text-white p-2 rounded"
          onClick={() => handleAddItem(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
