import React, { useState } from 'react';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleAddProduct = () => {
    // Perform actions to add the product
    // You can use an API call or update your database

    // Reset the form fields
    setProductName('');
    setProductDescription('');
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <textarea
        placeholder="Product Description"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      ></textarea>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default AddProduct;
