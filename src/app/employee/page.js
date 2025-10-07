"use client";

import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import { Search, Add, VisibilityOutlined, EditOutlined, DeleteOutlined } from "@mui/icons-material";
import CommonDialog from "@/components/commonDialog";
import { useRouter } from "next/navigation";

const EmployeePage = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [deleteShow, setDeleteShow] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sample employee data
  const [employeeData, setEmployeeData] = useState([
    {
      id: "EMP001",
      employeeId: "EMP001",
      fullName: "Rahul Sharma",
      email: "rahul.sharma@company.com",
      phone: "9876543210",
      department: "HR",
      position: "HR Manager",
      branch: "Head Office",
      joinDate: "2020-01-15",
      status: "Active",
      address: "123 Main Street, Mumbai",
      emergencyContact: "9876543211"
    },
    {
      id: "EMP002",
      employeeId: "EMP002", 
      fullName: "Neha Kumari",
      email: "neha.kumari@company.com",
      phone: "9123456780",
      department: "IT",
      position: "Senior Developer",
      branch: "Delhi Branch",
      joinDate: "2021-03-20",
      status: "Active",
      address: "456 Park Avenue, Delhi",
      emergencyContact: "9123456781"
    },
    {
      id: "EMP003",
      employeeId: "EMP003",
      fullName: "Ankit Verma",
      email: "ankit.verma@company.com",
      phone: "9988776655",
      department: "Finance",
      position: "Financial Analyst",
      branch: "Bangalore Branch",
      joinDate: "2019-08-10",
      status: "Active",
      address: "789 Business District, Bangalore",
      emergencyContact: "9988776656"
    },
    {
      id: "EMP004",
      employeeId: "EMP004",
      fullName: "Priya Singh",
      email: "priya.singh@company.com",
      phone: "9876543212",
      department: "Marketing",
      position: "Marketing Manager",
      branch: "Chennai Branch",
      joinDate: "2022-02-15",
      status: "Active",
      address: "321 Corporate Plaza, Chennai",
      emergencyContact: "9876543213"
    },
    {
      id: "EMP005",
      employeeId: "EMP005",
      fullName: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      phone: "9876543214",
      department: "Operations",
      position: "Operations Head",
      branch: "Kolkata Branch",
      joinDate: "2021-11-08",
      status: "Active",
      address: "654 Business Center, Kolkata",
      emergencyContact: "9876543215"
    }
  ]);

  const filteredEmployees = employeeData.filter(employee =>
    employee.fullName.toLowerCase().includes(search.toLowerCase()) ||
    employee.email.toLowerCase().includes(search.toLowerCase()) ||
    employee.department.toLowerCase().includes(search.toLowerCase()) ||
    employee.position.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateEmployee = () => {
    router.push("/employee/create");
  };

  const handleViewEmployee = (employeeId) => {
    router.push(`/employee/view/${employeeId}`);
  };

  const handleEditEmployee = (employeeId) => {
    router.push(`/employee/edit/${employeeId}`);
  };

  const handleDelete = () => {
    const updatedEmployee = employeeData.filter((_, index) => index !== selectedIndex);
    setEmployeeData(updatedEmployee);
    setDeleteShow(false);
    setSelectedEmployee(null);
    setSelectedIndex(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "hrms-badge-success";
      case "Inactive":
        return "hrms-badge-error";
      default:
        return "hrms-badge-neutral";
    }
  };

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: "300px", "& .MuiOutlinedInput-root": { height: "40px" } }}
        />
        <button
          className="hrms-btn hrms-btn-primary"
          onClick={handleCreateEmployee}
          style={{ height: "40px" }}
        >
          <Add />
          Add Employee
        </button>
      </Box>

      {/* Employee Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
          <TableHead>
            <TableRow>
              <TableCell>S. No.</TableCell>
              <TableCell>Employee</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((employee, index) => (
                <TableRow key={employee.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {employee.fullName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {employee.employeeId}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body2">{employee.email}</Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {employee.phone}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.branch}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </Box>
                  </TableCell>
                  <TableCell>{employee.joinDate}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleViewEmployee(employee.id)}
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleEditEmployee(employee.id)}
                        sx={{ color: "#000", fontSize: "16px" }}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => { 
                          setSelectedEmployee(employee); 
                          setSelectedIndex(page * rowsPerPage + index);
                          setDeleteShow(true); 
                        }}
                        sx={{ color: "#d32f2f", fontSize: "16px" }}
                      >
                        <DeleteOutlined />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          </Table>
        </Box>


        <Box sx={{ padding: "0.75rem 1rem", borderTop: "1px solid #e5e5e5", backgroundColor: "#fafafa" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ color: "#333", fontWeight: 500, fontSize: "0.875rem" }}>
            Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredEmployees.length)} of {filteredEmployees.length} employees
          </Typography>
          <Pagination
            count={Math.ceil(filteredEmployees.length / rowsPerPage)}
            page={page + 1}
            onChange={(_, newPage) => setPage(newPage - 1)}
            color="primary"
            size="small"
          />
        </Stack>
      </Box>
      </Box>

      {/* Delete Confirmation Dialog */}
      <CommonDialog
        open={deleteShow}
        onClose={() => {
          setDeleteShow(false);
          setSelectedEmployee(null);
          setSelectedIndex(null);
        }}
        dialogTitle="Delete Employee"
        dialogContent={
          <Box sx={{ padding: "1rem 0" }}>
            <Typography variant="body1" sx={{ mb: 2, color: "#374151", fontSize: "0.95rem" }}>
              Are you sure you want to delete the employee{" "}
              <Typography component="span" sx={{ fontWeight: 600, color: "#1f2937" }}>
                {selectedEmployee?.name}
              </Typography>
              ?
            </Typography>
          </Box>
        }
        primaryAction={true}
        primaryActionText="Delete"
        primaryActionColor="error"
        onPrimaryAction={handleDelete}
        secondaryActionText="Cancel"
        maxWidth="xs"
        fullWidth={false}
      />
    </Box>
  );
};

export default EmployeePage;