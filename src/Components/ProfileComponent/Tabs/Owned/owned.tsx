import React, { useEffect, useState } from "react";
import styles from "./owned.module.scss";
import NFT1 from "../../../../Assets/images/NFT1.svg";
import NftCard from "../../../_common/NftCards/nftCards/nftCard";
import { ColorRing } from "react-loader-spinner";
import {
  findAllByCreator,
  findAllByOwner,
  findByMint,
} from "../../../../services/metaplex.service";
import { useMetaplex } from "../../../../hooks/useMetaplex";
import axios, { AxiosResponse } from "axios";
import { ArweaveNFTRes } from "../../../../types";
import { useWallet } from "@solana/wallet-adapter-react";
import NoDataFound from "../../../_common/noDataGif/noDataFound";
import { useNavigate } from "react-router-dom";

const Owned = () => {
  const { metaplex } = useMetaplex();
  const { wallet } = useWallet();
  const [ownedNFTs, setOwnedNFTs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchOwnedNFTs = async () => {
    // console.log("Fetching nfts:", metaplex?.identity()?.publicKey);
    try {
      setLoading(true);
      let nftRes = await findAllByOwner(metaplex!);
      let fetchedNFTs: any = [];
      await Promise.all(
        nftRes.map(async nft => {
          if (nft.uri) {
            let fetchedNftRes: AxiosResponse<ArweaveNFTRes, any> =
              await axios.get(nft.uri);
            fetchedNFTs.push({
              ...nft,
              ...fetchedNftRes.data,
            });
          }
        })
      );
      setOwnedNFTs(fetchedNFTs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Fetch owned NFTs error", error);
    }
  };

  useEffect(() => {
    if (wallet?.adapter.connected) {
      console.log("WORKINGGG");
      setLoading(true);
      fetchOwnedNFTs();
    }
  }, [wallet?.adapter.connected]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {ownedNFTs.length === 0 ? (
            <NoDataFound />
          ) : loading ? (
            <div className={styles.loader}>
              <ColorRing
                visible={true}
                height='80'
                width='100'
                ariaLabel='blocks-loading'
                wrapperStyle={{}}
                wrapperClass='blocks-wrapper'
                colors={[
                  "rgb(255, 183, 24)",
                  "rgb(255, 183, 24)",
                  "rgb(255, 183, 24)",
                  "rgb(255, 183, 24)",
                  "rgb(255, 183, 24)",
                ]}
              />
            </div>
          ) : (
            <div className={styles.cardWrapper}>
              {ownedNFTs.map((item, index) => (
                <NftCard
                  onClick={() => navigate("/make-offer", { state: item })}
                  item={item}
                  key={index}
                  img={item.image}
                  heading={item.name}
                  subHeading={item.description}
                />
              ))}
            </div>
          )}

          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Owned;
