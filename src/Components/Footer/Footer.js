import React from "react";
import styles from "./Footer.module.css";

function Footer(props) {
  const menu = [
    [
      "Categories",
      ["About us", "Testimonials", "Contact", "Journal", "Privacy Policy"],
    ],
    [
      "Partners",
      ["Support", "Shipping & Returns", "Size Guide", "Product Care"],
    ],
    [
      "Contact us",
      ["26A Pagoda St, TANGS,", "Singapore, 058187", "+65 6221 5462"],
    ],
  ];
  const list2 = menu.map((item) => {
    return (
      <>
        <ul>
          <li className={styles.ulTitle}>{item[0]}</li>
          {item[1].map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </>
    );
  });
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterMenu}>
        {list2}
        <div className={styles.rightFooter}>
          <div className={styles.subscribe}>Subscribe to newsletter</div>
          <div className={styles.inputFooter}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <div className={styles.icon}>
            <img src="icons/Facebook Icon.svg" />
            <img src="icons/Twitter Icon.svg" />
          </div>
        </div>
      </div>

      <div className={styles.Copyright}>© Copyright Mohammad AbuSafat</div>
    </div>
  );
}

export default Footer;
