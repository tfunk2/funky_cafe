import React, { Component } from 'react';
import '../stylesheets/MealBox.css'
import SteakAndVeggies from '../images/steak-and-veggies.jpg'
import MeatballSubs from '../images/meatball-subs.jpg'
import GroundBeefTacos from '../images/ground-beef-tacos.jpg'

export default class MealBox extends Component {

    state = {
        clickedStatus: false
    }

    createEachIngredient = this.props.meal.ingredients.map(ingredient => {
            return <h3>{ingredient}</h3>
    })

    whichImage = () => {
        switch(this.props.meal.name) {
            case "Steak and Veggies":
              return <img className="meal-img" alt="Steak and Veggies" src={SteakAndVeggies}></img>
            case "Meatball Subs":
              return <img className="meal-img" alt="Meatball Subs" src={MeatballSubs}></img>
            case "Ground Beef Tacos":
              return <img className="meal-img" alt="Ground Beef Tacos" src={GroundBeefTacos}></img>
            default:
              return <></> // Home page?
        }
    }

    handleClick = (mealPicked) => {
        if(this.props.pickedMeals.includes(mealPicked) === true) {
            this.props.removeMeal(mealPicked)
        } else if(this.state.clickedStatus === false && this.props.pickedMeals.includes(mealPicked) === false) {
            this.props.addMealToPickedMeals(mealPicked)
        }
        this.setState({ clickedStatus: !this.state.clickedStatus })
    }

    render() {
        return (
            <div className={this.props.pickedMeals.includes(this.props.meal) ? "clicked-meal-box-div" : "meal-box-div" } onClick={() => this.handleClick(this.props.meal)}>
                <h2 className="meal-name-h2">{this.props.meal.name}</h2>
                <div className="img-and-ingredients">
                    {this.whichImage()}
                    <div className="ingredients-div">
                        {this.createEachIngredient}
                    </div>
                </div>
            </div>
        )
    }  
}