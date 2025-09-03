"use client";
import { useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Box
} from "@mui/material";




const CreateExpense = ({ open, handleClose, handleSave}) => {
  const [formData, setFormData] = useState({
    user: "",
    category: "",
    description: "",
    amount: "",
    deal: "",
    date: "",
    attachment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    handleSave(formData); 
    handleClose();
    setFormData({
      user: "",
      category: "",
      description: "",
      amount: "",
      deal: "",
      date: "",
      attachment: "",
    });
  };

  return (
    
     <Box>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={4}>
            <TextField fullWidth label="User" name="user" value={formData.user} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Category" name="category" value={formData.category} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Description" name="desciption" value={formData.description} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Amount" name="amount" type="number" value={formData.amount} onChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Deal" name="deal" value={formData.deal} onChange={handleChange} />
          </Grid>
           <Grid item xs={4}>
            <TextField fullWidth label="Date" name="date" type="date" value={formData.date} onChange={handleChange} 
            InputLabelProps={{
                shrink:"true"
            }}/>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Attachment" name="attachment" type="file" value={formData.attachment} onChange={handleChange}
            InputLabelProps={{
                shrink:"true"
            }} />
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

export default CreateExpense;