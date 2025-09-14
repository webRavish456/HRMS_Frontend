"use client";
import {Typography, Box } from "@mui/material";
export default function ViewRequest({ viewData, handleClose}) {
  return (
    <Box sx={{ p: 2, position: "relative", minWidth: 600 }}>

      
      <Typography><strong>Profile:</strong> {viewData.profile}</Typography>
      <Typography><strong>Date & Time: </strong>{viewData.date}</Typography>
      <Typography><strong>Leave Duration:</strong> {viewData.duration}</Typography>
      <Typography><strong>leave Type: </strong>{viewData.type}</Typography>
      <Typography><strong>Attachments: </strong>{viewData.attachments }</Typography>
      <Typography><strong>Activity:</strong>{viewData.activity }</Typography>
    </Box>
  );
}