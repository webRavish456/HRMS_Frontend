"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function EditExpense({ editData, handleClose, handleUpdate }) {
  const [formData, setFormData] = useState(editData || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleUpdate(formData);
  };

  return (
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                label="User"
                name="user"
                value={formData.user || ""}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Category"
                name="category"
                value={formData.category || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Description"
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Amount"
                name="amount"
                type="number"
                value={formData.amount || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Deal"
                name="deal"
                value={formData.deal || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Date"
                name="date"
                type="date"
                value={formData.date || ""}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                shrink:"true"
            }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Attachment"
                name="attachment"
                type="file"
                value={formData.attachment || ""}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{
                shrink:"true"
            }}
              />
            </Grid>
          </Grid>
        <Box sx={{  mt: 2, display: "flex",justifyContent:"flex-end", gap: 2 }}>
        <Button variant="outlined" onClick={handleClose} sx={{backgroundColor:"#c9c8ccff", color:"#000"}}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit} sx={{backgroundColor:"#0a443dff", color:"#fff"}}>
          Update
        </Button>
      </Box>
      </Box>
  );
}