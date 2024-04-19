import React, { useState } from "react";
import { UseState } from "./useState";
import UseEffectWithoutDependencies from "./useEffectWithoutDependencies";
import UseEffectDependenciesEmpty from "./useEffectWithDependenciesEmpty";
import { Button } from "primereact/button";
import { UseEffectWithDependencies } from "./useEffectWithDependencies";
import UseRef from "./useRef";
import Counter from "./useReducer";

export function Example() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div>
        <h2>Selector</h2>
        <Button onClick={() => handleOptionSelect(1)} label="UseState" />
        <Button
          onClick={() => handleOptionSelect(2)}
          label="UseEffect Without Dependencies "
        />
        <Button
          onClick={() => handleOptionSelect(3)}
          label="UseEffect Dependencies Empty "
        />
        <Button
          onClick={() => handleOptionSelect(4)}
          label="UseEffect Dependencies "
        />
        <Button
          onClick={() => handleOptionSelect(5)}
          label="UseRef "
        />
        <Button
          onClick={() => handleOptionSelect(6)}
          label="UseReducer "
        />
        <div>{selectedOption === 1 && <UseState />}</div>
        <div>{selectedOption === 2 && <UseEffectWithoutDependencies />}</div>
        <div>{selectedOption === 3 && <UseEffectDependenciesEmpty />}</div>
        <div>{selectedOption === 4 && <UseEffectWithDependencies />}</div>
        <div>{selectedOption === 5 && <UseRef />}</div>
        <div>{selectedOption === 6 && <Counter />}</div>
      </div>
    </>
  );
}
