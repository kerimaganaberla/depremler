import React, { useEffect, useState } from "react";
import { TablePagination } from "@mui/material";
function addHours(date: any, hours: any) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date.toLocaleString();
}
export default function EarthquakeTable(props: any) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <table id="earthquake-table">
        <thead>
          <tr>
            <th>Şehir</th>
            <th>Semt</th>
            <th>Büyüklük</th>
            <th>Tarih</th>
            <th>Derinlik</th>
          </tr>
        </thead>
        <tbody>
          {props.data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((earthquake: any, index: any) => {
              var date =
                earthquake.date != "null"
                  ? addHours(new Date(earthquake.date), 3)
                  : "null";

              return (
                <tr
                  key={index}
                  id={earthquake.eventID}
                  onClick={props.onRowClick}
                >
                  <td>
                    {earthquake.province == null
                      ? earthquake.location
                      : earthquake.province}
                  </td>
                  <td>
                    {earthquake.district == null
                      ? earthquake.location
                      : earthquake.district}
                  </td>
                  <td>{earthquake.magnitude}</td>
                  <td>{date}</td>
                  <td>{earthquake.depth} KM</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: "grey" }}
      />
    </div>
  );
}
