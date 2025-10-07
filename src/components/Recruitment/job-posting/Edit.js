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
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Department</InputLabel>
          <Select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            label="Department"
          >
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Branch</InputLabel>
          <Select
            name="branch"
            value={formData.branch}
            onChange={handleInputChange}
            label="Branch"
          >
            <MenuItem value="Delhi Branch">Delhi Branch</MenuItem>
            <MenuItem value="Mumbai Branch">Mumbai Branch</MenuItem>
            <MenuItem value="Kolkata Branch">Kolkata Branch</MenuItem>
            <MenuItem value="Chennai Branch">Chennai Branch</MenuItem>
            <MenuItem value="Bangalore Branch">Bangalore Branch</MenuItem>
            <MenuItem value="Hyderabad Branch">Hyderabad Branch</MenuItem>
            <MenuItem value="Ahmedabad Branch">Ahmedabad Branch</MenuItem>
            <MenuItem value="Jaipur Branch">Jaipur Branch</MenuItem>
            <MenuItem value="Lucknow Branch">Lucknow Branch</MenuItem>
            <MenuItem value="Nagpur Branch">Nagpur Branch</MenuItem>
            <MenuItem value="Pune Branch">Pune Branch</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Experience Required"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Salary Range"
          name="salary"
          value={formData.salary}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            label="Status"
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Closed</MenuItem>
            <MenuItem value="Draft">Draft</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Job Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          multiline
          rows={4}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleInputChange}
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
