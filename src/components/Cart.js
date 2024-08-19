import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const dispatch = useDispatch();

    const handleClear = () =>{
       dispatch(clearCart()); 
    }
    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="text-center p-4 m-4">
            
            <h1 className="font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-blue-400 text-white
                 rounded-md" onClick={handleClear}>Clear Cart</button>
                <MenuItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;