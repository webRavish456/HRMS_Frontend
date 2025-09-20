import React from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";

const DeleteTicket = ({ confirmDelete, handleClose }) => {
  return (
    <Box>
      <Typography>Are you sure you want to delete this ticket?</Typography>
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={confirmDelete} color="error" variant="contained">Delete</Button>
      </Box>
    </Box>
  );
};

export default DeleteTicket;
