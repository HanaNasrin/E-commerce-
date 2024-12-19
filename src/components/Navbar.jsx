// import React from 'react'

// function Navbar() {
//   return (
//     <div className='w-screen h-[80px] bg-slate-300 shadow-lg flex items-center px-4'>
//       <div className='flex justify-between space-x-4 w-full'>
//         <div>
//           <img src='assets\ecom.png' alt='logo' className='w-20 h-20 margin-40px' />
//         </div>
//         <div className='flex space-x-4'>
//           <button>Home</button>
//           <button>Cart</button>
//           <button>Orders</button>
//         </div>
//         <div>
//           <input type="search" placeholder="Search....." className="border-b-1 border-gray-300 mt-6" />
//         </div>
//       <div className='flex space-x-4'>
//         <button>Admin</button>
        
//         <button>Logout</button>
//       </div>
//     </div>
//   </div>

//   )
// }

// export default Navbar




import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useUser } from '../contexts/UserContext';

function Navbar() {
//   const { user, logout } = useUser();

  return (
    <div className="w-full h-16 bg-gray-100 shadow-md flex items-center justify-between px-4">
      {/* Logo */}
      {/* <NavLink to="/" className="text-lg font-bold">
        E-Commerce
      </NavLink> */}
      <img src="assets/ecom.png" alt="logo" className="w-29 h-14" />
      
      {/* Navigation Links */}
      <div className="flex space-x-4">
        <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
        <NavLink to="/cart" className="hover:text-blue-600">Cart</NavLink>
        <NavLink to="/orders" className="hover:text-blue-600">Orders</NavLink>
      </div>
      <div>
            <input type="search" placeholder="Search....." className="border-b-1 border-gray-300 mt-3" />
      </div>
      <div className='flex space-x-4'>
      <NavLink to="/admin" className="hover:text-blue-600 "><b>Admin</b></NavLink>
          <NavLink to="/login" className="hover:text-blue-600">Login</NavLink>
          <NavLink to="/signup" className="hover:text-blue-600">SignUp</NavLink>
      </div>
    </div>
  );
}

export default Navbar;