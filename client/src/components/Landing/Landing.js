import React from "react";
import { Link } from "react-router-dom";
import landingImg from "./happyDog.png";
import Bark from "./barking.mp3";

import "./Landing.css";

export default function Landing() {
  //let audio = new Audio(Bark);

  return (
    <>
      <div className="landing-container">
        <div className="landing-dog-img">
          <img src={landingImg} alt="happy dog" />
        </div>
        <div className="landing-dog-text">
          <div className="title-page">
            <div className="about block">
              <span>About</span>
            </div>
            <div className="dogs block">
              <span>Dogs</span>
            </div>
          </div>
          <span className="intro-text">
            A web page with info about all dog breeds and more{" "}
          </span>
          <Link to="/dogs">
            <div className="button-landing">
              <span>ENTER</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

/* onClick={() => audio.play()} */
