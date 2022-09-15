import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";
import NoData from "../../Assets/gif/no wifi.gif";
import Header from "../../Components/ProfileComponent/Header/header";
import Tabs from "../../Components/ProfileComponent/Tabs/Tabs";
import { useMetaplex } from "../../hooks/useMetaplex";
import { ellipsisText } from "../../services/string.helper";
import styles from "./Profile.module.scss";
const Profile = () => {
  const { wallet } = useWallet();

  const [ellipsisAddress, address] = useMemo(() => {
    if (wallet?.adapter.connected) {
      return [
        ellipsisText(wallet?.adapter.publicKey?.toString()!),
        wallet?.adapter.publicKey?.toString(),
      ];
    } else return ["", ""];
  }, [wallet?.adapter.connected, wallet?.adapter.publicKey]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {!wallet ? (
            <div className={styles.imgWrapper}>
              <div className={styles.imgData}>
                <img src={NoData} alt='' />
                <WalletMultiButton />
              </div>
            </div>
          ) : (
            <>
              <Header address={ellipsisAddress || ""} textToCopy={address!} />
              <Tabs />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
