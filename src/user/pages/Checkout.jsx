// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { useCart } from "../../contexts/CartContext";
// // // import { useUser } from "../../contexts/UserContext";

// // // const Checkout = () => {
// // //   const { cart , clearCart } = useCart();
// // //   const { email } = useUser()
// // //   const getTotalPrice = () =>  cart.reduce((total, item) => total + item.price * item.quantity, 0);
// // //   const navigate = useNavigate();
// // //   const [selectedPayment, setSelectedPayment] = useState("");

// // //   const [address, setAddress] = useState({ street: "", city: "", state: "", zip: "", country: ""})


// // //   const handleOrderConfirmation = async () => {
// // //     if (!selectedPayment) {
// // //       alert("Please select a payment method to proceed.");
// // //       return;
// // //     }
// // //     if (!address.street || !address.city || !address.state || !address.zip || !address.country) { 
// // //         alert("Please fill out all address fields."); 
// // //         return; 
// // //     }
// // //     const orderDetails = {
// // //       email, // Get from UserContext
// // //       items: cart.map((item) => ({
// // //         id: item.id,
// // //         name: item.name,
// // //         quantity: item.quantity,
// // //         price: item.price,
// // //       })),
// // //       total: getTotalPrice(),
// // //       paymentMethod: selectedPayment,
// // //       address: address,
// // //       date: new Date().toISOString(),
// // //     };

// // //     try {
// // //       const response = await fetch("http://localhost:5001/order", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(orderDetails),
// // //       });

// // //       if (response.ok) {
// // //         alert(`Order placed successfully with ${selectedPayment}!`);
// // //         clearCart(); // Clear the cart after placing the order
// // //         navigate("/order");
// // //       } else {
// // //         alert("Failed to place the order. Please try again.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Order Error:", error);
// // //       alert("An error occurred while placing the order.");
// // //     }

// // //   };
// // //   const handleAddressChange = (e) => { 
// // //     const { name, value } = e.target; 
// // //     setAddress((prevAddress) => 
// // //         ({ ...prevAddress, [name]: value, }));
// // //     }

// // //   return (
// // //     <div className="max-w-4xl mx-auto py-8 px-4">
// // //       <h2 className="text-2xl font-bold mb-6">Checkout Page</h2>

// // //       {cart.length > 0 ? (
// // //         <>
// // //           {/* Cart Summary Section */}
// // //           <div className="mb-4">
// // //             <h3 className="text-lg font-semibold mb-2">Cart Summary:</h3>
// // //             <div className="border p-4 rounded">
// // //               {cart.map((product) => (
// // //                 <div
// // //                   key={product.id}
// // //                   className="flex items-center justify-between mb-2 last:mb-0"
// // //                 >
// // //                   <div className="flex items-center space-x-4">
// // //                     <img
// // //                       src={product.image}
// // //                       alt={product.name}
// // //                       className="w-16 h-16 object-cover"
// // //                     />
// // //                     <div>
// // //                       <h4 className="font-semibold">{product.name}</h4>
// // //                       <p>₹{product.price} x {product.quantity}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="text-lg font-semibold">
// // //                     ₹{product.price * product.quantity}
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Total Amount Section */}
// // //           <div className="mt-4 text-lg font-semibold">
// // //             <p className="mb-2">Total Amount: ₹{getTotalPrice()}</p>
// // //           </div>

// // //           {/* Address Input Section */} 
// // //           <div className="mt-4"> 
// // //             <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3> 
// // //             <div className="space-y-2"> 
// // //                 <input type="text" name="street" placeholder="Street Address" value={address.street} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="city" placeholder="City" value={address.city} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="state" placeholder="State" value={address.state} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="country" placeholder="Country" value={address.country} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //             </div> 
// // //             </div>

// // //           {/* Payment Methods Section */}
// // //           <div className="mt-4">
// // //             <h3 className="text-lg font-semibold mb-2">Select Payment Method:</h3>
// // //             <div className="space-y-2">
// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="Credit Card"
// // //                   checked={selectedPayment === "Credit Card"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>Credit Card</span>
// // //               </label>

// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="Debit Card"
// // //                   checked={selectedPayment === "Debit Card"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>Debit Card</span>
// // //               </label>

// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="PayPal"
// // //                   checked={selectedPayment === "PayPal"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>PayPal</span>
// // //               </label>

// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="Cash on Delivery"
// // //                   checked={selectedPayment === "Cash on Delivery"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>Cash on Delivery</span>
// // //               </label>
// // //             </div>
// // //           </div>

// // //           {/* Confirm Order Button */}
// // //           <div className="mt-6 flex justify-between items-center">
// // //             <button
// // //               onClick={handleOrderConfirmation}
// // //               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
// // //             >
// // //               Confirm Order
// // //             </button>
// // //             <button
// // //               onClick={() => navigate("/cart")}
// // //               className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
// // //             >
// // //               Back to Cart
// // //             </button>
// // //           </div>
// // //         </>
// // //       ) : (
// // //         <p>Your cart is empty. Add some items to checkout.</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Checkout;






// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { useCart } from "../../contexts/CartContext";
// // // import { useUser } from "../../contexts/UserContext";

// // // const Checkout = () => {
// // //   const { cart , clearCart } = useCart();
// // //   const { email } = useUser()
// // //   const getTotalPrice = () =>  cart.reduce((total, item) => total + item.price * item.quantity, 0);
// // //   const navigate = useNavigate();
// // //   const [selectedPayment, setSelectedPayment] = useState("");
// // //   const [address, setAddress] = useState({ street: "", city: "", state: "", zip: "", country: "" });



// // //   const handleOrderConfirmation = async () => {
// // //     if (!selectedPayment) {
// // //       alert("Please select a payment method to proceed.");
// // //       return;
// // //     }
// // //     if (!address.street || !address.city || !address.state || !address.zip || !address.country) { 
// // //         alert("Please fill out all address fields."); 
// // //         return; 
// // //     }
// // //     const orderDetails = {
// // //       email, // Get from UserContext
// // //       items: cart.map((item) => ({
// // //         id: item.id,
// // //         name: item.name,
// // //         quantity: item.quantity,
// // //         price: item.price,
// // //       })),
// // //       total: getTotalPrice(),
// // //       paymentMethod: selectedPayment,
// // //       address: address,
// // //       date: new Date().toISOString(),
// // //     };

// // //     try {
// // //       const response = await fetch("http://localhost:5005/orders", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(orderDetails),
// // //       });

// // //       if (response.ok) {
// // //         alert(`Order placed successfully with ${selectedPayment}!`);
// // //         clearCart(); // Clear the cart after placing the order
// // //         navigate("/order");
// // //       } else {
// // //         alert("Failed to place the order. Please try again.");
// // //       }
// // //     } catch (error) {
// // //       console.error("Order Error:", error);
// // //       alert("An error occurred while placing the order.");
// // //     }

// // //   };
// // //   const handleAddressChange = (e) => { 
// // //     const { name, value } = e.target; 
// // //     setAddress((prevAddress) => 
// // //         ({ ...prevAddress, [name]: value, }));
// // //     }

// // //   return (
// // //     <div className="max-w-4xl mx-auto py-4 px-2">
// // //       <h2 className="text-lg font-bold mb-2">Checkout Page</h2>

// // //       {cart.length > 0 ? (
// // //         <>
// // //           {/* Cart Summary Section */}
// // //           <div className="mb-4">
// // //             <h3 className="text-lg font-semibold mb-2">Cart Summary:</h3>
// // //             <div className="border p-2 rounded">
// // //               {cart.map((product) => (
// // //                 <div
// // //                   key={product.id}
// // //                   className="flex items-center justify-between mb-2 last:mb-0"
// // //                 >
// // //                   <div className="flex items-center space-x-4">
// // //                     <img
// // //                       src={product.image}
// // //                       alt={product.name}
// // //                       className="w-16 h-16 object-cover"
// // //                     />
// // //                     <div>
// // //                       <h4 className="font-semibold">{product.name}</h4>
// // //                       <p>₹{product.price} x {product.quantity}</p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="text-lg font-semibold">
// // //                     ₹{product.price * product.quantity}
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           {/* Total Amount Section */}
// // //           <div className="mt-4 text-lg font-semibold">
// // //             <p className="mb-2">Total Amount: ₹{getTotalPrice()}</p>
// // //           </div>

