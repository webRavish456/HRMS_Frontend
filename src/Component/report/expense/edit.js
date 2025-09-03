"use client";

import {
  TextField,
  Grid,
  Box,
  Button
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
                label="Product Name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Product Type"
                name="type"
                value={formData.type || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Unit Price"
                name="price"
                type="number"
                value={formData.price || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Showed As Feature"
                name="feature"
                value={formData.feature || ""}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                label="Actvity Status"
                name="status"
                value={formData.status || ""}
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