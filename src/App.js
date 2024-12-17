import React from "react";
import Navbar from'./components/Navbar';
import ProductList from './user/pages/ProductList'
import Footer from'./components/Footer';
// import Signup from "./Auth/Pages/Signup"
// import Login from "./Auth/Pages/Login"
import Home from'./user/pages/Home';
// import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductList/>
      <Footer/>
      {/* <Router>
       <Routes>
            <Route path="/" element={<Home />}>
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/navbar" element={<Navbar />} /> */}
       {/* </Routes> */}
      {/* </Router> */} */}
    </div>
  );
}
export default App;





