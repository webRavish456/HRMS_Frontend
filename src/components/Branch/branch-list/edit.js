import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const EditBranch = ({ editData, handleUpdate, handleClose }) => {
  const [branchName, setBranchName] = useState(editData?.BranchName || "");
  const [location, setLocation] = useState(editData?.Location || "");

  const handleSubmit = () => {
    const updatedBranch = { ...editData, BranchName: branchName, Location: location };
    handleUpdate(updatedBranch);
  };

  return (
    <div>
      <TextField
        label="Branch Name"
        fullWidth
        margin="normal"
        value={branchName}
        onChange={(e) => setBranchName(e.target.value)}
      />
      <TextField
        label="Location"
        fullWidth
        margin="normal"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent:"flex-end" }}>
        <Button variant="contained" onClick={handleSubmit}>
          Update
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditBranch;
