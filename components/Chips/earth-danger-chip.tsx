import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { Chip } from "@mui/material";
export default function EarthErrorChip(props: any) {
  return (
    <Chip
      sx={{
        minWidth: "200px",
        height: "50px",
        fontSize: "20px",
        borderRadius: "25px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      color="error"
      icon={<ErrorIcon />}
      label={props.label}
    />
  );
}
