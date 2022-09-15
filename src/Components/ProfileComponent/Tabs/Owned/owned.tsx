import React, { useEffect, useState } from "react";
import styles from "./owned.module.scss";
import NFT1 from "../../../../Assets/images/NFT1.svg";
import NftCard from "../../../_common/NftCards/nftCards/nftCard";
import {
  findAllByCreator,
  findAllByOwner,
  findByMint,
} from "../../../../services/metaplex.service";
import { useMetaplex } from "../../../../hooks/useMetaplex";
import axios, { AxiosResponse } from "axios";
import { ArweaveNFTRes } from "../../../../types";
import { useWallet } from "@solana/wallet-adapter-react";
import NoDataFound from "../../../_common/noData/noDataFound";

const Owned = () => {
  const { metaplex } = useMetaplex();
  const { wallet } = useWallet();
  const [ownedNFTs, setOwnedNFTs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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
      fetchOwnedNFTs();
    }
  }, [wallet?.adapter.connected]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* {[...Array(0)] ? (
            <NoDataFound />
          ) : ( */}
          <div className={styles.cardWrapper}>
            {ownedNFTs.map((item, index) => (
              <NftCard
                item={item}
                key={index}
                img={item.image}
                heading={item.name}
                subHeading={item.description}
              />
            ))}
          </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Owned;
