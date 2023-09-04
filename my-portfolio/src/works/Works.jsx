import React from "react";
import Button from "../button/Button";

const Works = () => {
  return (
    <div>
      <div>
        <div>
          <img />
        </div>
        <p></p>
        <div>
          <a href="https://codevanta.tech">
            <Button
              text={"View Site"}
              style="bg-white border-2 border-blue-700 rounded-full px-3 py-2"
            />
          </a>
          <a href="https://github.com/Code-Vanta/CompanyWebsite.git">
            <Button
              text={"View Code"}
              style="bg-white border-2 border-blue-700 rounded-full px-3 py-2"
            />
          </a>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Works;
