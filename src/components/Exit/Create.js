import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Grid
} from "@mui/material";

const Create = ({ formData, handleInputChange, handleCreate, handleClose }) => {
  return (
    <Grid container spacing={3}>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Employee Name"
          value={formData.employeeName}
          onChange={(e) => handleInputChange("employeeName", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Employee ID"
          value={formData.employeeId}
          onChange={(e) => handleInputChange("employeeId", e.target.value)}
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
        <TextField
          fullWidth
          label="Resignation Date"
          type="date"
          value={formData.resignationDate}
          onChange={(e) => handleInputChange("resignationDate", e.target.value)}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Last Working Date"
          type="date"
          value={formData.lastWorkingDate}
          onChange={(e) => handleInputChange("lastWorkingDate", e.target.value)}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Notice Period"
          value={formData.noticePeriod}
          onChange={(e) => handleInputChange("noticePeriod", e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Resignation Reason</InputLabel>
          <Select
            value={formData.resignationReason}
            onChange={(e) => handleInputChange("resignationReason", e.target.value)}
            label="Resignation Reason"
          >
            <MenuItem value="Better opportunity">Better opportunity</MenuItem>
            <MenuItem value="Personal reasons">Personal reasons</MenuItem>
            <MenuItem value="Career growth">Career growth</MenuItem>
            <MenuItem value="Relocation">Relocation</MenuItem>
            <MenuItem value="Entrepreneurship">Entrepreneurship</MenuItem>
            <MenuItem value="Health issues">Health issues</MenuItem>
            <MenuItem value="Family reasons">Family reasons</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Clearance Status</InputLabel>
          <Select
            value={formData.clearanceStatus}
            onChange={(e) => handleInputChange("clearanceStatus", e.target.value)}
            label="Clearance Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Handover Status</InputLabel>
          <Select
            value={formData.handoverStatus}
            onChange={(e) => handleInputChange("handoverStatus", e.target.value)}
            label="Handover Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Final Settlement Amount"
          value={formData.finalSettlement}
          onChange={(e) => handleInputChange("finalSettlement", e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>
          }}
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Pending Dues"
          value={formData.pendingDues}
          onChange={(e) => handleInputChange("pendingDues", e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>
          }}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Company Assets"
          value={formData.companyAssets}
          onChange={(e) => handleInputChange("companyAssets", e.target.value)}
          variant="outlined"
          placeholder="e.g., Laptop, ID Card, Mobile, Car"
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Employee Feedback"
          value={formData.feedback}
          onChange={(e) => handleInputChange("feedback", e.target.value)}
          variant="outlined"
          multiline
          rows={3}
          placeholder="Employee's feedback about the organization"
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="HR Remarks"
          value={formData.hrRemarks}
          onChange={(e) => handleInputChange("hrRemarks", e.target.value)}
          variant="outlined"
          multiline
          rows={3}
          placeholder="HR's remarks about the exit process"
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
