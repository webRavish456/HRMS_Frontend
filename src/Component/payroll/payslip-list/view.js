"use client";
import {Typography, Box } from "@mui/material";
export default function ViewPayslipList({viewData}) {
  return (
    <Box sx={{ p:2, position: "relative", minWidth: 600 }}>
  
     
      <Typography><strong>Id:</strong> {viewData.id}</Typography>
      <Typography><strong>Name: </strong>{viewData.name}</Typography>
      <Typography><strong>Work Days:</strong> {viewData.days}</Typography>
      <Typography><strong>Month:</strong> {viewData.month}</Typography>
      <Typography><strong>Year: </strong>{viewData.year}</Typography>
      <Typography><strong>Basic Salary: </strong>{viewData.bsalary}</Typography>
      <Typography><strong>Bonus:</strong>{viewData.bonus }</Typography>
      <Typography><strong>Total Salary:</strong>{viewData.tsalary}</Typography>
      <Typography><strong>Status:</strong>{viewData.status}</Typography>
    </Box>
  );
}