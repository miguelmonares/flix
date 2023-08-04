import React from "react";
import { useNavigate } from "react-router-dom";
import "./Results.css";

function Results() {
  const navigate = useNavigate();

  const startExperience = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Results</h1>
        <p></p>
        <button onClick={startExperience}>Return to Start</button>
      </header>
    </div>
  );
}

export default Results;
