import React, {useState, useEffect} from 'react';
import './NewArrival.css';
import {useCart} from './../Cart/CartContext.jsx';
import { FaStar } from "react-icons/fa";
import {bedProducts, tableProducts, chairProducts, couchProducts} from './../../Data/DummyData.js';

const NewArrival = () => {
  const [currentHeader, setCurrentHeader] = useState('Bed');
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const headerToProducts = {
       Bed: bedProducts,
       Table: tableProducts,
       Chair: chairProducts,
       Couch: couchProducts,
    };

    setProducts(headerToProducts[currentHeader]);
    const interval = setInterval(() =>{
     const headers = Object.keys(headerToProducts);
     const currentIndex = headers.indexOf(currentHeader);
     const nextHeader = headers[(currentIndex + 1) % headers.length];
     setCurrentHeader(nextHeader);
     setProducts(headerToProducts[nextHeader]);

    }, 7000);

    return () => clearInterval(interval);
  }, [currentHeader]);
 

  const {addToCart, isInCart} = useCart();
  const handleAddToCart = (product)=>{
    if (!isInCart(product.id)) {
      addToCart(product);
      alert("Successfully Added to Cart");
    }
    else{
      alert("Already Added  to the Cart")
    }
  }

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++){
      if (i < rating){
        stars.push(<FaStar  key={i} style={{color:'#ffc107'}}/>);
      }
      else{
        stars.push(<FaStar  key={i} style={{color:'#e4e5e9'}}/>);
      }
    }
    return stars;
  };
  return (
    <div className='new-container'>
      <h1>New arrival</h1>
      <h2>{currentHeader}</h2>
      <div className='product-list'>
        {products.map((product) => (
          <div key={product.id} className='product-item'>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: Ksh.{product.price}</p>
            <div className='rating'>
              {renderRatingStars(product.rating)}
            
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival
