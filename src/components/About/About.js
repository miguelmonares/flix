import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  const startExperience = () => {
    navigate("/", { replace: true });
  };

  return (
    <body>
      <div className="home-body">
        <section class="home-top"></section>
        <div class="home-header">
          <h1 class="home-title">about</h1>
          <div class="home-tagline">scare. react. share</div>
          <div class="home-linebreak"></div>
          <div class="home-intro1">
            fear is not just an emotion, it&#x27;s a mechanism for survivial.
            <br />
            <br /> experience its intensity through a curated selection of short
            films and see how your reactions reflect the primate human response.
          </div>
          <div class="home-intro2">
            brace yourself. <br />
            you&#x27;re about to engage with films designed to evoke fear and
            suspense.
            <br />
            see your reactions in a new light once the credits roll.
          </div>
          <button class="home-start-button w-button" onClick={startExperience}>
            return to start
          </button>
        </div>
      </div>
    </body>
  );
}

export default About;
