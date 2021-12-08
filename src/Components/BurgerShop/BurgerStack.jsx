import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <ul className="burger-stack">
      {props.stack.length ?
        props.stack.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            ingredient={ingredient}
          />
        ))
        :
        <div>
          No Ingredients
        </div>
      }
    </ul>
  )
}

export default BurgerStack