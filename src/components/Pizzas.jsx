import React from 'react';
import PizzaData from '../data/pizzaData.json';

const Pizzas = () => {
    return (
        <div>
            {PizzaData.map((pizza) => (
                <div key={pizza.id}>
                    <h1>{pizza.id}</h1>
                    <p>{pizza.title}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Pizzas;
