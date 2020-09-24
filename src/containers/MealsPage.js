import React from 'react';
import '../stylesheets/MealsPage.css'
import MealBox from '../items/MealBox.js'

export default function MealsPage(props) {

    const makeMealBoxes = props.meals.map(meal => {
            return <MealBox 
                pickedMeals={props.pickedMeals} 
                removeMeal={props.removeMeal} 
                addMealToPickedMeals={props.addMealToPickedMeals} 
                key={meal.id} 
                meal={meal} 
                pickedSides={props.pickedSides}
                removeSide={props.removeSide}
            />
        })

    return (
        <div className="meals-page-div">
            <h1 className="meal-page-h1">Pick your meals!</h1>
            <div className="meal-boxes-div">
                {makeMealBoxes}
            </div>
        </div>
    )
}