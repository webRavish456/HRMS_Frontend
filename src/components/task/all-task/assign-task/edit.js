"use client";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const EditAssign = ({ editData, handleUpdate, handleClose }) => {
  const [taskName, setTaskName] = useState(editData?.taskName || "");
  const [priority, setPriority] = useState(editData?.priority || "");

  const handleSubmit = () => {
    handleUpdate({ ...editData, taskName, priority });
  };

  return (
    <div>
      <h3>Edit Assign Task</h3>
      <TextField
        label="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained" color="primary" style={{ marginRight: "10px" }}>
        Update
      </Button>
      <Button onClick={handleClose} variant="outlined">Cancel</Button>
    </div>
  );
};

export default EditAssign;
