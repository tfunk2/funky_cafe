import React from 'react';
import '../stylesheets/MealsPage.css'
import MealBox from '../items/MealBox.js'

export default function MealsPage(props) {

    const makeMealBoxes = props.meals.map(meal => {
            return <MealBox key={meal.id} meal={meal} />
        })

    return (
        <div className="meals-page-div">
            <h1>Pick your meals!</h1>
            {makeMealBoxes}
        </div>
    )
}