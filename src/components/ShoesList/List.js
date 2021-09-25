import React, { useState } from "react";
import ShoeItem from "./ShoeItem";

import styles from "./List.module.css";

const List = (props) => {
  const [shoes, setShoes, totalAmount] = useState(props.shoes);
  return (
    <div className={styles.ListWrapper}>
      {shoes.map((shoe) => (
        <ShoeItem shoe={shoe} key={shoe.id} totalAmount={totalAmount} />
      ))}
    </div>
  );
};

export default List;
