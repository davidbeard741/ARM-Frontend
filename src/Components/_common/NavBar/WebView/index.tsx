import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { BsPersonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import styles from "../index.module.scss";
const WebView = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div
        className={pathname === "/" ? styles.container : styles.activeContainer}
      >
        <div className={styles.wrapper}>
          <div className={styles.leftContainer}>
            <Link to="/">
              <img
                className={styles.logo}
                src={"https://d3bfm8su4pz02o.cloudfront.net/logo/logo.svg"}
                alt="logo"
              />
            </Link>
          </div>
          <div className={styles.rightMenuWrapper}>
            <div
              className={
                pathname === "/explore" ? styles.active : styles.menuItem
              }
            >
              <Link to="/explore">Explore</Link>
            </div>
            <div
              className={
                pathname === "/create" ? styles.active : styles.menuItem
              }
            >
              <Link to="/create">Create NFT</Link>
            </div>
            <div className={styles.profileWrapper}>
              <Link to="/profile">
                <div className={styles.imgWrapper}>
                  <BsPersonFill />
                </div>
              </Link>
            </div>
            {/* <div className={styles.profileWrapper}>
              <Notification />
            </div> */}
            <div className={styles.btn}>
              <WalletMultiButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebView;
