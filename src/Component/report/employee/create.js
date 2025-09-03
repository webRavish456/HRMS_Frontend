"use client";
import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box
} from "@mui/material";




const CreateEmployee = ({ open, handleClose, handleSave}) => {
  const [formData, setFormData] = useState({
    sl: "",
    id: "",
    name: "",
    department: "",
    attendance: "",
    salary: "",
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
      id: "",
      name: "",
      department: "",
      attendance: "",
      salary: "",
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
            <TextField fullWidth label="Employee id" name="id" value={formData.id} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Employee Name" name="name" value={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Attendance" name="attendance" value={formData.attendance} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Salary" name="salary" type="number" value={formData.salary} onChange={handleChange} />
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

export default CreateEmployee;