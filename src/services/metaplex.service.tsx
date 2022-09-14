import { Metaplex } from "@metaplex-foundation/js";

export const getUserNFTs = async (metaplex: Metaplex) => {
  let myNftsTask = await metaplex
    ?.nfts()
    .findAllByOwner({ owner: metaplex.identity().publicKey });
  let myNFTs = await myNftsTask?.run();
  console.log(myNFTs);
};
