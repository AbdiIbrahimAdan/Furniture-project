import React from 'react'
import aboutImage from './../../assets/About.jpg';
import backgroundImage from  './../../assets/ban.jpg';
import './About.css';
import Banner from '../../Components/Banner/Banner';
const About = () => {
  return (
    <>
    <Banner title="About us" backgroundImage={backgroundImage}/>
    <section className="about">
      <div className="about-img">
      <img src={aboutImage} alt="About us"/>
      </div>
      <div className="about-info">
        <h2 className="about-title">
          About Us
        </h2>
        <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aspernatur dolor libero, atque enim ducimus delectus nobis ut aperiam quibusdam. Nobis laborum unde incidunt vel qui esse in animi laboriosam maxime ea molestiae odit atque, officia exercitationem omnis explicabo consequatur.</p>

        <button>Shop Now</button>
      </div>

    </section>
      
    </>
  );
}

export default About;
