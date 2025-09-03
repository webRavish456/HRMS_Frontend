"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ViewExpense = () => {
  const [open, setOpen] = useState(true);

  // Example Data (you can pass this via props or API response)
  const expenseData = {
    category: "Printing and Stationery",
    personName: "ABC",
    amount: "2000",
    paymentMode: "Cash",
    description: "abcd",
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
      {/* Title with Close Button */}
      <DialogTitle sx={{ pr: 6 }}>
        View Expense
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2} mt={1}>
          {/* Category */}
          <Grid item xs={6}>
            <TextField
              label="Category"
              fullWidth
              value={expenseData.category}
              disabled
            />
          </Grid>

          {/* Person Name */}
          <Grid item xs={6}>
            <TextField
              label="Enter Person Name"
              fullWidth
              value={expenseData.personName}
              disabled
            />
          </Grid>

          {/* Amount */}
          <Grid item xs={6}>
            <TextField
              label="Enter Amount"
              fullWidth
              value={expenseData.amount}
              disabled
            />
          </Grid>

          {/* Payment Mode */}
          <Grid item xs={6}>
            <TextField
              label="Payment Mode"
              fullWidth
              value={expenseData.paymentMode}
              disabled
            />
          </Grid>

          {/* File Upload (Disabled) */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              disabled
              sx={{ backgroundColor: "#cfd4da", color: "#000" }}
            >
              Bill Attachment File
            </Button>
            <Typography variant="body2" mt={1}>
              (Upload only pdf, jpeg, jpg, png format and file size minimum 100
              kb)
            </Typography>
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={expenseData.description}
              disabled
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ViewExpense;
