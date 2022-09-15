import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { CgProfile } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import styles from "../index.module.scss";

const MobileView = () => {
  const { pathname } = useLocation();
  const { wallet } = useWallet();
  return (
    <div className={styles.mobileView}>
      <div className={styles.wrapper}>
        <Link
          to="/explore"
          className={pathname === "/explore" ? styles.active : styles.card}
        >
          <MdOutlineTravelExplore />
          <label>Explore</label>
        </Link>
        <Link
          to="/create"
          className={pathname === "/create" ? styles.active : styles.card}
        >
          <IoIosCreate />
          <label>Create NFT</label>
        </Link>
        <Link
          to="/profile"
          className={pathname === "/profile" ? styles.active : styles.card}
        >
          <CgProfile />
          <label>Profile</label>
        </Link>
        <label
          className={styles.card}
          form="walletButton"
          style={wallet ? { color: "green" } : { color: "white" }}
        >
          <GiWallet />
          <label>Wallet</label>
          <div id="walletButton" style={{ display: "none" }}>
            <WalletMultiButton />
          </div>
        </label>
      </div>
    </div>
  );
};

export default MobileView;
