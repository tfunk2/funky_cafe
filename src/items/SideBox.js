import React, { Component } from 'react';
import '../stylesheets/SideBox.css';
import SpicyGreenBeans from '../images/spicy-green-beans.jpg'
import SeasonedBroccoli from '../images/seasoned-broccoli.jpg'
import Guacamole from '../images/guacamole.jpg'
import FrenchFries from '../images/french-fries.jpg'
import BrownRice from '../images/brown-rice.jpeg'
import WhiteRice from '../images/white-rice.jpg'
import GarlicBread from '../images/garlic-bread.jpg'
import TylersSalad from '../images/tylers-salad.jpg'
import KaitlynsSalad from '../images/kaitlyns-salad.jpg'
import GarlicMashedPotatoes from '../images/garlic-mashed-potatoes.jpg'
import OnionRings from '../images/onion-rings.png'


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
            case "Brown Rice":
              return <img className="side-img" alt="Brown Rice" src={BrownRice}></img>
            case "White Rice":
              return <img className="side-img" alt="White Rice" src={WhiteRice}></img>
            case "Garlic Bread":
              return <img className="side-img" alt="Garlic Bread" src={GarlicBread}></img>
            case "Tyler's Salad":
              return <img className="side-img" alt="Tyler's Salad" src={TylersSalad}></img>
            case "Kaitlyn's Salad":
              return <img className="side-img" alt="Kaitlyn's Salad" src={KaitlynsSalad}></img>
            case "Garlic Mashed Potatoes":
              return <img className="side-img" alt="Garlic Mashed Potatoes" src={GarlicMashedPotatoes}></img>
            case "Onion Rings":
              return <img className="side-img" alt="Onion Rings" src={OnionRings}></img>
            default:
              return <></> // Home page?
        }
    }

    createEachSide = this.props.pickedMeals.map(pickedMeal => {
        if(pickedMeal.id === this.props.side.meal_id){
            return <div className="side-div" key={pickedMeal.id}>
                <h1 className="side-name-h1">{this.props.side.name}</h1>
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
                "side-box-div"}
                onClick={() => this.handleClick(this.props.side)}>
                {this.createEachSide}
            </div>
        )
    }  
}