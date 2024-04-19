import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";

const PromiseComp = () => {
  const [data, setData] = useState("");
  const [errorMess, setErrorMess] = useState("");
  const [inputValue, setInputValue] = useState("");

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/ability/${inputValue}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleOnClick = () => {
    if (inputValue === "") {
      setErrorMess("vui long nhap");
      return;
    }
    if (inputValue !== "") {
      setErrorMess("");
    }
    fetchData()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>EX Promise</h2>

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

export default PromiseComp;
