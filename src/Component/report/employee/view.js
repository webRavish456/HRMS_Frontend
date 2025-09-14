"use client";
import {Typography, Box } from "@mui/material";
export default function ViewEmployee({ viewData, handleClose}) {
  return (
    <Box sx={{ p: 2, position: "relative", minWidth: 600 }}>

      
      <Typography><strong>SL. No:</strong> {viewData.sl}</Typography>
      <Typography><strong>Employee Id: </strong>{viewData.id}</Typography>
      <Typography><strong>Employee Name:</strong> {viewData.name}</Typography>
      <Typography><strong>Department: </strong>{viewData.department}</Typography>
      <Typography><strong>Attendance: </strong>{viewData.attendance}</Typography>
      <Typography><strong>Salary:</strong>{viewData.salary}</Typography>
      <Typography><strong>Actvity Status:</strong>{viewData.status}</Typography>
    </Box>
  );
}