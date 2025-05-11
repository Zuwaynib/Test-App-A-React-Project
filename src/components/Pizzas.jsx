import React from "react";
import PizzaData from "../data/pizzaData.json";

const Pizzas = () => {
  const pizzaElement = PizzaData.map((pizza) => (
    <div key={pizza.id} className="pizza-data">
      <div className="pizza-image">
        <img
          src={pizza.img.src}
          alt={pizza.img.alt}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="pizza-info">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  ));

  return <div>{pizzaElement}</div>;
};

export default Pizzas;
