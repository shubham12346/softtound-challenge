import { useCallback, useState } from "react";
import "./App.css";
import GetSizeAndGenerateMatrix from "./GetSizeAndGenerateMatrix";
import GeneratePattern from "./GeneratePattern";

function App() {
  const [matrixSize, setMatrixSize] = useState();

  const handleSetMatrixSize = useCallback((e) => {
    console.log("sdfjhfjkss");
    e.preventDefault();
    const formData = new FormData(e.target);
    let size = formData.get("arraySize");
    setMatrixSize(size);
  }, []);

  return (
    <div className="App">
      <GetSizeAndGenerateMatrix handleSetMatrixSize={handleSetMatrixSize} />
      {matrixSize && <GeneratePattern matrixSize={matrixSize} />}
    </div>
  );
}

export default App;
