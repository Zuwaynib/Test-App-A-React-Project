import React from "react";
import PizzaData from "../data/pizzaData.json";

const Pizzas = () => {
  return (
    <div>
      {PizzaData.map((pizza) => (
        <div key={pizza.id}>
          <img
            src={pizza.img.src}
            alt={pizza.name}
            style={{ width: "200px", height: "200px" }}
          />
          <h1>{pizza.name}</h1>
          <p>{pizza.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Pizzas;
