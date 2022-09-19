import React, { useEffect, useState } from "react";
import NftCard from "../../../_common/NftCards/nftCards/nftCard";
import styles from "./created.module.scss";
import NFT1 from "../../../../Assets/images/NFT1.svg";
import { useMetaplex } from "../../../../hooks/useMetaplex";
import { useWallet } from "@solana/wallet-adapter-react";
import { findAllByCreator } from "../../../../services/metaplex.service";
import { ArweaveNFTRes } from "../../../../types";
import axios, { AxiosResponse } from "axios";
import NoDataFound from "../../../_common/noDataGif/noDataFound";

const Created = () => {
  const { metaplex } = useMetaplex();
  const { wallet } = useWallet();
  const [createdNFTs, setCreatedNFTs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOwnedNFTs = async () => {
    // console.log("Fetching nfts:", metaplex?.identity()?.publicKey);
    try {
      setLoading(true);
      let nftRes = await findAllByCreator(metaplex!);
      let fetchedNFTs: any = [];
      await Promise.all(
        nftRes.map(async (nft) => {
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
      setCreatedNFTs(fetchedNFTs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("Fetch owned NFTs error", error);
    }
  };

  useEffect(() => {
    if (wallet?.adapter.connected) {
      console.log("WORKINGGG");
      fetchOwnedNFTs();
    }
  }, [wallet?.adapter.connected]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {createdNFTs?.length === 0 ? (
            <NoDataFound />
          ) : (
            <div className={styles.cardWrapper}>
              {createdNFTs?.map((item, index) => (
                <NftCard
                  item={item}
                  key={index}
                  img={item.image}
                  heading={item.name}
                  subHeading={item.description}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Created;
