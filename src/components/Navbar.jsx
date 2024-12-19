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




// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import { useUser } from '../contexts/UserContext';

// function Navbar() {
// //   const { user, logout } = useUser();

//   return (
//     <div className="w-full h-16 bg-gray-100 shadow-md flex items-center justify-between px-4">
//       {/* Logo */}
//       {/* <NavLink to="/" className="text-lg font-bold">
//         E-Commerce
//       </NavLink> */}
//       <img src="assets/ecom.png" alt="logo" className="w-29 h-14" />
      
//       {/* Navigation Links */}
//       <div className="flex space-x-4">
//         <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
//         <NavLink to="/cart" className="hover:text-blue-600">Cart</NavLink>
//         <NavLink to="/orders" className="hover:text-blue-600">Orders</NavLink>
//       </div>
//       <div>
//             <input type="search" placeholder="Search....." className="border-b-1 border-gray-300 mt-3" />
//       </div>
//       <div className='flex space-x-4'>
//       {/* <NavLink to="/admin" className="hover:text-blue-600 "><b>Admin</b></NavLink> */}
//           <NavLink to="/login" className="hover:text-blue-600">Login</NavLink>
//           <NavLink to="/signup" className="hover:text-blue-600">SignUp</NavLink>
//       </div>
//     </div>
//   );
// }

// export default Navbar;






import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // Import the UserContext hook


function Navbar() {
    const { username, handleLogout } = useUser(); // Get username and logout from context

  return (

    <div className='Navbar w-full h-[77px] p-4 bg-white flex items-center justify-between shadow-lg'>
        <div className='flex items-center'>
            <img src="assets/ecom.png" alt="logo" className='w-20 h-20'/>
            <p className='font-bold text-2xl'></p>
        </div>
        <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
            <ul className='flex space-x-4 '>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/Cart"><li>Cart</li></NavLink>
                <NavLink to="/Order"><li>Order</li></NavLink>
            </ul>
        </div>
        <div className='flex items-center space-x-4'>
            
            
            <input type="text" placeholder='Search here...' 
                className='p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] ' />
        </div>
        <ul className="flex items-center space-x-2">
                {/* <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png"alt="profile" className='w-8 h-8' /> */}
                {/* <li className='hidden sm:block'>username</li>
                <button className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white'>logout</button> */}
                {username ? (
          <>
            <span className="font-normal text-sm">{username}</span>
            <button
              className='bg-gray-500 px-3 py-1 rounded-full hover:bg-gray-600 text-white'
              onClick={handleLogout} // Trigger the logout function
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <button className='bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600'>
                Login
              </button>
            </NavLink>
            <NavLink to="/signup">
              <button className='bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gary-600'>
                Sign Up
              </button>
            </NavLink>
          </>
        )}
        </ul>
    </div>
  )
}

export default Navbar;