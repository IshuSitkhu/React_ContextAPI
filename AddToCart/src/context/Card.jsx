import { createContext, useState } from "react";

export const CardContext = createContext(null);

export const CardProvider = ({ children }) => {
  const [items, setItems] = useState([]); // Initialize as empty array

  return (
    <CardContext.Provider value={{ items, setItems }}>
      {children} 
    </CardContext.Provider>
  );
};
