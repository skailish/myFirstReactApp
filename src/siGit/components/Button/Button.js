import React from "react";
import Icon from "siGit/components/Icon/Icon";
import style from "./button.module.scss";

const Button = (iconLeft, iconRight, variant, rounded = "square", children) => {
  const COLORS = {
    primary: "blue",
    default: "black",
    success: "green",
    danger: "red",
    info: "orange",
  };

  const color = COLORS[variant];

  return (
    <button className={(style.button, style[rounded])} style={{ color: color }}>
      <Icon name={iconLeft} size="20px" color={color} />
      {children}
      <Icon name={iconRight} size="20px" color={color} />
    </button>
  );
};

export default Button;
