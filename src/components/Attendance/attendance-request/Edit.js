import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box
} from "@mui/material";

const Edit = ({ formData, handleInputChange, handleUpdate, handleClose }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Employee Name"
          fullWidth
          value={formData.employeeName}
          InputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Request Date"
          type="date"
          fullWidth
          value={formData.requestDate}
          InputProps={{ readOnly: true }}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Punch In Time"
          type="time"
          fullWidth
          value={formData.punchedIn}
          onChange={(e) => handleInputChange("punchedIn", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Punch Out Time"
          type="time"
          fullWidth
          value={formData.punchedOut}
          onChange={(e) => handleInputChange("punchedOut", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          label="Reason"
          multiline
          rows={3}
          fullWidth
          value={formData.reason}
          onChange={(e) => handleInputChange("reason", e.target.value)}
          placeholder="Enter the reason for attendance request..."
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select 
            value={formData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            label="Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Approved By</InputLabel>
          <Select 
            value={formData.approvedBy}
            onChange={(e) => handleInputChange("approvedBy", e.target.value)}
            label="Approved By"
          >
            <MenuItem value="HR Manager">HR Manager</MenuItem>
            <MenuItem value="Super Admin">Super Admin</MenuItem>
            <MenuItem value="Department Head">Department Head</MenuItem>
            <MenuItem value="Team Lead">Team Lead</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
          <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
            Cancel
          </button>
          <button className="hrms-btn hrms-btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Edit;
