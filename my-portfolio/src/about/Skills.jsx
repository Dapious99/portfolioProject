import React from 'react'

const Skills = () => {
  return (
    <div>
      <div>
        <h2 className="font-bold text-[1.5rem] decoration-3 underline decoration-blue-700">
          Software Skills
        </h2>
        <ul className="list-disc flex gap-6 sm:flex-wrap font-medium">
          <li>HTML/HTML5</li>
          <li>CSS/CSS3</li>
          <li>TailwindCSS/BootStrap</li>
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>Context-Api</li>
          <li>Apis Integration</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold text-[1.5rem] decoration-3 underline decoration-blue-700">
          Personal Skills
        </h2>
        <ul className="list-disc flex gap-6 sm:flex-wrap font-medium">
          <li>Excellent Communication</li>
          <li>Creativity</li>
          <li>Teamwork</li>
          <li>Organization</li>
          <li>Attention to Details</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills