import React from "react";
import Button from "../components/Button";
import workS from "../assets/workspace.png";
import { IoMdMail } from "react-icons/io";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiSolidPhoneCall } from "react-icons/bi";

const Home = () => {
  return (
    <div className="">
      <div className="flex md:flex-col-reverse">
        <div className="bg-black lg:w-[50%] flex justify-center sm:h-screen items-center px-3 lg:px-8">
          <div className="text-white">
            <p className="font-bold sm:text-center md:text-center text-[2.5rem]">
              Welcome,{" "}
              <span className="font-medium text-[1.5rem]">
                I'm Omotosho Kamalideen Opeyemi
              </span>
            </p>
            <p className="font-semibold text-[2rem] py-8 sm:text-center md:text-center">
              I am a FrontEnd Developer
            </p>
            <div className="flex gap-5 py-6 sm:justify-center md:justify-center text-[1.5rem]">
              <a>
                <Button
                  text={"Resume"}
                  style="hover:bg-blue-700 bg-black rounded-full text-white py-2 px-6"
                />
              </a>
              <a href="https://github.com/Dapious99">
                <Button
                  text={"Portfolio"}
                  style="hover:bg-blue-700 bg-black rounded-full text-white py-2 px-6"
                />
              </a>
            </div>
            <div className="text-white flex gap-4 sm:flex-wrap">
              <div className="flex items-center gap-3">
                <IoMdMail size={30} />
                <p>dapious99@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <BiLogoLinkedin size={30} />
                <a href="https://www.linkedin.com/in/kamalideen-omotosho-a50135270/">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3">
                <BiSolidPhoneCall size={30} />
                <p>+234 811 0792 758</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <img src={workS} />
        </div>
      </div>
    </div>
  );
};

export default Home;
