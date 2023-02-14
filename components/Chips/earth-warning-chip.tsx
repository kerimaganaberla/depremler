import React from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { Chip } from "@mui/material";
export default function EarthWarningChip(props: any) {
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
      color="warning"
      icon={<WarningIcon />}
      label={props.label}
      onClick={props.onClick}
    />
  );
}
