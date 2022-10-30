import React from "react";
import styles from "./About.module.css";
import Title from "../SharedComponents/Title";

const About = () => {
  return (
    <>
      <Title text="About Matter" />
      <div className={styles.About}>
        <div className={styles.image}>
          <img src="icons/aboutMatter.png" />
        </div>
        <div className={styles.text}>
          <p>
            Our mission is threefold - to foster designer-artisan
            collaborations, inspire consumers to value provenance and process,
            and pioneer industry change and sustainability for rural textile
            communities.
          </p>
          <div className={styles.Topic}>
            <p>Artisan Employment Days Created</p>
            <ul>
              <li>Artisan Employment Days Created</li>
            </ul>
          </div>
          <div className={styles.Topic}>
            <p>Countries Involved To Date</p>
            <ul>
              <li>India</li>
              <li>China</li>
              <li>Sri Lanka</li>
            </ul>
          </div>
          <div className={styles.Topic}>
            <p>#MatterTribe </p>
            <ul>
              <li>12 designers</li>
              <li>12 Factories</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
