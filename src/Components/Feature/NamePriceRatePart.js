import React, { useState } from "react";

const NamePriceRatePart = ({ data }) => {
  const rate = data.rate;
  const price = data.price;
  const name = data.name;
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
