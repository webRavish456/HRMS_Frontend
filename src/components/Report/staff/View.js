import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid
} from "@mui/material";

const View = ({ selectedData, getPerformanceColor }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Staff ID:</Typography>
        <Typography>{selectedData.id}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Staff Name:</Typography>
        <Typography>{selectedData.staffName}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Branch:</Typography>
        <Typography>{selectedData.branch}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Department:</Typography>
        <Typography>{selectedData.department}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Position:</Typography>
        <Typography>{selectedData.position}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Performance:</Typography>
        <Box className={`hrms-badge ${getPerformanceColor(selectedData.performance)}`}>
          {selectedData.performance}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Salary:</Typography>
        <Typography sx={{ color: "#059669", fontWeight: 600 }}>{selectedData.salary}</Typography>
      </Grid>
    </Grid>
  );
};

export default View;
