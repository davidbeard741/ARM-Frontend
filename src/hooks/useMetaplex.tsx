import { createContext, useContext } from "react";
import {
  Metaplex,
  walletAdapterIdentity,
  bundlrStorage,
} from "@metaplex-foundation/js";

const DEFAULT_CONTEXT: {
  metaplex: Metaplex | null;
} = {
  metaplex: null,
};

export const MetaplexContext = createContext(DEFAULT_CONTEXT);

export function useMetaplex() {
  return useContext(MetaplexContext);
}
