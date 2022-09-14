import React from "react";
import styles from "./index.module.scss";
import Category1 from "../../../Assets/images/Category1.svg";
import Category2 from "../../../Assets/images/Category2.svg";
import Category3 from "../../../Assets/images/Category3.svg";
let data = [
  {
    id: 1,
    img: Category1,
    name: "Category 1",
  },
  {
    id: 2,
    img: Category2,
    name: "Category 2",
  },
  {
    id: 3,
    img: Category3,
    name: "Category 3",
  },
];
const Category = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <label>How It Works</label>
          <div className={styles.cardWrapper}>
            {data.map((item) => (
              <div className={styles.card}>
                <img src={item.img} alt="" />
                <div className={styles.btn}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
