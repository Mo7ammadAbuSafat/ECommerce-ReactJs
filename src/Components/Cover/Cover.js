import React from "react";
import styles from "./Cover.module.css";

const Cover = ({ imgSrc, children }) => {
  return (
    <div style={{ backgroundImage: `url(${imgSrc})` }} className={styles.Cover}>
      {children}
    </div>
  );
};

export default Cover;
