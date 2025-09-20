import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@mui/material";

const Edit = ({ formData, handleInputChange }) => {
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
        <FormControl fullWidth>
          <InputLabel>Request Type</InputLabel>
          <Select 
            value={formData.requestType}
            disabled={true}
            label="Request Type"
          >
            <MenuItem value="Late Arrival">Late Arrival</MenuItem>
            <MenuItem value="Early Departure">Early Departure</MenuItem>
            <MenuItem value="Work From Home">Work From Home</MenuItem>
            <MenuItem value="Overtime">Overtime</MenuItem>
            <MenuItem value="Half Day">Half Day</MenuItem>
          </Select>
        </FormControl>
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
      <Grid size={{xs:12}}>
        <TextField
          label="Reason"
          multiline
          rows={3}
          fullWidth
          value={formData.reason}
          InputProps={{ readOnly: true }}
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
        <TextField
          label="Approved By"
          fullWidth
          value={formData.approvedBy}
          onChange={(e) => handleInputChange("approvedBy", e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default Edit;
