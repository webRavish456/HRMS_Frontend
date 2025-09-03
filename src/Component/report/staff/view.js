"use client";
import {Typography, Box } from "@mui/material";
export default function ViewStaff({ viewData, handleClose}) {
  return (
    <Box sx={{ p: 2, position: "relative", minWidth: 600 }}>
  
      <Typography><strong>SL. No.:</strong> {viewData.sl}</Typography>
      <Typography><strong>Department: </strong>{viewData.department}</Typography>
      <Typography><strong>Total Staff:</strong> {viewData.staff}</Typography>
      <Typography><strong>Present Today: </strong>{viewData.present}</Typography>
      <Typography><strong>Absent Today: </strong>{viewData.absent}</Typography>
      <Typography><strong>Average Attendance:</strong>{viewData.attendance}</Typography>
      <Typography><strong>Actvity Status:</strong>{viewData.status}</Typography>
      
    </Box>
  );
}