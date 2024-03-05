import React from "react";

const Skills = () => {
  return (
    <div className="flex gap-[4rem]">
      <div>
        <h2 className="font-semibold text-[1.5rem] decoration-3 underline decoration-blue-700">
          Software Skills
        </h2>
        <ul className="">
          <li>HTML/HTML5</li>
          <li>CSS/CSS3</li>
          <li>TailwindCSS/BootStrap</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>Context-Api/Redux-toolkit</li>
          <li>Api Integration</li>
          <li>Basic understanding of Typescript and Nextjs</li>
        </ul>
      </div>
      <div>
        <h2 className="font-semibold text-[1.5rem] decoration-3 underline decoration-blue-700">
          Personal Skills
        </h2>
        <ul className="">
          <li>Excellent Communication</li>
          <li>Creativity</li>
          <li>Teamwork</li>
          <li>Organization</li>
          <li>Attention to Details</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
