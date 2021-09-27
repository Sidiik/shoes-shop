import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ShoesCart from "./components/ShoesCart/ShoesCart";
import List from "./components/ShoesList/List";
import { CartState } from "./components/Store/ShoesContext";

const App = () => {
  const [shoesData, setShoesData] = useState([]);
  useEffect(() => {
    const fetchShoes = async () => {
      const response = await fetch(
        "https://shoepify-2dcc5-default-rtdb.firebaseio.com/shoesData.json"
      );
      const responseData = await response.json();
      const loeadedData = [];
      for (const key in responseData) {
        loeadedData.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          img: responseData[key].img,
        });
      }
      setShoesData(loeadedData);
    };
    fetchShoes();
  }, []);
  console.log(shoesData);

  return (
    <CartState>
      <Header />
      <List shoes={shoesData} />
      <ShoesCart />
    </CartState>
  );
};

export default App;
