import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
export default function PinColors() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "12px" }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={1}>
            <Image
              src={"/blue_location.png"}
              alt={"blue location"}
              width={40}
              height={40}
            />
            <span
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="text-xs font-medium text-blue-400 "
            >
              {"> 0"}
            </span>
          </Grid>
          <Grid item xs={1}>
            <Image
              src={"/green_location.png"}
              alt={"green location"}
              width={40}
              height={40}
            />
            <span
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="text-xs font-medium text-green-400 "
            >
              {"> 2"}
            </span>
          </Grid>
          <Grid item xs={1}>
            <Image
              src={"/yellow_location.png"}
              alt={"yellow location"}
              width={40}
              height={40}
            />
            <span
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="text-xs font-medium text-yellow-400 "
            >
              {"> 3"}
            </span>
          </Grid>
          <Grid item xs={1}>
            <Image
              src={"/orange_location.png"}
              alt={"orange location"}
              width={40}
              height={40}
            />
            <span
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="text-xs font-medium text-orange-400 "
            >
              {"> 4"}
            </span>
          </Grid>
          <Grid item xs={1}>
            <Image
              src={"/red_location.png"}
              alt={"red location"}
              width={40}
              height={40}
            />
            <span
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              className="text-xs font-medium text-red-400 "
            >
              {"> 5"}
            </span>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
