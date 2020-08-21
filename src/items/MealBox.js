import React, { Component } from 'react';
import '../stylesheets/MealBox.css'
import FlankSteak from '../images/steak-and-veggies.jpg'
import MeatballSubs from '../images/meatball-subs.jpg'
import GroundBeefTacos from '../images/ground-beef-tacos.jpg'

export default class MealBox extends Component {

    state = {
    }

    createEachIngredient = this.props.meal.ingredients.map(ingredient => {
            return <li className="ingredient-li" key={`${ingredient}${this.props.meal.id}`}>{ingredient}</li>
    })

    whichImage = () => {
        switch(this.props.meal.name) {
            case "Flank Steak":
              return <img className="meal-img" alt="Steak and Veggies" src={FlankSteak}></img>
            case "Meatball Subs":
              return <img className="meal-img" alt="Meatball Subs" src={MeatballSubs}></img>
            case "Ground Beef Tacos":
              return <img className="meal-img" alt="Ground Beef Tacos" src={GroundBeefTacos}></img>
            default:
              return <></> // Home page?
        }
    }

    // removeAppropriateSides = () => {
    //     this.props.pickedSides.map(side => {
    //         if(side.meal_id === this.props.meal.id) {
    //             this.props.removeSide(side)
    //         }
    //     })
    // }

    handleClick = (mealPicked) => {
        if(this.props.pickedMeals.includes(mealPicked) === true) {
            this.props.removeMeal(mealPicked)
            // this.removeAppropriateSides()
        } else if(this.props.pickedMeals.includes(mealPicked) === false) {
            this.props.addMealToPickedMeals(mealPicked)
        }
    }

    render() {
        return (
            <div className={this.props.pickedMeals.includes(this.props.meal) ? "clicked-meal-box-div" : "meal-box-div" } 
                onClick={() => this.handleClick(this.props.meal)}
            >
                <h2 className="meal-name-h2">{this.props.meal.name}</h2>
                <div className="img-and-ingredients">
                    {this.whichImage()}
                    <ul className="ingredients-ul">
                        {this.createEachIngredient}
                    </ul>
                </div>
            </div>
        )
    }  
}