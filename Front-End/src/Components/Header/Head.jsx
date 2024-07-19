
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Head = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <section className='head'>
        <div className="container main">
          <div className="logo">
            <h1>FurniShop</h1>
          </div>
          <div className="register">
            <nav>
              <ul>
                {user ? (
                  <>
                    {user.email === 'abdish88@gmail.com' && (
                      <li><Link to='/admin/dashboard'>Admin Dashboard</Link></li>
                    )}
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><button onClick={logout}>Logout</button></li>
                  </>
                ) : (
                  <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>
                  </>
                )}
              </ul>
            </nav>
          </div>
          <div className="social-links-icon">
            <a href="#" className="social-links"><FaFacebook /></a>
            <a href="#" className="social-links"><FaTwitter /></a>
            <a href="#" className="social-links"><FaInstagram /></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
