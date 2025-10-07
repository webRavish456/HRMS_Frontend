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
        <FormControl fullWidth>
          <InputLabel>Employee</InputLabel>
          <Select 
            value={formData.employee}
            onChange={(e) => handleInputChange("employee", e.target.value)}
            label="Employee"
          >
            <MenuItem value="John Doe">John Doe</MenuItem>
            <MenuItem value="Jane Smith">Jane Smith</MenuItem>
            <MenuItem value="Mike Johnson">Mike Johnson</MenuItem>
            <MenuItem value="Emily Davis">Emily Davis</MenuItem>
            <MenuItem value="Sarah Wilson">Sarah Wilson</MenuItem>
            <MenuItem value="David Brown">David Brown</MenuItem>
            <MenuItem value="Lisa Garcia">Lisa Garcia</MenuItem>
            <MenuItem value="Robert Lee">Robert Lee</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select 
            value={formData.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
            label="Category"
          >
            <MenuItem value="Travel">Travel</MenuItem>
            <MenuItem value="Meals">Meals</MenuItem>
            <MenuItem value="Office Supplies">Office Supplies</MenuItem>
            <MenuItem value="Training">Training</MenuItem>
            <MenuItem value="Communication">Communication</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={formData.amount}
          onChange={(e) => handleInputChange("amount", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Date"
          type="date"
          fullWidth
          value={formData.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, md:12}}>
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
      <Grid size={{xs:12}}>
        <TextField
          label="Description"
          multiline
          rows={3}
          fullWidth
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
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
