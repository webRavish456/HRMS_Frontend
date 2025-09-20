import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid
} from "@mui/material";

const View = ({ selectedData, getCategoryColor, getStatusColor }) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee Name</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.employeeName}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee ID</Typography>
          <Typography variant="body1">{selectedData.employeeId}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Department</Typography>
          <Typography variant="body1">{selectedData.department}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Position</Typography>
          <Typography variant="body1">{selectedData.position}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reward Category</Typography>
          <Chip
            label={selectedData.rewardCategory}
            size="small"
            color={getCategoryColor(selectedData.rewardCategory)}
            variant="outlined"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reward Amount/Value</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#059669" }}>{selectedData.rewardAmount}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reward Date</Typography>
          <Typography variant="body1">{new Date(selectedData.rewardDate).toLocaleDateString()}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Approval Status</Typography>
          <Chip
            label={selectedData.approvalStatus}
            size="small"
            color={getStatusColor(selectedData.approvalStatus)}
          />
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Performance Period</Typography>
          <Typography variant="body1">{selectedData.performancePeriod}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Awarded By</Typography>
          <Typography variant="body1">{selectedData.awardedBy}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reward Points</Typography>
          <Typography variant="body1">{selectedData.points}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Achievement Description</Typography>
          <Typography variant="body1">{selectedData.achievement}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Detailed Description</Typography>
          <Typography variant="body1">{selectedData.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
