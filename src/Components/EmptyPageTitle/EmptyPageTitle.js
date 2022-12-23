import React from "react";
import styles from "./EmptyPageTitle.module.css";

function EmptyPageTitle({ text }) {
  return <div className={styles.pageContent}>{text}</div>;
}

export default EmptyPageTitle;
