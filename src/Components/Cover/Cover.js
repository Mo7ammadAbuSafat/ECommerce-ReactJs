import React, { useState, useEffect } from "react";
import styles from "./Cover.module.css";

const Cover = ({ imgSrc, children }) => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((imgIndex + 1) % imgSrc.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgIndex]);
  return (
    <div
      style={{ backgroundImage: `url(${imgSrc[imgIndex]})` }}
      className={styles.Cover}
    >
      {children}
    </div>
  );
};

export default Cover;
