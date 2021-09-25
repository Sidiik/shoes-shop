import React, { useContext, useReducer, useState } from "react";

import { Modal } from "react-bootstrap";

import CartContext from "../Store/ShoesContext";
import CartItem from "./CartItem";

const ShoesCart = () => {
  const { carts, totalAmount } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  console.log(totalAmount);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Show Cart
      </button>

      <Modal show={showModal}>
        <Modal.Header>
          <h4>Order now</h4>
        </Modal.Header>
        <Modal.Body>
          {carts.length == 0 && "Please add Items to order"}
          {carts.map((cart, idx) => (
            <CartItem cart={cart} key={idx} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <h5 style={{ marginRight: "auto" }}>
            Total : ${totalAmount.toFixed(2)}
          </h5>
          <button
            className="btn btn-danger"
            onClick={() => setShowModal(!showModal)}
          >
            Close
          </button>
          <button className="btn btn-success">Order</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShoesCart;
