import React from 'react';
import '../stylesheets/NavBar.css';

export default function NavBar(props) {

    const handleClick = (pageSelected) => {
        props.setActivePage(pageSelected)
    }

    return (
        <nav className="navbar-nav">
            <ul className="navbar-ul">
                <li className="navbar-li" onClick={() => handleClick("meals")}>
                    <h1 className="navbar-h1">Meals{props.pickedMeals.length > 0 ? " (" + props.pickedMeals.length + ")" : null}</h1>
                </li>
                <li className="navbar-li" onClick={() => handleClick("sides")}>
                    <h1 className="navbar-h1">Sides{props.pickedSides.length > 0 ? " (" + props.pickedSides.length + ")" : null}</h1>
                </li>
                <li className="navbar-li" onClick={() => handleClick("ingredients")}>
                    <h1 className="navbar-h1">Ingredients{props.ingredients.flat().length > 0 ? " (" + props.ingredients.flat().length + ")" : null}</h1>
                </li>
            </ul>
        </nav>
    )
}
