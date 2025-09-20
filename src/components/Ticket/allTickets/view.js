import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const ViewTicket = ({ selectedTicket, handleClose, getStatusColor, getPriorityColor }) => {
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
        <Grid size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Ticket ID:</Typography>
            <Typography>{selectedTicket.id || "N/A"}</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Title:</Typography>
            <Typography>{selectedTicket.title || "N/A"}</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Description:</Typography>
            <Typography>{selectedTicket.description || "N/A"}</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Priority:</Typography>
            <Box className={`hrms-badge ${getPriorityColor ? getPriorityColor(selectedTicket.priority) : 'hrms-badge-warning'}`}>
              {selectedTicket.priority || "N/A"}
            </Box>
          </Box>
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Status:</Typography>
            <Box className={`hrms-badge ${getStatusColor ? getStatusColor(selectedTicket.status) : 'hrms-badge-success'}`}>
              {selectedTicket.status || "N/A"}
            </Box>
          </Box>
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Assignee:</Typography>
            <Typography>{selectedTicket.assignee || "N/A"}</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Due Date:</Typography>
            <Typography>{selectedTicket.dueDate || "N/A"}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewTicket;
