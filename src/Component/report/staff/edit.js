"use client";

import {
  Button,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function EditStaff({ editData, handleClose, handleUpdate }) {
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
                label="SL No."
                name="sl"
                value={formData.sl || ""}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Department"
                name="department"
                value={formData.department || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Total Staff"
                name="staff"
                type="number"
                value={formData.staff || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Present Today"
                name="present"
                type="number"
                value={formData.present || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Absent Today"
                name="absent"
                type="number"
                value={formData.absent || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Average Attendance"
                name="date"
                type="number"
                value={formData.date || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Activity Status"
                name="status"
                value={formData.status|| ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
        <Box sx={{  mt: 2, display: "flex",justifyContent:"flex-end", gap: 2 }}>
        <Button variant="outlined" onClick={handleClose} sx={{backgroundColor:"#c9c8ccff" , color:"#000"}} >
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit} sx={{backgroundColor:"#0a443dff", color:"#fff"}}>
          Update
        </Button>
      </Box>
      </Box>
  );
}