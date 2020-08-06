import React, { Component } from 'react';
import '../stylesheets/SideBox.css';
import SpicyGreenBeans from '../images/spicy-green-beans.jpg'
import SeasonedBroccoli from '../images/seasoned-broccoli.jpg'
import Guacamole from '../images/guacamole.jpg'
import FrenchFries from '../images/french-fries.jpg'


export default class SideBox extends Component {

    state = {
        
    }

    

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
                <h1>{this.props.side.name}</h1>
                {this.whichImage()}
                <h2>Side pairs with: {pickedMeal.name}</h2>
            </div>
        }
    })

    handleClick = () => {
        this.setState({ clickedStatus: !this.state.clickedStatus })
    }

    render() {
        return (
            <div>
                {this.createEachSide}
            </div>
        )
    }  
}