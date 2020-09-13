import React from 'react';
import '../stylesheets/IngredientsPage.css'
import Checkbox from '../images/checkbox.png'

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
        return <li className={props.ingredients.flat().length > 40 ? "ingredient-li-smaller" : "ingredient-li"} key={`${ingredient.name} ${flattenedIngredientsArray.indexOf(ingredient)}`}>
            <img className={props.ingredients.flat().length > 40 ? "checkbox-smaller" : "checkbox"} src={Checkbox} alt="checkbox"></img><span>{ingredient}</span>
        </li>
    })

    return (
        <div className="ingredients-page-div">
            <section className="printable-section">
                <div className="button-and-title">
                    <button className="print-button" onClick={() => props.pickedMeals.length > 0 ? window.print() : null}>PRINT</button>
                    {changeTitle()}
                </div>
                <ul className={props.ingredients.flat().length > 120 ? "ingredientsUlLonger" : "ingredientsUl"}>
                    {listEachIngredient}
                </ul>
            </section>
        </div>
    )
}
