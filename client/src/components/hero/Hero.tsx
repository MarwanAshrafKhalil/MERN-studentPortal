import React from "react";
import "./_hero.scss";
import studyVec from "../../assets/study-vector.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__info">
        <h1>EXAMS TIME</h1>
        <p>
          Embrace the challenges, and let your hard work pave the path to
          greatness.
        </p>
        <span>"Nothing happens until something moves" - Albert Einstien</span>
        <button className="hero__info__button" type="button">
          View exams tips
        </button>
      </div>

      <div className="hero__media">
        <img className="hero__media__img" src={studyVec} alt="" />
      </div>
    </div>
  );
}

export default Hero;
