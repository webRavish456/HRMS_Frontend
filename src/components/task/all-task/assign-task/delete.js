"use client";
import React from "react";
import { Button } from "@mui/material";

const DeleteAssign = ({ handleDelete, isDeleting, handleClose }) => {
  return (
    <div>
      <h3>Are you sure you want to delete this Assign Task?</h3>
      <Button
        onClick={handleDelete}
        variant="contained"
        color="error"
        disabled={isDeleting}
        style={{ marginRight: "10px" }}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
      <Button onClick={handleClose} variant="outlined">Cancel</Button>
    </div>
  );
};

export default DeleteAssign;
