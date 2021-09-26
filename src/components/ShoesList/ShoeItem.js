import React, { useContext, useState } from "react";
import styles from "./List.module.css";
import CartContext from "../Store/ShoesContext";

const ShoeItem = ({ shoe }) => {
  const { add, carts, remove } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: shoe.id,
      img: shoe.img,
      name: shoe.name,
      price: shoe.price,
      src: shoe.img,
      amount: 1,
    };
    add(newItem);
  };
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <img src={shoe.img} alt="" />
      </div>
      <div className={styles.info}>
        <div>
          <h4>{shoe.name}</h4>
          <span className="badge bg-primary" style={{ fontSize: ".9rem" }}>
            ${shoe.price}
          </span>
        </div>
        <div className="action">
          {carts.some((cart) => cart.id == shoe.id) ? (
            <span
              className="border border-primary rounded p-2"
              style={{ userSelect: "none" }}
            >
              In the cart
            </span>
          ) : (
            <button onClick={handleSubmit} className="btn btn-primary">
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoeItem;
