import React from 'react';
import '../stylesheets/SidesPage.css';
import SideBox from '../items/SideBox.js'

export default function SidesPage(props) {

    const makeSideBoxes = props.pickedMealSides.map(side => {
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



    return (
        <div className="sides-page-div">
            <h1 className="side-page-h1">Pick your sides! <span>Selected: {props.pickedSides.length}</span></h1>
            {makeSideBoxes}
        </div>  
    )
}