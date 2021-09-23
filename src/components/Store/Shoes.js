import React from "react";

const ShoesCtx = React.createContext({
  addCart: () => {},
});

const defaultItems = [];

const ShoesReducer = (state, action) => {
  return defaultItems;
};

export const shoesProvider = ({ children }) => {
  return <ShoesCtx.Provider>{children}</ShoesCtx.Provider>;
};

export default ShoesCtx;