// // //           {/* Address Input Section */} 
// // //           <div className="mt-4"> 
// // //             <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3> 
// // //             <div className="space-y-2"> 
// // //                 <input type="text" name="street" placeholder="Street Address" value={address.street} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="city" placeholder="City" value={address.city} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="state" placeholder="State" value={address.state} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //                 <input type="text" name="country" placeholder="Country" value={address.country} 
// // //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// // //             </div> 
// // //             </div>

// // //           {/* Payment Methods Section */}
// // //           <div className="mt-4">
// // //             <h3 className="text-base font-semibold mb-2">Select Payment Method:</h3>
// // //             <div className="space-y-2">
// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="Credit Card"
// // //                   checked={selectedPayment === "Credit Card"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>Credit Card</span>
// // //               </label>

// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="Debit Card"
// // //                   checked={selectedPayment === "Debit Card"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>Debit Card</span>
// // //               </label>

// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="PayPal"
// // //                   checked={selectedPayment === "PayPal"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>PayPal</span>
// // //               </label>

// // //               <label className="flex items-center space-x-2">
// // //                 <input
// // //                   type="radio"
// // //                   value="Cash on Delivery"
// // //                   checked={selectedPayment === "Cash on Delivery"}
// // //                   onChange={(e) => setSelectedPayment(e.target.value)}
// // //                   className="w-4 h-4"
// // //                 />
// // //                 <span>Cash on Delivery</span>
// // //               </label>
// // //             </div>
// // //           </div>

// // //           {/* Confirm Order Button */}
// // //           <div className="mt-6 flex justify-between items-center">
// // //             <button
// // //               onClick={handleOrderConfirmation}
// // //               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
// // //             >
// // //               Confirm Order
// // //             </button>
// // //             <button
// // //               onClick={() => navigate("/cart")}
// // //               className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
// // //             >
// // //               Back to Cart
// // //             </button>
// // //           </div>
// // //         </>
// // //       ) : (
// // //         <p>Your cart is empty. Add some items to checkout.</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Checkout;




// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useCart } from "../../contexts/CartContext";
// // // import { useUser } from "../../contexts/UserContext";
// // import { addOrder } from "../../api/userApi";

// // const Checkout = () => {
// //   const { cart , clearCart, totalPrice } = useCart();
// // //   const { user } = useUser()
// //   const getTotalPrice = () =>  cart.reduce((total, item) => total + item.price * item.qty, 0);
// //   const navigate = useNavigate();
// //   const [selectedPayment, setSelectedPayment] = useState("");
// //   const [address, setAddress] = useState({ street: "", city: "", state: "", zip: "", country: "" });
// //   const userId = localStorage.getItem("userId");
 



// //   const handleOrderConfirmation = async () => {
// //     if (!selectedPayment) {
// //       alert("Please select a payment method to proceed.");
// //       return;
// //     }
// //     if (!address.street || !address.city || !address.state || !address.zip || !address.country) { 
// //         alert("Please fill out all address fields."); 
// //         return; 
// //     }
// //     if(!cart.length>0){
// //         alert("Please add items to cart to checkout.")
// //         return;
// //       } 
  
// //     // const orderDetails = {
// //     //   email, // Get from UserContext
// //     //   items: cart.map((item) => ({
// //     //     id: item.id,
// //     //     name: item.name,
// //     //     quantity: item.quantity,
// //     //     price: item.price,
// //     //   })),
// //     //   total: getTotalPrice(),
// //     //   paymentMethod: selectedPayment,
// //     //   address: address,
// //     //   date: new Date().toISOString(),
// //     // };

// //     try {
// //     //   const response = await fetch("http://localhost:5001/orders", {
// //     //     method: "POST",
// //     //     headers: {
// //     //       "Content-Type": "application/json",
// //     //     },
// //     //     body: JSON.stringify(orderDetails),
// //     //   });

