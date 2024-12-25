// // import React, { useState, useEffect } from 'react';

// // // Mock API calls for demonstration purposes
// // const fetchDashboardData = () => {
// //     return new Promise(resolve => {
// //         setTimeout(() => {
// //             resolve({
// //                 users: 120, // Total users
// //                 products: 350, // Total products
// //                 orders: 45, // Total orders
// //                 activePromotions: 3, // Active promotions
// //                 revenue: 10000, // Total revenue
// //                 revenueToday: 500, // Total revenue today
// //                 newSignups: 20, // New signups today
// //                 pendingOrders: 10, // Pending orders
// //                 shippedOrders: 25, // Shipped orders
// //                 cancelledOrders: 5, // Cancelled orders
// //                 topCategories: 8, // Top product categories
// //                 averageOrderValue: 222.22 // Average order value
// //             });
// //         }, 1000);
// //     });
// // };

// // const Dashboard = () => {
// //     const [data, setData] = useState({
// //         users: 0,
// //         products: 0,
// //         orders: 0,
// //         activePromotions: 0,
// //         revenue: 0,
// //         revenueToday: 0,
// //         newSignups: 0,
// //         pendingOrders: 0,
// //         shippedOrders: 0,
// //         cancelledOrders: 0,
// //         topCategories: 0,
// //         averageOrderValue: 0
// //     });

// //     // Fetch data when the component mounts
// //     useEffect(() => {
// //         fetchDashboardData().then(fetchedData => {
// //             setData(fetchedData);
// //         });
// //     }, []);

// //     return (
// //         <div className="container mx-auto p-4">
// //             <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
// //                 {/* Users Card */}
// //                 <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Total Users</h3>
// //                     <p className="text-4xl font-bold">{data.users}</p>
// //                 </div>

// //                 {/* Products Card */}
// //                 <div className="bg-green-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Total Products</h3>
// //                     <p className="text-4xl font-bold">{data.products}</p>
// //                 </div>

// //                 {/* Orders Card */}
// //                 <div className="bg-yellow-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Total Orders</h3>
// //                     <p className="text-4xl font-bold">{data.orders}</p>
// //                 </div>

// //                 {/* Active Promotions Card */}
// //                 <div className="bg-red-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Active Promotions</h3>
// //                     <p className="text-4xl font-bold">{data.activePromotions}</p>
// //                 </div>

// //                 {/* Revenue Card */}
// //                 <div className="bg-purple-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Total Revenue</h3>
// //                     <p className="text-4xl font-bold">${data.revenue}</p>
// //                 </div>

// //                 {/* Revenue Today Card */}
// //                 <div className="bg-indigo-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Revenue Today</h3>
// //                     <p className="text-4xl font-bold">${data.revenueToday}</p>
// //                 </div>

// //                 {/* New Signups Today Card */}
// //                 <div className="bg-teal-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">New Signups Today</h3>
// //                     <p className="text-4xl font-bold">{data.newSignups}</p>
// //                 </div>

// //                 {/* Pending Orders Card */}
// //                 <div className="bg-orange-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Pending Orders</h3>
// //                     <p className="text-4xl font-bold">{data.pendingOrders}</p>
// //                 </div>

// //                 {/* Shipped Orders Card */}
// //                 <div className="bg-cyan-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Shipped Orders</h3>
// //                     <p className="text-4xl font-bold">{data.shippedOrders}</p>
// //                 </div>

// //                 {/* Cancelled Orders Card */}
// //                 <div className="bg-pink-600 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Cancelled Orders</h3>
// //                     <p className="text-4xl font-bold">{data.cancelledOrders}</p>
// //                 </div>

// //                 {/* Top Categories Card */}
// //                 <div className="bg-yellow-800 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Top Categories</h3>
// //                     <p className="text-4xl font-bold">{data.topCategories}</p>
// //                 </div>

// //                 {/* Average Order Value Card */}
// //                 <div className="bg-teal-700 text-white p-4 rounded-lg shadow-md">
// //                     <h3 className="text-xl font-semibold">Average Order Value</h3>
// //                     <p className="text-4xl font-bold">${data.averageOrderValue.toFixed(2)}</p>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Dashboard;




// import React, { useEffect, useState } from "react";
// import { getAllProduct } from "../../api/productApi";
// import { getAllOrders, getAllUsers } from "../../api/adminApi";


// const Dashboard = () => {

//   const [totalUsers, setTotalUsers] = useState(0);
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [totalOrders, setTotalOrders] = useState(0);

//   useEffect(() => {
//     getAllProduct().then((res) => setTotalProducts(res.data.length));
//     getAllOrders().then((res) => setTotalOrders(res.data.length));
//     getAllUsers().then((res) => setTotalUsers(res.data.length));
//     }, []);




//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Dashboard Header */}
//       <header className="bg-white shadow-lg p-4 ">
//         <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
//       </header>

//       <main className="flex-1 flex flex-col p-6">
//         {/* Overview Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <h2 className="text-2xl font-semibold text-gray-600">Total Users</h2>
//             <p className="text-4xl font-bold text-gray-900 mt-4">{totalUsers}</p>
//             {/* <p className="text-sm text-gray-500 mt-2">+25 this week</p> */}
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <h2 className="text-2xl font-semibold text-gray-600">Total Products</h2>
//             <p className="text-4xl font-bold text-gray-900 mt-4">{totalProducts}</p>
//             {/* <p className="text-sm text-gray-500 mt-2">+142 this week</p> */}
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 text-center">
//             <h2 className="text-2xl font-semibold text-gray-600">Total Orders</h2>
//             <p className="text-4xl font-bold text-gray-900 mt-4">{totalOrders}</p>
//             {/* <p className="text-sm text-gray-500 mt-2">+39 this week</p> */}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from "react";
import { getAllProduct } from "../../api/productApi";
import { getAllOrders, getAllUsers } from "../../api/adminApi";


const Dashboard = () => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    getAllProduct().then((res) => setTotalProducts(res.data.length));
    getAllOrders().then((res) =>{ 
      setTotalOrders(res.data.length)
      const revenue = res.data.reduce((acc, order) => acc + order.total, 0);
      setTotalRevenue(revenue);
    });
    getAllUsers().then((res) => setTotalUsers(res.data.length));
    }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-lg p-4 ">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      </header>

      <main className="flex-1 flex flex-col p-6 items-center">
        {/* Overview Cards */}
        <div className="flex flex-col gap-6 mb-6 w-full max-w-2xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="https://cdn-icons-png.flaticon.com/128/476/476863.png" alt="user" className="w-20 h-20" />
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Users</h2>
              <p className="text-4xl font-bold text-gray-900 mt-4">{totalUsers}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="https://cdn-icons-png.flaticon.com/128/9956/9956878.png" alt="pdts" className="w-24 h-20"/>
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Products</h2>
              <p className="text-4xl font-bold text-gray-900 mt-4">{totalProducts}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="https://cdn-icons-png.flaticon.com/128/9752/9752284.png" alt="orders" className="w-20 h-20" />
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Orders</h2>
              <p className="text-4xl font-bold text-gray-900 mt-4">{totalOrders}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 text-center flex">
            <img src="https://cdn-icons-png.flaticon.com/128/10365/10365210.png" alt="rev" className="w-20 h-20"/>
            <div className="flex flex-col w-full">
              <h2 className="text-2xl font-semibold text-gray-600">Total Revenue</h2>
              <p className="text-3xl font-bold text-gray-900 mt-4">₹{totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;