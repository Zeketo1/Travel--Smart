import React from "react";
import MissVis from "./components/MissVis";
import Values from "./components/Values";
import AboutBanner from "./components/AboutBanner";

const About = () => {
  return (
    <div>
      <AboutBanner />
      <MissVis />
      <Values />
    </div>
  );
};

export default About;
