import React from "react";
import PersonalInfo from "./components/PersonalInfo";
import Language from "./components/Language";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import WhatCanIDo from "./components/WhatCanIDo";
import kamal from "../../assets/myself.png";

const About = () => {
  return (
    <div className="bg-black p-6 flex gap-8">
      <div className="text-white xl:w-[60%] flex flex-col gap-6">
        <PersonalInfo />
        <Skills />
        <WhatCanIDo />
        <Language />
        <Hobbies />
      </div>
      <div className="pt-[4rem]">
        <div className="border-4 border-dashed border-blue-700">
          <img src={kamal} className="relative bottom-8 left-[3rem]" />
        </div>
      </div>
    </div>
  );
};

export default About;
