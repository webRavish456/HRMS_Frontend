import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  Box
} from "@mui/material";

const Edit = ({ formData, handleInputChange, handleUpdate, handleClose }) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Expense Name"
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
            <MenuItem value="Equipment">Equipment</MenuItem>
            <MenuItem value="Utilities">Utilities</MenuItem>
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Training">Training</MenuItem>
            <MenuItem value="Facilities">Facilities</MenuItem>
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
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Utilities">Utilities</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Supplies">Supplies</MenuItem>
            <MenuItem value="Facilities">Facilities</MenuItem>
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
        <FormControl fullWidth>
          <InputLabel>Claim Type</InputLabel>
          <Select 
            value={formData.claimType}
            onChange={(e) => handleInputChange("claimType", e.target.value)}
            label="Claim Type"
          >
            <MenuItem value="Advance">Advance</MenuItem>
            <MenuItem value="Reimbursement">Reimbursement</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Approval Status</InputLabel>
          <Select 
            value={formData.approvalStatus}
            onChange={(e) => handleInputChange("approvalStatus", e.target.value)}
            label="Approval Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Payment Mode</InputLabel>
          <Select 
            value={formData.paymentMode}
            onChange={(e) => handleInputChange("paymentMode", e.target.value)}
            label="Payment Mode"
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
        <FormControl fullWidth>
          <InputLabel>Employee</InputLabel>
          <Select 
            value={formData.employee}
            onChange={(e) => handleInputChange("employee", e.target.value)}
            label="Employee"
          >
            <MenuItem value="Rajesh Kumar">Rajesh Kumar</MenuItem>
            <MenuItem value="Priya Sharma">Priya Sharma</MenuItem>
            <MenuItem value="Amit Patel">Amit Patel</MenuItem>
            <MenuItem value="Sneha Gupta">Sneha Gupta</MenuItem>
            <MenuItem value="Rohit Singh">Rohit Singh</MenuItem>
            <MenuItem value="Anita Desai">Anita Desai</MenuItem>
            <MenuItem value="Vikram Joshi">Vikram Joshi</MenuItem>
            <MenuItem value="Kavita Reddy">Kavita Reddy</MenuItem>
            <MenuItem value="Arjun Mehta">Arjun Mehta</MenuItem>
            <MenuItem value="Deepika Nair">Deepika Nair</MenuItem>
            <MenuItem value="Suresh Kumar">Suresh Kumar</MenuItem>
            <MenuItem value="Meera Iyer">Meera Iyer</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth>
          <InputLabel>Department</InputLabel>
          <Select 
            value={formData.department}
            onChange={(e) => handleInputChange("department", e.target.value)}
            label="Department"
          >
            <MenuItem value="Information Technology">Information Technology</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Finance & Accounting">Finance & Accounting</MenuItem>
            <MenuItem value="Marketing & Sales">Marketing & Sales</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
            <MenuItem value="Customer Support">Customer Support</MenuItem>
            <MenuItem value="Administration">Administration</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Box>
          <Typography variant="body2" sx={{ marginBottom: 1, color: 'text.secondary' }}>
            Attachment
          </Typography>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={(e) => handleInputChange('attachment', e.target.files[0]?.name || '')}
            className="hrms-file-input"
          />
          {formData.attachment && (
            <Typography variant="caption" sx={{ color: 'text.secondary', marginTop: 0.5, display: 'block' }}>
              Selected: {formData.attachment}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Vendor"
          fullWidth
          value={formData.vendor}
          onChange={(e) => handleInputChange("vendor", e.target.value)}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          label="Project"
          fullWidth
          value={formData.project}
          onChange={(e) => handleInputChange("project", e.target.value)}
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
          <button className="hrms-btn hrms-btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Edit;
