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






// import React from 'react'
// import { NavLink } from 'react-router-dom';
// import { useUser } from '../contexts/UserContext'; // Import the UserContext hook


// function Navbar() {
//     const { username, handleLogout } = useUser(); // Get username and logout from context

//   return (

//     <div className='Navbar w-full h-[77px] p-4 bg-white flex items-center justify-between shadow-lg'>
//         <div className='flex items-center'>
//             <img src="assets/ecom.png" alt="logo" className='w-20 h-20'/>
//             <p className='font-bold text-2xl'></p>
//         </div>
//         <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
//             <ul className='flex space-x-4 '>
//                 <NavLink to="/"><li>Home</li></NavLink>
//                 <NavLink to="/Cart"><li>Cart</li></NavLink>
//                 <NavLink to="/Order"><li>Order</li></NavLink>
//             </ul>
//         </div>
//         <div className='flex items-center space-x-4'>
            
            
//             <input type="text" placeholder='Search here...' 
//                 className='p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] ' />
//         </div>
//         <ul className="flex items-center space-x-2">
//                 {/* <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png"alt="profile" className='w-8 h-8' /> */}
//                 {/* <li className='hidden sm:block'>username</li>
//                 <button className='bg-orange-500 px-3 py-1 rounded-full hover:bg-orange-600 text-white'>logout</button> */}
//                 {username ? (
//           <>
//             <span className="font-normal text-sm">{username}</span>
//             <button
//               className='bg-gray-500 px-3 py-1 rounded-full hover:bg-gray-600 text-white'
//               onClick={handleLogout} // Trigger the logout function
//             >
//               Sign Out
//             </button>
//           </>
//         ) : (
//           <>
//             <NavLink to="/login">
//               <button className='bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600'>
//                 Login
//               </button>
//             </NavLink>
//             <NavLink to="/signup">
//               <button className='bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gary-600'>
//                 Sign Up
//               </button>
//             </NavLink>
//           </>
//         )}
//         </ul>
//     </div>
//   )
// }

// export default Navbar;






import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useUser } from '../contexts/UserContext'; // Import the UserContext hook
import { useCart } from "../contexts/CartContext";

function Navbar() {
    const { handleLogout } = useUser(); // Get username and logout from context
    const { cart } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger men
    const userName = localStorage.getItem("userName")


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (

    <div className='Navbar  sticky top-0 w-full h-[77px] p-4 bg-white flex items-center z-50 justify-between shadow-lg'>
        <div className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/128/898/898546.png" alt="logo" className='w-18 h-14'/>
            <p className='font-bold text-2xl md:2xl'>E-commerce</p>
        </div>
        <div className='hidden md:flex justify-center space-x-4 text-lg font-semibold'>
            <ul className='flex space-x-4 '>
                <NavLink to="/" className="hover:text-gray-500"><li>Home</li></NavLink>
                <NavLink to="/Cart" className="hover:text-gray-500"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-orange-400'>{cart.length}</span>)}</li></NavLink>
                <NavLink to="/Orders" className="hover:text-gray-500"><li>Order</li></NavLink>
            </ul>
        </div>
        <div className=' items-center space-x-4 hidden md:block'>
            <input type="text" placeholder='Search here...' 
                className='p-2 border rounded-md w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] ' />
        </div>
        <div className="flex items-center space-x-2">
        {userName ? (
          <>
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8 hidden md:block' />
                
              
                <span className="font-normal text-sm hidden md:block">{userName}</span>
                <button
                  className='bg-gray-500 px-3 py-1 rounded-full hover:bg-gray-600 text-white hidden md:block'
                  onClick={handleLogout} // Trigger the logout function
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className='hidden md:block'>
                <NavLink to="/login">
                  <button className='bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600'>
                    Login
                  </button>
                </NavLink>
                {/* <NavLink to="/signup">
                  <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                    Sign Up
                  </button>
                </NavLink> */}
              </div>
            )}
        </div>

        <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/255px-Hamburger_icon.svg.png"
            alt="menu-icon"
            className="w-7 h-7"
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-start space-y-2 p-4 font-semibold text-lg">
              <NavLink to="/" className="hover:text-gray-500"><li>Home</li></NavLink>
              <NavLink to="/Cart" className="hover:text-gray-500"><li>Cart {cart.length >0 && (<span className='text-sm px-1 rounded-full bg-orange-400'>{cart.length}</span>)}</li></NavLink>
              <NavLink to="/Order" className="hover:text-gray-500"><li>Order</li></NavLink>
              <li className="w-full">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="flex-grow rounded px-2 py-1 border border-slate-300"
                />
                <button className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-400 font-normal text-base">
                  Search
                </button>
              </div>
            </li>
            <div className="flex items-center space-x-2 space-y-2">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="profile" className='w-8 h-8' />
                {userName ? (
              <>
                <span className="font-normal text-sm">{userName}</span>
                <button
                  className='bg-gray-500 px-3 py-1 rounded-full hover:bg-gray-600 text-white text-base font-normal'
                  onClick={handleLogout} // Trigger the logout function
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  <button className='bg-gray-500 text-white px-3 py-1 rounded-full hover:bg-gray-600 text-base font-normal'>
                    Login
                  </button>
                </NavLink>
                {/* <NavLink to="/signup">
                  <button className='bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-orange-600'>
                    Sign Up
                  </button>
                </NavLink> */}
              </>
            )}
        </div>
        </ul>
        </div>
      )}
            
    </div>
  );
}

export default Navbar;








