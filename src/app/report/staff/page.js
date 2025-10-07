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
  LinearProgress,
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
import View from '@/components/Report/staff/View';


export default function staff(){
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [ViewData, setViewData] = useState(null);
  const [viewShow, setViewShow] = useState(false);

  const createData = (id, staffName, branch, department, position, salary, performance) => {
    return {
      id,
      staffName,
      branch,
      department,
      position,
      salary,
      performance
    };
  };

 

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'Excellent':
        return 'hrms-badge-success';
      case 'Good':
        return 'hrms-badge-primary';
      case 'Average':
        return 'hrms-badge-warning';
      case 'Below Average':
        return 'hrms-badge-error';
      default:
        return 'hrms-badge-neutral';
    }
  };



const handleView = (row) => {
    setViewData(row);
    setViewShow(true);
  };

  const handleClose = () => {
    setViewShow(false);
    setViewData(null);
  };

  const handleDownloadPDF = () => {
    // Create a simple PDF download functionality
    const element = document.createElement('a');
    const file = new Blob([`Staff Report\n\nGenerated on: ${new Date().toLocaleDateString()}\n\n${staffData.map((staff, index) => 
      `${index + 1}. ${staff.staffName} (${staff.id})\n   Branch: ${staff.branch}\n   Department: ${staff.department}\n   Position: ${staff.position}\n   Performance: ${staff.performance}\n   Salary: ${staff.salary}\n`
    ).join('\n')}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `staff-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };


const staffData = [
  createData("STF001", "Priya Sharma", "Head Office", "Human Resources", "HR Manager", "₹45,000", "Excellent"),
  createData("STF002", "Rajesh Kumar", "Delhi Branch", "Finance & Accounting", "Accountant", "₹35,000", "Good"),
  createData("STF003", "Amit Singh", "Head Office", "Security", "Security Guard", "₹18,000", "Average"),
  createData("STF004", "Sunita Patel", "Bangalore Branch", "Front Office", "Receptionist", "₹22,000", "Good"),
  createData("STF005", "Vikram Yadav", "Chennai Branch", "General", "Office Boy", "₹15,000", "Average"),
  createData("STF006", "Meera Joshi", "Head Office", "Cafeteria", "Pantry Staff", "₹16,000", "Good"),
  createData("STF007", "Ramesh Gupta", "Kolkata Branch", "Maintenance", "Sweeper/Housekeeping", "₹14,000", "Average"),
  createData("STF008", "Anita Verma", "Hyderabad Branch", "Information Technology", "IT Support", "₹40,000", "Excellent"),
  createData("STF009", "Suresh Tiwari", "Pune Branch", "Administration", "Admin Assistant", "₹28,000", "Good"),
  createData("STF010", "Kavita Singh", "Head Office", "Human Resources", "HR Executive", "₹38,000", "Excellent"),
  createData("STF011", "Manoj Agarwal", "Ahmedabad Branch", "Finance & Accounting", "Senior Accountant", "₹42,000", "Good"),
  createData("STF012", "Deepak Sharma", "Jaipur Branch", "Security", "Senior Security Guard", "₹20,000", "Good"),
];

// Filter data based on search
const filteredData = staffData.filter(staff =>
  staff.staffName.toLowerCase().includes(search.toLowerCase()) ||
  staff.branch.toLowerCase().includes(search.toLowerCase()) ||
  staff.department.toLowerCase().includes(search.toLowerCase()) ||
  staff.position.toLowerCase().includes(search.toLowerCase()) ||
  staff.performance.toLowerCase().includes(search.toLowerCase()) ||
  staff.salary.toLowerCase().includes(search.toLowerCase()) ||
  staff.id.toLowerCase().includes(search.toLowerCase())
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
          label="Staff Name"
          value={formData.staffName}
          onChange={(e) => handleFormChange('staffName', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Staff Type</InputLabel>
          <Select
            value={formData.staffType}
            onChange={(e) => handleFormChange('staffType', e.target.value)}
            label="Staff Type"
          >
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Accounts">Accounts</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Receptionist">Receptionist</MenuItem>
            <MenuItem value="Office Boy">Office Boy</MenuItem>
            <MenuItem value="Pantry Staff">Pantry Staff</MenuItem>
            <MenuItem value="Housekeeping">Housekeeping</MenuItem>
            <MenuItem value="IT Support">IT Support</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Department</InputLabel>
          <Select
            value={formData.department}
            onChange={(e) => handleFormChange('department', e.target.value)}
            label="Department"
          >
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Finance & Accounting">Finance & Accounting</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Front Office">Front Office</MenuItem>
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Cafeteria">Cafeteria</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Information Technology">Information Technology</MenuItem>
            <MenuItem value="Administration">Administration</MenuItem>
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
          label="Salary"
          value={formData.salary}
          onChange={(e) => handleFormChange('salary', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="e.g., ₹25,000"
        />
      </Grid>
    </Grid>
  </Box>
);



  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap:"1rem", marginBottom: "1rem" }}>
   <TextField
            placeholder="Search by staff name, branch, department, position, performance, salary..."
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
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Staff</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Branch</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Performance</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Salary</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {paginatedData.map((staff, index) => (
                <TableRow key={staff.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, fontSize: "0.875rem", backgroundColor: "#6366f1" }}>
                        {staff.id.slice(-2)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1f2937" }}>
                          {staff.staffName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {staff.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{staff.branch}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{staff.department}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{staff.position}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getPerformanceColor(staff.performance)}`}>
                      {staff.performance}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#059669" }}>
                      {staff.salary}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(staff)}
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
          dialogTitle="Staff Report"
          dialogContent={
            ViewData && (
              <View selectedData={ViewData} getPerformanceColor={getPerformanceColor} />
            )
          }
          maxWidth="md"
          fullWidth={true}
        />
    </Box>
  )
}