import React from 'react';
import CartItem from './CartItem';

function Cart({ user }) {
  // Fetch cart items from the database
  // You can use an API call or fetch the data from your database

  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1,
    },
    // Add more cart items here
  ];

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p>Total: $</p> {/* Calculate and display the total price of the cart items */}
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
