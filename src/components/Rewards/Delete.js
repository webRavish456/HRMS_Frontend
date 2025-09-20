import React from "react";
import {
  Typography
} from "@mui/material";

const Delete = ({ selectedData }) => {
  return (
    <Typography>
      Are you sure you want to delete the reward record for {selectedData?.employeeName}?
    </Typography>
  );
};

export default Delete;
