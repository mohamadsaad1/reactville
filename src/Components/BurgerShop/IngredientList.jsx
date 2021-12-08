import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul>
		{props.stack.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            idx={idx}
            ingredient={ingredient}
          />
        ))
      }
		</ul>
	)
}

export default IngredientList