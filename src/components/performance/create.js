

"use client";
import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";

const CreateIndicator = ({ employees = [], handleCreate, handleClose }) => {
  const [employeeID, setEmployeeID] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [reviewPeriod, setReviewPeriod] = useState("");
  const [goals, setGoals] = useState("");
  const [selfRating, setSelfRating] = useState("");
  const [managerRating, setManagerRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [finalScore, setFinalScore] = useState("");
  const [status, setStatus] = useState("In Progress");

  // Auto-fill logic when employee ID selected
  const handleEmployeeChange = (id) => {
    setEmployeeID(id);
    const emp = employees.find((e) => e.id === id);
    if (emp) {
      setEmployeeName(emp.name);
      setDepartment(emp.department);
      setDesignation(emp.designation);
    }
  };

  const handleSubmit = () => {
    const newIndicator = {
      employeeID,
      employeeName,
      department,
      designation,
      reviewPeriod,
      goals,
      selfRating,
      managerRating,
      feedback,
      finalScore,
      status,
    };
    handleCreate(newIndicator);

    // Reset form
    setEmployeeID("");
    setEmployeeName("");
    setDepartment("");
    setDesignation("");
    setReviewPeriod("");
    setGoals("");
    setSelfRating("");
    setManagerRating("");
    setFeedback("");
    setFinalScore("");
    setStatus("In Progress");

    handleClose();
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Create Performance Indicator
      </Typography>

      {/* Employee ID */}
      <TextField
        select
        label="Employee ID"
        fullWidth
        margin="normal"
        value={employeeID}
        onChange={(e) => handleEmployeeChange(e.target.value)}
      >
        {employees.map((emp) => (
          <MenuItem key={emp.id} value={emp.id}>
            {emp.id}
          </MenuItem>
        ))}
      </TextField>

      {/* Auto-filled fields */}
      <TextField
        label="Employee Name"
        fullWidth
        margin="normal"
        value={employeeName}
        InputProps={{ readOnly: true }}
      />
      <TextField
        label="Department"
        fullWidth
        margin="normal"
        value={department}
        InputProps={{ readOnly: true }}
      />
      <TextField
        label="Designation"
        fullWidth
        margin="normal"
        value={designation}
        InputProps={{ readOnly: true }}
      />

      {/* Review Period */}
      <TextField
        label="Review Period"
        fullWidth
        margin="normal"
        placeholder="e.g. Q1 2025"
        value={reviewPeriod}
        onChange={(e) => setReviewPeriod(e.target.value)}
      />

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

      {/* Status Dropdown */}
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
      <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
        <Button onClick={handleClose}>Cancel</Button>
      </Box>
    </Box>
  );
};

export default CreateIndicator;
