"use client";
import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
} from "@mui/material";




const CreateHoliday = ({ open, handleClose, handleSave}) => {
  const [formData, setFormData] = useState({
    id: "",
    day:"",
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
      day:"",
    });
  };

  return (
    <Box>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={4}>
            <TextField fullWidth label="ID" name="id" value={formData.id} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Day Name" name="day" value={formData.day} onChange={handleChange} />
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

export default CreateHoliday;