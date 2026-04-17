import React from "react";
import "./Food.css";

const Food = ({ food, addToCart }) => {
    
  return (
    <div className="card">
      <h2>{food.strMeal}</h2>
      <img src={food.strMealThumb} alt={food.strMeal} />
      <button onClick={() => addToCart(food)}>Add to Cart</button>
    </div>
  );
};

export default Food;
