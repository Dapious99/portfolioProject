import React from "react";
import PersonalInfo from "./PersonalInfo";
import Language from "./Language";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import WhatCanIDo from "./WhatCanIDo";

const About = () => {
  return (
    <div className="bg-black p-6">
      <div className="text-white">
        <PersonalInfo />
        <Skills />
        <WhatCanIDo />
        <Language />
        <Hobbies />
      </div>
      <div></div>
    </div>
  );
};

export default About;
