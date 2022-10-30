import React, { useState } from "react";

const Quantity = (props) => {
  const [amount, setAmount] = useState(1);
  return (
    <div className="quantity">
      <p>Quantity</p>
      <div className="quantityDiv">
        <div className="count">
          <div
            className="minus"
            onClick={() => {
              if (amount > 0) setAmount(amount - 1);
            }}
          >
            -
          </div>
          <div className="counter">{amount}</div>
          <div className="plus" onClick={() => setAmount(amount + 1)}>
            +
          </div>
        </div>
        <button>Add to cart</button>
        <i class="fa-solid fa-question"></i>
        <div className="add">Add to wishlist</div>
      </div>
    </div>
  );
};

export default Quantity;
