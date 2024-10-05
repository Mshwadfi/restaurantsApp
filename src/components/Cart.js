import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const dispatch = useDispatch();

    const handleClear = () =>{
       dispatch(clearCart()); 
    }
    const cartItems = useSelector((store) => store.cart.items)
    if(cartItems.length === 0) return <h1 className="text-center font-bold my-4">you have no items!</h1>
    return(
        <div className="p-4 m-4">
            
            <h1 className="font-bold text-center my-4">Cart</h1>
            <div className="sm:w-6/12 m-auto">
                <MenuItemList items={cartItems} button = {'Remove'}/>
                {cartItems.length !== 0 && <button className="p-3 my-8 bg-red-700 text-white
                 rounded-md " onClick={handleClear}>Clear Cart</button>}
            </div>
        </div>
    )
}

export default Cart;