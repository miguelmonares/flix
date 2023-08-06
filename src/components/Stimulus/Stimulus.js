import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Stimulus.css";

function Stimulus() {
  const videoRef = useRef(null);
  const videoPath = "src/flix-smiling-woman.mp4";
  const navigate = useNavigate();
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleStartClick = () => {
    setVideoStarted(true);
    const videoElement = videoRef.current;

    // Play video
    videoElement.play().catch((err) => {
      console.error("Failed to play video:", err);
    });

    // Request fullscreen
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }

    // Add event listener to set videoEnded to true when video ends
    videoElement.addEventListener("ended", () => {
      setVideoEnded(true);
    });
  };

  useEffect(() => {
    // Automatically navigate to the results page once the video ends
    if (videoEnded) {
      navigate("/results", { replace: true });
    }
  }, [videoEnded, navigate]);

  return (
    <div className="stimulus-container">
      {!videoStarted && (
        <div className="start-experience-overlay">
          <button
            onClick={handleStartClick}
            className="start-experience-button"
          >
            start the experience
          </button>
        </div>
      )}
      <video ref={videoRef} controls={true} className="video">
        <source src={videoPath} type="video/mp4" />
        your browser does not support the video tag.
      </video>
      <button
        onClick={() => navigate("/results", { replace: true })}
        disabled={!videoEnded}
        className={`about-button results-button ${
          videoEnded ? "" : "disabled"
        }`}
      >
        {videoEnded ? "go to results" : "finish the video"}
      </button>
    </div>
  );
}

export default Stimulus;
