import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@mui/material";

const Create = ({ formData, handleInputChange }) => {
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
        <FormControl fullWidth>
          <InputLabel>Request Type</InputLabel>
          <Select 
            value={formData.requestType}
            onChange={(e) => handleInputChange("requestType", e.target.value)}
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
          onChange={(e) => handleInputChange("requestDate", e.target.value)}
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
        />
      </Grid>
    </Grid>
  );
};

export default Create;
