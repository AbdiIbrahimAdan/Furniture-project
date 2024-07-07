import React from 'react'
import './AboutUs.css'
import aboutHome from './../../../assets/about-home.jpg';
const AboutUs = () => {
  return (
    <section className='about-us'>
        <div className="container">
            <div className="about-content">
                <div className="about-text">
                    <h2>About Us</h2>

                    <p>Welcome to FurniShop, your premier destination for quality furniture. At FurniShop, we're passionate about bringing comfort and style into every home. Discover our wide selection of beds, tables, chairs, and couches, meticulously curated to meet your needs. Whether you're furnishing a cozy corner or redecorating your entire space, FurniShop is here to help you create a home you love.</p>

                </div>
                <div className="about-image">
                 <img src={aboutHome} alt="About Us" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutUs;
