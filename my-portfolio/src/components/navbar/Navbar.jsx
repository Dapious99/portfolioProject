import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex lg:justify-start justify-center bg-black text-white py-3 px-5">
        <div className="flex gap-8 sm:gap-6">
          <p className="hover:text-blue-700 hover:pb-2">Home</p>
          <p className="hover:text-blue-700 hover:pb-2">About</p>
          <p className="hover:text-blue-700 hover:pt-2">My Projects</p>
          <p className="hover:text-blue-700 hover:pt-2">Experience</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
