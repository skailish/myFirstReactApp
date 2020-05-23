import React from "react";
import style from "./text.module.scss";

const Text = (color, size, align = "left", children) => {
  return (
    <p
      className={style.text}
      style={{ color: color, size: size, textAlign: align }}
    >
      {children}
    </p>
  );
};

export default Text;
