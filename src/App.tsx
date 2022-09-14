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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { metaplex } = useMetaplex();
  const wallet = useWallet();

  // useEffect(() => {
  //   getUserNFTs(metaplex!);
  // }, []);
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        rtl={false}
        closeOnClick={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/create" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
