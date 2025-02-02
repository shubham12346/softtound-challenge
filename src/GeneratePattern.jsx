import React from "react";
import Box from "./Box";

const GeneratePattern = ({ matrixSize }) => {
  const ms = Number(matrixSize.split("*")[0]);
  const rowCenter = ms / 2;
  const colCenter = ms / 2;

  const newArray = Array.from({ length: ms }, () => Array(ms).fill("0"));

  let generateInputArray = () => {
    let matrix = [];
    let counter = 1;
    newArray?.forEach((rowEl) => {
      let rowArray = [];
      rowEl?.forEach((colEl) => {
        rowArray.push(counter);
        counter++;
      });
      matrix.push(rowArray);
    });
    return matrix;
  };
  let inputArray = generateInputArray();

  const generateFormattedMatrix = () => {
    let matrix = Array.from({ length: ms }, () => Array(ms).fill("0"));
    for (let row = 0; row < ms; row++) {
      for (let col = 0; col < ms; col++) {
        matrix[col][ms - row - 1] = inputArray[row][col];
      }
    }
    return matrix;
  };

  let outPutArray = generateFormattedMatrix();

  return (
    <div>
      <div>Input Matrix</div>
      <div className="matrixWrapper">
        {inputArray?.map((item, rowIndex) => (
          <ul key={rowIndex} className="boxWrapper">
            {item?.map((ele, colIndex) => (
              <Box
                key={`${ele}-${colIndex}`}
                col={rowIndex}
                row={colIndex}
                rowCenter={rowCenter}
                colCenter={colCenter}
                matrixSize={ms - 1}
              >{`${ele}`}</Box>
            ))}
          </ul>
        ))}
      </div>
      <div>Output Matrix</div>
      <div className="matrixWrapper">
        {outPutArray?.map((item, rowIndex) => (
          <ul key={rowIndex} className="boxWrapper">
            {item?.map((ele, colIndex) => (
              <Box
                key={`${ele}-${colIndex}`}
                col={rowIndex}
                row={colIndex}
                rowCenter={rowCenter}
                colCenter={colCenter}
                matrixSize={ms - 1}
              >{`${ele}`}</Box>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default GeneratePattern;
