import React from "react";

const Box = ({ children, row, col, matrixSize, rowCenter, colCenter }) => {
  let checkCornerElement =
    row === 0 || row === matrixSize || col === 0 || col === matrixSize;

  const checkCenterElement = () => {
    return (
      (row === rowCenter - 1 && col === colCenter - 1) ||
      (row === rowCenter - 1 && col === colCenter) ||
      (row === rowCenter && col === colCenter - 1) ||
      (row === rowCenter && col === colCenter)
    );
  };

  return (
    <div
      className={`dibBox  ${checkCornerElement ? "bg-green" : ""} ${
        checkCenterElement() ? "bg-red" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Box;
