// AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const value={

  };
  return (
    <AppContext.Provider value={{ value}}>
      {props.children}
    </AppContext.Provider>
  );
};
