import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import LeftArrow from "./left-arrow";
import RightArrow from "./right-arrow";
import EarthWarningChip from "../Chips/earth-warning-chip";
import EarthErrorChip from "../Chips/earth-danger-chip";

function EarthMenu(props: any) {
  return (
    <div>
      <h2 style={{ marginBottom: "10px" }}>Son {props.title} günde</h2>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {props.data.map((item: any, index: any) => {
          if (item.numberOfEarthquake >= 4) {
            return (
              <EarthErrorChip
                key={index}
                label={item.province + " : " + item.numberOfEarthquake}
                onClick={props.onClick}
              />
            );
          } else {
            return (
              <EarthWarningChip
                key={index}
                label={item.province + " : " + item.numberOfEarthquake}
                onClick={props.onClick}
              />
            );
          }
        })}
      </ScrollMenu>
    </div>
  );
}

export default EarthMenu;
