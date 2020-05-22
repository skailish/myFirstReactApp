import React, { useState } from "react";


const Text = ({ children }) => {

  const [color, setColor] = useState("black");


  return (
    <p onClick={() => setColor(color === "red" ? "black" : "red")} style={{ backgroundColor: color, width: 500, height: 500, color: "white" }} >
      {children}
    </p>
  );
};

export default Text;
