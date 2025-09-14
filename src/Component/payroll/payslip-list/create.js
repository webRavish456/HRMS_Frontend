"use client";
import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box
} from "@mui/material";




const CreatePayslipList = ({ open, handleClose, handleSave}) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    days: "",
    month: "",
    year: "",
    bsalary: "",
    bonus: "",
    tsalary: "",
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
      id: "",
      name: "",
      days: "",
      month: "",
      year: "",
      bsalary: "",
      bonus: "",
      tsalary: "",
      status: "",
    });
  };

  return (
    <Box>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={4}>
            <TextField fullWidth label="ID" name="id" value={formData.id} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Days" name="days" value={formData.days} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Month" name="month" value={formData.month} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Year" name="year" value={formData.year} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Basic Salary" name="bsalary" value={formData.bsalary} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Bonus" name="bonus" value={formData.bonus} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Total Salary" name="tsalary" value={formData.tsalary} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Status" name="status" value={formData.status} onChange={handleChange} />
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

export default CreatePayslipList;