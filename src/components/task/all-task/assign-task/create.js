

"use client";
import React, { useState } from "react";
import { Button, TextField, MenuItem, Grid } from "@mui/material";

const CreateAssign = ({ handleCreate, handleClose }) => {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("pending");
  const [notes, setNotes] = useState("");
  const [remark, setRemark] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    handleCreate({
      taskName,
      priority,
      startDate,
      endDate,
      assignee,
      status,
      notes,
      remark,
      description
      
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px" }}>
      <h3>Create Task</h3>
      <Grid container spacing={2}>
        {/* Task Name & Priority */}
        <Grid item xs={6}>
          <TextField
            label="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            fullWidth
             style={{width:'230px'}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
            style={{width:'250px'}}
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>
        </Grid>

        {/* Start Date & End Date */}
        <Grid item xs={6}>
          <TextField
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            fullWidth
            style={{width:'230px'}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            fullWidth
            style={{width:'250px'}}
          />
        </Grid>

        {/* Assignee & Status */}
        <Grid item xs={6}>
          <TextField
            select
            label="Assignee User"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            fullWidth
            style={{width:'230px'}}
          >
            <MenuItem value="user1">User 1</MenuItem>
            <MenuItem value="user2">User 2</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            select
            label="Select Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
            style={{width:'250px'}}
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </TextField>
        </Grid>

        {/* Notes & Remark */}
        <Grid item xs={6}>
          <TextField
            label="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            fullWidth
            style={{width:'230px'}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            fullWidth
            style={{width:'250px'}}
          />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
            style={{width:'230px'}}
          />
        </Grid>

        {/* File Upload */}
        {/* <Grid item xs={12}>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: "10px" }}
          />
        </Grid> */}
      </Grid>

      {/* Buttons */}
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <Button
          onClick={handleClose}
          variant="outlined"
          style={{ marginRight: "10px" }}
        >
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateAssign;

