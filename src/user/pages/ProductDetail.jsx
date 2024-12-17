import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();  // Get product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details based on the product ID
    axios.get(`http://localhost:5000/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width={200} />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> This is the description of {product.name}.</p>
    </div>
  );
};

export default ProductDetail;