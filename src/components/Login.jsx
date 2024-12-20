// import React from 'react';
// import { useNavigate } from 'react-router';

// function Login  ()  {
//   const navigate=useNavigate()
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Don’t have an account?{' '}
//           <button onClick={()=>{navigate("/signup")}} className="text-blue-500 hover:underline">
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Example validation
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (email === 'test@example.com' && password === 'password123') {
//       // Simulate successful login
//       alert('Login successful!');
//       navigate('/dashboard'); // Navigate to a protected page, e.g., dashboard
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter Password"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Don’t have an account?{' '}
//           <button
//             onClick={() => navigate('/signup')}
//             className="text-blue-500 hover:underline"
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;






// import React from "react";
// import { NavLink,useNavigate } from "react-router-dom";
// import { useState } from "react"
// import axios from "axios"
// import { UserContext } from "../contexts/UserContext";
// import { useContext } from "react"

// const Login =() =>{

//   const { setUser } = useContext(UserContext)
//     const [username,setUsername]=useState("") 
//     const [password,setPassword]=useState("")
//     const [error,setError]=useState("")
//     const navigate=useNavigate()
//     const HandleLogin = async () => {
//         if(!username || !password){
//             setError("All fields are required")
//             return
//         }
//         try {
//             const response =await axios.get("http://localhost:5000/users",{params: { username,password }})
//             if (response.data.length>0){
//                 localStorage.setItem("username",username)
//                 setUser(username)
//                 navigate('/')
//             }
//             else{
//                 setError("Invalid Username and Password")
//             }
//         }catch(err) {
//             setError("An error occured.Please try again later")
//         }
        
    
//     }
    
//     return(
//         <div className="login flex flex-col items-center justify-center h-screen bg-slate-50">
//             <div className="user flex flex-col items-center p-6 bg-gray-200 border shadow-lg rounded-xl w-[300px] ">
//                 <h1 className="text-4xl text-center font-medium p-5 text-black">LOGIN</h1>
//                 {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
//                 <div className="pass flex flex-col items-center pt-6" >
//                     <input type="text" placeholder="Username" className=" rounded-2xl  w-[250px] pl-2  outline-none border-black mt-5 py-2 border-b-2" value={username} onChange={(e)=>setUsername(e.target.value)}/>
//                     <input type="password" placeholder="Password" className=" rounded-2xl pl-2 w-[250px] outline-none border-black border-b-2 py-2 mt-2"value={password} onChange={(e)=>setPassword(e.target.value)} />
//                     <button className=' mt- rounded-2xl p-2 px-5  mt-5 hover:bg-gray-300 outline-none border-black border-b-2 text--500 font-bold' onClick={HandleLogin}>LOGIN</button>
//                     <h1 className='mt-10 p-6 text-center font-extralight'>Don't have an account?<NavLink to='/SignUp' className='text-blue-500 hover:text-black'>
//                     SignUp</NavLink></h1>
//                 </div>
//             </div>
//         </div>
//     )

// }
// export default Login;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
//       const data = await response.json();

//       if (data.length > 0) {
//         alert('Login successful!');
//         navigate('/'); // Redirect to dashboard
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-600 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-600 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter Password"
//               className="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-400 outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Don’t have an account?{' '}
//           <button
//             onClick={() => navigate('/signup')}
//             className="text-blue-500 hover:underline"
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

const Login =() => {
    const { handleLogin } = useUser();
    const navigate = useNavigate();
    const [form,setForm] = useState({email:"",password:""})
    const [message,setMessage] = useState("");

    const handleChange = (e) => {
        const {name,value}=e.target;
        setForm({...form,[name]:value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get("http://localhost:5001/users", {
                params: { email: form.email, password: form.password },
              });
            if (data.length > 0){
                handleLogin(data[0].email);
                navigate("/");
            }
            else setMessage ("Invalid email or password")
        } catch (error) {
            console.error("Login Error:", error);
            setMessage("An error occurred");
        }
    }

    return(
        <div className="flex justify-center h-screen w-screen items-center">
            <div className="flex flex-col items-center w-[350px] h-auto rounded-lg p-4 border shadow-lg">
            <h1 className="font-bold text-3xl mt-5 font-serif ">Login</h1>
                <form className=" p-6 w-80" onSubmit={handleSubmit}>
                    {message && <p className="text-red-500 ml-[45px]" >{message}</p> }
                    <input 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        className="font-serif mt-5 border py-2 w-[235px] outline-none pl-2"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        className="font-serif mt-5 border py-2 w-[235px] outline-none pl-2" 
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                    <NavLink className="mr-32 mt-5 text-sm text-gray-400 font-serif">
                            Forget Password?
                    </NavLink>

                    <button 
                        className="bg-blue-600 hover:bg-blue-700 mt-5 text-white 
                        py-2 px-16 rounded-full font-semibold ml-[50px]"
                    >
                        Login
                    </button>
                </form>
                <div className="flex font-serif text-sm text-gray-500">
                    <p className="mt-2 ">Don’t have an account?</p>
                    <NavLink  to={"/signup"}><h1 className="mt-2 text-blue-600"> signup</h1></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Login;
