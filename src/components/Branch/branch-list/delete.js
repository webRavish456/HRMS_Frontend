import React from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";

const DeleteBranch = ({ selectedBranch, handleDelete, handleClose }) => {
  return (
    <Box>
      <Typography>
        Are you sure you want to delete the branch "{selectedBranch?.branchName}"?
      </Typography>
      <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
          Cancel
        </button>
        <button className="hrms-btn hrms-btn-error" onClick={handleDelete}>
          Delete
        </button>
      </Box>
    </Box>
  );
};

export default DeleteBranch;