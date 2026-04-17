import React, { use, useState } from "react";
import Food from "../Food/Food";
import "./Foods.css";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";

const Foods = ({ foodData }) => {
  const data = use(foodData);
  const foods = data.meals;
  const [cart, setCart] = useState([]);
  const addToCart = (foodData) => {
    setCart([...cart, foodData]);
  };

  const handleOrder = () => {
    setCart([]);
    toast("Successfully ordered!");
  };
  return (
    <div className="foods">
      <div className="food-container">
        {foods.map((food) => (
          <Food key={foods.idMeal} addToCart={addToCart} food={food}></Food>
        ))}
      </div>
      <div className="food-cart">
        <h2>Cart</h2>
        <Cart cart={cart}></Cart>
        <button onClick={handleOrder}>Order</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Foods;
