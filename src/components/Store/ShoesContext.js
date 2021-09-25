import { createContext, useReducer } from "react";
import { cartReducer } from "./stateReducer";

const CartContext = createContext({});

export default CartContext;

const initialState = {
  carts: [],
  totalAmount: 0,
};

export const CartState = ({ children }) => {
  const [state, dispach] = useReducer(cartReducer, initialState);
  const add = (item) => {
    dispach({ type: "ADD", payload: item });
  };

  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        add,
        totalAmount: state.totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
