import React from "react";
import Button from "../button/Button";
import workOne from "../assets/codevanta.jpg";

const Works = () => {
  return (
    <div className="bg-slate-950 p-4 h-screen text-white">
      <div className="flex gap-4 bg-black shadow-xl rounded-xl p-4">
        <div className="w-[45rem]">
          <img src={workOne} className="rounded-lg" />
        </div>
        <div>
          <p>CodeVanta Website</p>
          <p>Codevanta is a young start-up</p>
          <ul className="flex gap-2">
            <li>ReactJs</li>
            <li>TailwindCSS</li>
            <li>Vercel</li>
          </ul>
          <div>
            <a href="https://codevanta.tech">
              <Button
                text={"View Site"}
                style="bg-black border-2 border-white rounded-full px-6 py-3"
              />
            </a>
            <a href="https://github.com/Code-Vanta/CompanyWebsite.git">
              <Button
                text={"View Code"}
                style="bg-black border-2 border-white rounded-full px-6 py-3"
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
