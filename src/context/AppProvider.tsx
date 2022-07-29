import { FC, createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext('default');

const AppProvider = ({ children }: any) => {
  return <AppContext.Provider value={'test'}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
