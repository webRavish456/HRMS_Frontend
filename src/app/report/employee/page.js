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


export default function employee(){
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    position: "",
    email: "",
    phone: "",
    joinDate: "",
    experience: "",
    performance: "",
    lastPromotion: "",
    skills: "",
    projects: "",
    employeeStatus: "Confirmed",
    lastSalaryPaidDate: "",
    payrollPeriod: "",
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

const getEmployeeStatusColor = (employeeStatus) => {
  switch (employeeStatus) {
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

  const handleEdit = (data) => {
    setEditData(data);
    setFormData(data);
    setEditShow(true);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

const handleDelete = (id) => {
    setDeleteId(id);
    setDeleteShow(true);
  };
  
  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setFormData({
      name: "",
      department: "",
      position: "",
      email: "",
      phone: "",
      joinDate: "",
      attendance: "",
      salary: "",
      status: "Active",
      experience: "",
      performance: "",
      location: "",
      manager: "",
      lastPromotion: "",
      skills: "",
      projects: "",
      leaveBalance: ""
    });
  };

  const handleCreate = (data) => {
     setOpenData(false);
  };

  const handleUpdate = (data) => {
    setEditShow(false);
  };

const handleDeleteConfirm = () => {
    setDeleteShow(false);
    setDeleteId(null);
};

const employeeData = [
  createData("EMP001", "Rajesh Kumar", "Information Technology", "Senior Software Engineer", "Head Office", 24, 850000, "2020-03-15", "rajesh.kumar@company.com", "+91 98765 43210", "4.5", "Excellent", "2023-06-01", ["React", "Node.js", "AWS"], 8, 12, "Confirmed", "2024-01-31", "Jan 2024", 12, 15, 8, 22, 2, 0, "4.8", "Q4 2023"),
  createData("EMP002", "Priya Sharma", "Information Technology", "Tech Lead", "Delhi Branch", 26, 1200000, "2018-08-20", "priya.sharma@company.com", "+91 98765 43211", "6.2", "Excellent", "2022-12-01", ["Leadership", "Architecture", "DevOps"], 12, 8, "Confirmed", "2024-01-31", "Jan 2024", 15, 20, 10, 23, 1, 0, "4.9", "Q4 2023"),
  createData("EMP003", "Amit Patel", "Information Technology", "Engineering Manager", "Bangalore Branch", 28, 1500000, "2017-01-10", "amit.patel@company.com", "+91 98765 43212", "7.8", "Good", "2023-01-01", ["Management", "Strategy", "Python"], 15, 6, "Confirmed", "2024-01-31", "Jan 2024", 18, 25, 12, 24, 0, 0, "4.5", "Q4 2023"),
  createData("EMP004", "Sneha Gupta", "Human Resources", "HR Manager", "Chennai Branch", 25, 750000, "2019-11-05", "sneha.gupta@company.com", "+91 98765 43213", "4.8", "Good", "2023-03-15", ["Recruitment", "Employee Relations", "HRIS"], 6, 15, "Confirmed", "2024-01-31", "Jan 2024", 10, 18, 6, 21, 3, 0, "4.2", "Q4 2023"),
  createData("EMP005", "Rohit Singh", "Human Resources", "HR Director", "Kolkata Branch", 30, 1100000, "2016-06-12", "rohit.singh@company.com", "+91 98765 43214", "8.2", "Excellent", "2022-08-01", ["Strategic HR", "Leadership", "Analytics"], 10, 4, "Confirmed", "2024-01-31", "Jan 2024", 20, 30, 15, 24, 0, 0, "4.7", "Q4 2023"),
  createData("EMP006", "Anita Desai", "Finance & Accounting", "Senior Financial Analyst", "Hyderabad Branch", 23, 650000, "2021-09-18", "anita.desai@company.com", "+91 98765 43215", "3.1", "Good", "2023-05-01", ["Financial Modeling", "Excel", "SAP"], 4, 18, "Probation", "2024-01-31", "Jan 2024", 8, 12, 5, 20, 4, 0, "3.8", "Q4 2023"),
  createData("EMP007", "Vikram Joshi", "Finance & Accounting", "Finance Manager", "Pune Branch", 27, 950000, "2018-04-22", "vikram.joshi@company.com", "+91 98765 43216", "6.4", "Excellent", "2023-02-01", ["Financial Planning", "Budgeting", "Team Management"], 8, 10, "Confirmed", "2024-01-31", "Jan 2024", 14, 22, 8, 23, 1, 0, "4.6", "Q4 2023"),
  createData("EMP008", "Kavita Reddy", "Marketing & Sales", "Marketing Manager", "Jaipur Branch", 24, 700000, "2020-02-28", "kavita.reddy@company.com", "+91 98765 43217", "4.6", "Good", "2023-04-01", ["Digital Marketing", "Brand Management", "Analytics"], 7, 14, "Confirmed", "2024-01-31", "Jan 2024", 11, 16, 7, 22, 2, 0, "4.1", "Q4 2023"),
  createData("EMP009", "Arjun Mehta", "Marketing & Sales", "Sales Director", "Kochi Branch", 29, 1300000, "2017-07-15", "arjun.mehta@company.com", "+91 98765 43218", "7.1", "Excellent", "2022-11-01", ["Sales Strategy", "Client Relations", "Leadership"], 12, 6, "Confirmed", "2024-01-31", "Jan 2024", 16, 24, 10, 24, 0, 0, "4.8", "Q4 2023"),
  createData("EMP010", "Deepika Nair", "Operations", "Operations Manager", "Ahmedabad Branch", 26, 800000, "2019-01-20", "deepika.nair@company.com", "+91 98765 43219", "5.7", "Good", "2023-01-15", ["Process Improvement", "Supply Chain", "Quality"], 9, 11, "Confirmed", "2024-01-31", "Jan 2024", 13, 19, 8, 23, 1, 0, "4.3", "Q4 2023"),
  createData("EMP011", "Suresh Kumar", "Customer Support", "Support Lead", "Head Office", 22, 550000, "2021-05-10", "suresh.kumar@company.com", "+91 98765 43220", "3.3", "Average", "2023-06-01", ["Customer Service", "Problem Solving", "Communication"], 3, 20, "Probation", "2024-01-31", "Jan 2024", 6, 10, 4, 18, 6, 0, "3.5", "Q4 2023"),
  createData("EMP012", "Meera Iyer", "Administration", "Admin Coordinator", "Delhi Branch", 20, 450000, "2022-08-05", "meera.iyer@company.com", "+91 98765 43221", "2.1", "Good", "2023-07-01", ["Administration", "Office Management", "Coordination"], 2, 22, "Resigned", "2024-01-31", "Jan 2024", 4, 8, 3, 15, 9, 0, "3.9", "Q4 2023"),
];

// Filter data based on search
const filteredData = employeeData.filter(employee =>
  employee.name.toLowerCase().includes(search.toLowerCase()) ||
  employee.department.toLowerCase().includes(search.toLowerCase()) ||
  employee.position.toLowerCase().includes(search.toLowerCase()) ||
  employee.branch.toLowerCase().includes(search.toLowerCase()) ||
  employee.email.toLowerCase().includes(search.toLowerCase()) ||
  employee.id.toLowerCase().includes(search.toLowerCase()) ||
  employee.performance.toLowerCase().includes(search.toLowerCase()) ||
  employee.employeeStatus.toLowerCase().includes(search.toLowerCase()) ||
  employee.payrollPeriod.toLowerCase().includes(search.toLowerCase())
);

// Pagination
const startIndex = (page - 1) * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const paginatedData = filteredData.slice(startIndex, endIndex);
const totalPages = Math.ceil(filteredData.length / rowsPerPage);

// Form component for Add/Edit
const renderForm = (isEdit = false) => (
  <Box sx={{ padding: "1.5rem" }}>
    <Grid container spacing={3}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Employee Name"
          value={formData.name}
          onChange={(e) => handleFormChange('name', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Department</InputLabel>
          <Select
            value={formData.department}
            onChange={(e) => handleFormChange('department', e.target.value)}
            label="Department"
          >
            <MenuItem value="Information Technology">Information Technology</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Finance & Accounting">Finance & Accounting</MenuItem>
            <MenuItem value="Marketing & Sales">Marketing & Sales</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
            <MenuItem value="Customer Support">Customer Support</MenuItem>
            <MenuItem value="Administration">Administration</MenuItem>
            <MenuItem value="Legal & Compliance">Legal & Compliance</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Position"
          value={formData.position}
          onChange={(e) => handleFormChange('position', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleFormChange('email', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Phone"
          value={formData.phone}
          onChange={(e) => handleFormChange('phone', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Join Date"
          type="date"
          value={formData.joinDate}
          onChange={(e) => handleFormChange('joinDate', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Experience (Years)"
          type="number"
          value={formData.experience}
          onChange={(e) => handleFormChange('experience', e.target.value)}
          variant="outlined"
          size="small"
          inputProps={{ step: 0.1, min: 0, max: 50 }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Performance</InputLabel>
          <Select
            value={formData.performance}
            onChange={(e) => handleFormChange('performance', e.target.value)}
            label="Performance"
          >
            <MenuItem value="Excellent">Excellent</MenuItem>
            <MenuItem value="Good">Good</MenuItem>
            <MenuItem value="Average">Average</MenuItem>
            <MenuItem value="Below Average">Below Average</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Last Promotion Date"
          type="date"
          value={formData.lastPromotion}
          onChange={(e) => handleFormChange('lastPromotion', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Skills (comma separated)"
          value={formData.skills}
          onChange={(e) => handleFormChange('skills', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="React, Node.js, AWS"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Projects Completed"
          type="number"
          value={formData.projects}
          onChange={(e) => handleFormChange('projects', e.target.value)}
          variant="outlined"
          size="small"
          inputProps={{ min: 0 }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Employee Status</InputLabel>
          <Select
            value={formData.employeeStatus}
            onChange={(e) => handleFormChange('employeeStatus', e.target.value)}
            label="Employee Status"
          >
            <MenuItem value="Probation">Probation</MenuItem>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Resigned">Resigned</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Last Salary Paid Date"
          type="date"
          value={formData.lastSalaryPaidDate}
          onChange={(e) => handleFormChange('lastSalaryPaidDate', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Payroll Period"
          value={formData.payrollPeriod}
          onChange={(e) => handleFormChange('payrollPeriod', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="e.g., Jan 2024"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Performance Rating"
          value={formData.performanceRating}
          onChange={(e) => handleFormChange('performanceRating', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="e.g., 4.5"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Performance Cycle"
          value={formData.performanceCycle}
          onChange={(e) => handleFormChange('performanceCycle', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="e.g., Q4 2023"
        />
      </Grid>
    </Grid>
  </Box>
);

// PDF Report component for View
const renderPDFReport = (employee) => (
  <Box sx={{ padding: "1.5rem", backgroundColor: "#f8fafc", minHeight: "400px" }}>
    <Box sx={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: "2rem", borderBottom: "2px solid #e5e7eb", paddingBottom: "1rem" }}>
        <Typography variant="h4" sx={{ color: "#1e293b", fontWeight: 700, marginBottom: "0.5rem" }}>
          EMPLOYEE REPORT
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Generated on {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      {/* Employee Details */}
      <Grid container spacing={3}>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Employee ID:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {employee.id}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Employee Name:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {employee.name}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Experience:
            </Typography>
            <Typography variant="body1" sx={{ color: getExperienceColor(employee.experience), fontWeight: 600 }}>
              {employee.experience} years
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Performance Rating:
            </Typography>
            <Typography variant="body1" sx={{ color: getPerformanceColor(employee.performance), fontWeight: 600 }}>
              {employee.performance}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Last Promotion:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {new Date(employee.lastPromotion).toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Projects Completed:
            </Typography>
            <Typography variant="body1" sx={{ color: "#10b981", fontWeight: 600 }}>
              {employee.projects}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Employee Status:
            </Typography>
            <Typography variant="body1" sx={{ color: getEmployeeStatusColor(employee.employeeStatus), fontWeight: 600 }}>
              {employee.employeeStatus}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Last Salary Paid Date:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {new Date(employee.lastSalaryPaidDate).toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Payroll Period:
            </Typography>
            <Typography variant="body1" sx={{ color: "#3b82f6", fontWeight: 600 }}>
              {employee.payrollPeriod}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Leave Balance (CL/PL/Sick):
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              CL: {employee.clBalance} | PL: {employee.plBalance} | Sick: {employee.sickBalance}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Attendance Summary:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              Present: {employee.presentDays} | Absent: {employee.absentDays} | LWP: {employee.lwpDays}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Performance Rating (Latest):
            </Typography>
            <Typography variant="body1" sx={{ color: "#10b981", fontWeight: 600 }}>
              {employee.performanceRating} ({employee.performanceCycle})
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Skills:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {Array.isArray(employee.skills) ? employee.skills.join(", ") : employee.skills}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Department:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {employee.department}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Position:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {employee.position}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Email:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {employee.email}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Phone:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {employee.phone}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Join Date:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {new Date(employee.joinDate).toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Attendance:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {employee.attendance} days
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Salary:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              ₹{employee.salary.toLocaleString()}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ marginTop: "2rem", textAlign: "center", borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          This is a computer generated report
        </Typography>
      </Box>
    </Box>
  </Box>
);




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
            }
     }}
     InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#6b7280" }} />
        </InputAdornment>
      )
     }}
  />
        
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Download />}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              borderColor: "#d1d5db",
              color: "#374151",
              height:'40px',
              "&:hover": {
                borderColor: "#9ca3af",
                backgroundColor: "#f9fafb"
              }
            }}
          >
            Export
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
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Branch</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Experience</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Salary</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {paginatedData.map((employee, index) => (
                <TableRow key={employee.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, fontSize: "0.875rem", backgroundColor: "#6366f1" }}>
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
                  <TableCell sx={{ fontWeight: 500, color: "#1f2937" }}>{employee.position}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{employee.branch}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: getExperienceColor(employee.experience) }}>
                      {employee.experience} years
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={employee.performance}
                      size="small"
                      sx={{
                        backgroundColor: getPerformanceColor(employee.performance),
                        color: "white",
                        fontWeight: 500,
                        fontSize: "0.75rem"
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#10b981" }}>
                      ₹{employee.salary.toLocaleString()}
                    </Typography>
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
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(employee.id)}
                        sx={{ color: "#ef4444" }}
                      >
                        <DeleteOutline fontSize="small" />
                      </IconButton>
                    </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
              shape="rounded"
            />
          </Box>
        )}
      </Box>

      {/* Dialog */}
    <CommonDialog
          open={openData || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            openData
              ? "Create New Employee Report"
              : viewShow
              ? "View Employee Report"
              : editShow
              ? "Edit Employee Report"
              : deleteShow
              ? "Delete Employee Report"
              : ""
          }
          dialogContent={
            openData ? (
            renderForm(false)
            ) : viewShow ? (
            <Box>
              {renderPDFReport(ViewData)}
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                <Button
                  variant="contained"
                  startIcon={<Download />}
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    backgroundColor: "#3b82f6",
                    "&:hover": {
                      backgroundColor: "#2563eb"
                    }
                  }}
                >
                  Download PDF
                </Button>
              </Box>
            </Box>
            ) : editShow ? (
            renderForm(true)
            ) : deleteShow ? (
            <Box sx={{ padding: "2rem", textAlign: "center" }}>
              <Typography variant="body1" sx={{ color: "#6b7280" }}>
                Are you sure you want to delete this employee report?
              </Typography>
            </Box>
            ) : null
          }
        dialogActions={
          <Stack direction="row" spacing={2} sx={{ padding: "1rem" }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                borderColor: "#d1d5db",
                color: "#374151"
              }}
            >
              {viewShow ? "Close" : "Cancel"}
            </Button>
            {(openData || editShow) && (
              <Button
                variant="contained"
                onClick={openData ? handleCreate : handleUpdate}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  backgroundColor: "#3b82f6"
                }}
              >
                {openData ? "Create" : "Update"}
              </Button>
            )}
            {deleteShow && (
              <Button
                variant="contained"
                onClick={handleDeleteConfirm}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  backgroundColor: "#ef4444",
                  "&:hover": {
                    backgroundColor: "#dc2626"
                  }
                }}
              >
                Delete
              </Button>
            )}
          </Stack>
        }
      />
    </Box>
  )
}