"use client";

import { Box, Typography, Button } from "@mui/material";

export default function DeleteStatus({ handleDelete, handleClose }) {
  return (
    <Box sx={{ p: 2, minWidth: 400, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Confirm Delete
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Are you sure you want to delete this Leave Status?
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleDelete}
        >
          Yes, Delete
        </Button>
        <Button 
          variant="outlined" 
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}