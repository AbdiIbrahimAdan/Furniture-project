import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import {useCart, CartProvider } from './CartContext';
import './CartDisplay.css';

const Cart = () => {
    const {cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice}= useCart();
    const handleQuantityChange = (itemId,newQuantity) =>{
        if (newQuantity > 0){
            updateQuantity(itemId, newQuantity);
        }
    };
  return (
    <>
      <div className="cart-container">
        <h2>Shopping Cart</h2>

        <table>
            <thead>
                <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map((item) =>{
                    <tr key={item.id }  className="product-info">
                        <td>
                            <img src={item.image} alt={item.title} width="50 "/>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                        </td>
                        <td>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className='quantity-btn'>-</button>
                            {item.quantity}
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className='quantity-btn'>+</button>
                        </td>
                        <td>{(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                         <td>
                            <button onClick={() => removeFromCart(item.id)}>
                            <FaTrashAlt />
                            </button>
                         </td>
                    </tr>
                })}
            </tbody>
        </table>
        <div className="total">
            <h3>Total:{getTotalPrice()}</h3>
            <button className='checkout-btn'>But Now</button>
            <button onClick={clearCart} className='clear-btn'>clear Cart</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
export {CartProvider};
