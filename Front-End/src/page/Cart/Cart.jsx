import React from 'react'

const Cart = () => {
  return (
    <>
     <div className="cart">
        <h2>Cart</h2>
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
              {CartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt="item.name" />
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                  </td>
                  <td>
                    <button onClick={()=> onDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={()=> onIncrease(item.id)}>+</button>
                  </td>
                  <td>Ksh.{item.price * item.quantity}</td>

                  <td>
                    <button onClick={() => onRemove(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
               
            </tbody>
        </table>
        <div className="cart-total">
          <h3>Totla: Ksh.{total}</h3>
          <button onClick={()=> alert('proceed to buy')}>Buy Now</button>
          <button onClick={onClearCart}>Clear cart</button>
        </div>
     </div>
    </>
  );
};

export default Cart;
