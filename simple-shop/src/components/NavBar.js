import React from 'react'

import { Link } from "react-router-dom";
// import { ProductConsumer } from "../context";

const NavBar = () => {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-sm-5">

        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
          <Link to= "/"> Products </Link>
          </li>
          <li className="ml-auto">
          <Link to= "/cart" > Cart</Link>
          </li>
        </ul>
  </nav>

  )
}

export default NavBar
