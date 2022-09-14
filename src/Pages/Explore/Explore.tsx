import React from "react";
import CreateNFT from "../../Components/ExploreComponents/CreateNFT/CreateNft";
import Filter from "../../Components/ExploreComponents/filter/filter";
import styles from "./Explore.module.scss";

const Explore = () => {
  return (
    <>
      <div className={styles.container}>
        {/* <Filter /> */}
        <CreateNFT />
      </div>
    </>
  );
};

export default Explore;
