import React, { useState } from "react";
import PhotosPart from "./PhotosPart";
import DetailsPart from "./DetailsPart";
import styles from "./Popup.module.css";

const ContentPopup = ({ data }) => {
  return (
    <>
      <div className={styles.body}>
        <PhotosPart data={data} />
        <DetailsPart data={data} />
      </div>
      <div className={styles.footer}>
        <bottun>View Full product Details</bottun>
      </div>
    </>
  );
};

export default ContentPopup;
