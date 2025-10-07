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
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Employee</Typography>
          <Typography variant="body1" sx={{ fontWeight: 600 }}>{selectedData.employee}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Category</Typography>
          <Typography variant="body1">{selectedData.category}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Amount</Typography>
          <Typography variant="body1" sx={{ color: "#ef4444", fontWeight: 600 }}>
            ₹{selectedData.amount?.toLocaleString()}
          </Typography>
        </Box>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Date</Typography>
          <Typography variant="body1">{selectedData.date ? new Date(selectedData.date).toLocaleDateString() : "Not Set"}</Typography>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: "#6b7280" }}>Status</Typography>
          <Chip
            label={selectedData.status}
            size="small"
            sx={{
              backgroundColor: getStatusColor(selectedData.status).backgroundColor,
              color: getStatusColor(selectedData.status).color
            }}
          />
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
