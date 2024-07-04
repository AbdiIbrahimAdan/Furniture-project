import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container main">
            <div className="logo">
                <h1>FurniShop</h1>
                <span>Get Best and high quality Furniture</span>

            </div>
            <div className="access">
              <div className="register">
            <nav>
              <ul>
                <li ><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Sign up</Link></li>
              </ul>
            </nav>
              </div>
            </div>
            <div className="social-links-icon">
            <a href="#" className="social-links">{ <FaFacebook /> }</a>
            <a href="#" className="social-links">{ <FaTwitter/> } </a>
            <a href="#" className="social-links">{ <FaInstagram/> }</a>
            </div>
            
        </div>

      </section>
    </>
  )
}

export default Head
