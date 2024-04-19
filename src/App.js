import React, { useState } from "react";
import ClassComponent from "./view/classComponent";
import FunctionComponent from "./view/functionComponent";
import { Button } from "primereact/button";
import TableEx from "./view/Table";
import { Example } from "./view/exHook";


function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Component Selector</h2>
      <Button onClick={() => handleOptionSelect(1)} label="Class Component" />
      <Button
        onClick={() => handleOptionSelect(2)}
        label="Function Component 1"
      />
      <Button onClick={() => handleOptionSelect(4)} label="Table Component" />
      <Button onClick={() => handleOptionSelect(5)} label="Example Hook" />

      <div>{selectedOption === 1 && <ClassComponent />}</div>
      <div>{selectedOption === 2 && <FunctionComponent name={"Sơn"} />}</div>
      <div>{selectedOption === 4 && <TableEx />}</div>
      <div>{selectedOption === 5 && <Example />}</div>
    </div>
  );
}

export default App;
