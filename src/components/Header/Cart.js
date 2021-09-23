import React from "react";
import styles from "./Header.module.css";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <>
        Your cart <span className="badge bg-primary">0</span>
      </>
    </div>
  );
};

export default Cart;
