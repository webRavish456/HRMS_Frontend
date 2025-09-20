import React from "react";
import {
  Box,
  Typography
} from "@mui/material";
import { AccessTime, LocationOn } from "@mui/icons-material";

const PunchConfirmation = ({ punchType, currentTime, location }) => {
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Are you sure you want to {punchType === "in" ? "punch in" : "punch out"} at this time?
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
        <AccessTime sx={{ fontSize: 20, color: "#3b82f6" }} />
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {currentTime.toLocaleTimeString()}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <LocationOn sx={{ fontSize: 20, color: "#10b981" }} />
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {location}
        </Typography>
      </Box>
    </Box>
  );
};

export default PunchConfirmation;
