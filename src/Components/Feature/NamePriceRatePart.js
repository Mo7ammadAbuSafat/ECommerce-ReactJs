import React, { useState } from "react";

const NamePriceRatePart = (props) => {
  const rate = 4;
  const price = 90;
  const name = "The Sideswipe Dhoti + Bottom Line Grey (Silk)";
  return (
    <div className="namePriceRatePart">
      <p className="name">{name}</p>
      <div className="priceRate">
        <p className="price">SGD {price} </p>
        <div className="rate">
          {[1, 2, 3, 4, 5].map((no) => {
            return (
              <i
                class="fa-solid fa-star"
                style={{ color: no <= rate ? "yellow" : "silver" }}
              ></i>
            );
          })}
          <p>{rate} of 5</p>
        </div>
      </div>
    </div>
  );
};

export default NamePriceRatePart;
