import React, { Component } from 'react';
import '../stylesheets/SideBox.css';
import SpicyGreenBeans from '../images/spicy-green-beans.jpg'
import SeasonedBroccoli from '../images/seasoned-broccoli.jpg'
import Guacamole from '../images/guacamole.jpg'
import FrenchFries from '../images/french-fries.jpg'



export default class SideBox extends Component {

    state = {
    }

    foundMeal = this.props.pickedMeals.find(pickedMeal => pickedMeal.id === this.props.side.meal_id)

    whichImage = () => {
        switch(this.props.side.name) {
            case "Spicy Green Beans":
              return <img className="side-img" alt="Spicy Green Beans" src={SpicyGreenBeans}></img>
            case "Seasoned Broccoli":
              return <img className="side-img" alt="Seasoned Broccoli" src={SeasonedBroccoli}></img>
            case "Guacamole":
              return <img className="side-img" alt="Guacamole" src={Guacamole}></img>
            case "French Fries":
              return <img className="side-img" alt="French Fries" src={FrenchFries}></img>
            default:
              return <></> // Home page?
        }
    }

    createEachSide = this.props.pickedMeals.map(pickedMeal => {
        if(pickedMeal.id === this.props.side.meal_id){
            return <div key={pickedMeal.id}>
                <h1>{this.props.side.name} - <span>{pickedMeal.name}</span></h1>
                {this.whichImage()}
            </div>
        }
        return null;
    })

    handleClick = (sidePicked) => {
        if(this.props.pickedSides.includes(sidePicked) === true) {
            this.props.removeSide(sidePicked)
        } else if(this.props.pickedSides.includes(sidePicked) === false) {
            this.props.addSideToPickedSides(sidePicked)
        }
    }

    render() {
        return (
            <div className={this.props.pickedSides.includes(this.props.side) ? 
                "clicked-side-box-div" : 
                this.props.pickedMeals.includes(this.foundMeal) ? 
                "side-box-div" : 
                "empty-div"}
                onClick={() => this.handleClick(this.props.side)}>
                {this.createEachSide}
            </div>
        )
    }  
}