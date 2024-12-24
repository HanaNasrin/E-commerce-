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




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { UserProvider } from "./contexts/UserContext";
// import { CartProvider } from "./contexts/CartContext";
// import UserRouter from './user/UserRouter';
// import AdminRouter from './admin/AdminRouter';
// function App() {
//   return (
//     <UserProvider>
//       <CartProvider>
//         <Router>
//                 <Routes>
//                   <Route path='/*' element={ <UserRouter/> } />
//                   <Route path="/admin*" element = { <AdminRouter/> } />
//                 </Routes>
//         </Router>
//       </CartProvider>
//     </UserProvider>
    
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";
// // import { UserProvider } from "./contexts/UserContext";
// // import { CartProvider } from "./contexts/CartContext";
// import UserRouter from "./user/routes/UserRouter";
// import AdminRouter from "./admin/Routes/AdminRouter";
// import Home from './user/pages/Home';
// import Login from './auth/pages/Login';
// import Signup from './auth/pages/Signup';
// import ProductDetail from './user/pages/ProductDetail';
// import UserProtectedRouter from './user/routes/UserProtectedRouter';
// import AdminProtectedRoutes from '.admin/routes/AdminProtectedRoutes';
// // import AdminNavbar from './admin/pages/AdminNavbar';
// import Navbar from './components/Navbar';
// import { Notfound } from "./components/NotFound";


// // function App() {
// //   return (
// //     <UserProvider>
// //       <CartProvider>
// //         <Router>
// //               <Routes>
// //                 <Route path="/*" element={<UserRouter/>} />
// //                 <Route path="/admin*" element = { <AdminRouter/> } />
// //               </Routes>
// //         </Router>
// //       </CartProvider>
// //     </UserProvider>
// //   );
// // }

// function App() {
//   // const location = useLocation;
//   // const isAdmin = AdminRouter.some(route => location.pathname.startsWith(route.path));
//   return (
//     <div>
//       {/* {isAdmin ? <AdminSidebar/> : <Navbar/>} */}
//       <Navbar/>
//         <Routes>
//           <Route path="/" element = { <Home/> } />
//           <Route path="/login" element = { <Login/> } />
//           <Route path="/Signup" element = { <Signup/> } />
//           <Route path="/product/:id" element = { <ProductDetail/> } />
//           <Route element={<UserProtectedRouter/>}>
//               {UserRouter.map(({path,element},index)=>(
//                 <Route key={index} path={path} element={element}/>
//               ))}
//             </Route>
//             <Route element={<AdminProtectedRoutes/>}>
//               {AdminRouter.map(({path,element},index)=>(
//                 <Route key={index} path={path} element={element}/>
//               ))}
//             </Route>
//             <Route path='*' element={<Notfound/>} />
//         </Routes>
//       </div>
//   );
// }
// export default App;





import { Routes, Route, useLocation } from "react-router-dom";
// import { UserProvider } from "./contexts/UserContext";
// import { CartProvider } from "./contexts/CartContext";
import UserRouter from "./user/routes/UserRouter";
import Home from './user/pages/Home';
import Login from './auth/pages/Login';
import Signup from './auth/pages/Signup';
import ProductDetail from './user/pages/ProductDetail';
import UserProtectedRouter from './user/routes/UserProtectedRouter';
import AdminProtectedRoutes from './admin/routes/AdminProtectedRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Notfound } from "./components/Notfound";
import AdminRouter from "./admin/routes/AdminRouter";
import AdminNavbar from "./admin/pages/AdminNavbar";
// import AdminNavbar from './admin/pages/AdminNavbar';


// function App() {
//   return (
//     <UserProvider>
//       <CartProvider>
//         <Router>
//               <Routes>
//                 <Route path="/*" element={<UserRouter/>} />
//                 <Route path="/admin*" element = { <AdminRouter/> } />
//               </Routes>
//         </Router>
//       </CartProvider>
//     </UserProvider>
//   );
// }

function App() {
  const location = useLocation();
  const isAdmin = AdminRouter.some(route => location.pathname.startsWith(route.path));
  return (
    <div className="flex flex-col min-h-screen">
      {isAdmin ? <AdminNavbar/> : <Navbar/>}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/login" element = { <Login/> } />
            <Route path="/Signup" element = { <Signup/> } />
            <Route path="/product-details/:id" element = { <ProductDetail/> } />
            <Route element={<UserProtectedRouter/>}>
                {UserRouter.map(({path,element},index)=>(
                  <Route key={index} path={path} element={element}/>
                ))}
              </Route>
              <Route element={<AdminProtectedRoutes/>}>
                {AdminRouter.map(({path,element},index)=>(
                  <Route key={index} path={path} element={element}/>
                ))}
              </Route>
              <Route path='*' element={<Notfound/>} />
          </Routes>
          </div>
        <Footer/>
      </div>
  );
}

export default App;