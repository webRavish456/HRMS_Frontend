import React from "react";
import {
  Typography
} from "@mui/material";

const Delete = ({ selectedData }) => {
  return (
    <Typography>
      Are you sure you want to delete the performance record for {selectedData?.employee}?
    </Typography>
  );
};

export default Delete;