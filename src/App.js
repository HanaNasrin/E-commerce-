// import React from "react";
// import Navbar from'./components/Navbar';
// import ProductList from './user/pages/ProductList'
// import Footer from'./components/Footer';
// // import Signup from "./Auth/Pages/Signup"
// // import Login from "./Auth/Pages/Login"
// import Home from'./user/pages/Home';
// import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
// import UserRouter from "./user/UserRouter";

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <ProductList/>
//       <Router>
//        <Routes>
//             <Route path="/" element={<Home />}>
    
//             <Route path="/navbar" element={<Navbar />
//        </Routes>
//       </Router> 
//       <Footer/    </div>
//   );
// }
// export default App;




// import React from 'react';
// import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import UserRouter from './user/UserRouter';
// import AdminRouter from './admin/AdminRouter';
// // import ProductList from './user/pages/ProductList';
// import UserContext from './contexts/UserContext';


// const App = () => {
//   return (
//     <div className="app">
//       <Router>
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/" element={<ProductList />} />
//       <Route path="/" element={<UserContext />} />
//       <Route path="/*" element={<UserRouter />} />
//       <Route path="/admin/*" element={<AdminRouter />} />
//       </Routes>
//       <Footer />
//       </Router>
//     </div>
//   );
// };

// export default App;






// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserRouter from "./user/UserRouter";
// import AdminRouter from "./admin/AdminRouter";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CartContext } from "./context/CartContext";

// function App() {
//   return (
//     <Router>
//       <CartContext>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="flex-grow container mx-auto p-4">
//             <Routes>
//               <Route path="/*" element={<UserRouter />} />
//               <Route path="/admin/*" element={<AdminRouter />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </CartContext>
//     </Router>
//   );
// }

// export default App









// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import UserRouter from "./user/UserRouter";
// import AdminRouter from "./admin/AdminRouter";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { CartProvider } from './contexts/CartContext';  // Correct import

// function App() {
//   return (
//     <CartProvider>
//         <Router>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="flex-grow container mx-auto p-4">
//             <Routes>
//               <Route path="/*" element={<UserRouter />} />
//               <Route path="/admin/*" element={<AdminRouter />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//         </Router>
//     </CartProvider>
//   );
// }


// export default App;




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import UserRouter from './user/UserRouter';
import AdminRouter from './admin/AdminRouter';
function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
                <Routes>
                  <Route path='/*' element={ <UserRouter/> } />
                  <Route path="/admin*" element = { <AdminRouter/> } />
                </Routes>
        </Router>
      </CartProvider>
    </UserProvider>
    
  );
}

export default App;
