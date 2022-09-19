import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useMemo } from "react";
import CreateNFT from "../../Components/CreateNftComponents/CreateNFT/CreateNft";
import { ellipsisText } from "../../services/string.helper";
import styles from "./Create.module.scss";

const Create = () => {
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
                <img
                  src={
                    "https://d3bfm8su4pz02o.cloudfront.net/gif/NotConnected.gif"
                  }
                  alt=""
                />
                <WalletMultiButton />
              </div>
            </div>
          ) : (
            <CreateNFT />
          )}
        </div>
      </div>
    </>
  );
};

export default Create;
