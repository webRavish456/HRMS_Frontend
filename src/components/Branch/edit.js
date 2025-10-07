import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";

const EditBranch = ({ handleUpdate, handleClose, selectedBranch }) => {
  const [formData, setFormData] = useState({
    branchName: "",
    branchLocation: "",
    status: "Active"
  });

  useEffect(() => {
    if (selectedBranch) {
      setFormData({
        branchName: selectedBranch.branchName || "",
        branchLocation: selectedBranch.branchLocation || "",
        status: selectedBranch.status || "Active"
      });
    }
  }, [selectedBranch]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
      <Grid container spacing={2}>
        <Grid size={{xs:12, md:6}}>
          <TextField
            fullWidth
            label="Branch Name"
            name="branchName"
            value={formData.branchName}
            onChange={handleInputChange}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <TextField
            fullWidth
            label="Branch Location"
            name="branchLocation"
            value={formData.branchLocation}
            onChange={handleInputChange}
            className="hrms-form-input"
          />
        </Grid>
        <Grid size={{xs:12, md:6}}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
          Cancel
        </button>
        <button className="hrms-btn hrms-btn-primary" onClick={() => handleUpdate(formData)}>
          Update
        </button>
      </Box>
    </Box>
  );
};

export default EditBranch;