// //     const orderDetials = {
// //         userId,
// //         items: cart,
// //         total: totalPrice,
// //         paymentMethod: selectedPayment,
// //         address: address,
// //         date: new Date().toISOString(),
// //       };
// //       const response = await addOrder(orderDetials);
// //       if (response) {
// //         alert(`Order placed successfully with ${selectedPayment}!`);
// //         clearCart(); // Clear the cart after placing the order
// //         navigate("/orders");
// //       } else {
// //         alert("Failed to place the order. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Order Error:", error);
// //       alert("An error occurred while placing the order.");
// //     }

// //   };
// //   const handleAddressChange = (e) => { 
// //     const { name, value } = e.target; 
// //     setAddress((prevAddress) => 
// //         ({ ...prevAddress, [name]: value, }));
// //     }

// //   return (
// //     <div className="max-w-4xl mx-auto py-4 px-2">
// //       <h2 className="text-lg font-bold mb-2">Checkout Page</h2>

// //       {cart.length > 0 ? (
// //         <>
// //           {/* Cart Summary Section */}
// //           <div className="mb-4">
// //             <h3 className="text-lg font-semibold mb-2">Cart Summary:</h3>
// //             <div className="border p-2 rounded">
// //               {cart.map((product) => (
// //                 <div
// //                   key={product.id}
// //                   className="flex items-center justify-between mb-2 last:mb-0"
// //                 >
// //                   <div className="flex items-center space-x-4">
// //                     <img
// //                       src={product.image}
// //                       alt={product.name}
// //                       className="w-16 h-16 object-cover"
// //                     />
// //                     <div>
// //                       <h4 className="font-semibold">{product.name}</h4>
// //                       <p>₹{product.price} x {product.qty}</p>
// //                     </div>
// //                   </div>
// //                   <div className="text-lg font-semibold">
// //                     ₹{product.price * product.qty}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Total Amount Section */}
// //           <div className="mt-4 text-lg font-semibold">
// //             <p className="mb-2">Total Amount: ₹{getTotalPrice()}</p>
// //           </div>

// //           {/* Address Input Section */} 
// //           <div className="mt-4"> 
// //             <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3> 
// //             <div className="space-y-2"> 
// //                 <input type="text" name="street" placeholder="Street Address" value={address.street} 
// //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// //                 <input type="text" name="city" placeholder="City" value={address.city} 
// //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// //                 <input type="text" name="state" placeholder="State" value={address.state} 
// //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// //                 <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} 
// //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// //                 <input type="text" name="country" placeholder="Country" value={address.country} 
// //                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
// //             </div> 
// //             </div>

// //           {/* Payment Methods Section */}
// //           <div className="mt-4">
// //             <h3 className="text-base font-semibold mb-2">Select Payment Method:</h3>
// //             <div className="space-y-2">
// //               <label className="flex items-center space-x-2">
// //                 <input
// //                   type="radio"
// //                   value="Credit Card"
// //                   checked={selectedPayment === "Credit Card"}
// //                   onChange={(e) => setSelectedPayment(e.target.value)}
// //                   className="w-4 h-4"
// //                 />
// //                 <span>Credit Card</span>
// //               </label>

// //               <label className="flex items-center space-x-2">
// //                 <input
// //                   type="radio"
// //                   value="Debit Card"
// //                   checked={selectedPayment === "Debit Card"}
// //                   onChange={(e) => setSelectedPayment(e.target.value)}
// //                   className="w-4 h-4"
// //                 />
// //                 <span>Debit Card</span>
// //               </label>

// //               <label className="flex items-center space-x-2">
// //                 <input
// //                   type="radio"
// //                   value="PayPal"
// //                   checked={selectedPayment === "PayPal"}
// //                   onChange={(e) => setSelectedPayment(e.target.value)}
// //                   className="w-4 h-4"
// //                 />
// //                 <span>PayPal</span>
// //               </label>

