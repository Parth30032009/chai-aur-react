import React from "react";

const button = ({ color, setColor }) => {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full cursor-pointer"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    >
      {color}
    </button>
  );
};

export default button;
