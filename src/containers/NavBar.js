import React from 'react';
import '../stylesheets/NavBar.css';

export default function NavBar(props) {

    const handleClick = (pageSelected) => {
        props.setActivePage(pageSelected)
    }

    return (
        <div>
            <h1 onClick={() => handleClick("meals")}>Meals</h1>
            <h1 onClick={() => handleClick("sides")}>Sides</h1>
            <h1 onClick={() => handleClick("ingredients")}>Ingredients</h1>
        </div>
    )
}
