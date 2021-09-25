import React, { useContext, useReducer, useState } from "react";

import { Modal } from "react-bootstrap";

import CartContext from "../Store/ShoesContext";
import CartItem from "./CartItem";

const ShoesCart = () => {
  const { carts, totalAmount, remove, increment } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const onDelete = (id) => {
    remove(id);
  };

  const addMoreItems = (id) => {
    increment(id);
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setShowModal(!showModal)}
      >
        Show Cart
      </button>

      <Modal show={showModal} centered size="lg">
        <Modal.Header>
          <h4>Order now</h4>
        </Modal.Header>
        <Modal.Body>
          {carts.length == 0 && "Please add Items to order"}
          {carts.map((cart, idx) => (
            <CartItem
              cart={cart}
              key={idx}
              onDelete={onDelete}
              addMore={addMoreItems}
            />
          ))}
          <h3 style={{ textAlign: "right" }}>
            Total : $ {Math.abs(totalAmount.toFixed(2))}
          </h3>
        </Modal.Body>
        <Modal.Footer>
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
