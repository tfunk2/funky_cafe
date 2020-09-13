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

    const emptySidesMessage = () => {
        if(props.pickedMeals.length > 0) {
            return <h1 className="side-page-h1">Pick your sides!</h1>
        } else {
            return <h2>No sides yet because you haven't picked any meals!</h2>
        }
    }

    return (
        <div className="sides-page-div">
            {emptySidesMessage()}
            {makeMealBoxes}
        </div>  
    )
}