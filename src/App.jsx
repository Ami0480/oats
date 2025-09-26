import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Homepage from "./Homepage.jsx";
import Loveoats from "./Loveoats.jsx";
import Recipes from "./Recipes.jsx";
import Granola from "./Granola.jsx";
import Pancake from "./Pancake.jsx";
import Blissbites from "./Blissbites.jsx";
import Porridge from "./Porridge.jsx";

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
