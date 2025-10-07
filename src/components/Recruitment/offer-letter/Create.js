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

const Create = ({ formData, handleInputChange, handleCreate, handleClose }) => {
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
          label="Salary"
          value={formData.salary}
          onChange={(e) => handleInputChange("salary", e.target.value)}
          variant="outlined"
          placeholder="e.g., ₹6,00,000"
        />
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
        <TextField
          fullWidth
          label="Sent Date"
          type="date"
          value={formData.sentDate}
          onChange={(e) => handleInputChange("sentDate", e.target.value)}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Response Date"
          type="date"
          value={formData.responseDate}
          onChange={(e) => handleInputChange("responseDate", e.target.value)}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      <Grid size={{xs:12, sm:6}}>
     
       <TextField
    fullWidth
    type="file"
    label="Upload Image / PDF"
    InputLabelProps={{ shrink: true }}
    inputProps={{ accept: "application/pdf" }}
    onChange={(e) => handleInputChange("file", e.target.files[0])}
    variant="outlined"
      />
    </Grid>


      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Benefits & Perks"
          value={formData.benefits}
          onChange={(e) => handleInputChange("benefits", e.target.value)}
          variant="outlined"
          multiline
          rows={3}
          placeholder="e.g., Health insurance, Flexible working hours, Annual bonus"
        />
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
          <button className="hrms-btn hrms-btn-primary" onClick={handleCreate}>
            Save
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Create;
