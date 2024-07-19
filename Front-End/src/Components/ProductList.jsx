import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../page/Cart/CartContext';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, isInCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/Admin/products');
        setProducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      addToCart(product);
      alert('Successfully Added to Cart');
    } else {
      alert('Already Added to the Cart');
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="product-items">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <p>Ksh.{product.price}</p>
            <button className="cart-btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
