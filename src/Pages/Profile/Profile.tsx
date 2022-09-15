import React from "react";
import Header from "../../Components/ProfileComponent/Header/header";
import Tabs from "../../Components/ProfileComponent/Tabs/Tabs";
import styles from "./Profile.module.scss";
const Profile = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Header />
          <Tabs />
        </div>
      </div>
    </>
  );
};

export default Profile;
