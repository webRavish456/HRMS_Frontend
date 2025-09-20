import React from "react";
import {
  Typography
} from "@mui/material";

const Delete = ({ selectedData }) => {
  return (
    <Typography>
      Are you sure you want to delete the offer letter for "{selectedData?.candidateName}"?
    </Typography>
  );
};

export default Delete;
