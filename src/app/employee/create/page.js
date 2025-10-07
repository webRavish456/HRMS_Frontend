"use client";

import React, { useState } from "react";
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
  InputAdornment,
} from "@mui/material";
import { CalendarToday, Upload } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const CreateEmployeePage = () => {
  const router = useRouter();
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
    resume: null,
    aadharCard: null,
    panCard: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee data:", formData);
    // Handle form submission here
    router.push("/employee");
  };

  const handleCancel = () => {
    router.push("/employee");
  };

  return (
    <Box sx={{ padding: "1rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>

      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <Card sx={{ marginBottom: "2rem", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <CardContent sx={{ padding: 0 }}>
              <Typography variant="h6" sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#333" }}>
                Personal Details
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{xs:12, sm:6}}>
                  <TextField
                    fullWidth
                    label="Employee Name"
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
          <Card sx={{ marginBottom: "2rem", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <CardContent sx={{ padding: 0 }}>
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
                      Resume
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
                        name="resume"
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
          <Card sx={{ marginBottom: "2rem", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <CardContent sx={{ padding: 0 }}>
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
              Submit
            </Button>
          </Box>
        </form>
    </Box>
  );
};

export default CreateEmployeePage;
