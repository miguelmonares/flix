import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const startExperience = () => {
    navigate("/instructions", { replace: true });
  };

  return (
    <body>
      <div className="home-body">
        <section class="home-top">
          <a href="/about" class="about-button w-button">
            about
          </a>
        </section>
        <div class="home-header">
          <h1 class="home-title">flix</h1>
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
            dare to begin
          </button>
        </div>
      </div>
    </body>
  );
}

export default HomePage;
