"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  Card,
  CardContent,
  Paper,
  InputAdornment,
} from "@mui/material";
import { CalendarToday, Upload } from "@mui/icons-material";
import { useRouter, useParams } from "next/navigation";

const EditStaffPage = () => {
  const router = useRouter();
  const params = useParams();
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    panNo: "",
    gender: "Male",
    password: "",
    confirmPassword: "",
    currentAddress: "",
    permanentAddress: "",
    dateOfBirth: "",
    experience: "",
    qualification: "",
    
    // Company Details
    employeeId: "",
    branchName: "",
    department: "",
    designation: "",
    employeeCode: "",
    joiningDate: "",
    role: "",
    basicSalary: "",
    specialization: "",
    
    // Bank Details
    accountHolderName: "",
    accountNumber: "",
    bankName: "",
    ifscCode: "",
    bankBranch: "",
    branchLocation: "",
    
    // Document Details
    highestQualificationCertificate: null,
    aadharCard: null,
    panCard: null,
  });

  // Sample staff data - in real app, this would come from API
  const sampleStaffData = {
    id: "EMP001",
    employeeId: "EMP001",
    fullName: "Rahul Sharma",
    email: "rahul.sharma@company.com",
    phone: "9876543210",
    department: "HR",
    position: "HR Manager",
    joinDate: "2020-01-15",
    status: "Active",
    address: "123 Main Street, Mumbai",
    emergencyContact: "9876543211",
    dateOfBirth: "1990-05-15",
    gender: "Male",
    qualification: "MBA in HR",
    experience: "5 years",
    basicSalary: "75000",
    branchName: "Main Branch",
    specialization: "Human Resources",
    accountHolderName: "Rahul Sharma",
    accountNumber: "1234567890",
    bankName: "State Bank of India",
    ifscCode: "SBIN0001234",
    bankBranch: "Mumbai Central",
    branchLocation: "Mumbai"
  };

  useEffect(() => {
    // In real app, fetch staff data by ID from API and populate form
    setFormData({
      firstName: sampleStaffData.fullName,
      email: sampleStaffData.email,
      phone: sampleStaffData.phone,
      experience: sampleStaffData.experience,
      dateOfBirth: sampleStaffData.dateOfBirth,
      qualification: sampleStaffData.qualification,
      currentAddress: sampleStaffData.address,
      gender: sampleStaffData.gender,
      branchName: sampleStaffData.branchName,
      department: sampleStaffData.department,
      basicSalary: sampleStaffData.basicSalary,
      specialization: sampleStaffData.specialization,
      joiningDate: sampleStaffData.joinDate,
      accountHolderName: sampleStaffData.accountHolderName,
      accountNumber: sampleStaffData.accountNumber,
      bankName: sampleStaffData.bankName,
      ifscCode: sampleStaffData.ifscCode,
      bankBranch: sampleStaffData.bankBranch,
      branchLocation: sampleStaffData.branchLocation,
    });
  }, [params.id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated staff data:", formData);
    // Handle form submission here
    router.push("/staff");
  };

  const handleCancel = () => {
    router.push("/staff");
  };

  return (
    <Box sx={{ padding: "1rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Paper sx={{ padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <form onSubmit={handleSubmit}>
          {/* Personal Details Section */}
          <Card sx={{ marginBottom: "2rem" }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#333" }}>
                Personal Details
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Staff Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Email ID"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12}}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="currentAddress"
                    multiline
                    rows={3}
                    value={formData.currentAddress}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12}}>
                  <Typography variant="subtitle1" sx={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                    Gender
                  </Typography>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Others" control={<Radio />} label="Others" />
                  </RadioGroup>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Company Details Section */}
          <Card sx={{ marginBottom: "2rem" }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#333" }}>
                Company Details
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{xs:12, sm:6}}>
                  <FormControl fullWidth required>
                    <InputLabel>Branch Name</InputLabel>
                    <Select
                      name="branchName"
                      value={formData.branchName}
                      onChange={handleInputChange}
                      label="Branch Name"
                    >
                      <MenuItem value="Main Branch">Main Branch</MenuItem>
                      <MenuItem value="North Branch">North Branch</MenuItem>
                      <MenuItem value="South Branch">South Branch</MenuItem>
                      <MenuItem value="East Branch">East Branch</MenuItem>
                      <MenuItem value="West Branch">West Branch</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <FormControl fullWidth required>
                    <InputLabel>Department</InputLabel>
                    <Select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      label="Department"
                    >
                      <MenuItem value="HR">HR</MenuItem>
                      <MenuItem value="IT">IT</MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Marketing">Marketing</MenuItem>
                      <MenuItem value="Operations">Operations</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Salary"
                    name="basicSalary"
                    type="number"
                    value={formData.basicSalary}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <FormControl fullWidth>
                    <InputLabel>Specialization</InputLabel>
                    <Select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      label="Specialization"
                    >
                      <MenuItem value="General">General</MenuItem>
                      <MenuItem value="Technical">Technical</MenuItem>
                      <MenuItem value="Administrative">Administrative</MenuItem>
                      <MenuItem value="Support">Support</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Joining Date"
                    name="joiningDate"
                    type="date"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Document Details Section */}
          <Card sx={{ marginBottom: "2rem" }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#333" }}>
                Document Details
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{xs:12, sm:6}}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                      Highest Qualification Certificate
                    </Typography>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<Upload />}
                      sx={{ width: "100%" }}
                    >
                      Choose File
                      <input
                        type="file"
                        name="highestQualificationCertificate"
                        onChange={handleInputChange}
                        hidden
                        accept=".pdf,.doc,.docx"
                      />
                    </Button>
                    <Typography variant="caption" sx={{ color: "#666", marginLeft: "0.5rem" }}>
                      No file chosen
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                      Aadhar Card
                    </Typography>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<Upload />}
                      sx={{ width: "100%" }}
                    >
                      Choose File
                      <input
                        type="file"
                        name="aadharCard"
                        onChange={handleInputChange}
                        hidden
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </Button>
                    <Typography variant="caption" sx={{ color: "#666", marginLeft: "0.5rem" }}>
                      No file chosen
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                      Pan Card
                    </Typography>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<Upload />}
                      sx={{ width: "100%" }}
                    >
                      Choose File
                      <input
                        type="file"
                        name="panCard"
                        onChange={handleInputChange}
                        hidden
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                    </Button>
                    <Typography variant="caption" sx={{ color: "#666", marginLeft: "0.5rem" }}>
                      No file chosen
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Bank Details Section */}
          <Card sx={{ marginBottom: "2rem" }}>
            <CardContent>
              <Typography variant="h6" sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#333" }}>
                Bank Details
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Account Holder Name"
                    name="accountHolderName"
                    value={formData.accountHolderName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Account Number"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Bank Name"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="IFSC Code"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Bank Branch"
                    name="bankBranch"
                    value={formData.bankBranch}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Branch Location"
                    name="branchLocation"
                    value={formData.branchLocation}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginTop: "2rem" }}>
            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={{ 
                padding: "0.75rem 2rem",
                borderColor: "#666",
                color: "#666",
                textTransform: "none",
                "&:hover": {
                  borderColor: "#333",
                  color: "#333"
                }
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{ 
                padding: "0.75rem 2rem",
                backgroundColor: "#1976D2",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1565C0"
                }
              }}
            >
              Update
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default EditStaffPage;
