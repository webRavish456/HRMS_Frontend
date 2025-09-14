"use client";

import {
  Button,
  TextField,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function EditEmployee({ editData, handleClose, handleUpdate }) {
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
                type="number"
                value={formData.sl || ""}
                onChange={handleChange}
                fullWidth
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Employee Id"
                name="id"
                value={formData.id || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Employee Name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                fullWidth
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
                label="Attendance"
                name="attendance"
                type="number"
                value={formData.attendance|| ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Salary"
                name="salary"
                type="number"
                value={formData.salary || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Actvity Status"
                name="actvity"
                value={formData.actvity || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
        <Box sx={{  mt: 2, display: "flex",justifyContent:"flex-end", gap: 2 }}>
        <Button variant="outlined" onClick={handleClose} sx={{backgroundColor:"#c9c8ccff", color:"#000"}} >
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit} sx={{backgroundColor:"#0a443dff", color:"#fff"}}>
          Update
        </Button>
     </Box>
     </Box>
  );
}