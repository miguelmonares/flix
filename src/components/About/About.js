import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <body>
      <div className="about-body">
        <section class="about-top"></section>
        <div class="about-header">
          <h1 class="about-title">about flix.</h1>

          <div class="about-intro1">
            flix is a curious exploration into the world of fear. we believe
            fear, our age-old survival mechanism, holds a mirror to the human
            psyche, reflecting who we truly are. by carefully curating
            spine-chilling short films, we give you a chance to witness your raw
            reactions to fear.
            <br />
            <br /> our intent isn't to give you a scare fest, but to reveal the
            fascinating universe that lies beneath our instinctive fear
            responses. in this journey, you're not just a spectator, but an
            active participant contributing to a large dataset. this data might
            one day provide groundbreaking insights into human emotion and fear.
            <br />
            <br />
            who are we? we're a bunch of enthusiasts passionate about machine
            learning, emotion, and the intersection of the two.
            <br />
            <br />
            feel free to reach out if you have questions, thoughts, or just want
            to share your experience. we're all ears.
          </div>

          <button class="about-start-button w-button" onClick={returnHome}>
            return to start
          </button>
        </div>
      </div>
    </body>
  );
}

export default About;
