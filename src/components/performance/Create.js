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
    <Grid container spacing={3}>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Employee Name"
          value={formData.employee}
          onChange={(e) => handleInputChange("employee", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Department"
          value={formData.department}
          onChange={(e) => handleInputChange("department", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Position"
          value={formData.position}
          onChange={(e) => handleInputChange("position", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Performance Rating</InputLabel>
          <Select
            value={formData.rating}
            onChange={(e) => handleInputChange("rating", e.target.value)}
            label="Performance Rating"
          >
            <MenuItem value="Excellent">Excellent</MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="Average">Average</MenuItem>
            <MenuItem value="Below Average">Below Average</MenuItem>
            <MenuItem value="Poor">Poor</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Review Period"
          value={formData.reviewPeriod}
          onChange={(e) => handleInputChange("reviewPeriod", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Reviewer"
          value={formData.reviewer}
          onChange={(e) => handleInputChange("reviewer", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Goals Achieved"
          value={formData.goalsAchieved}
          onChange={(e) => handleInputChange("goalsAchieved", e.target.value)}
          variant="outlined"
          multiline
          rows={3}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Areas for Improvement"
          value={formData.areasForImprovement}
          onChange={(e) => handleInputChange("areasForImprovement", e.target.value)}
          variant="outlined"
          multiline
          rows={3}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Comments"
          value={formData.comments}
          onChange={(e) => handleInputChange("comments", e.target.value)}
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