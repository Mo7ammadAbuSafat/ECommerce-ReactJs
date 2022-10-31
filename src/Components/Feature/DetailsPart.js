import React, { useState } from "react";
import Description from "./Description";
import NamePriceRatePart from "./NamePriceRatePart";
import SizePart from "./SizePart";
import Quantity from "./Quantity";

function DetailsPart({ data }) {
  return (
    <div className="details">
      <NamePriceRatePart data={data} />
      <Description>{data.description}</Description>
      <SizePart />
      <Quantity />
    </div>
  );
}

export default DetailsPart;
