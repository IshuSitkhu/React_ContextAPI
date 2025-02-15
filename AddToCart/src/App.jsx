import React from "react";
import "./App.css";
import Item from "./component/Item";
import Card from "./component/Card";

function App() {
  return (
    <>
      <Item name="Hp" price={60000} />
      <Item name="Dell" price={60000} />
      <Item name="MacBook" price={60000} />

      <Card />
    </>
  );
}

export default App;
