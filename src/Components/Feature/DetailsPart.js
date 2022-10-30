import React, { useState } from "react";
import Description from "./Description";
import NamePriceRatePart from "./NamePriceRatePart";
import SizePart from "./SizePart";
import Quantity from "./Quantity";

function DetailsPart(props) {
  return (
    <div className="details">
      <NamePriceRatePart />
      <Description />
      <SizePart />
      <Quantity />
    </div>
  );
}

export default DetailsPart;
