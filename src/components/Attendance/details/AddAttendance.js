import React from "react";
import {
  Box,
  Typography,
  TextField
} from "@mui/material";

const AddAttendance = ({ employees, addTodayAttendance }) => {
  return (
    <Box>
      {employees.map((emp) => (
        <Box key={emp.name} sx={{ marginBottom: 2 }}>
          <Typography variant="body2" sx={{ marginBottom: 1, fontWeight: 500 }}>
            {emp.name}
          </Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter hours (e.g., 8:00)"
            onBlur={(e) => addTodayAttendance(emp.name, e.target.value)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default AddAttendance;
