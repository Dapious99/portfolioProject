import React from "react";

const WhatCanIDo = () => {
  return (
    <div>
      <h2 className="font-bold text-[1.5rem] decoration-3 underline decoration-blue-700">What I Can Do.</h2>
      <ul className="list-disc flex gap-6 sm:flex-wrap font-medium">
        <li>User Interface (UI) Development</li>
        <li>Responsive Web Design</li>
        <li>Cross-Browser Compatibility</li>
        <li>Apis Integration and more.</li>
      </ul>
    </div>
  );
};

export default WhatCanIDo;
