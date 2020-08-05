import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    activePage: "meals",
    meals: [],
    sides: []
  }

  setActivePage = (currentPage) => {
    this.setState({ activePage: currentPage })
  }

  componentDidMount() {
    this.fetchMeals()
  }

  fetchMeals = () => {
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
        return <h1>meals</h1>
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
        </header>
        {this.activePage()}
      </div>
    );
  }
}

export default App;
