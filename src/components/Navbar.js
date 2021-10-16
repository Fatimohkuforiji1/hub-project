import React from 'react'
//import {Link, useHistory } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
  //const history = useHistory()
    return (
      <nav className="navbar">
        <div className="biography-title"> My Biography </div>
        <div className="navbar-link">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about-me">About Me</a>
            </li>
            <li>
              <a href="/education">Education</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar
