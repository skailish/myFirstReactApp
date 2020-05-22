import React from "react";
import style from "./tag.module.scss";

const Tag = (color, size, rounded = "square", children) => {
  return (
    <span
      className={(style.tag, style[rounded])}
      style={{ color: color, size: size }}
    >
      {children}
    </span>
  );
};

export default Tag;
