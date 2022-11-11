import React, { useState } from "react";
import MaxWidthDialog from "./MaterialUi";
import styles from "./Feature.module.css";
import Item from "./Item";

function ItemsContainer(props) {
  const itemsData = [
    {
      name: "And Study Phyto Estrogens",
      description:
        "Everywhere from South Asia to the Horn of Africa and southern Arabian pen",
      price: 120.0,
      rate: 5,
      imgs: [
        "icons/i2.png",
        "icons/i3.png",
        "icons/i4.png",
        "icons/i5.png",
        "icons/i6.png",
      ],
      isNew: false,
    },
    {
      name: "Phyto Estrogens",
      description:
        "Inspired by the continuous length of the lungki or sarong seen in hot climates Africa and southern Arabian pen",
      price: 599.0,
      rate: 4,
      imgs: [
        "icons/i1.png",
        "icons/i2.png",
        "icons/i3.png",
        "icons/i4.png",
        "icons/i5.png",
      ],
      isNew: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      description:
        "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen",
      price: 799.0,
      rate: 2,
      imgs: [
        "icons/i3.png",
        "icons/i2.png",
        "icons/i4.png",
        "icons/i5.png",
        "icons/i6.png",
      ],
      isNew: false,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      description:
        "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen",
      price: 690.0,
      rate: 4,
      imgs: [
        "icons/i4.png",
        "icons/i2.png",
        "icons/i3.png",
        "icons/i5.png",
        "icons/i6.png",
      ],
      isNew: false,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      description:
        "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen",
      price: 555.0,
      rate: 0,
      imgs: ["icons/i5.png", "icons/i2.png", "icons/i3.png", "icons/i6.png"],
      isNew: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      description:
        "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen",
      price: 500.0,
      rate: 1,
      imgs: [
        "icons/i6.png",
        "icons/i2.png",
        "icons/i3.png",
        "icons/i4.png",
        "icons/i5.png",
      ],
      isNew: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      description:
        "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen",
      price: 888.0,
      rate: 3,
      imgs: [
        "icons/i7.png",
        "icons/i2.png",
        "icons/i3.png",
        "icons/i4.png",
        "icons/i5.png",
      ],
      isNew: true,
    },
    {
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      description:
        "Inspired by the continuous length of the lungki or sarong seen in hot climates everywhere from South Asia to the Horn of Africa and southern Arabian pen",
      price: 599.0,
      rate: 5,
      imgs: [
        "icons/i1.png",
        "icons/i2.png",
        "icons/i3.png",
        "icons/i4.png",
        "icons/i5.png",
        "icons/i6.png",
      ],
      isNew: true,
    },
  ];

  const [IndexShow, setIndexShow] = useState(0);
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
        data={itemsData}
        Index={index}
        setIndexShow={setIndexShow}
        handleClickOpen={handleClickOpen}
      />
    );
  });
  return (
    <>
      <div className={styles.itemsContainer}>{items}</div>
      <MaxWidthDialog
        data={itemsData}
        IndexShow={IndexShow}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

export default ItemsContainer;
