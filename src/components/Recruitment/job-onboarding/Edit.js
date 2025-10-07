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
          fullWidth
          label="Candidate Name"
          value={formData.candidateName}
          onChange={(e) => handleInputChange("candidateName", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Job Title"
          value={formData.jobTitle}
          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Department</InputLabel>
          <Select
            value={formData.department}
            onChange={(e) => handleInputChange("department", e.target.value)}
            label="Department"
          >
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Start Date"
          type="date"
          value={formData.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select
            value={formData.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            label="Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="On Hold">On Hold</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Assigned To"
          value={formData.assignedTo}
          onChange={(e) => handleInputChange("assignedTo", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Documents</InputLabel>
          <Select
            value={formData.documents}
            onChange={(e) => handleInputChange("documents", e.target.value)}
            label="Documents"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Orientation</InputLabel>
          <Select
            value={formData.orientation}
            onChange={(e) => handleInputChange("orientation", e.target.value)}
            label="Orientation"
          >
            <MenuItem value="Scheduled">Scheduled</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Notes"
          value={formData.notes}
          onChange={(e) => handleInputChange("notes", e.target.value)}
          variant="outlined"
          multiline
          rows={3}
        />
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
