import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
   <footer className='footer'>
    <div className="footer-info">
        <h2>FurniShop</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate adipisci </p>

    </div>
    <div className="footer-nav">
        <h2>Quick Link</h2>
        <ul>
        <li><Link  to='/'>Home</Link></li>
            <li><Link  to='/about us'>About Us</Link></li>
            <li><Link  to='/shop'>Shop</Link></li>
            <li><Link  to='/new arrival'>New arrival</Link></li>
            <li><Link  to='/contact'>Contact</Link></li>
            
        </ul>
    </div>

    <div className="footer-social">
        <h2>Follow Us</h2>
        <div className="social-links">
        <a href="#" className="social-link">{<FaFacebook />}</a>
          <br></br>

          <a href="#" className="social-link">{<FaTwitter />}</a>
          <a href="#" className="social-link">{<FaInstagram />}</a>
        
        </div>
    </div>

    <div className="footer-contact">
        <h2>Contact</h2>
        <p>Phone:+25740000456</p>
        <p>Email:info@funishop.com</p>
    </div>

    <hr  className='footer-divider'/>
    <div className='footer-copyright'>
        <p>&copy; 2024 Abdishu. All rights reserved.</p>
    </div>
   </footer>
  );
};

export default Footer;
