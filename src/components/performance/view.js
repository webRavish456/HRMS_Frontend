import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid,
  LinearProgress
} from "@mui/material";

const View = ({ selectedData, getRatingColor }) => {
  const getRatingValue = (rating) => {
    switch (rating) {
      case "Excellent": return 100;
      case "Good": return 80;
      case "Average": return 60;
      case "Below Average": return 40;
      case "Poor": return 20;
      default: return 0;
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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Performance Rating</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: 1 }}>
            <Chip
              label={selectedData.rating}
              size="small"
              color={getRatingColor(selectedData.rating)}
            />
            <Box sx={{ width: "100px" }}>
              <LinearProgress
                variant="determinate"
                value={getRatingValue(selectedData.rating)}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: "#e5e7eb",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: getRatingColor(selectedData.rating) === "success" ? "#10b981" : 
                                   getRatingColor(selectedData.rating) === "warning" ? "#f59e0b" : "#ef4444"
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reviewer</Typography>
          <Typography variant="body1">{selectedData.reviewer}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Review Date</Typography>
          <Typography variant="body1">{selectedData.reviewDate}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Goals Achieved</Typography>
          <Typography variant="body1">{selectedData.goalsAchieved}</Typography>
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