import React from "react";

const Flex = ({ direction, children, justify }) =>
{
  const DIRECTION = {
    vertical: "column",
    horizontal: "row",
  };

  return (
    <div style={{ display: 'flex', flexDirection: DIRECTION[direction], justifyContent: justify, }}>
      {children}
    </div>
  );
};

export default Flex;
