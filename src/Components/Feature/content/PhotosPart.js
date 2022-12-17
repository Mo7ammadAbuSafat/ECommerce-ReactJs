import React, { useState } from "react";
import styles from "../Popup.module.css";

const PhotosPart = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(data.imgs[0]);
  return (
    <div className={styles.photos}>
      <div className={styles.miniPhotos}>
        {data.imgs.map((item) => {
          return (
            <img
              onClick={() => setImgSrc(item)}
              src={item}
              style={{ border: imgSrc == item ? "2px solid red" : "" }}
            />
          );
        })}
      </div>
      <div className={styles.mainPhoto}>
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default PhotosPart;