// //               <label className="flex items-center space-x-2">
// //                 <input
// //                   type="radio"
// //                   value="Cash on Delivery"
// //                   checked={selectedPayment === "Cash on Delivery"}
// //                   onChange={(e) => setSelectedPayment(e.target.value)}
// //                   className="w-4 h-4"
// //                 />
// //                 <span>Cash on Delivery</span>
// //               </label>
// //             </div>
// //           </div>

// //           {/* Confirm Order Button */}
// //           <div className="mt-6 flex justify-between items-center">
// //             <button
// //               onClick={handleOrderConfirmation}
// //               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
// //             >
// //               Confirm Order
// //             </button>
// //             <button
// //               onClick={() => navigate("/cart")}
// //               className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
// //             >
// //               Back to Cart
// //             </button>
// //           </div>
// //         </>
// //       ) : (
// //         <p>Your cart is empty. Add some items to checkout.</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Checkout;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../../contexts/CartContext";
// import { addOrder } from "../../api/userApi";

// const Checkout = () => {
//   const { cart , clearCart, totalPrice } = useCart()
//   const getTotalPrice = () =>  cart.reduce((total, item) => total + item.price * item.qty, 0);
//   const navigate = useNavigate();
//   const [selectedPayment, setSelectedPayment] = useState("");
//   const [address, setAddress] = useState({ Name: "", Address: "", Number: "" });
//   const userId = localStorage.getItem("userId");
//   const userName = localStorage.getItem("userName");
 



//   const handleOrderConfirmation = async () => {
//     if (!selectedPayment) {
//       alert("Please select a payment method to proceed.");
//       return;
//     }
//     if (!address.Name || !address.Address || !address.Number) { 
//         alert("Please fill out all address fields."); 
//         return; 
//     }
//     if(!cart.length>0){
//         alert("Please add items to cart to checkout.")
//         return;
//       } 

//     try {

//     const orderDetials = {
//         userId,
//         userName,
//         items: cart,
//         total: totalPrice,
//         paymentMethod: selectedPayment,
//         address,
//         date: new Date().toISOString(),
//       };
//       const response = await addOrder(orderDetials);
//       if (response) {
//         alert(`Order placed successfully with ${selectedPayment}!`);
//         clearCart(); // Clear the cart after placing the order
//         navigate("/Orders");
//       } else {
//         alert("Failed to place the order. Please try again.");
//       }
//     } catch (error) {
//       console.error("Order Error:", error);
//       alert("An error occurred while placing the order.");
//     }

//   };
//   const handleAddressChange = (e) => { 
//     const { name, value } = e.target; 
//     setAddress((prevAddress) => 
//         ({ ...prevAddress, [name]: value, }));
//     }

//   return (
//     <div className="max-w-4xl mx-auto py-4 px-2">
//       <h2 className="text-lg font-bold mb-2">Checkout Page</h2>

//       {cart.length > 0 ? (
//         <>
//           {/* Cart Summary Section */}
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold mb-2">Cart Summary:</h3>
//             <div className="border p-2 rounded">
//               {cart.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex items-center justify-between mb-2 last:mb-0"
//                 >
//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-16 h-16 object-cover"
//                     />
//                     <div>
//                       <h4 className="font-semibold">{product.name}</h4>
//                       <p>₹{product.price} x {product.qty}</p>
//                     </div>
//                   </div>
//                   <div className="text-lg font-semibold">
//                     ₹{product.price * product.qty}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Total Amount Section */}
//           <div className="mt-4 text-lg font-semibold">
//             <p className="mb-2">Total Amount: ₹{getTotalPrice()}</p>
//           </div>

//           {/* Address Input Section */} 
//           <div className="mt-4"> 
//             <h3 className="text-lg font-semibold mb-2">Shipping Address:</h3> 
//             <div className="space-y-2"> 
//                 <input type="text" name="Name" placeholder="Enter your name" value={address.Name} 
//                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
//                 <textarea name="Address" placeholder="Enter your address" value={address.Address} 
//                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
//                 <input type="tel" name="Number" placeholder="Enter your mobile number" value={address.Number} 
//                     onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
//             </div> 
//             </div>

