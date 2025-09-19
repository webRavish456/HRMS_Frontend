



"use client";
import React, { useState } from "react";
import { Button, TextField, MenuItem, Grid, Typography } from "@mui/material";

const EditTodo = ({ editData, handleUpdate, handleClose }) => {
  const [taskName, setTaskName] = useState(editData?.taskName || "");
  const [priority, setPriority] = useState(editData?.priority || "");
  const [startDate, setStartDate] = useState(editData?.startDate || "");
  const [endDate, setEndDate] = useState(editData?.endDate || "");
  const [assignee, setAssignee] = useState(editData?.assignee || "");
  const [status, setStatus] = useState(editData?.status || "pending");
  const [notes, setNotes] = useState(editData?.notes || "");
  const [remark, setRemark] = useState(editData?.remark || "");
  const [description, setDescription] = useState(editData?.description || "");
  // const [file, setFile] = useState(editData?.file || null);

  const handleSubmit = () => {
    handleUpdate({
      ...editData,
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
      <Typography variant="h6" gutterBottom>
        Edit Task
      </Typography>
      <Typography variant="body2" gutterBottom>
        Update the details below to edit the task.
      </Typography>

      <Grid container spacing={2}>
        {/* Row 1: Task Name & Priority */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            fullWidth
            style={{width:'230px'}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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

        {/* Row 2: Start Date & End Date */}
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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

        {/* Row 3: Assignee & Status */}
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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

        {/* Row 4: Notes & Remark */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            fullWidth
              style={{width:'230px'}}
            multiline
            rows={2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            fullWidth
              style={{width:'250px'}}
            multiline
            rows={2}
          />
        </Grid>

        {/* Row 5: Description & File Upload */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
              style={{width:'230px'}}
            multiline
            rows={3}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Typography variant="body2" gutterBottom>
            Upload File
          </Typography>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginTop: "8px" }}
          />
          {file && (
            <div style={{ marginTop: "10px" }}>
              <Typography variant="caption">{file.name}</Typography>
              <br />
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                style={{ maxWidth: "100px", marginTop: "5px" }}
              />
            </div>
          )}
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
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditTodo;
