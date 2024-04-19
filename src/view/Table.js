import React from "react";
import Table from "../component/table/tableComponent";
import { Button } from "primereact/button";
import { useMemo, useState } from "react";

const data = [
  {
    name: "Văn A",
    age: 12,
  },
  {
    name: "Văn B",
    age: 14,
  },
  {
    name: "Văn B",
    age: 16,
  },
  {
    name: "Văn B",
    age: 14,
  },
  {
    name: "Văn B",
    age: 14,
  },
  {
    name: "Văn B",
    age: 14,
  },
  {
    name: "Văn B",
    age: 14,
  },
];

const TableEx = () => {
  const columns = [
    {
      header: "Name",
      field: "name",
    },
    {
      header: "Age",
      field: "age",
    },
  ];

  const actionRows = (rowData) => {
    return (
      <>
        <Button
          icon="pi pi-pencil"
          rounded
          outlined
          className="mr-2"
          onClick={() => {}}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => {}}
        />
      </>
    );
  };

  const footer = `In total there are ${data ? data.length : 0} row.`;

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          onClick={() => {}}
        />
      </div>
    );
  };

  //#region Test useMemo
  const [title, setTitle] = useState("Test Table");

  const filterFunction = (data, textLog) => {
    console.log(textLog);
    return data.filter((item) => item.age === 12);
  };

  const filterNormal = filterFunction(data, "filter normal");
  const filterMemo = useMemo(
    () => filterFunction(data, "filter using useMemo"),
    []
  );
  const testUseMemoTemplate = () => {
    return (
      <div>
        <h2>{title}</h2>
        <h3> Filter data with age = 12</h3>
        <p>
          Normal result:{" "}
          {filterNormal && filterNormal?.length > 0 && filterNormal[0]?.name}
        </p>
        <p>
          useMemo Result:{" "}
          {filterMemo && filterMemo?.length > 0 && filterMemo[0]?.name}
        </p>
        <Button
          label="Trigger render"
          onClick={() => setTitle("Test useMemo")}
        />
      </div>
    );
  };
  //#endregion

  return (
    <div>
      {testUseMemoTemplate()}
      <Table
        data={data}
        columns={columns}
        actionRows={actionRows}
        footer={footer}
        leftToolbarTemplate={leftToolbarTemplate}
      />
    </div>
  );
};

export default TableEx;
