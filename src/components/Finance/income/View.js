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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Income ID</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.id}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Income Name</Typography>
          <Typography variant="body1">{selectedData.name}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Client</Typography>
          <Typography variant="body1">{selectedData.client}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Project</Typography>
          <Typography variant="body1">{selectedData.project}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Branch</Typography>
          <Typography variant="body1">{selectedData.branch}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Payment Method</Typography>
          <Typography variant="body1">{selectedData.paymentMethod}</Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Type</Typography>
          <Typography variant="body1">{selectedData.type}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Amount</Typography>
          <Typography variant="body1" sx={{ color: "#10b981", fontWeight: 600 }}>
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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Due Date</Typography>
          <Typography variant="body1">{selectedData.dueDate ? new Date(selectedData.dueDate).toLocaleDateString() : "Not Set"}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Received Date</Typography>
          <Typography variant="body1" sx={{ color: selectedData.receivedDate ? "#10b981" : "#6b7280", fontWeight: 600 }}>
            {selectedData.receivedDate ? new Date(selectedData.receivedDate).toLocaleDateString() : "Not Received"}
          </Typography>
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
