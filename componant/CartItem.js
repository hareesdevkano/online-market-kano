import React from 'react';

function CartItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
}

export default CartItem;
