import React from "react";
import style from "./title.module.scss";

const Title = ({ as = "h1", color, align = "left", children }) => {
  const Heading = as;
  // return React.createElement("heading", null, children)
  // return React.createElement(Heading, null, children)

  return (
    <Heading className={style.title} style={{ color: color, textAlign: align }}>
      {children}
    </Heading>
  );
};

export default Title;
