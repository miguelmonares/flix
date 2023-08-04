import React from "react";
import "./Instructions.css";
import { useNavigate } from "react-router-dom";

function Instructions() {
  const navigate = useNavigate();

  const startExperience = () => {
    navigate("/watch", { replace: true });
  };
  return (
    <div className="Instructions">
      <section>
        <h1>Instructions</h1>
        <p></p>
        <button onClick={startExperience}>Return to Start</button>
      </section>
    </div>
  );
}

export default Instructions;
