import React from 'react'
import '../../styles/burger.css'
import { useState } from 'react'

import { ingredients } from '../../data/burger-data'
import  IngredientList  from "./IngredientList"
import  BurgerStack from "./BurgerStack"

const BurgerShop = () => {
  console.log(ingredients)

const [stack] = useState([])
  
  return (
    <div className="burger-shop">
      <nav>
        <h1>Burger Shop</h1>
        <button>Clear Order</button>
      </nav>
      <section>
        <IngredientList
          stack={stack}


        />
        <BurgerStack
          ingredients={ingredients}

        />
      </section>
    </div>
  )
}

export default BurgerShop