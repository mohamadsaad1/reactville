import React, { useState } from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from'./Components/SuperMarket/SuperMarket'






const App = () => {
  const [cash, setCash] = useState(100)

  const handleExchange = (ele) => {
    if (cash - ele > 0) setCash((cash - ele).toFixed(2))
    return true
  }
  return (
    <>
    <main>
    <Nav cash={cash} setCash={setCash}/>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/burgers" element={<BurgerShop/>}/>
        <Route path="/market" element={<SuperMarket handleExchange={handleExchange}
        />}    
        />
      </Routes>
    </main>
    </>
  )}

export default App