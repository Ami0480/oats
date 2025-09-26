import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Homepage from "./Homepage";
import Loveoats from "./Loveoats";
import Recipes from "./Recipes";
import Granola from "./Granola";
import Pancake from "./Pancake";
import Blissbites from "./Blissbites";
import Porridge from "./Porridge";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loveoats" element={<Loveoats />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/granola" element={<Granola />} />
        <Route path="/pancake" element={<Pancake />} />
        <Route path="/blissbites" element={<Blissbites />} />
        <Route path="/porridge" element={<Porridge />} />
      </Routes>
    </Router>
  );
}

export default App;
