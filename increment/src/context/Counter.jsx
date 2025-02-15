import { createContext, useState } from 'react';

export const CounterContext = createContext(null); // ✅ Fixed the typo

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {props.children}  {/* ✅ Fixed "childern" typo */}
        </CounterContext.Provider>
    );
};
