import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-200 bg-white'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink 
          className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all"
          to="/add"
        >
          <img className='w-5 h-5' src={assets.add_icon} alt="Add" />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink 
          className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all"
          to="/list"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="Add" />
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink 
          className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all"
          to="/orders"
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="Add" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
