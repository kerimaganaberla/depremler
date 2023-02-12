import axios from "axios";
import React, { useEffect } from "react";

export default function EarthquakeTable() {
  const [earthquakes, setEarthquakes] = React.useState<any>([]);
  const getEarthquakes = () => {
    axios
      .get(
        "https://deprem.afad.gov.tr/apiv2/event/filter?minlat=25&maxlat=42&minlon=25&maxlon=30&start=2020-09-14%2010:00:00&end=2020-09-16%2010:00:00"
      )
      .then((response) => {
        setEarthquakes(response.data);
        console.log(response.data);
      });
  };
  useEffect(() => {
    getEarthquakes();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Şehir</th>
          <th>Büyüklük</th>
          <th>Bölge</th>
        </tr>
        {earthquakes.map((earthquake: any) => {
          return (
            <tr>
              <td>{earthquake.province}</td>
              <td>{earthquake.district}</td>
              <td>{earthquake.magnitude}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
