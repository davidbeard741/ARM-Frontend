import React from "react";
import styles from "./CategoryOne.module.scss";
const CategoryOne = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <label>Category 1</label>
            <p>See collection</p>
          </div>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.imgWrapper}></div>
              <div className={styles.middleWrapper}>
                <label>LACOSTEMARA#012</label>
              </div>
              <div className={styles.bottomWrapper}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryOne;
