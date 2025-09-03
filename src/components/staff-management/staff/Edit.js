"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";

const EditEmployee = ({ employee, handleUpdate, handleClose }) => {
  const [formData, setFormData] = useState(employee || {});

  useEffect(() => {
    if (employee) setFormData(employee);
  }, [employee]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  return (
    <Paper sx={{ p: 4, m: 3, maxHeight: "80vh", overflowY: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Edit Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          Personal Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="First Name" name="firstName" value={formData.firstName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Last Name" name="lastName" value={formData.lastName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Father Name" name="fatherName" value={formData.fatherName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Email" name="email" value={formData.email || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Phone" name="phone" value={formData.phone || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Alternate Phone" name="altPhone" value={formData.altPhone || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="PAN No" name="panNo" value={formData.panNo || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}>
            <TextField select fullWidth label="Gender" name="gender" value={formData.gender || ""} onChange={handleChange}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}><TextField type="password" fullWidth label="Password" name="password" value={formData.password || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="password" fullWidth label="Confirm Password" name="confirmPassword" value={formData.confirmPassword || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Current Address" name="currentAddress" value={formData.currentAddress || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Permanent Address" name="permanentAddress" value={formData.permanentAddress || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="date" fullWidth label="Date of Birth" name="dob" InputLabelProps={{ shrink: true }} value={formData.dob || ""} onChange={handleChange} /></Grid>
        </Grid>

        {/* Documents */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Documents</Typography>
        <Grid container spacing={2}>
          {[
            { label: "Upload Certificate", name: "certificate" },
            { label: "Upload Resume", name: "resume" },
            { label: "Upload Aadhar Document", name: "aadharDoc" },
            { label: "Upload PAN Card Document", name: "panDoc" },
            { label: "Upload Photo", name: "photo" },
          ].map((doc, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Button variant="contained" component="label" fullWidth>
                {doc.label}
                <input type="file" hidden name={doc.name} onChange={handleChange} />
              </Button>
              {formData[doc.name] && (
                <Typography variant="caption">{formData[doc.name]?.name || formData[doc.name]}</Typography>
              )}
            </Grid>
          ))}
        </Grid>

        {/* Company Details */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Company Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="Employee ID" name="employeeId" value={formData.employeeId || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Branch Name" name="branchName" value={formData.branchName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Department" name="department" value={formData.department || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Designation" name="designation" value={formData.designation || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Employee Code" name="employeeCode" value={formData.employeeCode || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="date" fullWidth label="Joining Date" name="joiningDate" InputLabelProps={{ shrink: true }} value={formData.joiningDate || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Role" name="role" value={formData.role || ""} onChange={handleChange} /></Grid>
        </Grid>

        {/* Bank Details */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Bank Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="Account Holder Name" name="accountHolderName" value={formData.accountHolderName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Account Number" name="accountNumber" value={formData.accountNumber || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Bank Name" name="bankName" value={formData.bankName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="IFSC Code" name="ifsc" value={formData.ifsc || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Bank Branch" name="bankBranch" value={formData.bankBranch || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Branch Location" name="branchLocation" value={formData.branchLocation || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Tax Payer ID" name="taxPayerId" value={formData.taxPayerId || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Basic Salary" name="basicSalary" value={formData.basicSalary || ""} onChange={handleChange} /></Grid>
        </Grid>

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>Update Employee</Button>
      </form>
    </Paper>
  );
};

export default EditEmployee;


