// import React, { useContext } from "react";
// import { CartContext } from "../contexts/CartContext";
// import { Link } from "react-router-dom";

// function Cart() {
//   const { cart, addToCart } = useContext(CartContext);

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty. <Link to="/products" className="text-blue-500">Shop now</Link>.</p>
//       ) : (
//         <div>
//           <ul className="divide-y divide-gray-300">
//             {cart.map((item, index) => (
//               <li key={index} className="flex justify-between items-center py-4">
//                 <span>{item.name}</span>
//                 <span>${item.price.toFixed(2)}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4 flex justify-between items-center">
//             <span className="font-bold">Total:</span>
//             <span className="font-bold">${calculateTotal().toFixed(2)}</span>
//           </div>
//           <Link to="/checkout" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">
//             Proceed to Checkout
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cart;



import React from 'react';

const Cart = ({ cart=[], setCart }) => {
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalAmount = cart.reduce((sum, item) => { if(item.price && item.quantity){
    return sum + item.price * item.quantity

  }
  return sum}, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h2>
          {cart.length === 0 ? (
        <p className='text-center'>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="font-semibold">₹{item.price * item.quantity}</p>
              <div className="flex items-center">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded">Order</button>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">Total: ₹{totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;