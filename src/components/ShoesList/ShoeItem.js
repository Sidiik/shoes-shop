import React from "react";
import styles from "./List.module.css";

const ShoeItem = ({ shoe }) => {
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
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeItem;
