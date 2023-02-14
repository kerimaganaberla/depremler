import axios from "axios";
import React, { useEffect, useState } from "react";
import data from "../lib/constants/regions-data.json";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "city" | "district" | "magnitude" | "date" | "depth";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "city", label: "Şehir", align: "center", minWidth: 170 },
  { id: "district", label: "Semt", align: "center", minWidth: 100 },
  {
    id: "magnitude",
    label: "Büyüklük",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("tr-TR"),
  },
  {
    id: "date",
    label: "Tarih",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("tr-TR"),
  },
  {
    id: "depth",
    label: "Derinlik",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("tr-TR"),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function EarthTable(props: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getToday = () => {
    var today = new Date();
    var day: any = today.getDate();
    day = day < 10 ? "0" + day : day;
    var month: any = today.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var year = today.getFullYear();

    var date = year + "-" + month + "-" + day;

    var hour: any = today.getHours();
    hour = hour > 24 ? hour - 24 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    var minute: any = today.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    var second: any = today.getSeconds();
    second = second < 10 ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second;
    var dateTime = date + " " + time;

    return dateTime;
  };
  const getYesterday = () => {
    var yesterday = new Date(Date.now() - 864e5 * 1);

    var day: any = yesterday.getDate();
    day = day < 10 ? "0" + day : day;
    var month: any = yesterday.getMonth() + 1;
    month = month < 10 ? "0" + month : month;
    var year = yesterday.getFullYear();

    var date = year + "-" + month + "-" + day;

    var hour: any = yesterday.getHours();
    hour = hour > 24 ? hour - 24 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    var minute: any = yesterday.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    var second: any = yesterday.getSeconds();
    second = second < 10 ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second;
    var dateTime = date + " " + time;

    return dateTime;
  };

  const [rows, setRows] = useState<any>([]);
  const [regions, setRegions] = useState<any>(data);
  const [startDate, setStartDate] = useState<any>(getYesterday());
  const [endDate, setEndDate] = useState<any>(getToday());
  const [minLat, setMinLat] = useState<any>(35.2);
  const [maxLat, setMaxLat] = useState<any>(42.34);
  const [minLon, setMinLon] = useState<any>(25.14);
  const [maxLon, setMaxLon] = useState<any>(45.34);
  const [minMag, setMinMag] = useState<any>(0);
  const [limit, setLimit] = useState<any>(10000);
  const [orderBy, setOrderBy] = useState<any>("timedesc");

  const getRegions = () => {
    axios.get(`http://localhost:3000/api/regions`).then((response) => {
      setRegions(response.data);
      console.log(response.data);
    });
  };
  /*useEffect(() => {
    getRegions();
    console.log(regions);
  }, []);*/

  const getEarthquakes = () => {
    axios
      .get(
        `http://localhost:3000/api/earthquake?minlat=${minLat}&maxlat=${maxLat}&minlon=${minLon}&maxlon=${maxLon}&start=${startDate}&end=${endDate}&limit=${limit}&orderby=${orderBy}&minmag=${minMag}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setRows(response.data);
      });
  };
  useEffect(() => {
    getEarthquakes();
  }, []);

  return (
    <Paper
      sx={{
        boxShadow: "3px 2px 2px 3px",
        borderRadius: "8px",
        width: "100%",
        overflow: "hidden",
        background:
          localStorage.getItem("theme") == "light" ? "white" : "transparent",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 2000,
          background:
          localStorage.getItem("theme") == "light" ? "white" : "transparent",
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{
            background:
            localStorage.getItem("theme") == "light" ? "white" : "transparent",
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any, index: any) => {
                var date =
                  row.date != "null"
                    ? new Date(row.date).toLocaleString()
                    : "null";

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.eventID}
                    id={row.eventID}
                  >
                    <TableCell align="center">
                      {" "}
                      {row.province == null ? row.location : row.province}
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      {row.district == null ? row.location : row.district}
                    </TableCell>
                    <TableCell align="center">{row.magnitude}</TableCell>
                    <TableCell align="center">{date}</TableCell>
                    <TableCell align="center">{row.depth} KM</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
