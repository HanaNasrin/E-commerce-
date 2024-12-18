// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// function Home() {
//   const [smartphones, setSmartphones] = useState([]); // State to store fetched products
//   const [loading, setLoading] = useState(true); // State to show a loading spinner or text
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     // Fetch data from db.json via json-server
//     axios
//       .get("http://localhost:5000/smartphones") // Endpoint served by json-server
//       .then((response) => {
//         setSmartphones(response.data); // Set fetched data into state
//         setLoading(false); // Stop loading once data is fetched
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setError("Failed to fetch products."); // Handle error
//         setLoading(false);
//       });
//   }, []);

//   // Display loading message while fetching data
//   if (loading) {
//     return <p className="text-center text-lg">Loading products...</p>;
//   }

//   // Display error message if fetching fails
//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold text-center mb-4">Mobile Phones</h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {smartphones.map((phone) => (
//             <div
//               key={phone.id}
//               className="border rounded-lg shadow-sm p-3 flex flex-col items-center"
//             >
//               {/* Product Image */}
//               <img
//                 src={phone.image}
//                 alt={phone.name}
//                 className="w-24 h-24 object-cover mb-3"
//               />
//               {/* Product Details */}
//               <h2 className="text-base font-semibold text-center">
//                 {phone.name}
//               </h2>
//               <p className="text-sm text-gray-500 text-center">{phone.specs}</p>
//               <p className="text-lg font-bold text-orange-500">{phone.price}</p>
//               {/* Add to Cart Button */}
//               <button className="mt-2 bg-orange-500 text-white text-sm px-3 py-1 rounded hover:bg-orange-600">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Home;


// import React from 'react';

// function Home() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Welcome to E-Shop!</h1>
//       <p>Browse our products and shop your favorite items.</p>
//     </div>
//   );
// }
// export default Home;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const navigate=useNavigate();

  // Fetch products from JSON server
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
 
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
           {products.slice(0, 10).map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            //  onClick={()=>{navigate("/cart")}}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;