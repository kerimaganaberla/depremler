import axios from "axios";
import React, { useEffect, useState } from "react";
import EarthquakeTable from "@/components/earthquake-table";
import dynamic from "next/dynamic";
import data from "../lib/constants/regions-data.json";
import EarthMenu from "@/components/HorizontalMenu/earth-menu";
import EarthSelect from "@/components/earth-select";
const EarthMap = dynamic(() => import("@/components/earth-map"), {
  ssr: false,
});
export default function Home() {
  const arrangeDate = (dates: any) => {
    var today = dates;
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
  const [earthquakes, setEarthquakes] = useState<any>([]);
  const [regions, setRegions] = useState<any>(data);
  const [region, setRegion] = useState<any>(["Türkiye"]);
  const [regionX, setRegionX] = useState<any>([]);
  const [startDate, setStartDate] = useState<any>(getYesterday());
  const [endDate, setEndDate] = useState<any>(getToday());
  const [minLat, setMinLat] = useState<any>(35.2);
  const [maxLat, setMaxLat] = useState<any>(42.34);
  const [minLon, setMinLon] = useState<any>(25.14);
  const [maxLon, setMaxLon] = useState<any>(45.34);
  const [minMag, setMinMag] = useState<any>(0);
  const [minMagX, setMinMagX] = useState<any>(0);
  const [limit, setLimit] = useState<any>(10000);
  const [orderBy, setOrderBy] = useState<any>("timedesc");
  const [numberOfDays, setNumberOfDays] = useState<any>(1);
  const [numberOfDaysX, setNumberOfDaysX] = useState<any>(1);
  const [clickedChip, setClickedChip] = useState<any>([
    { province: "province", numberofEarthquake: "numberOfEarthquake" },
  ]);
  const [filteredEarthquakes, setFilteredEarthquakes] = useState<any>([]);
  /* const getRegions = () => {
    axios
      .get(`https://depremler-api.vercel.app/regions`)
      .then((response) => {
        setRegions(response.data);
        
        
        
        (response.data);
      });
  };
useEffect(() => {
    getRegions();
    console.log(regions);
  }, []);*/

  const getEarthquakes = () => {
    axios
      .get(
        `https://depremler-api.vercel.app/earthquake?minlat=${minLat}&maxlat=${maxLat}&minlon=${minLon}&maxlon=${maxLon}&start=${startDate}&end=${endDate}&limit=${limit}&orderby=${orderBy}&minmag=${minMag}`,
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

    return result;
  };

  const filterCityEarthquakes = async (city: string) => {
    const filteredCity = await earthquakes.filter(function (earthquake: any) {
      return earthquake.province == city;
    });
    setFilteredEarthquakes(filteredCity);
  };

  const getFromChip = (e: any) => {
    var data = e.target.innerText;
    var province = data.split(":")[0].trim();
    var numberOfEarthquake = data.split(":")[1].trim();

    var data: any = [
      { province: province, numberofEarthquake: numberOfEarthquake },
    ];
    filterCityEarthquakes(province);
    setClickedChip(data);
  };

  function getRegionValuesAsList(item: any) {
    var valueList = item[0].split(",");
    return valueList;
  }
  function getSubstractedStartDate(date: any, dayNumber: any) {
    var d = new Date(date);

    d.setDate(d.getDate() - dayNumber);

    return arrangeDate(d);
  }
  const onSearchClick = (e: any) => {
    e.preventDefault();

    getEarthquakes();
  };

  /* useEffect(() => {
    console.log(filteredEarthquakes);
  }, [clickedChip]);*/

  useEffect(() => {
    getEarthquakes();
    getTimeDifference();
  }, []);

  useEffect(() => {
    setMinLat(parseFloat(region[1]));
    setMaxLat(parseFloat(region[2]));
    setMinLon(parseFloat(region[3]));
    setMaxLon(parseFloat(region[4]));
  }, [region]);

  useEffect(() => {
    setStartDate(getSubstractedStartDate(getToday(), numberOfDays));
  }, [numberOfDays]);
  return (
    <>
      <EarthMenu
        data={getCityEarthquakes()}
        title={numberOfDays}
        region={region[0]}
        minMag={minMag}
        onClick={getFromChip}
      />
      <EarthMap data={earthquakes} />
      <EarthSelect
        regions={regions}
        onMagnitudeSelect={(e: any) => setMinMag(e.target.value)}
        onRegionSelect={(e: any) =>
          setRegion(getRegionValuesAsList([e.target.value]))
        }
        onDaysSelect={(e: any) => setNumberOfDays(e.target.value)}
        onSearchClick={onSearchClick}
      />
      <EarthquakeTable data={earthquakes} />
    </>
  );
}
