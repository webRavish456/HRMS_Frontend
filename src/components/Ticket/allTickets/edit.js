"use client";
import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";

const EditTicket = ({ formData, handleInputChange, handleUpdate, handleClose, selectedTicket }) => {
  const handleSubmit = () => {
    handleUpdate();
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Grid container spacing={2}>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Ticket Code"
            value={selectedTicket?.code || ""}
            className="hrms-form-input"
            disabled
          />
        </Grid>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="hrms-form-input"
            required
          />
        </Grid>
        <Grid size={{xs:12}}>
          <TextField
            fullWidth
            label="Description"
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
            label="Employee"
            name="employee"
            value={formData.employee}
            onChange={handleInputChange}
            className="hrms-form-input"
            required
          />
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <MenuItem value="Technical">Technical</MenuItem>
              <MenuItem value="Payroll">Payroll</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="General">General</MenuItem>
            </Select>
          </FormControl>
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
              value={selectedTicket?.status || ""}
              onChange={(e) => {
                const updated = {...selectedTicket, status: e.target.value};
                // Update the ticket directly
              }}
            >
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Resolved">Resolved</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            label="Assigned To"
            name="assignedTo"
            value={selectedTicket?.assignedTo || ""}
            onChange={(e) => {
              const updated = {...selectedTicket, assignedTo: e.target.value};
              // Update the ticket directly
            }}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <TextField
            fullWidth
            label="Due Date"
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            className="hrms-form-input"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
          Cancel
        </button>
        <button className="hrms-btn hrms-btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </Box>
    </Box>
  );
};

export default EditTicket;
