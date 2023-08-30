import React from 'react'

const Language = () => {
  return (
    <div>
      <h2 className="font-bold text-[1.5rem] decoration-3 underline decoration-blue-700">
        Languages
      </h2>
      <ul className="list-disc flex gap-6 sm:flex-wrap font-medium">
        <li>English Language</li>
        <li>Yoruba</li>
        <li>Hausa</li>
      </ul>
    </div>
  );
}

export default Language