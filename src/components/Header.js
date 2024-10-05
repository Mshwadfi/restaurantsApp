import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SHOPPING_CART } from '../utils/constants';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex flex-col sm:flex-row sm:justify-between items-center p-4 bg-white shadow-md h-auto sm:h-[100px]">
            {/* Logo and Hamburger Menu Button */}
            <div className="flex justify-between items-center w-full sm:w-auto">
                <img 
                    className='w-40 sm:w-56 h-[80px] sm:h-[100px]' 
                    src="../../public/logow.webp" 
                    alt="Logo" 
                />
                {/* Hamburger Menu Button (visible on small screens) */}
                <button 
                    className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700"
                    onClick={toggleMenu}
                >
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            {/* Navigation Menu for Desktop */}
            <nav className="hidden sm:flex items-center w-full sm:w-auto">
                <ul className='flex items-center space-x-4'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li className='flex items-center'>
                        <Link to={'/Cart'}>
                            <img src={SHOPPING_CART} alt='cart' className='w-8 h-8 bg-white' />
                        </Link>
                        <p className='text-orange-500 ml-2'>{cartItems.length ? '+' + cartItems.length : ""}</p>
                    </li>
                </ul>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`fixed top-0 left-0 z-10 w-[50%] h-full bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button onClick={toggleMenu} className="text-gray-700">
                        <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Close Menu</title>
                            <path d="M6 6L14 14M6 14L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <ul className="p-4">
                    <li className="py-2"><Link to={'/'} onClick={()=> setIsMenuOpen(false)}>Home</Link></li>
                    <li className="py-2"><Link to={'/contact'} onClick={()=> setIsMenuOpen(false)}>Contact</Link></li>
                    <li className="py-2 flex items-center">
                        <Link to={'/Cart'} onClick={()=> setIsMenuOpen(false)}>
                            <img src={SHOPPING_CART} alt='cart' className='w-8 h-8 bg-white' />
                        </Link>
                        <p className='text-orange-500 ml-2'>{cartItems.length ? '+' + cartItems.length : ""}</p>
                    </li>
                </ul>
            </div>

            {/* User Actions (hidden on small screens) */}
            <div className="user-actions hidden sm:block">
                {/* User action icons here (search, offers, help, sign in, cart) */}
            </div>
        </header>
    );
};

export default Header;
