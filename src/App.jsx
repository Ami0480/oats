import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Loveoats from "./Loveoats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loveoats" element={<Loveoats />} />
      </Routes>
    </Router>
  );
}

export default App;
