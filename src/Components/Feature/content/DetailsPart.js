import React, { useState } from "react";
import Description from "./Description";
import NamePriceRatePart from "./NamePriceRatePart";
import SizePart from "./SizePart";
import Quantity from "./Quantity";
import styles from "../Popup.module.css";

function DetailsPart({ data, handleClose }) {
  return (
    <div className={styles.details}>
      <NamePriceRatePart data={data} />
      <Description>{data.description}</Description>
      <SizePart />
      <Quantity data={data} handleClose={handleClose} />
    </div>
  );
}

export default DetailsPart;
