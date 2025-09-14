


"use client"
import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@mui/material";

const CreateBranch = ({ handleCreate, handleClose }) => {
  const [BranchName, setBranchName] = useState("");
  const [Location, setLocation] = useState("");
  const [Status, setStatus] = useState("active"); // default active

  const handleSubmit = () => {
    const newBranch = { BranchName, Location, Status };
    handleCreate(newBranch);

    // clear form after save
    setBranchName("");
    setLocation("");
    setStatus("active");
    handleClose();
  };

  return (
    <div>
      <TextField
        label="Branch Name"
        fullWidth
        margin="normal"
        value={BranchName}
        onChange={(e) => setBranchName(e.target.value)}
      />
      <TextField
        label="Location"
        fullWidth
        margin="normal"
        value={Location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* Status Dropdown */}
      <TextField
        select
        label="Status"
        fullWidth
        margin="normal"
        value={Status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </TextField>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent:"flex-end" }}>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </div>
    </div>
  );
};
export default CreateBranch;