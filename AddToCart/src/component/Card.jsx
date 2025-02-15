import React, { useContext } from "react";
import { CardContext } from "../context/Card";

const Card = () => {
  const { items } = useContext(CardContext); // Use useContext instead of useState

  const total = items?.reduce((a, b) => a + b.price, 0) || 0; // Ensure safety

  return (
    <div>
      <h1>Cart</h1>
      {items?.length > 0 ? (
        items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
      <h1>Total Bill: ${total}</h1>
    </div>
  );
};

export default Card;
