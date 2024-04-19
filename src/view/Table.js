import React from "react";
import Table from "../component/table/tableComponent";
import { Button } from "primereact/button";

const TableEx = () => {
  const data = [
    {
      name: 'Văn A',
      age: 12,
    },
    {
      name: 'Văn B',
      age: 14,
    },
    {
      name: 'Văn B',
      age: 14,
    },
    {
      name: 'Văn B',
      age: 14,
    },
    {
      name: 'Văn B',
      age: 14,
    },
    {
      name: 'Văn B',
      age: 14,
    },
    {
      name: 'Văn B',
      age: 14,
    }
  ];
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
            <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={()=>{}} />
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={()=>{}} />
        </>
    );
};

const footer = `In total there are ${data ? data.length : 0} row.`;

const leftToolbarTemplate = () => {
  return (
      <div className="flex flex-wrap gap-2">
          <Button label="New" icon="pi pi-plus" severity="success" onClick={()=>{}} />
      </div>
  );
};

  return (
    <div>
      <h2>Table Component</h2>
      <Table data={data} columns={columns} actionRows={actionRows} footer={footer} leftToolbarTemplate={leftToolbarTemplate} />
    </div>
  );
};

export default TableEx;
