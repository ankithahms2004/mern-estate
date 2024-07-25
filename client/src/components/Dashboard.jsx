import React, { useState } from 'react'
import Navbar2 from './Navbar2'
import Sidebar from './Sidebar'

const Dashboard = () => {
    const [sidebarToggle,setSidebarToggle] = useState(false);
  return (
    <div className='flex'>
        <Sidebar sidebarToggle={sidebarToggle}/>
        <Navbar2 sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
        
        
        
    </div>
  )
}

export default Dashboard