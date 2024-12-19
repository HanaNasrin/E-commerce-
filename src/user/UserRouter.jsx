// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Checkout from "./pages/Checkout";

// function UserRouter() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/" element={<Login />} />
//       <Route path="/products" element={<ProductList />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//     </Routes>
//   );
// }

// export default UserRouter;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import Checkout from "./pages/Checkout";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ProductList from "./pages/ProductList";

// function UserRouter() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product/:id" element={<ProductDetail />} />
//       <Route path="/cart" element={<Cart/>} />
//       <Route path="/orders" element={<Orders/>} />
//       <Route path="/Home" element={<ProductList/>} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   );
// }

// export default UserRouter;








// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import Checkout from "./pages/Checkout";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ProductList from "./pages/ProductList";

// function UserRouter() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product/:productId" element={<ProductDetail />} />
//       {/* <Route path="/productId" element={<ProductDetail />} /> */}
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/orders" element={<Orders />} />
//       <Route path="/Home" element={<ProductList />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   );
// }

// export default UserRouter;





// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
// import Cart from "./pages/Cart";
// import Orders from "./pages/Orders";
// import Checkout from "./pages/Checkout";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import ProductList from "./pages/ProductList";

// function UserRouter() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/product/:productId" element={<ProductDetail />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/orders" element={<Orders />} />
//       <Route path="/home" element={<ProductList />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="*" element={<div>Page Not Found</div>} /> {/* Catch-all route */}
//     </Routes>
//   );
// }

// export default UserRouter;





import Footer from "../components/Footer"
import Home from "../user/pages/Home"
import { Routes, Route } from 'react-router-dom';
import Cart from "../user/pages/Cart";
import Orders from "../user/pages/Orders";
import Signup from "../user/pages/Signup";
import Login from "../user/pages/Login";
import ProductDetail from "../user/pages/ProductDetail";
import Checkout from "../user/pages/Checkout";
import Navbar from "../components/Navbar";

const UserRouter =() =>{
    return (
       
            // <Router>
              <div className=" flex flex-col min-h-screen">
                <Navbar/>
                  <div className="flex-grow">
                    <Routes>
                      <Route path='/' element={ <Home/> } />
                      <Route path='/cart' element={ <Cart/>} />
                      <Route path='/orders' element={<Orders/>} />
                      <Route path='/Login' element={<Login/>}/>
                      <Route path='/signup' element={<Signup/>}/>
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path='/checkout' element={ <Checkout/>} />
                    </Routes>
                </div>
                <Footer/>
              </div>
            // </Router>
    
      );
}
export default UserRouter;