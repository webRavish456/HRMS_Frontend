import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const ViewTicket = ({ selectedTicket, getStatusColor, getPriorityColor }) => {
  if (!selectedTicket) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
        <Typography>No ticket selected</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
      <Grid container spacing={2}>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Ticket Code:</Typography>
          <Typography variant="subtitle2" sx={{ color: "#3b82f6", fontWeight: 600 }}>
            {selectedTicket.code || "N/A"}
          </Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Status:</Typography>
          <Box className={`hrms-badge ${getStatusColor ? getStatusColor(selectedTicket.status) : 'hrms-badge-success'}`}>
            {selectedTicket.status || "N/A"}
          </Box>
        </Grid>
        <Grid size={{xs:12}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Title:</Typography>
          <Typography>{selectedTicket.title || "N/A"}</Typography>
        </Grid>
        <Grid size={{xs:12}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Description:</Typography>
          <Typography>{selectedTicket.description || "N/A"}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Employee:</Typography>
          <Typography>{selectedTicket.employee || "N/A"}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Category:</Typography>
          <Typography>{selectedTicket.category || "N/A"}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Priority:</Typography>
          <Box className={`hrms-badge ${getPriorityColor ? getPriorityColor(selectedTicket.priority) : 'hrms-badge-warning'}`}>
            {selectedTicket.priority || "N/A"}
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Assigned To:</Typography>
          <Typography>{selectedTicket.assignedTo || "N/A"}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Due Date:</Typography>
          <Typography>{selectedTicket.endDate || "N/A"}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Created Date:</Typography>
          <Typography>{selectedTicket.createdDate || "N/A"}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewTicket;
