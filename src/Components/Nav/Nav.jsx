import React from 'react'
import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'

const Nav = () => {
  return (
    <nav className="navigation-bar">
      <NavLink to="/"><img src="logo192.png" alt="Reactville" /></NavLink>
      <NavLink to="/burgers">BURGER SHOP</NavLink> 
            

    </nav>
  )
}


export default Nav