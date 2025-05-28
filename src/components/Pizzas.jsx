import React from "react";
import PizzaData from "../data/pizzaData.json";

const Pizzas = () => {
  const handleClick = () => {
    alert("Your order has been placed")
  }

  return (
    <div className="menu">
      {PizzaData.map((pizza) => (
        <div key={pizza.id} className="menu-item">
          <img
            src={pizza.img.src}
            alt={pizza.img.alt}
            style={{ width: "150px", height: "150px" }}
          />
          <div>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button className="order-button" onClick={handleClick}>Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pizzas;
