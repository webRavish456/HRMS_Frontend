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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Resignation Date</Typography>
          <Typography variant="body1">{new Date(selectedData.resignationDate).toLocaleDateString()}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Last Working Date</Typography>
          <Typography variant="body1">{new Date(selectedData.lastWorkingDate).toLocaleDateString()}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Notice Period</Typography>
          <Typography variant="body1">{selectedData.noticePeriod}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Approval Status</Typography>
          <Chip
            label={selectedData.approval}
            color={getStatusColor(selectedData.approval)}
            size="small"
          />
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Resignation Reason</Typography>
          <Typography variant="body1">{selectedData.resignationReason}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Final Settlement</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#059669" }}>{selectedData.finalSettlement}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Pending Dues</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#dc2626" }}>{selectedData.pendingDues}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Company Assets</Typography>
          <Typography variant="body1">{selectedData.companyAssets}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee Feedback</Typography>
          <Typography variant="body1">{selectedData.feedback}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>HR Remarks</Typography>
          <Typography variant="body1">{selectedData.hrRemarks}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
