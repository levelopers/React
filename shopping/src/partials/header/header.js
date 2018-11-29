
import React, { Component } from 'react'

import './header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-username">
        {/* TO DO */}
        {/* username */}
        <p>Welcome "Admin"</p>
      </div>
      <div className="right-dashboard">
        {/* TO DO */}
        {/* handleclick */}
        <a href="#">Dashboard</a>
      </div>
    </div>
  )
}

export default Header;