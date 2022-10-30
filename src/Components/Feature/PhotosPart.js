import React, { useState } from "react";

const PhotosPart = (props) => {
  const [imgSrc, setImgSrc] = useState("icons/i1.png");
  const imgs = [
    "icons/i1.png",
    "icons/i2.png",
    "icons/i3.png",
    "icons/i4.png",
    "icons/i5.png",
    "icons/i6.png",
  ];
  return (
    <div className="photos">
      <div className="miniPhotos">
        {imgs.map((item) => {
          return (
            <img
              onClick={() => setImgSrc(item)}
              src={item}
              style={{ border: imgSrc == item ? "2px solid red" : "" }}
            />
          );
        })}
      </div>
      <div className="mainPhoto">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default PhotosPart;
