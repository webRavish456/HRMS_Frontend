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
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Offer Letter ID:</Typography>
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
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Salary:</Typography>
        <Typography>{selectedData.salary}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Start Date:</Typography>
        <Typography>{selectedData.startDate}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Response:</Typography>
        <Box className={`hrms-badge ${
          selectedData.response === 'Accepted' ? 'hrms-badge-success' : 
          selectedData.response === 'Rejected' ? 'hrms-badge-error' : 'hrms-badge-neutral'
        }`}>
          {selectedData.response}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Sent Date:</Typography>
        <Typography>{selectedData.sentDate || "Not sent"}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Response Date:</Typography>
        <Typography>{selectedData.responseDate || "No response yet"}</Typography>
      </Grid>
      {selectedData.benefits && (
        <Grid size={{xs:12}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Benefits & Perks:</Typography>
          <Typography>{selectedData.benefits}</Typography>
        </Grid>
      )}
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
