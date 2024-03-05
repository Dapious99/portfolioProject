import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="flex xl:justify-start justify-center bg-black text-white py-3 px-5">
        <div className="flex gap-8 sm:gap-6">
          <Link to="/" className="hover:text-blue-700 hover:pb-2">
            Home
          </Link>
          <Link to="/about-me" className="hover:text-blue-700 hover:pb-2">
            About
          </Link>
          <Link to="/my-projects" className="hover:text-blue-700 hover:pt-2">
            My Projects
          </Link>
          <p className="hover:text-blue-700 hover:pt-2">Experience</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
