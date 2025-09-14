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

export default function EditStatus({ editData, handleClose, handleUpdate }) {
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
                label="Profile"
                name="profile"
                value={formData.profile || ""}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Date & Time"
                name="date"
                type="datetime-local"
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
                label="Leave Duration"
                name="duration"
                value={formData.duration || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Leave Type"
                name="type"
                value={formData.type || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Attachments"
                name="attachments"
                type="file"
                value={formData.attachment|| ""}
                onChange={handleChange}
                fullWidth
                 InputLabelProps={{
                shrink:"true"
            }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Actvity"
                name="activity"
                value={formData.activity || ""}
                onChange={handleChange}
                fullWidth
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