//           {/* Payment Methods Section */}
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold text-gray-700 mb-3">Payment Method</h3>
//             <div className="flex flex-col space-y-3">
//               {["Credit Card", "Debit Card", "Google Pay", "Cash on Delivery"].map((method) => (
//                 <label key={method} className="flex items-center space-x-3">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value={method}
//                     checked={selectedPayment === method}
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                     className="w-5 h-5"
//                   />
//                   <span>{method}</span>
//                 </label>
//               ))}
//             </div>
//           </div>


//           {/* Confirm Order Button */}
//           <div className="mt-6 flex justify-between items-center">
//             <button
//               onClick={handleOrderConfirmation}
//               className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//             >
//               Confirm Order
//             </button>
//             <button
//               onClick={() => navigate("/cart")}
//               className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
//             >
//               Back to Cart
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>Your cart is empty. Add items to checkout.</p>
//       )}
//     </div>
//   );
// };

// export default Checkout;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { addOrder } from "../../api/userApi";

const Checkout = () => {
  const { cart , clearCart, totalPrice } = useCart()
  const getTotalPrice = () =>  cart.reduce((total, item) => total + item.price * item.qty, 0);
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");
  const [address, setAddress] = useState({ Name: "", Address: "", Number: "" });
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
 



  const handleOrderConfirmation = async () => {
    if (!selectedPayment) {
      alert("Please select a payment method to proceed.");
      return;
    }
    if (!address.Name || !address.Address || !address.Number) { 
        alert("Please fill out all address fields."); 
        return; 
    }
    if(!cart.length>0){
        alert("Please add items to cart to checkout.")
        return;
      } 

    try {

    const orderDetials = {
        userId,
        userName,
        items: cart,
        total: totalPrice,
        paymentMethod: selectedPayment,
        address,
        date: new Date().toISOString(),
      };
      const response = await addOrder(orderDetials);
      if (response) {
        alert(`Order placed successfully with ${selectedPayment}!`);
        clearCart(); // Clear the cart after placing the order
        navigate("/Orders");
      } else {
        alert("Failed to place the order. Please try again.");
      }
    } catch (error) {
      console.error("Order Error:", error);
      alert("An error occurred while placing the order.");
    }

  };
  const handleAddressChange = (e) => { 
    const { name, value } = e.target; 
    setAddress((prevAddress) => 
        ({ ...prevAddress, [name]: value, }));
    }

  return (
    <div className="max-w-4xl mx-auto py-4 px-2  ">
      <h2 className="text-xl font-bold mb-6 border-b text-center">Checkout Page</h2>

      {cart.length > 0 ? (
        <>
          {/* Cart Summary Section */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Cart Summary:</h3>
            <div className="border p-2 rounded">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mb-2 last:mb-0"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <h4 className="font-bold">{product.name}</h4>
                      <p className="text-gray-600">₹{product.price} x {product.qty}</p>
                    </div>
                  </div>
                  <div className="text-base font-semibold text-black">
                    ₹{product.price * product.qty}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Amount Section */}
          <div className="mt-2 text-base font-bold">
            <p className="mb-6 text-black">Total Amount: <span className="text-gray-600">₹{getTotalPrice()}</span></p>
          </div>

          {/* Address Input Section */} 
          <div className="mt-4 mb-6"> 
            <h3 className="text-lg font-bold mb-2">Shipping Address:</h3> 
            <div className="space-y-2"> 
                <input type="text" name="Name" placeholder="Enter your name" value={address.Name} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <textarea name="Address" placeholder="Enter your address" value={address.Address} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
                <input type="tel" name="Number" placeholder="Enter your mobile number" value={address.Number} 
                    onChange={handleAddressChange} className="w-full border p-2 rounded" required /> 
            </div> 
            </div>

          {/* Payment Methods Section */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Payment Method</h3>
            <div className="flex flex-col space-y-2 text-gray-600">
              {["Credit Card", "Debit Card", "Google Pay", "Cash on Delivery"].map((method) => (
                <label key={method} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={selectedPayment === method}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>


          {/* Confirm Order Button */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleOrderConfirmation}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Confirm Order
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Back to Cart
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Add items to checkout.</p>
      )}
    </div>
  );
};

export default Checkout;