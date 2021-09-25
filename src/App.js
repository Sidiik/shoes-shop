import React from "react";
import Header from "./components/Header/Header";
import ShoesCart from "./components/ShoesCart/ShoesCart";
import List from "./components/ShoesList/List";
import { CartState } from "./components/Store/ShoesContext";

const App = () => {
  const shoes = [
    {
      id: Math.random(),
      name: "sports on run",
      img: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem, ipsum dolor.",
      price: 29.99,
    },
    {
      id: Math.random(),
      name: "Fuscinate slow",
      img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem, ipsum dolor.",
      price: 12.99,
    },
    {
      id: Math.random(),
      name: "Sdueto vast",
      img: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      desc: "Lorem, ipsum dolor.",
      price: 12.99,
    },
  ];
  return (
    <CartState>
      <Header />
      <List shoes={shoes} />
      <ShoesCart />
    </CartState>
  );
};

export default App;
