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
  const remove = (id) => {
    dispach({
      type: "REMOVE",
      payload: id,
    });
  };

  const increment = (item) => {
    dispach({
      type: "INCREMENT",
      payload: item,
    });
  };

  const decrement = (item) => {
    dispach({
      type: "DECREMENT",
      payload: item,
    });
  };

  return (
    <CartContext.Provider
      value={{
        carts: state.carts,
        add,
        remove,
        totalAmount: state.totalAmount,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
