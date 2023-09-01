import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import { useDemoData } from "@mui/x-data-grid-generator";
// import JSONdata from "../data/data.json";
import "./dataGrid.scss";

export default function DataGrid() {
  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 100,
  //   maxColumns: 6,
  // });

  const [data, setData] = React.useState([]);
  const [rowSelected, setRowSelected] = React.useState([]);
  const numberOfRecordsToDisplay = 10;

  const columns = [
    {
      dataField: "id",
      text: "ID",
      headerClasses: "data-table__header",
    },
    {
      dataField: "userId",
      text: "User ID",
      headerClasses: "data-table__header",
    },
    {
      dataField: "title",
      text: "Title",
      headerClasses: "data-table__header",
    },
    {
      dataField: "completed",
      text: "Completed",
      headerClasses: "data-table__header",
    },
  ];

  const sizePerPageOptionRenderer = ({ text, page, onSizePerPageChange }) => (
    <li key={text} role="presentation" className="dropdown-item">
      <a
        href="#"
        tabIndex="-1"
        role="menuitem"
        data-page={page}
        onMouseDown={(e) => {
          e.preventDefault();
          onSizePerPageChange(page);
        }}
        style={{ color: "red" }}
      >
        {text}
      </a>
    </li>
  );

  const options = {
    sizePerPageOptionRenderer,
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "#00EEAE",
    onSelect: (e) => {
      console.log(e);
    },
    selected: rowSelected,
    headerClasses: "data-table__header",
  };

  // const handleOnSelect = (row, isSelect) => {
  //   console.log("isSelect: ", isSelect);
  //   console.log("row: ", row);
  //   // console.log('rowindex ', row.customKeyForUI);
  //   console.log("rowindex ", row.recordId);
  //   //  if (isSelect) {
  //   //    // setRowSelected([row.customKeyForUI]);
  //   //    setRowSelected([row.recordId]);
  //   //  }
  //   //  onRowSelect(row);
  // };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log({ row, rowIndex });
      console.log("e", e);
    },
    // console.log("selectRow.onSelect",selectRow)
  };

  const totalResultsNumberRenderer = (from, to, size) => (
    <span className="pagination__total-results">
      Displaying {from} to {to} of {size} results
    </span>
  );

  const pageButtonRenderer = ({
    page,
    active,
    // disabled,
    title,
    onPageChange,
  }) => {
    const handleClick = (e) => {
      e.preventDefault();
      onPageChange(page, numberOfRecordsToDisplay);
    };
    let activeStyle = "";
    if (active) {
      activeStyle = "pagination__active-page";
    } else {
      activeStyle = "pagination__inactive-page";
    }
    // This option is mostly used for the nav buttons
    if (typeof page === "string") {
      activeStyle = "pagination__nav-button";
    }
    const pageButtonStyles = `${activeStyle}`;
    return (
      <li key={title} className="page-item">
        <button
          type="button"
          onClick={handleClick}
          className={pageButtonStyles}
        >
          {page}
        </button>
      </li>
    );
  };

  const paginationOptions = {
    paginationSize: 5,
    showTotal: true,
    // alwaysShowAllBtns: true,
    paginationTotalRenderer: totalResultsNumberRenderer,
    pageButtonRenderer,
  };

  // const totalResultsNumberRenderer = (from, to, size) => (
  //   <span className="pagination__total-results">
  //     Displaying {from} to {to} of {size} results
  //   </span>
  // );

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log("placeholder", json);
        setData(json);
        console.log("Griddata", data);
      });
  }, []);

  return (
    // <div style={{ height: 400, width: "100%" }}>
    //   <DataGrid
    //     {...data}
    //     isRowSelectable={(params) => params.row.quantity > 50000}
    //     checkboxSelection
    //   />
    // </div>
    <>
      {data && (
        <BootstrapTable
          bootstrap4
          hover
          keyField="id"
          data={data}
          columns={columns}
          selectRow={selectRow}
          rowEvents={rowEvents}
          pagination={paginationFactory(paginationOptions)}
          noDataIndication={
            <span className="text-danger">No data available</span>
          }
          headerClasses="data-table__header"
        />
      )}
    </>
  );
}
