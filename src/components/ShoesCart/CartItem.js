import React, { useContext } from "react";
import CartContext from "../Store/ShoesContext";
import styles from "./CartItem.module.css";

const CartItem = ({ cart, showModal, setShowModal }) => {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={cart.src} alt="" />
        </div>
        <div className={styles.info}>
          <h4>{cart.name}</h4>
          <span style={{ marginRight: ".51rem" }}> {cart.amount}&times;</span>

          <span className="badge bg-primary"> $ {cart.price}</span>
        </div>
        Total = ${cart.amount * cart.price}
      </div>
    </>
  );
};

export default CartItem;
