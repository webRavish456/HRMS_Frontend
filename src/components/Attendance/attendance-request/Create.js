import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  Button
} from "@mui/material";

const Create = ({ formData, handleInputChange, handleCreate, handleClose }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Employee Name"
          fullWidth
          value={formData.employeeName}
          onChange={(e) => handleInputChange("employeeName", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Request Date"
          type="date"
          fullWidth
          value={formData.requestDate}
          onChange={(e) => handleInputChange("requestDate", e.target.value)}
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
      <Grid size={{xs:12}}>
        <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
          <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
            Cancel
          </button>
          <button className="hrms-btn hrms-btn-primary" onClick={handleCreate}>
            Submit
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Create;
