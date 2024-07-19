import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css'; 
const ProductList = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/Admin/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);



  const handleUpdateProduct = async (productId) => {
   
    console.log('Update product:', productId);
   
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/Admin/products/${productId}`);
      console.log('Product deleted successfully:', response.data);
      alert('Product deleted successfully');
      
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="products-display">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <p>Ksh.{product.price}</p>
            <div className="product-actions">
              <button className="update-btn" onClick={() => handleUpdateProduct(product.id)}>
                Update
              </button>
              <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
