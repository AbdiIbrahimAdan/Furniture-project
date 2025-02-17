import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../page/Cart/CartContext';
import AdminNav from '../AdminNav';
import './Header.css';
import Head from './Head';
import { useAuth } from '../../context/AuthContext'; 

const Header = () => {
  const [click, setClick] = useState(false);
  const { getTotalItems } = useCart();
  const { user } = useAuth(); 
  return (
    <>
      <Head />
      <header>
        <nav className='main'>
          <ul className={click ? "mobile-nav" : "main"} onClick={() => setClick(false)}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about us'>About Us</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/new arrival'>New arrival</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>

          <div className='cart-icon'>
            <li><Link to="/cart"> <FaShoppingCart />
              <span>({getTotalItems()})</span>
            </Link></li>
          </div>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {user && user.role === 'admin' && (
          <nav className='admin'>
            <AdminNav />
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
