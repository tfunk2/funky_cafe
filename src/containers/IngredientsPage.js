import React from 'react';
import '../stylesheets/IngredientsPage.css'

export default function IngredientsPage(props) {

    const changeTitle = () => {
        if(props.pickedMeals.length > 0) {
            return <h1>Here's your ingredients list!</h1>
        } else {
            return <h1>No ingredients yet because you haven't picked any meals or sides!</h1>
        }
    }

    const flattenedIngredientsArray = props.ingredients.flat()

    const listEachIngredient = flattenedIngredientsArray.map(ingredient => {
        return <div key={flattenedIngredientsArray.indexOf(ingredient)}>
            <h2>{ingredient}</h2>
        </div>
    })

    return (
        <div className="ingredients-page-div">
            {changeTitle()}
            {listEachIngredient}
        </div>
    )
}