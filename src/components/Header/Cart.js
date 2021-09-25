import React, { useContext, useReducer } from "react";
import CartContext from "../Store/ShoesContext";
import styles from "./Header.module.css";

const Cart = () => {
  const { carts } = useContext(CartContext);
  return (
    <div className={styles.cart}>
      <>
        Your cart <span className="badge bg-primary"> {carts.length} </span>
      </>
    </div>
  );
};

export default Cart;
