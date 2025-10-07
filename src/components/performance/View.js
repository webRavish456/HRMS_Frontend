import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid,
  LinearProgress
} from "@mui/material";

const View = ({ selectedData }) => {
  const getAppraisalColor = (appraisal) => {
    switch (appraisal) {
      case 'Exceeds Expectations': return 'success';
      case 'Meets Expectations': return 'primary';
      case 'Below Expectations': return 'error';
      default: return 'default';
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee Name</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.employee}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Department</Typography>
          <Typography variant="body1">{selectedData.department}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Position</Typography>
          <Typography variant="body1">{selectedData.position}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Review Period</Typography>
          <Typography variant="body1">{selectedData.reviewPeriod}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Appraisal</Typography>
          <Box sx={{ marginTop: 1 }}>
            <Chip
              label={selectedData.appraisal}
              size="small"
              color={getAppraisalColor(selectedData.appraisal)}
            />
          </Box>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reviewer</Typography>
          <Typography variant="body1">{selectedData.reviewer}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Last Review</Typography>
          <Typography variant="body1">{selectedData.lastReview}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Goals Progress</Typography>
          <Typography variant="body1">{selectedData.completedGoals} / {selectedData.goals} goals completed</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Areas for Improvement</Typography>
          <Typography variant="body1">{selectedData.areasForImprovement}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Comments</Typography>
          <Typography variant="body1">{selectedData.comments}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;