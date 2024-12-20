// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../../contexts/CartContext'

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/products/${id}`)
//       .then(response => setProduct(response.data))
//       .catch(error => console.error('Error fetching product details:', error));
//   }, [id]);

  


//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   const shortenSpecifications = (specifications) => {
//     return specifications.slice(0, 3);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="container mx-auto p-6 flex-1">
//         <div className="flex flex-wrap items-start space-x-8">
//           <div className="flex-1">
//             <img
//               src={product.detailsImage}
//               alt={product.name}
//               className="w-full max-w-md mx-auto h-auto rounded-md object-cover"
//             />
//           </div>
//           <div className="flex-1 max-w-md">
//             <h2 className="text-3xl font-bold mb-4">{product.name}</h2>

//             <p className="text-lg font-bold text-black mt-4">
//               Price: {new Intl.NumberFormat('en-IN', {
//                 style: 'currency',
//                 currency: 'INR',
//               }).format(product.price)}
//             </p>

//             <h3 className="text-2xl font-semibold mt-6"></h3>
//             {Array.isArray(product.specifications) ? (
//               <ul className="list-none list-inside text-gray-700 mt-4">
//                 {shortenSpecifications(product.specifications).map((spec, index) => (
//                   <li key={index} className="mb-2">{spec}</li>
//                 ))}
//                 {product.specifications.length > 3 && (
//                   <li className="text-gray-500 text-sm">...and more</li>
//                 )}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No specifications available.</p>
//             )}
//             <button
//               onClick={()=>addToCart(product)}
//               className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;




// import React, { useEffect, useState } from 'react';
// import { useParams,useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../../contexts/CartContext'
// import { useUser } from '../../contexts/UserContext';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { addToCart } = useCart();
//  const { email } = useUser();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/products/${id}`)
//       .then(response => setProduct(response.data))
//       .catch(error => console.error('Error fetching product details:', error));
//   }, [id]);

  


//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   const handleAddToCart = () => {
//     if (!email) {
//       alert('Please log in to add products to your cart.');
//       navigate('/login');
//       return;
//     }
//     addToCart(product);
//     alert(`${product.name} has been added to your cart.`);
//   };

//   const shortenSpecifications = (specifications) => {
//     return specifications.slice(0, 3);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="container mx-auto p-6 flex-1">
//         <div className="flex flex-wrap items-start space-x-8">
//           <div className="flex-1">
//             <img
//               src={product.detailsImage}
//               alt={product.name}
//               className="w-full max-w-md mx-auto h-auto rounded-md object-cover"
//             />
//           </div>
//           <div className="flex-1 max-w-md">
//             <h2 className="text-3xl font-bold mb-4">{product.name}</h2>

//             <p className="text-lg font-bold text-black mt-4">
//               Price: {new Intl.NumberFormat('en-IN', {
//                 style: 'currency',
//                 currency: 'INR',
//               }).format(product.price)}
//             </p>

//             <h3 className="text-2xl font-semibold mt-6"></h3>
//             {Array.isArray(product.specifications) ? (
//               <ul className="list-none list-inside text-gray-700 mt-4">
//                 {shortenSpecifications(product.specifications).map((spec, index) => (
//                   <li key={index} className="mb-2">{spec}</li>
//                 ))}
//                 {product.specifications.length > 3 && (
//                   <li className="text-gray-500 text-sm">...and more</li>
//                 )}
//               </ul>
//             ) : (
//               <p className="text-gray-500">No specifications available.</p>
//             )}
//             <button
//               onClick={handleAddToCart}
//               className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-gray-400 transition"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail







import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import { useCart } from "../../contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch product data based on the ID from the URL
    axios
      .get(`http://localhost:5001/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details!", error);
      });
  }, [id]); // Re-fetch when the product ID changes

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-details container mx-auto py-4 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain max-w-sm"
          />
        </div>
        <div className="md:w-1/2 md:pl-4 max-w-xs ">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2 leading tight">{product.description}</p>
          <p className="text-xl font-semibold mt-2">₹{product.price}</p>
          <button 
            className="bg-gray-500 text-white px-2 py-1 rounded-full hover:bg-gray-600 mt-4"
            onClick={(e) =>{
              e.preventDefault()
              addToCart(product)
              alert(`Added ${product.name} to the cart`)}}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;






