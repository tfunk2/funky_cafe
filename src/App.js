import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar.js';
import MealsPage from './containers/MealsPage.js';

class App extends Component {

  state = {
    activePage: "meals",
    meals: [],
    sides: [],
    pickedMeals: [],
    pickedSides: [],
    ingredients: []
  }

  setActivePage = (currentPage) => {
    this.setState({ activePage: currentPage })
  }

  componentDidMount() {
    this.fetchMealsAndSides()
  }

  fetchMealsAndSides = () => {
    fetch('http://localhost:3000/meals')
      .then(response => response.json())
      .then(allMeals => {
        this.setState({ meals: allMeals })
        console.log(allMeals)
        console.log(this.state.meals)
      })

      fetch('http://localhost:3000/sides')
      .then(response => response.json())
      .then(allSides => {
        this.setState({ sides: allSides })
        console.log(allSides)
        console.log(this.state.sides)
      })
  }

  activePage = () => {
    switch(this.state.activePage) {
      case "meals":
        return <MealsPage meals={this.state.meals}/>
      case "sides":
        return <h1>sides</h1>
      case "ingredients":
        return <h1>ingredients</h1>
      default:
        return <></> // Home page?
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Funky Cafe</h1>
          <NavBar setActivePage={this.setActivePage}/>
        </header>
        {this.activePage()}
      </div>
    );
  }
}

export default App;
