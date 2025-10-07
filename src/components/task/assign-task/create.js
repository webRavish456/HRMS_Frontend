"use client";
import React from "react";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";

const CreateAssign = ({ formData, handleInputChange, handleCreate, handleClose }) => {
  const handleSubmit = () => {
    handleCreate();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Grid container spacing={2}>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Task Title"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleInputChange}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Task Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            multiline
            rows={3}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            label="Assigned To"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleInputChange}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            label="Assigned By"
            name="assignedBy"
            value={formData.assignedBy}
            onChange={handleInputChange}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
            >
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="Overdue">Overdue</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            label="Due Date"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            label="Progress (%)"
            name="progress"
            type="number"
            value={formData.progress}
            onChange={handleInputChange}
            inputProps={{ min: 0, max: 100 }}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Additional Notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            multiline
            rows={3}
            className="hrms-form-input"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
          Cancel
        </button>
        <button className="hrms-btn hrms-btn-primary" onClick={handleSubmit}>
          Save
        </button>
      </Box>
    </Box>
  );
};

export default CreateAssign;
