import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import axios from "axios";
import { useLoading } from "..//hook/useLoading";
import { Button } from "primereact/button";

const FunctionComponent = () => {
  const { setLoading } = useLoading();
  const [data, setData] = useState("");
  const [errorMess, setErrorMess] = useState("");
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    if (inputValue === "") {
      setErrorMess("vui long nhap");
      return;
    }
    if (inputValue !== "") {
      setErrorMess("");
    }
    try {
      setLoading(true);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/ability/${inputValue}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Function Component</h2>

      <FloatLabel>
        <InputText
          id="username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label htmlFor="username">Enter number</label>
      </FloatLabel>
      <p>{errorMess}</p>
      <Button onClick={fetchData} label="Fetch Data" />
      {data && (
        <div>
          <h2>Skill: {data.name}</h2>
        </div>
      )}
    </div>
  );
};

export default FunctionComponent;
