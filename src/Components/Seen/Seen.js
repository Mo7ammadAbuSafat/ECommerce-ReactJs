import React from "react";
import styles from "./Seen.module.css";
import Title from "../SharedComponents/Title";

function Seen() {
  return (
    <>
      <Title text="As Seen On" />
      <div className={styles.Seen}>
        <img src="icons/Seen.png" />
      </div>
    </>
  );
}

export default Seen;
