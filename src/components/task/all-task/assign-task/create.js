"use client";
import React, { useState } from "react";
import { Button, TextField , MenuItem} from "@mui/material";

const CreateAssign = ({ handleCreate, handleClose }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [Status, setStatus]= useState("pending")
  const handleSubmit = () => {
    handleCreate({ taskName, priority, Status });

  };

  return (
    <div>
      <h3>Create Assign Task</h3>
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
      <TextField 
      select
      lable="Status"
      fullWidth
      margin="normal"
      value={Status}
      onChange={(e)=> setStatus(e.target.value)}
      >
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="complete">Completed</MenuItem>
      </TextField>
      <Button onClick={handleSubmit} variant="contained" color="primary" style={{ marginRight: "10px" }}>
        Save
      </Button>
      <Button onClick={handleClose} variant="outlined">Cancel</Button>
    </div>
  );
};

export default CreateAssign;
