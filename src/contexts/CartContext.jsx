// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

// import React, { createContext, useState } from "react";

// // Create the CartContext
// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Function to add an item to the cart
//   const addToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]);
//   };

//   // Function to remove an item from the cart (by index or unique ID)
//   const removeFromCart = (itemIndex) => {
//     setCart((prevCart) => prevCart.filter((_, index) => index !== itemIndex));
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



// src/context/CartContext.js
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
