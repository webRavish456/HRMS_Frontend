import React from "react";
import {
  Box,
  Typography,
  Grid
} from "@mui/material";

const View = ({ selectedData }) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Holiday Name</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.holidayName}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Holiday Type</Typography>
          <Typography variant="body1">{selectedData.holidayType}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Holiday Date</Typography>
          <Typography variant="body1">{selectedData.holidayDate}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Branch</Typography>
          <Typography variant="body1">{selectedData.branch}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Created Date</Typography>
          <Typography variant="body1">{selectedData.createdDate}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Description</Typography>
          <Typography variant="body1">{selectedData.description || "No description provided"}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
