import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import { IoIosCreate } from "react-icons/io";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import styles from "../index.module.scss";

const MobileView = () => {
  const { pathname } = useLocation();
  const { wallet, disconnect } = useWallet();
  const [checkWallet, setCheckWallet] = useState<number | any>(null);
  useEffect(() => {
    if (wallet) {
      setCheckWallet(null);
    }
  }, [wallet]);
  const useDropdown = () => {
    setCheckWallet(1);
  };
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
          onClick={useDropdown}
        >
          <GiWallet />
          <label form="walletButton">Wallet</label>
          <div id="walletButton" style={{ display: "none" }}>
            <WalletMultiButton />
          </div>
          {wallet == null || checkWallet == null ? (
            ""
          ) : (
            <div className={styles.overFlowCard} onClick={disconnect}>
              Disconnect
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default MobileView;
