import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Instructions from "../Instructions/Instructions";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </Router>
  );
};

export default App;
