import React from 'react';
import '../stylesheets/SidesPage.css';
import SideBox from '../items/SideBox.js'

export default function SidesPage(props) {

    const makeSideBoxes = (meal) => {
        let sidesForThisMeal = props.pickedMealSides.filter(side => side.meal_id === meal.id)
        return sidesForThisMeal.map(side => {
            return <SideBox 
                pickedMealSides={props.pickedMealSides}
                pickedMeals={props.pickedMeals} 
                pickedSides={props.pickedSides} 
                removeSide={props.removeSide} 
                addSideToPickedSides={props.addSideToPickedSides} 
                key={side.id} 
                side={side}
                sides={props.sides} 
            /> 
        })
    }

    const makeMealBoxes = props.pickedMeals.map(meal => {
        return <div className="meal-box-for-sides">
            <h1>{meal.name}</h1>
            <div className="side-boxes-div">
                {makeSideBoxes(meal)}
            </div>
        </div>
    })

    return (
        <div className="sides-page-div">
            <h1 className="side-page-h1">Pick your sides! <span>Selected: {props.pickedSides.length}</span></h1>
            {makeMealBoxes}
        </div>  
    )
}