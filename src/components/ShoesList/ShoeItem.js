import React, { useContext, useState } from "react";
import styles from "./List.module.css";
import CartContext from "../Store/ShoesContext";

const ShoeItem = ({ shoe }) => {
  const { add, carts } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      img: shoe.img,
      name: shoe.name,
      price: shoe.price,
      src: shoe.img,
      amount: 1,
    };
    add(newItem);
  };
  return (
    <form className={styles.item} onSubmit={handleSubmit}>
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
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </form>
  );
};

export default ShoeItem;
