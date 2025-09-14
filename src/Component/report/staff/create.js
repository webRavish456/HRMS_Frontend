"use client";
import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box
} from "@mui/material";




const CreateStaff = ({ open, handleClose, handleSave}) => {
  const [formData, setFormData] = useState({
    sl: "",
    department: "",
    staff: "",
    present: "",
    absent: "",
    attendance: "",
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
    department: "",
    staff: "",
    present: "",
    absent: "",
    attendance: "",
    status: "",
    });
  };

  return (
    <Box>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={4}>
            <TextField fullWidth label="SL No." name="id" type="number" value={formData.id} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Total Staff" name="staff" type="number" value={formData.staff} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Present Today" name="present" type="number" value={formData.present} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Absent Today" name="absent" type="number" value={formData.absent} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Average attendance" name="attendance" type="number"  value={formData.attendance} onChange={handleChange} />
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

export default CreateStaff;