import React from 'react'
import './Banner.css';
const Banner = ({title, backgroundImage}) => {
  return (
    <>
    <section className="banner" style={{backgroundImage: `url(${backgroundImage})`}}>
    <div className='banner-overlay'>
      <h1 className="banner-title">{title}</h1>
    </div>

    </section>
    </>
  )
}

export default Banner;
