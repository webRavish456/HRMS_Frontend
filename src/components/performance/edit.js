import React, { useState } from "react";
import { Button, TextField, MenuItem } from "@mui/material";

const EditIndicator = ({ editData, handleUpdate, handleClose }) => {
  const [goals, setGoals] = useState(editData?.goals || "");
  const [selfRating, setSelfRating] = useState(editData?.selfRating || "");
  const [managerRating, setManagerRating] = useState(editData?.managerRating || "");
  const [feedback, setFeedback] = useState(editData?.feedback || "");
  const [finalScore, setFinalScore] = useState(editData?.finalScore || "");
  const [status, setStatus] = useState(editData?.status || "In Progress");

  const handleSubmit = () => {
    const updatedIndicator = {
      ...editData,
      goals,
      selfRating,
      managerRating,
      feedback,
      finalScore,
      status,
    };
    handleUpdate(updatedIndicator);
  };

  return (
    <div>
      {/* Goals & KPIs */}
      <TextField
        label="Goals & KPIs"
        fullWidth
        margin="normal"
        multiline
        rows={3}
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
      />

      {/* Self Rating */}
      <TextField
        select
        label="Self Rating"
        fullWidth
        margin="normal"
        value={selfRating}
        onChange={(e) => setSelfRating(e.target.value)}
      >
        {[1, 2, 3, 4, 5].map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </TextField>

      {/* Manager Rating */}
      <TextField
        select
        label="Manager Rating"
        fullWidth
        margin="normal"
        value={managerRating}
        onChange={(e) => setManagerRating(e.target.value)}
      >
        {[1, 2, 3, 4, 5].map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </TextField>

      {/* Feedback Notes */}
      <TextField
        label="Feedback Notes"
        fullWidth
        margin="normal"
        multiline
        rows={3}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      {/* Final Score */}
      <TextField
        label="Final Score"
        fullWidth
        margin="normal"
        value={finalScore}
        onChange={(e) => setFinalScore(e.target.value)}
      />

      {/* Status */}
      <TextField
        select
        label="Status"
        fullWidth
        margin="normal"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </TextField>

      {/* Buttons */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
          justifyContent: "flex-end",
        }}
      >
        <Button variant="contained" onClick={handleSubmit}>
          Update
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditIndicator;
