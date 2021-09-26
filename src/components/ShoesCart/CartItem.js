import React, { useContext } from "react";
import CartContext from "../Store/ShoesContext";
import styles from "./CartItem.module.css";

const CartItem = ({ cart, showModal, setShowModal, onDelete, addMore }) => {
  const Delete = () => {
    onDelete(cart);
  };

  const incrementItem = () => {
    addMore(cart);
  };
  let total = cart.amount * cart.price;
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={cart.src} alt="" />
        </div>
        <div className={styles.info}>
          <h4>{cart.name}</h4>
        </div>

        <span className="badge bg-primary"> $ {cart.price}</span>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-warning">
            -
          </button>
          <span className="btn btn-warning">{cart.amount}</span>
          <button
            type="button"
            className="btn btn-warning"
            onClick={incrementItem}
          >
            +
          </button>
        </div>
        <span className="m-2"> Total = ${total.toFixed(2)}</span>
      </div>
      <button className="btn btn-danger " onClick={Delete}>
        Remove item
      </button>
    </div>
  );
};

export default CartItem;
