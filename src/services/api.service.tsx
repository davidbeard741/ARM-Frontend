export const getSolanaUSDPrice = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
  );
  const data = await response.json();
  return data.solana.usd;
};
