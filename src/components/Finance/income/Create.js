import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box
} from "@mui/material";

const Create = ({ formData, handleInputChange, handleCreate, handleClose }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Income Name"
          fullWidth
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select 
            value={formData.type}
            onChange={(e) => handleInputChange("type", e.target.value)}
            label="Type"
          >
            <MenuItem value="Recurring">Recurring</MenuItem>
            <MenuItem value="One-time">One-time</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Amount"
          type="number"
          fullWidth
          value={formData.amount}
          onChange={(e) => handleInputChange("amount", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select 
            value={formData.category}
            onChange={(e) => handleInputChange("category", e.target.value)}
            label="Category"
          >
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Service">Service</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Branch</InputLabel>
          <Select 
            value={formData.branch}
            onChange={(e) => handleInputChange("branch", e.target.value)}
            label="Branch"
          >
            <MenuItem value="Head Office">Head Office</MenuItem>
            <MenuItem value="Delhi Branch">Delhi Branch</MenuItem>
            <MenuItem value="Bangalore Branch">Bangalore Branch</MenuItem>
            <MenuItem value="Chennai Branch">Chennai Branch</MenuItem>
            <MenuItem value="Kolkata Branch">Kolkata Branch</MenuItem>
            <MenuItem value="Hyderabad Branch">Hyderabad Branch</MenuItem>
            <MenuItem value="Pune Branch">Pune Branch</MenuItem>
            <MenuItem value="Ahmedabad Branch">Ahmedabad Branch</MenuItem>
            <MenuItem value="Jaipur Branch">Jaipur Branch</MenuItem>
            <MenuItem value="Kochi Branch">Kochi Branch</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Date"
          type="date"
          fullWidth
          value={formData.date}
          onChange={(e) => handleInputChange("date", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Client Name"
          fullWidth
          value={formData.client}
          onChange={(e) => handleInputChange("client", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Project Name"
          fullWidth
          value={formData.project}
          onChange={(e) => handleInputChange("project", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Payment Method</InputLabel>
          <Select 
            value={formData.paymentMethod}
            onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
            label="Payment Method"
          >
            <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            <MenuItem value="Cheque">Cheque</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="UPI">UPI</MenuItem>
            <MenuItem value="Credit Card">Credit Card</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          value={formData.dueDate}
          onChange={(e) => handleInputChange("dueDate", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Received Date"
          type="date"
          fullWidth
          value={formData.receivedDate}
          onChange={(e) => handleInputChange("receivedDate", e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          label="Description"
          multiline
          rows={3}
          fullWidth
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
          <button className="hrms-btn hrms-btn-secondary" onClick={handleClose}>
            Cancel
          </button>
          <button className="hrms-btn hrms-btn-primary" onClick={handleCreate}>
            Save
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Create;
