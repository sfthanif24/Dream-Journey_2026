import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            {
                cart.map((food) => <p key={food.idMeal}>{food.strMeal}</p>)
            }
        </div>
    );
};

export default Cart;