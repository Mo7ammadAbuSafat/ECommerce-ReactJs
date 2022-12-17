import React, { useState } from "react";
import MaxWidthDialog from "./MaterialUi";
import styles from "./Feature.module.css";
import Item from "./Item";

function ItemsContainer({ itemsData }) {
  const [IdShow, setIdShow] = useState(1);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const items = itemsData.map((itemPro, index) => {
    return (
      <Item
        kay={index}
        data={itemsData}
        index={index}
        setIdShow={setIdShow}
        handleClickOpen={handleClickOpen}
      />
    );
  });
  return (
    <>
      <div className={styles.itemsContainer}>{items}</div>
      <MaxWidthDialog
        data={itemsData}
        IdShow={IdShow}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default ItemsContainer;
