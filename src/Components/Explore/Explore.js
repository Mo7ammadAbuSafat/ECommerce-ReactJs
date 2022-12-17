import React from "react";
import styles from "./Explore.module.css";
import Title from "../SharedComponents/Title";
import CardT from "./CardT";
import CardI from "./CardI";
import { Link } from "react-router-dom";
const items = [
  { name: "Kérastase: A Collaboration", imgSrc: "icons/r1.png" },
  {
    name: "Jaclynn Seah",
    text: "Jaclynn’s wandering spirit has brought her from the lush greenery of South America.",
  },
  { name: "How To Wear The Lounge Lunghi", imgSrc: "icons/r2.png" },
  {
    name: "Remarkable Resilience: Grace Kim",
    text: "A woman in my life who has shown remarkable resilience is my best friend Grace.",
  },
];

const Explore = () => {
  return (
    <div className={styles.ExploreT}>
      <Title text="Explore" />
      <div className={styles.Explore}>
        <div className={styles.left}>
          <div className={styles.text}>
            <p className={styles.p1}>FIELDTESTED. JANUARY 19, 2017</p>
            <h2>Connected Clothing: Raye Padit</h2>
            <p className={styles.p2}>
              As a voice for conscious fashion, Raye Padit is motivated by the
              belief that one person’s actions, no matter how small, holds great
              impact. This core ideal has driven him to start his three passion
              projects: Connected Threads Asia, PeyaR, and Swagalls.
            </p>
          </div>
          <img src="icons/Explore.png" />
        </div>
        <div className={styles.right}>
          <CardI {...items[0]} />
          <CardT {...items[1]} />
          <CardT {...items[3]} />
          <CardI {...items[2]} />
        </div>
      </div>
      <Link className={styles.button} to="/JournalPage">
        <div>See the journal</div>
      </Link>
    </div>
  );
};

export default Explore;
