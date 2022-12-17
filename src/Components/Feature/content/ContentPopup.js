import React, { useState } from "react";
import PhotosPart from "./PhotosPart";
import DetailsPart from "./DetailsPart";
import styles from "../Popup.module.css";
import { Link } from "react-router-dom";

const ContentPopup = ({ data }) => {
  return (
    <>
      <div className={styles.body}>
        <PhotosPart data={data} />
        <DetailsPart data={data} />
      </div>
      <div className={styles.footer}>
        <Link to="/ProductPage">
          <bottun>View Full product Details</bottun>
        </Link>
      </div>
    </>
  );
};

export default ContentPopup;
