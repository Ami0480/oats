import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Loveoats from "./Loveoats";
import Recipes from "./Recipes";
import Granola from "./Granola";
import Pancake from "./Pancake";
import Blissbites from "./Blissbites";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loveoats" element={<Loveoats />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/granola" element={<Granola />} />
        <Route path="/pancake" element={<Pancake />} />
        <Route path="/blissbites" element={<Blissbites />} />
      </Routes>
    </Router>
  );
}

export default App;
