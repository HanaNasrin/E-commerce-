// import React, { createContext, useContext, useState } from 'react';

// // Create the context
// const UserContext = createContext();

// // Custom hook to use the UserContext
// export const useUser = () => {
//   return useContext(UserContext);
// };

// // Provider component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // `user` state to hold user info

//   // Function to log in a user
//   const login = (userData) => {
//     setUser(userData); // Set user state with user data
//   };

//   // Function to log out a user
//   const logout = () => {
//     setUser(null); // Clear user state
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// }





// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios'; // Import Axios for API calls

// // Create a UserContext
// const UserContext = createContext();

// // Custom hook for accessing UserContext
// export const useUser = () => useContext(UserContext);

// // Provider component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Login function
//   const login = async (email, password) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/users?email=${email}&password=${password}`);
//       if (response.data.length > 0) {
//         setUser(response.data[0]); // Assume response is an array and take the first match
//       } else {
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
// export default UserContext;



import React, { createContext, useState,useContext } from 'react';

export const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("username") || null); // Holds user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};