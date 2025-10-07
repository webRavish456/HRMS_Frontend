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
    <Grid container spacing={3}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Holiday Name"
          value={formData.holidayName}
          onChange={(e) => handleInputChange('holidayName', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Holiday Type</InputLabel>
          <Select
            value={formData.holidayType}
            onChange={(e) => handleInputChange('holidayType', e.target.value)}
            label="Holiday Type"
          >
            <MenuItem value="National Holiday">National Holiday</MenuItem>
            <MenuItem value="Religious Holiday">Religious Holiday</MenuItem>
            <MenuItem value="Regional Holiday">Regional Holiday</MenuItem>
            <MenuItem value="Company Holiday">Company Holiday</MenuItem>
            <MenuItem value="Festival">Festival</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Holiday Date"
          type="date"
          value={formData.holidayDate}
          onChange={(e) => handleInputChange('holidayDate', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Branch</InputLabel>
          <Select
            value={formData.branch}
            onChange={(e) => handleInputChange('branch', e.target.value)}
            label="Branch"
          >
            <MenuItem value="All Branches">All Branches</MenuItem>
            <MenuItem value="Head Office">Head Office</MenuItem>
            <MenuItem value="Delhi Branch">Delhi Branch</MenuItem>
            <MenuItem value="Bangalore Branch">Bangalore Branch</MenuItem>
            <MenuItem value="Chennai Branch">Chennai Branch</MenuItem>
            <MenuItem value="Kolkata Branch">Kolkata Branch</MenuItem>
            <MenuItem value="Hyderabad Branch">Hyderabad Branch</MenuItem>
            <MenuItem value="Pune Branch">Pune Branch</MenuItem>
            <MenuItem value="Ahmedabad Branch">Ahmedabad Branch</MenuItem>
            <MenuItem value="Jaipur Branch">Jaipur Branch</MenuItem>
            <MenuItem value="Kochi Branch">Kochi Branch</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={3}
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="Enter holiday description..."
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
