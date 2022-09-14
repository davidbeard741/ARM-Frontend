import React from "react";
import styles from "./loaderSpinner.module.scss";
import { ColorRing } from "react-loader-spinner";
const LoaderSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ColorRing
          visible={true}
          height="80"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={[
            "rgb(255, 183, 24)",
            "rgb(255, 183, 24)",
            "rgb(255, 183, 24)",
            "rgb(255, 183, 24)",
            "rgb(255, 183, 24)",
          ]}
        />
      </div>
    </div>
  );
};

export default LoaderSpinner;
