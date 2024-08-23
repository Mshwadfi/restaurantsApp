import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineOffline from '../utils/useOnlineOffline';
import { useSelector } from 'react-redux';
import { SHOPPING_CART } from '../utils/constants';
const Header = () => {

    const [btnName , setbtnName] = useState('Login');
    const onlineOffline = useOnlineOffline();

    //subscribing to the store using sellector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between shadow-md h-[100px]">
            <div className="logo">
                <img className='w-56 h-[100px]' src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" alt="Logo" />
            </div>
            
            <div className="flex items-center">
                <ul className='flex p-4 m-4 items-center'>
                    {/* <li className='px-4'>{onlineOffline ? "Online: 🟢" : "Offline: 🔴"}</li> */}
                    <li className='px-4'><Link to={'/'}>Home</Link></li>
                    <li className='px-4'><Link to={'/contact'}>Contact</Link></li>
                    <li className='px-4 font-bold flex items-center justify-between'>
                        <Link to={'/Cart'}><img src={SHOPPING_CART} alt='cart' className='w-8 h-8 bg-white'/>
                        </Link><p className='text-orange-500'>{cartItems.length? '+' + cartItems.length : "" }</p></li>
                    {/* <li className='px-4'><Link to={'/about'}>About Us</Link></li> */}
                    
                </ul>
                {/* <button className='login' onClick={() =>{
                    (btnName === 'Login')? setbtnName('Logout') :
                     setbtnName('Login');
                } }>

                <strong>{btnName}</strong></button> */}
            </div>
            <div className="user-actions">
                {/* User action icons here (search, offers, help, sign in, cart) */}
            </div>
        </div>
    );
};

export default Header;
