import React from "react";
import PersonalInfo from "./PersonalInfo";
import Language from "./Language";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import WhatCanIDo from "./WhatCanIDo";
import kamal from "../assets/myself.png";

const About = () => {
  return (
    <div className="bg-black p-6 flex gap-8">
      <div className="text-white lg:w-[60%] flex flex-col gap-6">
        <PersonalInfo />
        <Skills />
        <WhatCanIDo />
        <Language />
        <Hobbies />
      </div>
      <div className="pt-[4rem]">
        <div className="bg-blueDots bg-cover bg-no-repeat">
          <img src={kamal} className=""/>
        </div>
      </div>
    </div>
  );
};

export default About;
