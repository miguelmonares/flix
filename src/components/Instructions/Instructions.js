import React from "react";
import "./Instructions.css";

class Instructions extends React.Component {
  render() {
    return (
      <div className="Instructions">
        <section className="hero-subscribe-left">
          <div className="container">
            <div className="hero-wrapper">
              <div className="hero-split">
                <h1 className="test1">Instructions</h1>
                <p className="test2">Watch. React. Share.</p>
                <a href="#" className="test3 w-button">
                  Enter the Portal
                </a>
              </div>
              <div className="hero-split">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124af1aa12aadf_placeholder%201.svg"
                  loading="lazy"
                  alt=""
                  className="shadow-two"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Instructions;
