import React, { useState } from "react";

const PhotosPart = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(data.imgs[0]);
  return (
    <div className="photos">
      <div className="miniPhotos">
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
      <div className="mainPhoto">
        <img src={imgSrc} />
      </div>
    </div>
  );
};

export default PhotosPart;
