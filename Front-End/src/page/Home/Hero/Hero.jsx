import "./Hero.css"
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
     <section className="hero">
      <div className="container">
        <div className="hero-text">
        <h1> Welcome To FurniShop</h1>
        <h2>the best furniture</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos provident non aliquam debitis nostrum molestiae quam temporibus, excepturi eos tempora ipsam labore magni atque voluptates quidem velit voluptas? Illo, quaerat?</p>
        <div className="button">
         
          <Link to='/shop' className='primary-btn'>Shop Now</Link>
        </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Hero;
