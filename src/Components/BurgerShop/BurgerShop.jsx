import React from 'react'
import '../../styles/burger.css'
import { useState } from 'react'

import { ingredients } from '../../data/burger-data'
import  IngredientList  from "./IngredientList"
import  BurgerStack from "./BurgerStack"

const BurgerShop = () => {
  console.log(ingredients)

const [stack, setStack] = useState([])

const addToBurger = (ingredient) => {
  setStack([...stack, ingredient])
}

const removeFromBurger = (idx) => {
  setStack(stack.filter((ele, i) => i !== idx))
}
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button onClick={() => setStack([])}>Clear Order</button>
      </nav>
      <section>
        <IngredientList
        addToBurger={addToBurger} 
        ingredients={ingredients}
        />
        <BurgerStack 
        ingredients={stack} 
        removeFromBurger={removeFromBurger} 
        />
      </section>
    </div>
  )
}

export default BurgerShop