import React from "react";
import { useNavigate } from "react-router-dom";
import "./Stimulus.css";

function Stimulus() {
  const navigate = useNavigate();

  const startExperience = () => {
    navigate("/results", { replace: true });
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Stimulus</h1>
        <p>
          Experience a rollercoaster of emotions and capture your reactions in
          real-time!
        </p>
        <button onClick={startExperience}>Results</button>
      </header>
    </div>
  );
}

export default Stimulus;
