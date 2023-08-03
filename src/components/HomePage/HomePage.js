import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const startExperience = () => {
    navigate("/instructions", { replace: true });
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to Flix</h1>
        <p>
          Experience a rollercoaster of emotions and capture your reactions in
          real-time!
        </p>
        <button onClick={startExperience}>Start the Experience</button>
      </header>
    </div>
  );
}

export default HomePage;
