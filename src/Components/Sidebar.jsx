import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Sidebar = () => {
  return (
     <>
    <div className="bg-dark min-h-screen w-64 text-white p-4">
      {/* Sidebar content goes here */}
      <h2 className="text-2xl font-bold mb-4 text-center">Admin</h2>
      <ul className='text-center'>
        <Link to="/home/dashboard" className='text-white no-underline'><li className="mb-2 py-2">Dashboard</li></Link>
        <Link to="/home/distributor" className='text-white no-underline'><li className="mb-2 py-2">Distributor</li></Link>
        <Link to="/home/rawmaterial" className='text-white no-underline'><li className="mb-2 py-2">Raw Material</li></Link>
        <Link to="/home/finishedproduct" className='text-white no-underline'><li className="mb-2 py-2">Finished Product</li></Link>
        <Link to="/home/labourmanager" className='text-white no-underline'><li className="mb-2 py-2">Labour Manager</li></Link>
        <Link to="/home/sales" className='text-white no-underline'><li className="mb-2 py-1">Sales</li></Link>
        
      </ul>
    </div>

<div className='flex-1 border border-black p-4'>
<Outlet />
</div>

</>
  )
}

export default Sidebar