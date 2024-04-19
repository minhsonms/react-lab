import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "./tableComponent.css";
import { Toolbar } from "primereact/toolbar";
const Table = ({
  data,
  columns,
  actionRows,
  footer,
  leftToolbarTemplate = "",
  rightToolbarTemplate = "",
}) => {
  return (
    <div className="card">
      <Toolbar
        className="mb-4"
        left={leftToolbarTemplate}
        right={rightToolbarTemplate}
      ></Toolbar>
      <DataTable
        value={data}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        footer={footer}
      >
        <Column
          header="#"
          headerStyle={{ width: "3rem" }}
          body={(data, options) => options.rowIndex + 1}
        />
        {columns.map((col, i) => (
          <Column
            key={col.field}
            field={col.field}
            header={col.header}
            style={{ minWidth: "12rem" }}
          />
        ))}
        {actionRows && (
          <Column
            body={actionRows}
            exportable={false}
            style={{ minWidth: "12rem" }}
          />
        )}
      </DataTable>
    </div>
  );
};

export default Table;
