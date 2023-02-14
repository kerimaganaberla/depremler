import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chip, TablePagination } from "@mui/material";
import data from "../lib/constants/regions-data.json";
import EarthMenu from "./HorizontalMenu/earth-menu";
export default function EarthquakeTable() {
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
    var yesterday = new Date(Date.now() - 864e5 * 10);

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
  const [earthquakes, setEarthquakes] = useState<any>([]);
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
  const [numberOfDays, setNumberOfDays] = useState<any>(1);

  const getRegions = () => {
    axios
      .get(`https://depremolabilir-api.vercel.app/regions`)
      .then((response) => {
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
        `https://depremolabilir-api.vercel.app/earthquake?minlat=${minLat}&maxlat=${maxLat}&minlon=${minLon}&maxlon=${maxLon}&start=${startDate}&end=${endDate}&limit=${limit}&orderby=${orderBy}&minmag=${minMag}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setEarthquakes(response.data);
      });
  };

  const getTimeDifference = () => {
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    setNumberOfDays(Difference_In_Days);
    return Difference_In_Days;
  };

  useEffect(() => {
    getEarthquakes();
    getTimeDifference();
  }, []);

  const getCityEarthquakes = () => {
    var tempResult: any = {};

    for (let { province } of earthquakes)
      tempResult[province] = {
        province,
        numberOfEarthquake: tempResult[province]
          ? tempResult[province].numberOfEarthquake + 1
          : 1,
      };
    let result = Object.values(tempResult).sort(
      (a: any, b: any) => b.numberOfEarthquake - a.numberOfEarthquake
    );
    console.log(result);
    return result;
  };
  return (
    <div>
      <EarthMenu data={getCityEarthquakes()} title={numberOfDays} />

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
          {earthquakes
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((earthquake: any, index: any) => {
              var date =
                earthquake.date != "null"
                  ? new Date(earthquake.date).toLocaleString()
                  : "null";

              return (
                <tr key={index} id={earthquake.eventID}>
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
        count={earthquakes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: "grey" }}
      />
    </div>
  );
}
