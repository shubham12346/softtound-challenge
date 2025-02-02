import React from "react";

const GetSizeAndGenerateMatrix = ({ handleSetMatrixSize }) => {
  return (
    <div>
      <form onSubmit={handleSetMatrixSize} className="formInputs">
        <label htmlFor="arraySize">Choose Array type : 6*6</label>
        <input type="radio" name="arraySize" value="6*6" />
        <label htmlFor="arraySize"> 8*8</label>
        <input type="radio" name="arraySize" value="8*8" />
        <label htmlFor="arraySize"> 10*10</label>
        <input type="radio" name="arraySize" value="10*10" />
        <label htmlFor="arraySize"> 12*12</label>
        <input type="radio" name="arraySize" value="12*12" />
        <label htmlFor="arraySize"> 14*14 </label>
        <input type="radio" name="arraySize" value="14*14" />
        <label htmlFor="arraySize"> 16*16</label>
        <input type="radio" name="arraySize" value=" 16*16 " />
        <button type="submit" style={{ marginInline: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default GetSizeAndGenerateMatrix;
