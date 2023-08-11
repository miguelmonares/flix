import React, { useRef, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Stimulus.css";
import Webcam from "react-webcam";

function Stimulus() {
  const videoRef = useRef(null);
  const videoPath = "src/flix-smiling-woman.mp4";
  const navigate = useNavigate();
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  // const handleDataAvailable = useCallback(
  //   ({ data }) => {
  //     if (data.size > 0) {
  //       setRecordedChunks((prev) => prev.concat(data));
  //     }
  //   },
  //   [setRecordedChunks]
  // );

  const handleDataAvailable = useCallback(
    ({ data }) => {
      console.log("Data chunk size:", data.size); // Log data size
      if (data.size > 0) {
        recordedChunks.push(data); // Directly push the data into the array
        console.log("recordedChunks after push:", recordedChunks); // Log the array after pushing
        setRecordedChunks([...recordedChunks]); // Trigger a state update with a copy of the array
      } // manipulating variable directly, TODO: use state change vars
    },
    [recordedChunks, setRecordedChunks]
  );

  useEffect(() => {
    console.log("Updated recorded chunks:", recordedChunks); // Log recorded chunks
  }, [recordedChunks]);

  const handleStopRecording = useCallback(() => {
    mediaRecorderRef.current.stop();
  }, []);

  const handleDownload = useCallback(() => {
    console.log("down call");
    console.log(recordedChunks.length);
    if (recordedChunks.length) {
      console.log("chunks avail");
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "recorded-video.webm";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }, [recordedChunks]);

  const handleStartRecording = useCallback(() => {
    if (webcamRef.current && webcamRef.current.stream) {
      setRecordedChunks([]);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm",
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.addEventListener("stop", handleDownload);
      mediaRecorderRef.current.start();
    } else {
      console.error("Webcam stream is not available yet!");
    }
  }, [handleDownload, handleDataAvailable]);

  const handleStartClick = () => {
    setVideoStarted(true);
    const videoElement = videoRef.current;

    handleStartRecording(); // Start the recording

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

    videoElement.addEventListener("ended", () => {
      setVideoEnded(true);
      setTimeout(() => {
        handleStopRecording(); // Stop the recording
      }, 5000); // delay stop recording by 5 seconds for debugging
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
      <Webcam ref={webcamRef} style={{ display: "none" }} />

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
