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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee ID</Typography>
          <Typography variant="body1">{selectedData.employeeId}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Request Date</Typography>
          <Typography variant="body1">{selectedData.requestDate}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Reason</Typography>
          <Typography variant="body1">{selectedData.reason || "No reason provided"}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Punched In</Typography>
          <Typography variant="body1">{selectedData.punchedIn}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Punched Out</Typography>
          <Typography variant="body1">{selectedData.punchedOut}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Status</Typography>
          <Chip
            label={selectedData.status}
            size="small"
            color={getStatusColor(selectedData.status)}
          />
        </Box>
      </Grid>
      {selectedData.approvedBy && (
        <Grid size={{xs:12, md:6}}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Approved By</Typography>
            <Typography variant="body1">{selectedData.approvedBy}</Typography>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default View;
