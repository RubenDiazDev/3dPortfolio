import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center ">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className=" w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ruben</span>🤘 <br />A Frontend
      developer based in Edinburgh
    </h1>
  ),
  2: (
    <InfoBox
      text=" Who am I? Click below to know a little bit"
      link="/about"
      btnText="More about me"
    />
  ),
  3: (
    <InfoBox
      text="I worked in many projects and have picked up relevant skills along the way"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Are you looking for a Frontend Developer?"
      link="/contact"
      btnText="Let's get in touch!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
