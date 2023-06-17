import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ProductListing({ user }) {
  // Fetch products from the database
  // You can use an API call or fetch the data from your database

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      description: 'This is product 1 description.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      description: 'This is product 2 description.',
    },
    // Add more products here
  ];

  return (
    <div>
      <h2>Product Listing</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {user && (
        <Link to="/add-product">Add Product</Link>
      )}
    </div>
  );
}

export default ProductListing;
