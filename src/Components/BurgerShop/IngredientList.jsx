import React from "react"
import Ingredient from "./Ingredient"

const IngredientList = (props) => {
	return (
		<ul>
		{props.ingredients.map((ingredient, idx) => (
          <Ingredient
            key={idx}
            ingredient={ingredient}
          />
        ))
      }
		</ul>
	)
}

export default IngredientList