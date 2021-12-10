import React from 'react'
import { NavLink } from 'react-router-dom'

// Components & Assets
import Logo from '../../assets/react-logo.png'
import Wallet from ".Wallet" 

const Nav = () => {
  return (
    <nav className="navigation-bar">
      <NavLink id="logo" to="/"><img src="logo192.png" alt="Reactville" /></NavLink>
      <NavLink to="/burgers">BURGER SHOP</NavLink> 
      <NavLink to="/market">SUPER MARKET</NavLink> 

    </nav>
  )
}


export default Nav