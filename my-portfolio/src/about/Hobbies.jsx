import React from 'react'

const Hobbies = () => {
  return (
    <div>
      <h2 className="font-bold text-[1.5rem] decoration-3 underline decoration-blue-700">
        Hobbies
      </h2>
      <ul className="list-disc flex gap-6 sm:flex-wrap font-medium">
        <li>Coding</li>
        <li>Reading</li>
        <li>Surfing the Internet</li>
      </ul>
    </div>
  );
}

export default Hobbies