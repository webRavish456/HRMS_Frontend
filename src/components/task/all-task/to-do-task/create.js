"use client";
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const CreateTodo = ({ handleCreate, handleClose }) => {
  const [empName, setEmpName] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    handleCreate({ empName, task, status: "Pending" });
  };

  return (
    <div>
      <h3>Create To Do Task</h3>
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
        Save
      </Button>
      <Button onClick={handleClose} variant="outlined">Cancel</Button>
    </div>
  );
};

export default CreateTodo;
