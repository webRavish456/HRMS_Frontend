"use client";
import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
} from "@mui/material";



const CreateIncome = ({ open, handleClose, handleSave}) => {
  const [formData, setFormData] = useState({
      sl: "",
      name: "",
      type: "",
      price: "",
      feature: "",
      status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    handleSave(formData); 
    handleClose();
    setFormData({
      sl: "",
      name: "",
      type: "",
      price: "",
      feature: "",
      status: "",
    });
  };

  return (
    <Box>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={4}>
            <TextField fullWidth label="SL No." name="sl" type="number" value={formData.sl} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Product Name" name="name" value={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Product Type" name="type" value={formData.type} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Unit Price" name="price" type="number" value={formData.price} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Showed As Feature" name="feature" value={formData.feature} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Activity Status" name="status" value={formData.status} onChange={handleChange} />
          </Grid>
        </Grid>
         <Box sx={{ mt: 2, display: "flex", justifyContent:"flex-end", gap: 2 }}>
        <Button onClick={handleClose} sx={{ borderRadius: "8px", bgcolor: "#c9c8ccff", color: "#000" }}>
          Cancel
        </Button>
        <Button onClick={onSave} sx={{ borderRadius: "8px", bgcolor: "#0a443dff", color: "#fff" }}>
          Save
        </Button>
      </Box>
      </Box>
  );
};

export default CreateIncome;