import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid
} from "@mui/material";

const View = ({ selectedData }) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Expense ID</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.id}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Expense Name</Typography>
          <Typography variant="body1">{selectedData.name}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee</Typography>
          <Typography variant="body1">{selectedData.employee}</Typography>
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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Claim Type</Typography>
          <Typography variant="body1">{selectedData.claimType}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Approval Status</Typography>
          <Typography variant="body1">{selectedData.approvalStatus}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Type</Typography>
          <Typography variant="body1">{selectedData.type}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Amount</Typography>
          <Typography variant="body1" sx={{ color: "#ef4444", fontWeight: 600 }}>
            ₹{selectedData.amount?.toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Category</Typography>
          <Typography variant="body1">{selectedData.category}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Date</Typography>
          <Typography variant="body1">{selectedData.date ? new Date(selectedData.date).toLocaleDateString() : "Not Set"}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Payment Mode</Typography>
          <Typography variant="body1">{selectedData.paymentMode}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Vendor</Typography>
          <Typography variant="body1">{selectedData.vendor}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Project</Typography>
          <Typography variant="body1">{selectedData.project}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Description</Typography>
          <Typography variant="body1">{selectedData.description || "No description provided"}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
