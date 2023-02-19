import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
import { useTheme } from "next-themes";
const icon = L.icon({
  iconUrl: "./location.png",
  iconSize: [25, 25],
});
const iconNoData = L.icon({
  iconUrl: "./nodata.png",
  iconSize: [25, 25],
});
function addHours(date: any, hours: any) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date.toLocaleString();
}
export function ChangeView(props: any) {
  const map = useMap();
  map.setView(props.coords, 6);
  return null;
}

export default function Map(props: any) {
  const center: any =
    typeof props.center != "undefined" || typeof props.center != null
      ? props.center
      : [38.734802, 35.467987];
  console.log(props.center);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <MapContainer
      id={props.id}
      center={center}
      zoom={100}
      style={{
        height: props.height,
        borderRadius: "25px",
        marginTop: "20px",
        zIndex: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={
          resolvedTheme == "dark"
            ? "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }
      />
      {props.data[0] &&
        props.data[0] &&
        props.data.map((item: any, index: any) => {
          var date = addHours(new Date(item.date), 3);

          return (
            <Marker
              key={item.eventID == "null" ? index : item.eventID}
              position={
                item.latitude != "null" && item.longitude != "null"
                  ? [item.latitude, item.longitude]
                  : center
              }
              icon={
                item.latitude != "null" && item.longitude != "null"
                  ? icon
                  : iconNoData
              }
            >
              <Popup>
                <h3>
                  <b> {item.province}</b>
                </h3>{" "}
                <hr />
                <br /> <b>Büyüklük: </b> {item.magnitude} <br />
                <b>Derinlik: </b> {item.depth} KM <br /> <b>Tarih: </b> {date}{" "}
                <br />
              </Popup>
            </Marker>
          );
        })}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
