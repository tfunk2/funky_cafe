import React from 'react';
import '../stylesheets/MealBox.css'

export default function MealBox(props) {

    const createEachIngredient = props.meal.ingredients.map(ingredient => {
            return <h3>{ingredient}</h3>
    })
        
    return (
        <div>
            <h2>{props.meal.name}</h2>
            {createEachIngredient}
        </div>
    )
}