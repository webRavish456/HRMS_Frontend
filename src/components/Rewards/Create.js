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
        <FormControl fullWidth variant="outlined">
          <InputLabel>Reward Category</InputLabel>
          <Select
            value={formData.rewardCategory}
            onChange={(e) => handleInputChange("rewardCategory", e.target.value)}
            label="Reward Category"
          >
            <MenuItem value="Performance Bonus">Performance Bonus</MenuItem>
            <MenuItem value="Employee of the Month">Employee of the Month</MenuItem>
            <MenuItem value="Sales Achievement">Sales Achievement</MenuItem>
            <MenuItem value="Innovation Award">Innovation Award</MenuItem>
            <MenuItem value="Leadership Excellence">Leadership Excellence</MenuItem>
            <MenuItem value="Team Player">Team Player</MenuItem>
            <MenuItem value="Long Service">Long Service</MenuItem>
            <MenuItem value="Customer Excellence">Customer Excellence</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Reward Amount/Value"
          value={formData.rewardAmount}
          onChange={(e) => handleInputChange("rewardAmount", e.target.value)}
          variant="outlined"
          placeholder="e.g., ₹25,000 or Gift Voucher ₹5,000"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Reward Date"
          type="date"
          value={formData.rewardDate}
          onChange={(e) => handleInputChange("rewardDate", e.target.value)}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Performance Period"
          value={formData.performancePeriod}
          onChange={(e) => handleInputChange("performancePeriod", e.target.value)}
          variant="outlined"
          placeholder="e.g., Q4 2023, January 2024"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Awarded By"
          value={formData.awardedBy}
          onChange={(e) => handleInputChange("awardedBy", e.target.value)}
          variant="outlined"
          placeholder="Manager/Supervisor name"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <FormControl fullWidth variant="outlined">
          <InputLabel>Approval Status</InputLabel>
          <Select
            value={formData.approvalStatus}
            onChange={(e) => handleInputChange("approvalStatus", e.target.value)}
            label="Approval Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Achievement Description"
          value={formData.achievement}
          onChange={(e) => handleInputChange("achievement", e.target.value)}
          variant="outlined"
          multiline
          rows={2}
          placeholder="Brief description of what the employee achieved"
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Detailed Description"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          variant="outlined"
          multiline
          rows={3}
          placeholder="Detailed description of the achievement and impact"
        />
      </Grid>
      <Grid size={{xs:12, md:6}}>
        <TextField
          fullWidth
          label="Reward Points"
          value={formData.points}
          onChange={(e) => handleInputChange("points", e.target.value)}
          variant="outlined"
          type="number"
          placeholder="Points earned (if applicable)"
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
