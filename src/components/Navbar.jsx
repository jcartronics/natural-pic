import "../assets/css/navbar.css";
import { Link } from 'react-router-dom'

import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  )
}
