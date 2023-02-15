import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import L from "leaflet";
const icon = L.icon({
  iconUrl: "./location.png",
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
  const center: any = [38.734802, 35.467987];

  return (
    <MapContainer
      center={center}
      zoom={100}
      style={{ height: "100vh", borderRadius: "25px", marginTop: "20px" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.data[0] &&
        props.data[0] &&
        props.data.map((item: any, index: any) => {
          var date = addHours(new Date(item.date), 3);

          return (
            <Marker
              key={item.eventID}
              position={[item.latitude, item.longitude]}
              icon={icon}
            >
              <Popup>
                {console.log(date)}
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
