import React from "react";
import Cart from "./Cart";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h4>ShoePify</h4>
      <Cart />
    </header>
  );
};

export default Header;
