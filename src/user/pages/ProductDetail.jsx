// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../../context/CartContext'; // Correct import path

// const ProductDetail = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const { addToCart } = useCart(); // Access the addToCart function from CartContext
//   const [product, setProduct] = useState(null);

//   // Fetch product details based on the ID from the URL
//   useEffect(() => {
//     axios.get(`http://localhost:5000/products/${id}`)
//       .then((response) => {
//         setProduct(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product details:', error);
//       });
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product); // Add the product to the cart
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/2">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-96 object-cover rounded-md"
//           />
//         </div>
//         <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold">{product.name}</h2>
//           <p className="mt-4 text-lg text-gray-700">{product.description}</p>
//           <p className="mt-4 text-xl font-semibold">${product.price}</p>
//           <button
//             className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//             onClick={handleAddToCart} // Add to cart button
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../../context/CartContext';  // Correct path to CartContext

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { addToCart } = useCart();  // Destructure addToCart from CartContext
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/products/${id}`)
//       .then((response) => {
//         setProduct(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching product details:', error);
//       });
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product); // Add product to the cart
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col md:flex-row">
//         <div className="md:w-1/2">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-96 object-cover rounded-md"
//           />
//         </div>
//         <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
//           <h2 className="text-3xl font-bold">{product.name}</h2>
//           <p className="mt-4 text-lg text-gray-700">{product.description}</p>
//           <p className="mt-4 text-xl font-semibold">${product.price}</p>
//           <button
//             className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
//             onClick={handleAddToCart}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

