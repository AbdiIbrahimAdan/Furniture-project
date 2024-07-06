import React from 'react';
import {useCart} from './../Cart/CartContext.jsx';
import {products} from '../../Data/DummyData.js'

import './Shop.css';
const Shop = () => {
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
  return (
    <>
      <div className="shop">
        <h2>Shop</h2>
        <div className="products-display">
          {products.map((product)=>(
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
