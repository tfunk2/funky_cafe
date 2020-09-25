import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar.js';
import MealsPage from './containers/MealsPage.js';
import SidesPage from './containers/SidesPage.js';
import IngredientsPage from './containers/IngredientsPage.js'

class App extends Component {

  state = {
    activePage: "meals",
    meals: [],
    sides: [],
    pickedMeals: [],
    pickedMealSides: [],
    pickedSides: [],
    ingredients: []
  }

  setActivePage = (currentPage) => {
    this.setState({ activePage: currentPage })
  }

  addMealToPickedMeals = (mealSelected) => {
    this.setState({ pickedMeals: [...this.state.pickedMeals, mealSelected] })
    this.setState({ ingredients: [...this.state.ingredients, mealSelected.ingredients] })
    let newPickedMealSidesArray = []
    this.state.sides.forEach(side => {
        if(side.meal_id === mealSelected.id) {
          newPickedMealSidesArray.push(side)
        }
    })
    this.setState({ pickedMealSides: [...this.state.pickedMealSides, ...newPickedMealSidesArray] })
  }

  removeMeal = (clickedMeal) => {
    let newPickedMeals = this.state.pickedMeals.filter(meal => meal !== clickedMeal)
    this.setState({ pickedMeals: newPickedMeals })
    let newIngredients = this.state.ingredients.filter(arrayOfIngredients => arrayOfIngredients !== clickedMeal.ingredients)
    this.setState({ ingredients: newIngredients })
    let filteredPickedMealSides = this.state.pickedMealSides.filter(side => side.meal_id !== clickedMeal.id)
    this.setState({ pickedMealSides: filteredPickedMealSides })
    let removedAppropriatePickedSides = this.state.pickedSides.filter(side => side.meal_id !== clickedMeal.id)
    this.setState({ pickedSides: removedAppropriatePickedSides })
    // this.state.pickedSides.forEach(side => {
    //   return side.meal_id === clickedMeal.id ? this.removeIngredients(side) : null
    // })
  }

  addSideToPickedSides = (sideSelected) => {
    this.setState({ pickedSides: [...this.state.pickedSides, sideSelected] })
    this.setState({ ingredients: [...this.state.ingredients, sideSelected.ingredients] })
  }

  removeSide = (clickedSide) => {
    let newPickedSides = this.state.pickedSides.filter(side => side !== clickedSide)
    this.setState({ pickedSides: newPickedSides })
    let newIngredientsList = this.state.ingredients.filter(arrayOfIngredients => arrayOfIngredients !== clickedSide.ingredients)
    this.setState({ ingredients: newIngredientsList })
  }

  handleReset = () => {
    this.setState({ 
      pickedMeals: [],
      pickedSides: [],
      pickedMealSides: [],
      ingredients: [] 
    })
  }

  componentDidMount() {
    this.fetchMealsAndSides()
  }

  fetchMealsAndSides = () => {
    fetch('http://localhost:3000/meals')
      .then(response => response.json())
      .then(allMeals => {
        this.setState({ 
          meals: allMeals.sort((a,b) => {
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
        })
      })

      fetch('http://localhost:3000/sides')
      .then(response => response.json())
      .then(allSides => {
        this.setState({ sides: allSides })
      })
  }

  activePage = () => {
    switch(this.state.activePage) {
      case "meals":
        return <MealsPage 
          pickedMeals={this.state.pickedMeals} 
          removeMeal={this.removeMeal} 
          addMealToPickedMeals={this.addMealToPickedMeals} 
          meals={this.state.meals}
          pickedSides={this.state.pickedSides}
          removeSide={this.removeSide}
        />
      case "sides":
        return <SidesPage
          pickedMealSides={this.state.pickedMealSides} 
          pickedMeals={this.state.pickedMeals} 
          removeSide={this.removeSide} 
          addSideToPickedSides={this.addSideToPickedSides} 
          sides={this.state.sides} 
          pickedSides={this.state.pickedSides} 
        />
      case "ingredients":
        return <IngredientsPage 
          pickedMeals={this.state.pickedMeals}
          pickedSides={this.state.pickedSides}
          ingredients={this.state.ingredients}
        />
      default:
        return <></> // Home page?
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="header-div">
            <h1 className="title">Funky Cafe</h1>
            <button className="reset-button" onClick={this.handleReset}>Reset All Selections</button>
          </div>
          <NavBar 
            setActivePage={this.setActivePage}
            pickedSides={this.state.pickedSides}
            pickedMeals={this.state.pickedMeals}
            ingredients={this.state.ingredients}
          />
        </header>
        {this.activePage()}
      </div>
    );
  }
}

export default App;
