import React from "react";
import styles from "./noData.module.scss";
import img from "../../../Assets/gif/noDataFound.gif";
const NoDataFound = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={img} alt="" />
          <label>NO Data Found</label>
        </div>
      </div>
    </>
  );
};

export default NoDataFound;
