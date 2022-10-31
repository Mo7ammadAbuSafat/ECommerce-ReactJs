import React from "react";
import styles from "./Feature.module.css";

const Item = ({ data, Index, setIndexShow, handleClickOpen }) => {
  const handleClickView = () => {
    setIndexShow(Index);
    handleClickOpen();
  };
  return (
    <div className={styles.Item}>
      <div className={styles.img}>
        <img src={data[Index].imgs[0]} />
        <div
          className={
            styles.new2 + " " + (data[Index].isNew ? "" : styles.displayNone)
          }
        >
          new
        </div>
        <button onClick={handleClickView} className={styles.buttonForItem}>
          QUICK VIEW
        </button>
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{data[Index].name}</p>
        <p className={styles.price}>{"$" + data[Index].price + ".00"}</p>
      </div>
    </div>
  );
};

export default Item;
