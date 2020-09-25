import React from 'react';
import '../stylesheets/SidesPage.css';
import SideBox from '../items/SideBox.js'
import ForkAndKnife from '../images/fork-and-knife.png'

export default function SidesPage(props) {

    const sortByName = (arrayToBeSorted) => {
        return arrayToBeSorted.sort((a,b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }
            return 0;
        })
        
    }

    const makeSideBoxes = (meal) => {
        let sidesForThisMeal = props.pickedMealSides.filter(side => side.meal_id === meal.id)
        let sortedSidesForThisMeal = sortByName(sidesForThisMeal)
        if(sortedSidesForThisMeal.length > 0) {
            return sortedSidesForThisMeal.map(side => {
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
        } else {
            return <div className="empty-side-box-div">
                <h1 className="no-sides-h1">No Sides Found</h1>
                <img className="no-sides-img" src={ForkAndKnife}></img>
            </div>
        }
    }

    const sortedPickedMeals = sortByName(props.pickedMeals)
    const makeMealBoxes = sortedPickedMeals.map(meal => {
        return <div className="meal-box-for-sides">
            <h1 className="side-page-meal-box-h1">{meal.name}</h1>
            <div className="side-boxes-div">
                {makeSideBoxes(meal)}
            </div>
        </div>
    })

    const emptySidesMessage = () => {
        if(props.pickedMeals.length > 0) {
            return <h1 className="side-page-h1">Pick your sides!</h1>
        } else {
            return <h2 className="no-sides-h2">No sides yet because you haven't picked any meals!</h2>
        }
    }

    return (
        <div className="sides-page-div">
            {emptySidesMessage()}
            <div className="side-page-meal-boxes-container">
                {makeMealBoxes}
            </div>
        </div>  
    )
}