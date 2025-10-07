import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid
} from "@mui/material";

const View = ({ selectedData, getExperienceColor, getPerformanceColor, getEmployeeStatusColor }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Employee ID:</Typography>
        <Typography>{selectedData.id}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Employee Name:</Typography>
        <Typography>{selectedData.name}</Typography>
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
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Email:</Typography>
        <Typography>{selectedData.email}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Phone:</Typography>
        <Typography>{selectedData.phone}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Experience:</Typography>
        <Typography sx={{ color: getExperienceColor(selectedData.experience), fontWeight: 600 }}>
          {selectedData.experience} years
        </Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Performance:</Typography>
        <Box className={`hrms-badge ${getPerformanceColor(selectedData.performance)}`}>
          {selectedData.performance}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Employee Status:</Typography>
        <Box className={`hrms-badge ${getEmployeeStatusColor(selectedData.employeeStatus)}`}>
          {selectedData.employeeStatus}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Join Date:</Typography>
        <Typography>{new Date(selectedData.joinDate).toLocaleDateString()}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Last Promotion:</Typography>
        <Typography>{new Date(selectedData.lastPromotion).toLocaleDateString()}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Projects Completed:</Typography>
        <Typography sx={{ color: "#10b981", fontWeight: 600 }}>{selectedData.projects}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Skills:</Typography>
        <Typography>{Array.isArray(selectedData.skills) ? selectedData.skills.join(", ") : selectedData.skills}</Typography>
      </Grid>
    </Grid>
  );
};

export default View;
