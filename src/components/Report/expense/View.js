import React from "react";
import {
  Box,
  Typography,
  Chip,
  Grid
} from "@mui/material";

const View = ({ selectedData, getTypeColor, getStatusColor }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Expense ID:</Typography>
        <Typography>{selectedData.id}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Expense Name:</Typography>
        <Typography>{selectedData.name}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Type:</Typography>
        <Box className={`hrms-badge ${getTypeColor(selectedData.type)}`}>
          {selectedData.type}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Amount:</Typography>
        <Typography sx={{ color: "#dc2626", fontWeight: 600 }}>₹{selectedData.amount.toLocaleString()}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Category:</Typography>
        <Typography>{selectedData.category}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Branch:</Typography>
        <Typography>{selectedData.branch}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Date:</Typography>
        <Typography>{new Date(selectedData.date).toLocaleDateString()}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Vendor:</Typography>
        <Typography>{selectedData.vendor}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Description:</Typography>
        <Typography>{selectedData.description}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Payment Method:</Typography>
        <Typography>{selectedData.paymentMethod}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Due Date:</Typography>
        <Typography>{new Date(selectedData.dueDate).toLocaleDateString()}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Paid Date:</Typography>
        <Typography>{new Date(selectedData.paidDate).toLocaleDateString()}</Typography>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Status:</Typography>
        <Box className={`hrms-badge ${getStatusColor(selectedData.status)}`}>
          {selectedData.status}
        </Box>
      </Grid>
    </Grid>
  );
};

export default View;
