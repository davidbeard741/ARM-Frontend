import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/_common/Footer/Footer";
import Navbar from "./Components/_common/NavBar/NavBar";
import { useMetaplex } from "./hooks/useMetaplex";
import "./index.css";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";
import { getUserNFTs } from "./services/metaplex.service";

function App() {
  const { metaplex } = useMetaplex();
  const wallet = useWallet();

  useEffect(() => {
    getUserNFTs(metaplex!);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
