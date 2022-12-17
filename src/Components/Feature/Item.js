import React from "react";
import styles from "./Feature.module.css";

const Item = ({ data, index, setIdShow, handleClickOpen }) => {
  const handleClickView = () => {
    setIdShow(data[index].id);
    handleClickOpen();
  };
  return (
    <div className={styles.Item}>
      <div className={styles.img}>
        <img src={data[index].imgs[0]} />
        <div
          className={
            styles.new2 + " " + (data[index].isNew ? "" : styles.displayNone)
          }
        >
          new
        </div>
        <button onClick={handleClickView} className={styles.buttonForItem}>
          QUICK VIEW
        </button>
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{data[index].name}</p>
        <p className={styles.price}>{"$" + data[index].price + ".00"}</p>
      </div>
    </div>
  );
};

export default Item;
