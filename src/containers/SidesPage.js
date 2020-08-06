import React from 'react';
import '../stylesheets/SidesPage.css';
import SideBox from '../items/SideBox.js'

export default function SidesPage(props) {

    const makeSideBoxes = props.sides.map(side => {
            return <SideBox 
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
            <h1 className="side-page-h1">Pick your sides!</h1>
            {makeSideBoxes}
        </div>  
    )
}