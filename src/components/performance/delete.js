import React from "react";
import { Button } from "@mui/material";

const DeletePerformance = ({ handleDelete, isDeleting, handleClose }) => {
  return (
    <div>
      <p>Are you sure you want to delete this branch?</p>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent:"flex-end" }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Yes, Delete"}
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </div>
    </div>
  );
};

export default DeletePerformance ;
