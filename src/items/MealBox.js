import React, { Component } from 'react';
import '../stylesheets/MealBox.css'
import FlankSteak from '../images/steak-and-veggies.jpg'
import MeatballSubs from '../images/meatball-subs.jpg'
import CheesyEnchiladas from '../images/cheesy-enchiladas.JPG'
import CreamyChickenAlfredoPasta from '../images/creamy-chicken-alfredo-pasta.jpg'
import SpicyBurger from '../images/spicy-burgers.jpg'
import ChickenSesameStirFry from '../images/chicken-sesame-stir-fry.jpg'
import RosemaryChicken from '../images/rosemary-chicken.jpg'
import CheesyGorditaCrunch from '../images/cheesy-gordita-crunch.jpeg'
import BiscuitsAndGravy from '../images/biscuits-and-gravy.jpg'
import PersonalPizzas from '../images/homemade-personal-pizzas.jpg'
import ChickenNachos from '../images/chicken-nachos.jpg'
import PulledPorkSandwiches from '../images/pulled-pork-sandwiches.jpg'
import BreakfastBurritos from '../images/breakfast-burritos.jpg'
import WalnutCrustedSalmon from '../images/walnut-crusted-salmon.jpg'
import BuffaloWildWings from '../images/buffalo-wild-wings.jpg'
import Quesadillas from '../images/quesadilla.jpg'


export default class MealBox extends Component {

    state = {
    }

    createEachIngredient = this.props.meal.ingredients.map(ingredient => {
            return <li className="meal-ingredient-li" 
              key={`${ingredient}${this.props.meal.id}`}
            >
              {ingredient}
            </li>
    })

    whichImage = () => {
        switch(this.props.meal.name) {
            case "Flank Steak":
              return <img className="meal-img" alt="Steak and Veggies" src={FlankSteak}></img>
            case "Meatball Subs":
              return <img className="meal-img" alt="Meatball Subs" src={MeatballSubs}></img>
            case "Creamy Chicken Alfredo Pasta":
              return <img className="meal-img" alt="Creamy Chicken Alfredo Pasta" src={CreamyChickenAlfredoPasta}></img>
            case "Cheesy Enchiladas":
              return <img className="meal-img" alt="Cheesy Enchiladas" src={CheesyEnchiladas}></img>
            case "Spicy Burger":
              return <img className="meal-img" alt="Spicy Burger" src={SpicyBurger}></img>
            case "Chicken Sesame Stir Fry":
              return <img className="meal-img" alt="Chicken Sesame Stir Fry" src={ChickenSesameStirFry}></img>
            case "Rosemary Chicken":
              return <img className="meal-img" alt="Rosemary Chicken" src={RosemaryChicken}></img>
            case "Cheesy Gordita Crunch":
              return <img className="meal-img" alt="Cheesy Gordita Crunch" src={CheesyGorditaCrunch}></img>
            case "Biscuits and Gravy":
              return <img className="meal-img" alt="Biscuits And Gravy" src={BiscuitsAndGravy}></img>
            case "Personal Pizzas":
              return <img className="meal-img" alt="Personal Pizzas" src={PersonalPizzas}></img>
            case "Chicken Nachos":
              return <img className="meal-img" alt="Chicken Nachos" src={ChickenNachos}></img>
            case "Pulled Pork Sandwiches":
              return <img className="meal-img" alt="Pulled Pork Sandwiches" src={PulledPorkSandwiches}></img>
            case "Breakfast Burritos":
              return <img className="meal-img" alt="Breakfast Burritos" src={BreakfastBurritos}></img>
            case "Walnut Crusted Salmon":
              return <img className="meal-img" alt="Walnut Crusted Salmon" src={WalnutCrustedSalmon}></img>
            case "Buffalo Wild Wings":
              return <img className="meal-img" alt="Buffalo Wild Wings" src={BuffaloWildWings}></img>
            case "Quesadillas":
              return <img className="meal-img" alt="Quesadillas" src={Quesadillas}></img>
            default:
              return <></> // Home page?
        }
    }

    handleClick = (mealPicked) => {
        if(this.props.pickedMeals.includes(mealPicked)) {
            this.props.removeMeal(mealPicked)
            // this.removeAppropriateSides()
        } else if(!this.props.pickedMeals.includes(mealPicked)) {
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
                <span className="checkmark">
                  {this.props.pickedMeals.includes(this.props.meal) ? " ✔️" : ""}
                </span>
            </div>
        )
    }  
}