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
                    <h1 className="navbar-h1">Meals</h1>
                </li>
                <li className="navbar-li" onClick={() => handleClick("sides")}>
                    <h1 className="navbar-h1">Sides</h1>
                </li>
                <li className="navbar-li" onClick={() => handleClick("ingredients")}>
                    <h1 className="navbar-h1">Ingredients</h1>
                </li>
            </ul>
        </nav>
    )
}
