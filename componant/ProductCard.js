import React from 'react';

function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductCard;
