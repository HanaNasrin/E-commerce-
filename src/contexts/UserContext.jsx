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



// import React, { createContext, useState,useContext } from 'react';

// export const UserContext = createContext();


// export const useUser = () => useContext(UserContext);

// export const UserProvider = ({ children }) => {
//   const [email, setUser] = useState(localStorage.getItem("username") || null); // Holds user data

//   return (
//     <UserContext.Provider value={{ email, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };



// import React, { createContext, useContext, useState } from "react";

// // Create UserContext
// const UserContext = createContext();

// // UserProvider
// export const UserProvider = ({ children }) => {
//   const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
//   const [username, setUsername] = useState(() => localStorage.getItem("username") || "");

//   // Handle Login
//   const handleLogin = (userEmail) => {
//     const userUsername = userEmail.split('@')[0]; // Extract username from email 
//     localStorage.setItem("email", userEmail); 
//     localStorage.setItem("username", userUsername); 
//     setEmail(userEmail); 
//     setUsername(userUsername)
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem("email");
//     localStorage.removeItem("username");
//     setEmail("");
//     setUsername("");
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         email,username,
//         handleLogin, // Use this for login functionality
//         handleLogout,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook for ease of use
// export const useUser = () => useContext(UserContext);






// import React, { createContext, useContext, useState } from "react";
// import { addUser, emailCheck, userCheck } from "../api/userApi";
// import { useNavigate } from "react-router-dom";

// // Create UserContext
// const UserContext = createContext();

// // UserProvider
// export const UserProvider = ({ children }) => {
//   // const [email, setEmail] = useState(() => localStorage.getItem("email") || "");
//   // const [username, setUsername] = useState(() => localStorage.getItem("username") || "");

//   const [user,setUser] = useState();
//   const navigate = useNavigate();

//   // Handle Login
//   // const handleLogin = (userEmail) => {
//   //   const userUsername = userEmail.split('@')[0]; // Extract username from email 
//   //   localStorage.setItem("email", userEmail); 
//   //   localStorage.setItem("username", userUsername); 
//   //   setEmail(userEmail); 
//   //   setUsername(userUsername)
//   // };

//   // Handle Logout
//   // const handleLogout = () => {
//   //   localStorage.removeItem("email");
//   //   localStorage.removeItem("username");
//   //   setEmail("");
//   //   setUsername("");
//   // };

//   const handleSignup = async(userData) => {
//     try {
//       const isEmail = await emailCheck(userData.email)
//       if(!isEmail){ 
//         const newUser = await addUser(userData);
//         setUser(newUser);
//         localStorage.setItem("user",newUser.email);
//         localStorage.setItem("userId",newUser.id);
//         navigate('/');
//         return "";
//       }
//       else return "User already exist!"
//     } catch (error) {
//       console.error("Signup error:", error);
//       return "An error occurred during signup.";
//     }
      
//   };

//   const handleLogin = async(email,password) => {
//     try {
//       const [userValidation] = await userCheck(email,password);
//       if(userValidation){
//           if (userValidation.role === "admin"){
//             setUser(userValidation)
//             localStorage.setItem("admin",userValidation.email)
//             navigate('/admin');
//             return "";
//           }
//           else{
//             setUser(userValidation)
//             localStorage.setItem("user",userValidation.email);
//             localStorage.setItem("userId",userValidation.id);
//             navigate('/');
//             return "";
//           }
//       }else{
//         return "Invalid email or password"
//       }
//     } catch (error) {
//       console.error('login error:',error);
//       return "An error occurred during login.";
//     }
//   };

//   const handleLogout = () => {
//     setUser([]);
//     localStorage.clear();
//     navigate("/login");
//   };


//   return (
//     <UserContext.Provider value={{user,handleLogin, handleLogout,handleSignup}}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // Custom hook for ease of use
// export const useUser = () => useContext(UserContext);





import React, { createContext, useContext, useState } from "react";
import { addUser, emailCheck, userCheck } from "../api/userApi";
import { useNavigate } from "react-router-dom";

// Create UserContext
export const UserContext = createContext();

// UserProvider
export const UserProvider = ({ children }) => {

  const [user,setUser] = useState();
  const navigate = useNavigate();

  const handleSignup = async(userData) => {
    try {
      const isEmail = await emailCheck(userData.email)
      if(!isEmail){ 
        const newUser = await addUser(userData);
        setUser(newUser);
        localStorage.setItem("user",newUser.email);
        localStorage.setItem("userId",newUser.id);
        localStorage.setItem("userName",newUser.name);
        navigate('/');
        return "";
      }
      else return "User already exist!"
    } catch (error) {
      console.error("Signup error:", error);
      return "An error occurred during signup.";
    }
      
  };

  const handleLogin = async(email,password) => {
    try {
      const [userValidation] = await userCheck(email,password);
      if(userValidation){
        if(!userValidation.blocked){
          if (userValidation.role === "admin"){
            setUser(userValidation)
            localStorage.setItem("admin",userValidation.email)
            navigate('/admin');
            return "";
          }
          else{
            setUser(userValidation)
            localStorage.setItem("user",userValidation.email);
            localStorage.setItem("userId",userValidation.id);
            localStorage.setItem("userName",userValidation.name);
            navigate('/');
            return "";
          }
        }else{
        return "Invalid email or password"
        }
      }else{
      return "Invalid email or password"
      } 
    } catch (error) {
      console.error('login error:',error);
      return "An error occurred during login.";
    }
  };

  const handleLogout = () => {
    setUser([]);
    localStorage.clear();
    navigate("/login");
  };


  return (
    <UserContext.Provider value={{user,handleLogin, handleLogout,handleSignup}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for ease of use
export const useUser = () => useContext(UserContext);