import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import NoData from "../../Assets/gif/no wifi.gif";
import Header from "../../Components/ProfileComponent/Header/header";
import Tabs from "../../Components/ProfileComponent/Tabs/Tabs";
import styles from "./Profile.module.scss";
const Profile = () => {
  const { wallet } = useWallet();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {!wallet ? (
            <div className={styles.imgWrapper}>
              <div className={styles.imgData}>
                <img src={NoData} alt="" />
                <WalletMultiButton />
              </div>
            </div>
          ) : (
            <>
              <Header />
              <Tabs />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
