import React, { createContext } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
    const myValue = "Giá trị mẫu từ Context"; 
    return (
      <Context.Provider value={myValue}>
        {props.children}
      </Context.Provider>
    );
}