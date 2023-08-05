import React, { useCallback, useState } from "react";
import "./Instructions.css";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";

function Instructions() {
  const navigate = useNavigate();
  const [camEnabled, setCamEnabled] = useState(false);

  const startExperience = () => {
    navigate("/watch", { replace: true });
  };

  const enableCamera = useCallback(() => {
    setCamEnabled(true);
  }, []);

  return (
    <div class="body">
      <a href="/" class="home-button w-button">
        home
      </a>
      <h1 class="instructions-title">instructions</h1>
      <div class="instructions-header">
        <div class="instructions-copy">
          <div class="instructions-subtitle">let&#x27;s get started</div>
          <div class="instructions-subcontent">
            you&#x27;re about to delve into a curated experience designed to
            push the boundaries of your comfort zone and ignite your primal
            instincts.
          </div>
          <div class="instructions-subtitle">how it works</div>
          <div class="instructions-subcontent">
            one eerie short film awaits. as you watch, your camera observes your
            reactions. gasps, jumps, wide-eyed movements - all recorded. one
            video, a range of emotions, a mirror to your encounter with fear.
          </div>
          <div class="instructions-subtitle">camera access</div>
          <div class="instructions-subcontent">
            we need your camera for this. don&#x27;t worry, your reactions are
            safe with us and we prioritze your privacy. the purpose of recording
            is to help you visualize your experience. we do not store or share
            your video data without your explicit consent.
          </div>
          <div class="instructions-subtitle">guidelines</div>
          <div class="instructions-subcontent">
            to ensure you get the best experience, we suggest you:
            <br />
            <br />- find a quiet place, free from interruptions
            <br />- turn off the lights
            <br />- ensure your face is well lit and fully visible to the camera
            <br />
            <br />
            ready? 1. enable camera access. 2. begin the experience.
          </div>
          <div class="home-linebr/eak"></div>
        </div>
        <div class="instructions-camera">
          {camEnabled ? (
            <Webcam
              audio={false}
              height="100%"
              width="100%"
              style={{ transform: "scaleX(-1)" }}
            />
          ) : (
            <button
              className="instructions-enable-camera"
              onClick={enableCamera}
            >
              Enable Camera
            </button>
          )}
        </div>
      </div>
      <div class="instructions-start-div">
        <button
          class="instructions-start-button w-button"
          onClick={startExperience}
          disabled={!camEnabled}
        >
          {!camEnabled ? "enable camera to begin" : "enter experience"}
        </button>
      </div>
    </div>
  );
}

export default Instructions;
