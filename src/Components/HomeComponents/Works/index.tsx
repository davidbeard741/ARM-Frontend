import React from "react";
import data from "./data";
import styles from "./index.module.scss";
const Work = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label>How It Works</label>
          <div className={styles.cardWrapper}>
            {data.map((item) => (
              <div className={styles.card}>
                <img src={item.img} alt="" />
                <label>{item.heading}</label>
                <p>{item.pera}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
