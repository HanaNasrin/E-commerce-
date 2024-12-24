// import React from 'react'
// import { Routes ,Route } from 'react-router-dom';
// import AdminNavbar from '../components/AdminNavbar';
// import Dashboard from './pages/Dashboard';
// import ManageProducts from './pages/ManageProducts';
// import Reports from './pages/Reports';
// import ManageUsers from './pages/ManageUsers';
// import ManageOrders from './pages/ManageOrders'


//  const AdminRouter = () => {
//   return (
//     <div className="admin-layout">
//         <AdminNavbar />
//           <div className="admin-content">
//             <Routes>
//                 <Route path="/" element = { <Dashboard/> } />
//                 <Route path="/manage-products" element = { <ManageProducts/> } />
//                 <Route path="/reports" element = { <Reports/> } />
//                 <Route path="/manage-users" element = { <ManageUsers/> } />
//                 <Route path="/manage-orders" element = { <ManageOrders/> } />
//             </Routes>
//           </div>
//     </div>
//   )
// }

// export default AdminRouter;




import React from 'react'
// import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ManageProducts from '../pages/ManageProducts';
import ManageOrders from '../pages/ManageOrders';
import ManageUsers from '../pages/ManageUsers';
// import AdminNavbar from '../pages/AdminNavbar';
import Reports from '../pages/Reports';

//  const AdminRouter = () => {
//   return (
//     <div>
//             <AdminNavbar />
//             <div>
//                 <Routes>
//                     <Route path="/" element = { <Dashboard/> } />
//                     <Route path="/manageproducts" element = { <ManageProducts/> } />
//                     <Route path="/manageorders" element = { <ManageOrders/> } />
//                     <Route path="/manageusers" element = { <ManageUsers/> } />
//                     <Route path="/reports" element = { <Reports/> } />
//                 </Routes>
//             </div>
//         </div>
// )
// }

const AdminRouter = [
    {path:'/admin', element:<Dashboard/>},
    {path:'/admin/manageproduct', element:<ManageProducts/>},
    {path:'/admin/manageprorders', element:<ManageOrders/>},
    {path:'/admin/manageusers', element:<ManageUsers/>},
    {path:'/admin/reports', element:<Reports/>}
  ]

export default AdminRouter;