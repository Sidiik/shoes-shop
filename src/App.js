import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ShoesCart from "./components/ShoesCart/ShoesCart";
import List from "./components/ShoesList/List";
import { CartState } from "./components/Store/ShoesContext";

const App = () => {
  const [shoesData, setShoesData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  let content = "";
  useEffect(() => {
    const fetchShoes = async () => {
      setIsloading(true);
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
      setIsloading(false);
      setShoesData(loeadedData);
    };
    fetchShoes().catch(() => {
      setIsloading(false);
      setError(true);
    });
  }, []);

  if (isLoading) {
    content = <p className="text-center">Loading...</p>;
  }
  if (error) {
    content = <p className="text-center text-danger">Something went wrong</p>;
  }

  return (
    <CartState>
      <Header />
      {isLoading ? content : <List shoes={shoesData} />}

      <ShoesCart />
    </CartState>
  );
};

export default App;
