"use client";
import { useState } from "react";
import {
  TextField,
  Grid,
  Button,
  Box,
} from "@mui/material";



const CreateStatus = ({ open, handleClose, handleSave}) => {
  const [formData, setFormData] = useState({
    profile: "",
    date: "",
    duration: "",
    type: "",
    attacments: "",
    activity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    handleSave(formData); 
    handleClose();
    setFormData({
      profile: "",
      date: "",
      duration: "",
      type: "",
      attacments: "",
      activity: "",
    });
  };

  return (
        <Box>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={4}>
            <TextField fullWidth label="Profile" name="profile" value={formData.profile} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Date & Time"  name="date"  type="datetime-local" value={formData.date} onChange={handleChange}
             InputLabelProps={{
                shrink:"true"
            }} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Leave Duration" name="duration" value={formData.duration} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Leave Type" name="type" value={formData.type} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Attachments" name="attachments" type="file" value={formData.attacments} onChange={handleChange}
             InputLabelProps={{
                shrink:"true"
            }} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Activity Status" name="activity" value={formData.activity} onChange={handleChange} />
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

export default CreateStatus;