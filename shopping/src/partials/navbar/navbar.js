import React, { Component } from 'react'

import './navbar.css'

export default class navbar extends Component {
  render() {
    return (
      <div className="nav">
          <div className="nav-logo">
            <h3>logo</h3>
          </div>
          <div className="nav-search">
            <input type="text" placeholder="Search for products" />
              <button style={{ "background": "transparent", "boarder": "0 " }}>
                <img src="./images/button.jpg" alt="button" />
              </button>
          </div>
        <ul>

          <div className="nav-right">
            <div className="nav-navbar">
            {/* TODO */}
            {/* TOGGOLE */}
              <li><a href="#">men</a></li>
              <li><a href="#">women</a></li>
              <li><a href="#">AllProducts</a></li>
              <li><a href="#">ShoppingBag</a></li>
              {/* TODO */}
              {/* TOGGLE user menue */}
              {/* replace user */}
              <li><a href="#">hello"user"</a></li>


            </div>
          </div>
        </ul>
      </div>
    )
  }
}
