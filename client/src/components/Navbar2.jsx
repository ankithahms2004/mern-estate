import React from 'react'
import Navbar1 from './Navbar1'

const Navbar2 = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full `}>
        <Navbar1 sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default Navbar2