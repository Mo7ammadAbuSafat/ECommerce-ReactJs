import React, { useState } from "react";
import "./Popup.css";
import PhotosPart from "./PhotosPart";
import DetailsPart from "./DetailsPart";

const ContentPopup = (props) => {
  return (
    <>
      <div className="body">
        <PhotosPart />
        <DetailsPart />
      </div>
      <div className="footer">
        <bottun>View Full product Details</bottun>
      </div>
    </>
  );
};

export default ContentPopup;
