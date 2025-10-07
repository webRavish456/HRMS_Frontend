import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid
} from "@mui/material";

const View = ({ selectedData, getStatusColor }) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Job ID</Typography>
          <Typography variant="body1">{selectedData.id}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Job Title</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.jobTitle}</Typography>
        </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Department</Typography>
            <Typography variant="body1">{selectedData.department}</Typography>
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Branch</Typography>
            <Typography variant="body1">{selectedData.branch}</Typography>
          </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Location</Typography>
          <Typography variant="body1">{selectedData.location}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Experience Required</Typography>
          <Typography variant="body1">{selectedData.experience}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Salary Range</Typography>
          <Typography variant="body1">{selectedData.salary}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Status</Typography>
          <Chip
            label={selectedData.status}
            size="small"
            color={getStatusColor(selectedData.status)}
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Applications</Typography>
          <Typography variant="body1">{selectedData.applications}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Job Description</Typography>
          <Typography variant="body1">{selectedData.description}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Requirements</Typography>
          <Typography variant="body1">{selectedData.requirements}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
