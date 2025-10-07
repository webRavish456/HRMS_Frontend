"use client"
import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Avatar,
  Pagination,
  Stack,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Add,
  Search,
  Download,
  PictureAsPdf,
  VisibilityOutlined,
  Edit,
  DeleteOutline
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';
import View from '@/components/Report/employee/View';


export default function employee(){
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    position: "",
    branch: "",
    attendance: "",
    salary: "",
    joinDate: "",
    email: "",
    phone: "",
    experience: "",
    performance: "",
    lastPromotion: "",
    skills: "",
    projects: "",
    leaveBalance: "",
    employeeStatus: "",
    lastSalaryPaidDate: "",
    payrollPeriod: "",
    clBalance: "",
    plBalance: "",
    sickBalance: "",
    presentDays: "",
    absentDays: "",
    lwpDays: "",
    performanceRating: "",
    performanceCycle: ""
  });

  const createData = (id, name, department, position, branch, attendance, salary, joinDate, email, phone, experience, performance, lastPromotion, skills, projects, leaveBalance, employeeStatus, lastSalaryPaidDate, payrollPeriod, clBalance, plBalance, sickBalance, presentDays, absentDays, lwpDays, performanceRating, performanceCycle) => {
    return {
      id,
      name,
      department,
      position,
      branch,
      attendance,
      salary,
      joinDate,
      email,
      phone,
      experience,
      performance,
      lastPromotion,
      skills,
      projects,
      leaveBalance,
      employeeStatus,
      lastSalaryPaidDate,
      payrollPeriod,
      clBalance,
      plBalance,
      sickBalance,
      presentDays,
      absentDays,
      lwpDays,
      performanceRating,
      performanceCycle
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'hrms-badge-success';
      case 'Inactive':
        return 'hrms-badge-error';
      default:
        return 'hrms-badge-default';
    }
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'Excellent':
        return '#10b981';
      case 'Good':
        return '#3b82f6';
      case 'Average':
        return '#f59e0b';
      case 'Below Average':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getEmployeeStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return '#10b981';
      case 'Probation':
        return '#f59e0b';
      case 'Resigned':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getExperienceColor = (experience) => {
    const years = parseInt(experience);
    if (years >= 5) return '#10b981';
    if (years >= 3) return '#3b82f6';
    if (years >= 1) return '#f59e0b';
    return '#6b7280';
  };

  const handleView = (row) => {
    setViewData(row);
    setViewShow(true);
  };

  const handleEdit = (row) => {
    setEditData(row);
    setEditShow(true);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClose = () => {
    setViewShow(false);
    setViewData(null);
  };

  const handleDownloadPDF = () => {
    // Create a simple PDF download functionality
    const element = document.createElement('a');
    const file = new Blob([`Employee Report\n\nGenerated on: ${new Date().toLocaleDateString()}\n\n${employeeData.map((employee, index) => 
      `${index + 1}. ${employee.name} (${employee.id})\n   Department: ${employee.department}\n   Position: ${employee.position}\n   Experience: ${employee.experience} years\n   Performance: ${employee.performance}\n   Status: ${employee.employeeStatus}\n   Email: ${employee.email}\n   Phone: ${employee.phone}\n`
    ).join('\n')}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `employee-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCreate = (data) => {
     setOpenData(false);
  };

  const handleUpdate = (data) => {
    setEditShow(false);
  };

const employeeData = [
  createData("EMP001", "Priya Sharma", "Human Resources", "HR Manager", "Head Office", "95%", "₹45,000", "2023-01-15", "priya@company.com", "+91-9876543210", "5", "Excellent", "2023-06-15", ["Leadership", "Communication", "Recruitment"], "12", "15/12/8", "Confirmed", "2024-01-31", "January 2024", "15", "12", "8", "22", "1", "0", "4.8", "Q4 2023"),
  createData("EMP002", "Rajesh Kumar", "Finance & Accounting", "Senior Accountant", "Delhi Branch", "92%", "₹42,000", "2022-03-20", "rajesh@company.com", "+91-9876543211", "4", "Good", "2023-09-20", ["Accounting", "Taxation", "Auditing"], "8", "12/10/6", "Confirmed", "2024-01-31", "January 2024", "12", "10", "6", "21", "2", "0", "4.2", "Q4 2023"),
  createData("EMP003", "Amit Singh", "Information Technology", "Software Developer", "Head Office", "88%", "₹38,000", "2023-07-10", "amit@company.com", "+91-9876543212", "2", "Good", "2023-12-10", ["React", "Node.js", "JavaScript"], "6", "18/15/10", "Probation", "2024-01-31", "January 2024", "18", "15", "10", "20", "3", "0", "3.8", "Q4 2023"),
  createData("EMP004", "Sunita Patel", "Marketing", "Marketing Manager", "Bangalore Branch", "90%", "₹40,000", "2022-11-05", "sunita@company.com", "+91-9876543213", "3", "Excellent", "2023-11-05", ["Digital Marketing", "Brand Management", "Analytics"], "10", "16/12/8", "Confirmed", "2024-01-31", "January 2024", "16", "12", "8", "19", "2", "1", "4.5", "Q4 2023"),
  createData("EMP005", "Vikram Yadav", "Operations", "Operations Manager", "Chennai Branch", "85%", "₹35,000", "2023-02-28", "vikram@company.com", "+91-9876543214", "1", "Average", "2023-08-28", ["Process Management", "Team Leadership"], "4", "20/18/12", "Probation", "2024-01-31", "January 2024", "20", "18", "12", "18", "4", "1", "3.5", "Q4 2023"),
  createData("EMP006", "Meera Joshi", "Human Resources", "HR Executive", "Head Office", "93%", "₹32,000", "2023-04-12", "meera@company.com", "+91-9876543215", "1", "Good", "2023-10-12", ["Recruitment", "Employee Relations"], "7", "22/20/15", "Confirmed", "2024-01-31", "January 2024", "22", "20", "15", "21", "2", "0", "4.0", "Q4 2023"),
  createData("EMP007", "Ramesh Gupta", "Sales", "Sales Executive", "Kolkata Branch", "87%", "₹28,000", "2023-06-18", "ramesh@company.com", "+91-9876543216", "1", "Average", "2023-12-18", ["Sales", "Customer Relations", "Negotiation"], "5", "25/22/18", "Probation", "2024-01-31", "January 2024", "25", "22", "18", "17", "5", "1", "3.2", "Q4 2023"),
  createData("EMP008", "Anita Verma", "Information Technology", "Senior Developer", "Hyderabad Branch", "94%", "₹48,000", "2021-09-25", "anita@company.com", "+91-9876543217", "4", "Excellent", "2023-03-25", ["Python", "Machine Learning", "AI"], "15", "18/15/10", "Confirmed", "2024-01-31", "January 2024", "18", "15", "10", "22", "1", "0", "4.7", "Q4 2023"),
  createData("EMP009", "Suresh Tiwari", "Administration", "Admin Manager", "Pune Branch", "89%", "₹30,000", "2022-12-01", "suresh@company.com", "+91-9876543218", "2", "Good", "2023-06-01", ["Administration", "Vendor Management"], "6", "20/18/12", "Confirmed", "2024-01-31", "January 2024", "20", "18", "12", "20", "2", "1", "3.9", "Q4 2023"),
  createData("EMP010", "Kavita Singh", "Finance & Accounting", "Accountant", "Head Office", "91%", "₹26,000", "2023-08-14", "kavita@company.com", "+91-9876543219", "1", "Good", "2023-12-14", ["Bookkeeping", "Financial Reporting"], "3", "24/20/16", "Probation", "2024-01-31", "January 2024", "24", "20", "16", "20", "2", "1", "3.6", "Q4 2023"),
  createData("EMP011", "Manoj Agarwal", "Sales", "Sales Manager", "Ahmedabad Branch", "86%", "₹34,000", "2022-05-30", "manoj@company.com", "+91-9876543220", "3", "Good", "2023-11-30", ["Sales Management", "Team Building", "Strategy"], "9", "22/20/15", "Confirmed", "2024-01-31", "January 2024", "22", "20", "15", "19", "3", "1", "4.1", "Q4 2023"),
  createData("EMP012", "Deepak Sharma", "Operations", "Operations Executive", "Jaipur Branch", "84%", "₹24,000", "2023-10-08", "deepak@company.com", "+91-9876543221", "1", "Average", "2023-12-08", ["Operations", "Logistics"], "2", "26/24/20", "Probation", "2024-01-31", "January 2024", "26", "24", "20", "17", "5", "1", "3.3", "Q4 2023")
];

// Filter data based on search
const filteredData = employeeData.filter(employee =>
  employee.name.toLowerCase().includes(search.toLowerCase()) ||
  employee.department.toLowerCase().includes(search.toLowerCase()) ||
  employee.position.toLowerCase().includes(search.toLowerCase()) ||
  employee.performance.toLowerCase().includes(search.toLowerCase()) ||
  employee.employeeStatus.toLowerCase().includes(search.toLowerCase()) ||
  employee.payrollPeriod.toLowerCase().includes(search.toLowerCase()) ||
  employee.id.toLowerCase().includes(search.toLowerCase())
);

// Pagination
const startIndex = (page - 1) * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const paginatedData = filteredData.slice(startIndex, endIndex);
const totalPages = Math.ceil(filteredData.length / rowsPerPage);


  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap:"1rem", marginBottom: "1rem" }}>
   <TextField
            placeholder="Search by name, department, position, performance, status, payroll period..."
    variant="outlined"
    size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
    sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#fff",
              "& fieldset": {
                borderColor: "#d1d5db",
              },
              "&:hover fieldset": {
                borderColor: "#9ca3af",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3b82f6",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#6b7280" }} />
              </InputAdornment>
            ),
          }}
        />
        
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={handleDownloadPDF}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              borderColor: "#d1d5db",
              color: "#374151",
              "&:hover": {
                borderColor: "#9ca3af",
                backgroundColor: "#f9fafb"
              }
            }}
          >
            Download
          </Button>
        </Stack>
      </Box>

      {/* Table */}
      <Box className="hrms-card">
        <TableContainer>
          <Table className="hrms-table">
        <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>S. No</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Employee</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Experience</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {paginatedData.map((employee, index) => (
                <TableRow key={employee.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Avatar sx={{ width: 32, height: 32, backgroundColor: "#3b82f6" }}>
                        {employee.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1f2937" }}>
                          {employee.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {employee.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{employee.department}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{employee.position}</TableCell>
                  <TableCell>
                    <Typography sx={{ color: getExperienceColor(employee.experience), fontWeight: 600 }}>
                      {employee.experience} years
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getPerformanceColor(employee.performance)}`}>
                      {employee.performance}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getEmployeeStatusColor(employee.employeeStatus)}`}>
                      {employee.employeeStatus}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(employee)}
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined fontSize="small" />
                      </IconButton>
                    </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        {/* Pagination */}
        <Box sx={{ padding: "1rem", borderTop: "1px solid #e5e7eb" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} records
            </Typography>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Dialog */}
    <CommonDialog
          open={viewShow}
          onClose={handleClose}
          dialogTitle="Employee Report"
          dialogContent={
            ViewData && (
              <View 
                selectedData={ViewData} 
                getExperienceColor={getExperienceColor}
                getPerformanceColor={getPerformanceColor}
                getEmployeeStatusColor={getEmployeeStatusColor}
              />
            )
          }
          maxWidth="md"
          fullWidth={true}
        />
    </Box>
  )
}