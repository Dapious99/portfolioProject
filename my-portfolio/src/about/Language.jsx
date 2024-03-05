import React from 'react'

const Language = () => {
  return (
    <div>
      <h2 className="font-semibold text-[1.5rem] decoration-3 underline decoration-blue-700">
        Languages
      </h2>
      <ul className="flex gap-3 sm:flex-wrap">
        <li>English Language</li>
        <li>Yoruba</li>
        <li>Hausa</li>
      </ul>
    </div>
  );
}

export default Language