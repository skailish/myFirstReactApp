import React, { useState } from "react";


const Collapse = ({ children, label }) => {

  const [span, setSpan] = useState("++");

  return (
    <div>
      <p>
        {label}
        <span onClick={() => setSpan(span === "++" ? "--" : "++")}>{span}</span>

      </p>
      {span === "--" ? <p>{"Ahora Querés ver menos"}</p> : ""}
      <p>{children}</p>

    </div>
  );
};

export default Collapse;
