import React from "react";

const Button = ({ text, style }) => {
  return (
    <div>
      <button className={`${style} border-2 border-white`}>{text}</button>
    </div>
  );
};

export default Button;
