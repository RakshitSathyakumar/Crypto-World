import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinsDetail from "./components/CoinsDetail";
import Converter from "./components/Converter";


import './styles/wallet.scss'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins:id" element={<CoinsDetail />} />
        <Route path="/converter" element={<Converter />} />
        
      </Routes>
    </Router>
  );
}

export default App;
