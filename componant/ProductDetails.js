import React from 'react';

function ProductDetails({ productId }) {
  // Fetch product details based on the productId
  // You can use an API call or fetch the data from your database

  return (
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {productId}</p>
      {/* Display the rest of the product details */}
    </div>
  );
}

export default ProductDetails;
