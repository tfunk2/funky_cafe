import React from 'react';
import '../stylesheets/IngredientsPage.css'
import Checkbox from '../images/checkbox.png'

export default function IngredientsPage(props) {

    const changeTitle = () => {
        if(props.pickedMeals.length > 0) {
            return <h1 className="ingredients-list-h1">Here's your ingredients list!</h1>
        } else {
            return <h1 className="no-ingredients-h1">No ingredients yet because you haven't picked any meals or sides!</h1>
        }
    }

    const measurementRegex = /cup|bag|bottle|can|cans|pound|lb|tsp|[Tt]bsp|packet|cloves|jar|oz|slices|head|bunch|loaf/

    const sortedIngredientsArray = props.ingredients.flat().sort((a, b) => {
        let ingredientA;
        let ingredientB;
        if(measurementRegex.test(a.split(" ")[1])) {
            ingredientA = a.split(" ")[2].toUpperCase(); 
        } else {
            ingredientA = a.split(" ")[1].toUpperCase()
        }
        
        if(measurementRegex.test(b.split(" ")[1])) {
            ingredientB = b.split(" ")[2].toUpperCase(); 
        } else {
            ingredientB = b.split(" ")[1].toUpperCase()
        }
          
        if (ingredientA < ingredientB) {
        return -1;
        }
        if (ingredientA > ingredientB) {
        return 1;
        }
        return 0;
    })

    const listEachIngredient = sortedIngredientsArray.map(ingredient => {
        return <li className={props.ingredients.flat().length > 48 ? "ingredient-li-smaller" : "ingredient-li"} key={`${ingredient.name} ${sortedIngredientsArray.indexOf(ingredient)}`}>
            <img className={props.ingredients.flat().length > 48 ? "checkbox-smaller" : "checkbox"} src={Checkbox} alt="checkbox"></img><span>{ingredient}</span>
        </li>
    })

    return (
        <div className="ingredients-page-div">
            <section className="printable-section">
                <div className="button-and-title">
                    <button className="print-button" onClick={() => props.pickedMeals.length > 0 ? window.print() : null}>PRINT</button>
                    {changeTitle()}
                </div>
                <div className="ingredients-ul-container">
                    <ul className={props.ingredients.flat().length > 120 ? "ingredientsUlLonger" : "ingredientsUl"}>
                        {listEachIngredient}
                    </ul>
                </div>
            </section>
        </div>
    )
}
