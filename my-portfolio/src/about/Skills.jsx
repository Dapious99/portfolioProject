import React from 'react'

const Skills = () => {
  return (
    <div>
      <div>
        <h2>Software Skilss</h2>
        <ul className="list-decimal flex gap-3 sm:flex-wrap">
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
        <h2>Personal Skills</h2>
        <ul className="list-decimal flex gap-3 sm:flex-wrap">
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