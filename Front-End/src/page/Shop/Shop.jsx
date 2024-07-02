import React from 'react'
import './Shop.css';
import {product }from '../../Data/DummyData';

const Shop = () => {
  const displayProducts =  product;
  return (
    <>
    <div className='shop'>
      <h2>Shop</h2>
      <div className="products-display">
        {displayProducts.map(product => {
           return (
            <div key={product.id} className='product-finder'>
           <img src={product.image} alt={product.name} className="product-image" />
           <h3 className='product-name'>{product.name}</h3>
           <p className='product-description'>{product.description}</p>
           <p className='product-price'>{product.price}</p>
            <button>Add to cart</button>
            </div>
           )
        })} 
      </div>
      
    </div>
    </>
  )
}

export default Shop
