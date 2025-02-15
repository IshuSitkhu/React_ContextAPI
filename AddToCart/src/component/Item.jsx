import React, { useContext } from "react";
import { CardContext } from "../context/Card";

const Item = ({ name, price }) => {
  const { items, setItems } = useContext(CardContext); // Get cart items & setItems function

  const addToCart = () => {
    setItems([...items, { name, price }]);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;
