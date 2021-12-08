import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'


const App = () => {
  return (
    <>
    <Nav />
    <main>
        <Landing />
        <BurgerShop />
    </main>
    </>
  )}

export default App