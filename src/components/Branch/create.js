import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
} from "@mui/material";

const CreateBranch = ({ handleCreate, handleClose }) => {
  const [formData, setFormData] = useState({
    branchName: "",
    branchLocation: ""
  });

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
      </Grid>
      <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
        <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
          Cancel
        </button>
        <button className="hrms-btn hrms-btn-primary" onClick={() => handleCreate(formData)}>
          Save
        </button>
      </Box>
    </Box>
  );
};

export default CreateBranch;