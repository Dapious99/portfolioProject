import React from "react";
import workOne from "../../assets/codevanta.jpg";
import Button from "../../components/Button";

const Works = () => {
  return (
    <div className="bg-black p-4 h-screen text-white">
      <div className="flex gap-5 bg-black shadow-xl rounded-xl p-4">
        <div className="w-[45%]">
          <img
            src={workOne}
            alt="An image showing the codevanta homepage"
            className="rounded-lg"
          />
        </div>
        <div className="w-[55%] flex flex-col justify-center">
          <p>CodeVanta Website</p>
          <p>
            Codevanta is a young start-up that tries to understand the need of
            individuals/businesses technologically and providing a suitable
            solution for their need through their cutting-edge solutions to
            development and expert proffesionals. The aim of Codevanta is to
            revolutionize the way people and businesses access and utilize
            services.
          </p>
          <ul className="flex gap-2 py-2">
            <li>ReactJs</li>
            <li>TailwindCSS</li>
            <li>Vercel</li>
            <li>React-router</li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="https://codevanta.tech">
              <Button
                text={"View Site"}
                style="hover:bg-blue-700 bg-black border-2 border-white rounded-full px-6 py-3"
              />
            </a>
            <a href="">
              <Button
                text={"View Code"}
                style="hover:bg-blue-700 bg-black border-2 border-white rounded-full px-6 py-3"
              />
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Works;
