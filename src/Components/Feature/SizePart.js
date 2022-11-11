import React, { useState } from "react";
import styles from "./Popup.module.css";

const SizePart = (props) => {
  const [size, setSize] = useState(null);
  return (
    <div className={styles.size}>
      <p>size</p>
      <div className={styles.select}>
        <div className={styles.sel}>
          {[1, 2, 3, 4].map((no) => {
            return (
              <div
                onClick={() => setSize(no)}
                className={styles.s}
                style={{
                  backgroundColor: size == no ? "#6B6B6B" : "#D7D7D7",
                }}
              >
                {no}
              </div>
            );
          })}
        </div>
        <div>Size Guidelines</div>
      </div>
      <p>Model is a US Size 2-4, wears Matter Size 1. 175 cm tall.</p>
    </div>
  );
};

export default SizePart;
