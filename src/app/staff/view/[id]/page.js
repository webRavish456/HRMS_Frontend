"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
} from "@mui/material";
// No icons needed for view page
import { useRouter, useParams } from "next/navigation";

const ViewStaffPage = () => {
  const router = useRouter();
  const params = useParams();
  const [staffData, setStaffData] = useState(null);

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
    // In real app, fetch staff data by ID from API
    setStaffData(sampleStaffData);
  }, [params.id]);

  // No action handlers needed for view-only page

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "error";
      default:
        return "default";
    }
  };

  if (!staffData) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: "1rem", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Personal Details Section */}
      <Card sx={{ marginBottom: "2rem", padding: "2rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <CardContent sx={{ padding: 0 }}>
            <Typography variant="h6" sx={{ marginBottom: "1.5rem", fontWeight: 600, color: "#333" }}>
              Personal Details
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Staff Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.fullName}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Email ID
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.email}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Mobile Number
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.phone}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Experience
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.experience}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Date of Birth
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.dateOfBirth}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Qualification
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.qualification}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Address
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.address}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Gender
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.gender}
                  </Typography>
                </Box>
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
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Branch Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.branchName}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Department
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.department}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Position
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.position}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Salary
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    ₹{staffData.basicSalary}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Specialization
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.specialization}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Joining Date
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.joinDate}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Status
                  </Typography>
                  <Chip 
                    label={staffData.status} 
                    color={getStatusColor(staffData.status)}
                    size="small"
                  />
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
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Account Holder Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.accountHolderName}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Account Number
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.accountNumber}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Bank Name
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.bankName}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    IFSC Code
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.ifscCode}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Bank Branch
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.bankBranch}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#666", marginBottom: "0.25rem" }}>
                    Branch Location
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {staffData.branchLocation}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </Box>
  );
};

export default ViewStaffPage;
