import React from "react";

const Square = ({ className, color }) => {
  return (
    <div
      className={`${className + (color !== "none" ? " bg-" + color : "")}`}
    />
  );
};

export default Square;
