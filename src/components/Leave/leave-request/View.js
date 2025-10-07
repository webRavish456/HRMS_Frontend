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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee Name</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.employeeName}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Leave Type</Typography>
          <Typography variant="body1">{selectedData.leaveType}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Leave From</Typography>
          <Typography variant="body1">{selectedData.leaveFrom}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Leave To</Typography>
          <Typography variant="body1">{selectedData.leaveTo}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Duration</Typography>
          <Typography variant="body1">{selectedData.duration} Days</Typography>
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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Applied Date</Typography>
          <Typography variant="body1">{selectedData.appliedDate}</Typography>
        </Box>
        {selectedData.approvedBy && (
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Approved By</Typography>
            <Typography variant="body1">{selectedData.approvedBy}</Typography>
          </Box>
        )}
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reason</Typography>
          <Typography variant="body1">{selectedData.reason || "No reason provided"}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
