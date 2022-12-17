import React from "react";
import Title from "../SharedComponents/Title";
import styles from "./ProductComponents.module.css";
import data from "../../Data";
import ItemsContainer from "../Feature/ItemsContainer";
const items = [];
for (let i = 0; i < 4; i++) {
  items.push(data[Math.floor(Math.random() * data.length)]);
}

function MayLike() {
  return (
    <div>
      <Title text="You May Also Like" />
      <ItemsContainer itemsData={items} />
    </div>
  );
}

export default MayLike;
