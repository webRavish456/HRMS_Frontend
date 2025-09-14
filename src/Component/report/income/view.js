"use client";
import {Typography, Box } from "@mui/material";
export default function ViewIncome({ viewData, handleClose}) {
  return (
    <Box sx={{ p: 2, position: "relative", minWidth: 600 }}>

      <Typography><strong>Sl No.:</strong> {viewData.sl}</Typography>
      <Typography><strong>Product Name: </strong>{viewData.name}</Typography>
      <Typography><strong>Product Type:</strong> {viewData.type}</Typography>
      <Typography><strong>Unit Price: </strong>{viewData.price}</Typography>
      <Typography><strong>Showed As Feature: </strong>{viewData.feature}</Typography>
      <Typography><strong>Actvity Status:</strong>{viewData.status}</Typography>
    </Box>
  );
}