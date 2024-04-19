import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

const AsyncComp = () => {
  const [data, setData] = useState("");
  const [errorMess, setErrorMess] = useState("");
  const [inputValue, setInputValue] = useState("");

  
  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/ability/${inputValue}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnClick = () => {
    if (inputValue === "") {
      setErrorMess("vui long nhap");
      return;
    }
    if (inputValue !== "") {
      setErrorMess("");
    }
    fetchData();
  };

  return (
    <div>
      <h2>EX Async/Await</h2>

      <FloatLabel>
        <InputText
          id="username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label htmlFor="username">Enter number</label>
      </FloatLabel>
      <p>{errorMess}</p>
      <Button onClick={handleOnClick} label="Fetch Data" />
      {data && (
        <div>
          <h2>Skill: {data.name}</h2>
        </div>
      )}
    </div>
  );
};

export default AsyncComp;
