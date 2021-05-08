import React from "react";
import "../stylesheets/MealsPage.css";
import MealBox from "../items/MealBox.js";

export default function MealsPage({
  meals,
  pickedMeals,
  removeMeal,
  addMealToPickedMeals,
  removeSide,
  pickedSides,
}) {
  const makeMealBoxes = meals.map((meal) => {
    return (
      <MealBox
        pickedMeals={pickedMeals}
        removeMeal={removeMeal}
        addMealToPickedMeals={addMealToPickedMeals}
        key={meal.id}
        meal={meal}
        pickedSides={pickedSides}
        removeSide={removeSide}
      />
    );
  });

  return (
    <div className="meals-page-div">
      <h1 className="meal-page-h1">
        {meals.length < 1 ? "Loading..." : "Pick your meals!"}
      </h1>
      <div className="meal-boxes-div">{makeMealBoxes}</div>
    </div>
  );
}
