import React from "react";
import { FaHome, FaHeart, FaArrowLeft, FaReact } from "react-icons/fa";

const ICONS = {
  home: FaHome,
  heart: FaHeart,
  arrow: FaArrowLeft,
  react: FaReact,
};

const Icon = (name, size, color) => {
  const SelectedIcon = ICONS[name];
  return <SelectedIcon style={{ fontSize: size, color: color }} />;
};

export default Icon;
