import React from "react";
import { Box, Typography } from "@mui/material";

const Delete = ({ selectedEmployee, handleDelete, handleClose, isDeleting }) => {
  return (
    <Box sx={{ padding: "1rem 0" }}>
      <Typography variant="body1" sx={{ mb: 2, color: "#374151", fontSize: "0.95rem" }}>
        Are you sure you want to delete the employee{" "}
        <Typography component="span" sx={{ fontWeight: 600, color: "#1f2937" }}>
          "{selectedEmployee?.name}"
        </Typography>
        ?
      </Typography>
      <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="hrms-btn hrms-btn-secondary" onClick={handleClose} disabled={isDeleting}>
          Cancel
        </button>
        <button 
          className="hrms-btn hrms-btn-danger" 
          onClick={handleDelete} 
          disabled={isDeleting}
          style={{ backgroundColor: '#dc2626', color: 'white', border: '1px solid #dc2626' }}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </Box>
    </Box>
  );
};

export default Delete;
