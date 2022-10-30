import React from "react";
import styles from "./Cover.module.css";
import Text from "./text";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

const Cover = () => {
  return (
    <div className={styles.Cover}>
      <LeftArrow />
      <Text />
      <RightArrow />
    </div>
  );
};

export default Cover;
