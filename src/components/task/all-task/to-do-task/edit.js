"use client";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const EditTodo = ({ editData, handleUpdate, handleClose }) => {
  const [empName, setEmpName] = useState(editData?.empName || "");
  const [task, setTask] = useState(editData?.task || "");

  const handleSubmit = () => {
    handleUpdate({ ...editData, empName, task });
  };

  return (
    <div>
      <h3>Edit To Do Task</h3>
      <TextField
        label="Employee Name"
        value={empName}
        onChange={(e) => setEmpName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
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

export default EditTodo;
