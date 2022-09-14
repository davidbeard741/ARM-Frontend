import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../index.module.scss";
import Logo from "../../../../Assets/logo/logo.svg";
import profileIcon from "../../../../Assets/icons/profile.svg";
import { Button } from "../../Button/Button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const WebView = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={pathname === "/" ? styles.container : styles.activeContainer}
      >
        <div className={styles.wrapper}>
          <div className={styles.leftContainer}>
            <Link to='/'>
              <img className={styles.logo} src={Logo} alt='logo' />
            </Link>
          </div>
          <div className={styles.rightMenuWrapper}>
            <div
              className={
                pathname === "/explore" ? styles.active : styles.menuItem
              }
            >
              <Link to='/explore'>Explore</Link>
            </div>
            <div className={styles.profileWrapper}>
              <img src={profileIcon} alt='' />
            </div>
            <div className={styles.btn}>
              {/* <Button
                Name="Connect Wallet"
                bgactive={"transparent"}
                bghover={"#000000"}
                Coloractive={"#000000"}
                Colorhover={"#fff"}
                borderActive={"transparent"}
              /> */}
              <WalletMultiButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebView;