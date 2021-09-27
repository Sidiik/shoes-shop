import React, { useState } from "react";
import ShoeItem from "./ShoeItem";

import styles from "./List.module.css";

const List = (props) => {
  const [shoes, setShoes, totalAmount] = useState(props.shoes);
  console.log(shoes, "list");
  return (
    <div className={styles.ListWrapper}>
      {props.shoes.map((shoe) => (
        <ShoeItem shoe={shoe} key={shoe.id} />
      ))}
    </div>
  );
};

export default List;
