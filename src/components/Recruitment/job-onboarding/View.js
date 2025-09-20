import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid
} from "@mui/material";

const View = ({ selectedData, getStatusColor }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Onboarding ID:</Typography>
        <Typography>{selectedData.id}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Status:</Typography>
        <Box className={`hrms-badge ${getStatusColor(selectedData.status)}`}>
          {selectedData.status}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Candidate Name:</Typography>
        <Typography>{selectedData.candidateName}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Job Title:</Typography>
        <Typography>{selectedData.jobTitle}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Department:</Typography>
        <Typography>{selectedData.department}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Start Date:</Typography>
        <Typography>{selectedData.startDate}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Assigned To:</Typography>
        <Typography>{selectedData.assignedTo}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Documents:</Typography>
        <Box className={`hrms-badge ${
          selectedData.documents === 'Completed' ? 'hrms-badge-success' : 'hrms-badge-warning'
        }`}>
          {selectedData.documents}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Orientation:</Typography>
        <Box className={`hrms-badge ${
          selectedData.orientation === 'Completed' ? 'hrms-badge-success' : 'hrms-badge-warning'
        }`}>
          {selectedData.orientation}
        </Box>
      </Grid>
      {selectedData.notes && (
        <Grid size={{xs:12}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Notes:</Typography>
          <Typography>{selectedData.notes}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default View;
