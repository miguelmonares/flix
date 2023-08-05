import React from "react";
import { useNavigate } from "react-router-dom";
import "./Stimulus.css";

function Stimulus() {
  const navigate = useNavigate();

  const startExperience = () => {
    navigate("/results", { replace: true });
  };

  return (
    <div class="body">
      <div class="instruction-video-div">
        <div></div>
        <button onClick={startExperience}>Results</button>
      </div>
    </div>
  );
}

export default Stimulus;
