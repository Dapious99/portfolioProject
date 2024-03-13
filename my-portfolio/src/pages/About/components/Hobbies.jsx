import React from "react";

const Hobbies = () => {
  return (
    <div>
      <h2 className="font-semibold text-[1.5rem] decoration-3 underline decoration-blue-700">
        Hobbies
      </h2>
      <ul className="flex gap-3 sm:flex-col xs:flex-col xs:gap-1 sm:gap-1">
        <li>Coding</li>
        <li>Reading</li>
        <li>Internet Surfing</li>
        <li>Chess</li>
        <li>Learning about new emerging Technologies</li>
      </ul>
    </div>
  );
};

export default Hobbies;
