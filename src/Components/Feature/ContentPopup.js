import React, { useState } from "react";
import "./Popup.css";
import PhotosPart from "./PhotosPart";
import DetailsPart from "./DetailsPart";

const ContentPopup = ({ data }) => {
  return (
    <>
      <div className="body">
        <PhotosPart data={data} />
        <DetailsPart data={data} />
      </div>
      <div className="footer">
        <bottun>View Full product Details</bottun>
      </div>
    </>
  );
};

export default ContentPopup;
