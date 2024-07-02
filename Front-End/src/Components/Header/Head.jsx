import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container main">
            <div className="logo">
                <h1>FurniShop</h1>
                <span>Get Best and high quality Furniture</span>

            </div>
            <div className="social-links-icon">
            <a href="#" className="social-links">{ <FaFacebook /> }</a>
            <a href="#" className="social-links">{ <FaTwitter/> } </a>
            <a href="#" className="social-links">{ <FaInstagram/> }</a>
            </div>
            <div className="access">
              <div className="login">
              <a href="">Login</a>
              </div>
              <div className="signup">
              <a href="">Signup</a>
              </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default Head
