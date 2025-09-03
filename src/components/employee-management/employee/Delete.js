import React from "react";
import { Button, Typography, Box } from "@mui/material";

const DeleteEmp = ({ employee, handleDelete, handleClose }) => {
  if (!employee) return null;

  return (
    <Box>
      <Typography>Are you sure you want to delete <strong>{employee.firstName} {employee.lastName}</strong>?</Typography>
      <Box sx={{ mt: 2, textAlign: "right" }}>
        <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
        <Button variant="contained" color="error" onClick={() => handleDelete(employee.id)}>Delete</Button>
      </Box>
    </Box>
  );
};

export default DeleteEmp;
