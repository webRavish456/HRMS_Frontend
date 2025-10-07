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
          label="Employee Name"
          value={formData.employeeName}
          InputProps={{ readOnly: true }}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Leave Type</InputLabel>
          <Select
            value={formData.leaveType}
            onChange={(e) => handleInputChange('leaveType', e.target.value)}
            label="Leave Type"
          >
            <MenuItem value="Casual Leave">Casual Leave</MenuItem>
            <MenuItem value="Sick Leave">Sick Leave</MenuItem>
            <MenuItem value="Earned Leave">Earned Leave</MenuItem>
            <MenuItem value="Personal Leave">Personal Leave</MenuItem>
            <MenuItem value="Maternity Leave">Maternity Leave</MenuItem>
            <MenuItem value="Paternity Leave">Paternity Leave</MenuItem>
            <MenuItem value="Emergency Leave">Emergency Leave</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Leave From"
          type="date"
          value={formData.leaveFrom}
          onChange={(e) => handleInputChange('leaveFrom', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Leave To"
          type="date"
          value={formData.leaveTo}
          onChange={(e) => handleInputChange('leaveTo', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Duration (Days)"
          type="number"
          value={formData.duration}
          onChange={(e) => handleInputChange('duration', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Reason"
          multiline
          rows={3}
          value={formData.reason}
          onChange={(e) => handleInputChange('reason', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="Please provide a detailed reason for your leave request..."
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