import React from "react";

const Flex = (direction, justify, children) => {
  const DIRECTION = {
    vertical: "column",
    horizontal: "row",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: DIRECTION[direction],
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
