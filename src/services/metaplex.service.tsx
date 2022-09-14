import {
  BundlrStorageDriver,
  Metaplex,
  toBigNumber,
  toMetaplexFileFromBrowser,
} from "@metaplex-foundation/js";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";

export const getUserNFTs = async (metaplex: Metaplex) => {
  let myNftsTask = await metaplex
    ?.nfts()
    .findAllByOwner({ owner: metaplex.identity().publicKey });
  let myNFTs = await myNftsTask?.run();
  console.log(myNFTs);
};

export const uploadImage = async (metaplex: Metaplex) => {};

export const createNFT = async (params: {
  metaplex: Metaplex;
  metadata: {
    name: string;
    description: string;
    symbol: string;
    imageURI: string;
  };
}) => {
  const { uri } = await params.metaplex
    .nfts()
    .uploadMetadata({
      name: `${params.metadata?.name} Metadata`,
      description: params.metadata?.description,
      symbol: params.metadata?.symbol,
      image: params.metadata?.imageURI,
    })
    .run();

  // Ref: The Nft Mode: https://github.com/metaplex-foundation/js#the-nft-model
  const { nft } = await params.metaplex
    .nfts()
    .create({
      uri: uri,
      name: params.metadata?.name,
      sellerFeeBasisPoints: 500, // Represents 5.00%.
      maxSupply: toBigNumber(1),
    })
    .run();

  // [Mock] Use following if active ".use(mockStorage())".
  // const fakeNft = await metaplex.storage().download(uri);
  // console.log('fakeNft =>', fakeNft.buffer.toString());

  console.log("uri =>", uri);
  console.log("nft =>", nft);
  console.log("Mint Address =>", nft.mint.address.toString());
};

export const fundBundlr = async (params: {
  metaplex: Metaplex;
  fundOptions: {
    amountInSol?: number;
    byteSize?: number;
  };
}) => {
  const bundlrStorage = params.metaplex
    .storage()
    .driver() as BundlrStorageDriver;
  //   bundlrStorage.fund([metaplexFile1, metaplexFile2]); // Fund using file size.
  // bundlrStorage.fund(1000); // Fund using byte size.
  // (await bundlrStorage.bundlr()).fund(1000); // Fund using lamports directly.
};

export const fundMe = async (metaplex: Metaplex, connection: Connection) => {
  let airdropSignature = await connection.requestAirdrop(
    metaplex.identity().publicKey,
    LAMPORTS_PER_SOL
  );
  const latestBlockHash = await connection.getLatestBlockhash();
  let res = await connection.confirmTransaction({
    blockhash: latestBlockHash.blockhash,
    lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
    signature: airdropSignature,
  });
};
