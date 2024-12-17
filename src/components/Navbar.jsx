import React from 'react'

function Navbar() {
  return (
    <div className='w-screen h-[80px] bg-slate-300 shadow-lg flex items-center px-4'>
      <div className='flex justify-between space-x-4 w-full'>
        <div>
          <img src='assets\ecom.png' alt='logo' className='w-20 h-20 margin-40px' />
        </div>
        <div className='flex space-x-4'>
          <button>Home</button>
          <button>Cart</button>
          <button>Orders</button>
        </div>
        <div>
          <input type="search" placeholder="Search....." className="border-b-1 border-gray-300 mt-6" />
        </div>
      <div className='flex space-x-4'>
        <button>Admin</button>
        
        <button>Logout</button>
      </div>
    </div>
  </div>

  )
}

export default Navbar
