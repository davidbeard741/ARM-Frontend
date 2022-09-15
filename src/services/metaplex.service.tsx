import {
  BundlrStorageDriver,
  Metaplex,
  toBigNumber,
  toMetaplexFileFromBrowser,
  UploadMetadataOutput,
} from "@metaplex-foundation/js";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast } from "react-toastify";
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
    files: any;
  };
}) => {
  const { uri, assetUris } = await params.metaplex
    .nfts()
    .uploadMetadata({
      name: `${params.metadata?.name} Metadata`,
      description: params.metadata?.description,
      symbol: params.metadata?.symbol,
      // image: params.metadata?.imageURI,
      image: await toMetaplexFileFromBrowser(params.metadata.files[0]),
    })
    .run();
  toast.success("Uploading Metadata");

  const { nft } = await params.metaplex
    .nfts()
    .create({
      uri: uri,
      symbol: params.metadata?.symbol,
      name: params.metadata?.name,
      sellerFeeBasisPoints: 500, // Represents 5.00%.
      maxSupply: toBigNumber(0),
    })
    .run();
  toast.success("NFT Created");

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

export const findAllByCreator = async (metaplex: Metaplex) =>
  metaplex
    .nfts()
    .findAllByCreator({ creator: metaplex.identity().publicKey })
    .run();

export const findAllByOwner = async (metaplex: Metaplex) =>
  metaplex
    .nfts()
    .findAllByOwner({ owner: metaplex.identity().publicKey })
    .run();

export const findByMint = async (metaplex: Metaplex, mintAddress: any) =>
  metaplex.nfts().findByMint({ mintAddress }).run();
