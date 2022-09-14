import {
  Metaplex,
  walletAdapterIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";
import { MetaplexContext } from "../hooks/useMetaplex";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { FC, useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

export const MetaplexProvider: FC<Props> = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useWallet();

  const metaplex = useMemo(() => {
    return Metaplex.make(connection)
      .use(
        //@ts-ignore
        walletAdapterIdentity(wallet.connected ? wallet : null)
      )
      .use(
        bundlrStorage({
          address: "https://devnet.bundlr.network",
          providerUrl: "https://api.devnet.solana.com",
          timeout: 60000,
        })
      );
  }, [connection, wallet]);

  return (
    <MetaplexContext.Provider value={{ metaplex }}>
      {children}
    </MetaplexContext.Provider>
  );
};
