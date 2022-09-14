import { CgProfile } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import styles from "../index.module.scss";

const MobileView = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.mobileView}>
      <div className={styles.wrapper}>
        <Link to="/" className={pathname === "/" ? styles.active : styles.card}>
          <HiHome />
          <label>Home</label>
        </Link>
        <Link
          to="/explore"
          className={pathname === "/explore" ? styles.active : styles.card}
        >
          <MdOutlineTravelExplore />
          <label>Create NFT</label>
        </Link>
        <div className={styles.card}>
          <CgProfile />
          <label>Profile</label>
        </div>
        <Link to="" className={styles.card}>
          <GiWallet />
          <label>Wallet</label>
        </Link>
      </div>
    </div>
  );
};

export default MobileView;
