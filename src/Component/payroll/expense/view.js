"use client";
import {Typography, Box } from "@mui/material";
export default function ViewExpense({ viewData, handleClose}) {
  return (
    <Box sx={{ p: 2, position: "relative", minWidth: 600 }}>
  
      <Typography><strong>User:</strong> {viewData.user}</Typography>
      <Typography><strong>Category: </strong>{viewData.category}</Typography>
      <Typography><strong>Description:</strong> {viewData.description}</Typography>
      <Typography><strong>Amount:</strong> {viewData.amount}</Typography>
      <Typography><strong>Deal: </strong>{viewData.deal}</Typography>
      <Typography><strong>Date: </strong>{viewData.date}</Typography>
      <Typography><strong>Attachment:</strong>{viewData.attachment}</Typography>
    </Box>
  );
}