import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
} from "@mui/material";

const EditTicket = ({ handleUpdate, handleClose, selectedTicket }) => {
  const [form, setForm] = useState({
    code: "",
    title: "",
    description: "",
    employee: "",
    priority: "",
    endDate: "",
    status: "",
    category: "",
    assignedTo: ""
  });

  useEffect(() => {
    if (selectedTicket) {
      setForm({
        code: selectedTicket.code || "",
        title: selectedTicket.title || "",
        description: selectedTicket.description || "",
        employee: selectedTicket.employee || "",
        priority: selectedTicket.priority || "",
        endDate: selectedTicket.endDate || "",
        status: selectedTicket.status || "",
        category: selectedTicket.category || "",
        assignedTo: selectedTicket.assignedTo || ""
      });
    }
  }, [selectedTicket]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
      <TextField 
        label="Ticket Code" 
        value={form.code} 
        onChange={(e) => setForm({ ...form, code: e.target.value })} 
        fullWidth 
      />
      <TextField 
        label="Title" 
        value={form.title} 
        onChange={(e) => setForm({ ...form, title: e.target.value })} 
        fullWidth 
      />
      <TextField 
        label="Employee" 
        value={form.employee} 
        onChange={(e) => setForm({ ...form, employee: e.target.value })} 
        fullWidth 
      />
      <TextField 
        label="Priority" 
        value={form.priority} 
        onChange={(e) => setForm({ ...form, priority: e.target.value })} 
        fullWidth 
      />
      <TextField 
        type="date" 
        value={form.endDate} 
        onChange={(e) => setForm({ ...form, endDate: e.target.value })} 
        fullWidth 
      />
      <TextField 
        label="Status" 
        value={form.status} 
        onChange={(e) => setForm({ ...form, status: e.target.value })} 
        fullWidth 
      />
      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => handleUpdate(form)} variant="contained" color="primary">Update</Button>
      </Box>
    </Box>
  );
};

export default EditTicket;
