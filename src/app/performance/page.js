"use client";
import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
  Avatar,
  LinearProgress,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Divider
} from '@mui/material';
import {
  Search,
  Add,
  Edit,
  DeleteOutline,
  VisibilityOutlined,
  Star
} from '@mui/icons-material';
import Create from "../../components/performance/Create";
import EditComponent from "../../components/performance/Edit";
import View from "../../components/performance/View";
import DeleteComponent from "../../components/performance/Delete";
import CommonDialog from "../../components/commonDialog";

export default function Performance() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [openData, setOpenData] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  
  // Form state for create/edit
  const [formData, setFormData] = useState({
    employee: '',
    department: '',
    position: '',
    manager: '',
    joinDate: '',
    appraisal: '',
    performanceTrend: '',
    goals: '',
    completedGoals: '',
    projectsCompleted: '',
    trainingHours: '',
    clientSatisfaction: '',
    lastReview: '',
    nextReview: '',
    reviewPeriod: '',
    reviewer: '',
    reviewType: '',
    technicalSkills: '',
    communication: '',
    leadership: '',
    problemSolving: '',
    teamwork: '',
    comments: ''
  });

  const performanceData = [
    {
      id: 1,
      employee: 'Rajesh Kumar',
      employeeId: 'EMP001',
      department: 'Software Development',
      position: 'Senior Software Engineer',
      currentRating: 4.6,
      appraisal: 'Exceeds Expectations',
      goals: 8,
      completedGoals: 7,
      lastReview: '2024-01-15',
      nextReview: '2024-07-15'
    },
    {
      id: 2,
      employee: 'Priya Sharma',
      employeeId: 'EMP002',
      department: 'Human Resources',
      position: 'HR Business Partner',
      currentRating: 4.3,
      appraisal: 'Exceeds Expectations',
      goals: 6,
      completedGoals: 6,
      lastReview: '2024-01-20',
      nextReview: '2024-07-20'
    },
    {
      id: 3,
      employee: 'Amit Patel',
      employeeId: 'EMP003',
      department: 'Sales & Marketing',
      position: 'Regional Sales Manager',
      currentRating: 4.1,
      appraisal: 'Meets Expectations',
      goals: 10,
      completedGoals: 8,
      lastReview: '2024-01-10',
      nextReview: '2024-07-10'
    },
    {
      id: 4,
      employee: 'Sneha Gupta',
      employeeId: 'EMP004',
      department: 'Finance & Accounting',
      position: 'Senior Financial Analyst',
      currentRating: 4.4,
      appraisal: 'Exceeds Expectations',
      goals: 7,
      completedGoals: 6,
      lastReview: '2024-01-25',
      nextReview: '2024-07-25'
    },
    {
      id: 5,
      employee: 'Vikram Singh',
      employeeId: 'EMP005',
      department: 'Operations',
      position: 'Operations Manager',
      currentRating: 3.9,
      appraisal: 'Meets Expectations',
      goals: 9,
      completedGoals: 7,
      lastReview: '2024-01-12',
      nextReview: '2024-07-12'
    },
    {
      id: 6,
      employee: 'Anita Reddy',
      employeeId: 'EMP006',
      department: 'Quality Assurance',
      position: 'QA Lead',
      currentRating: 4.2,
      appraisal: 'Meets Expectations',
      goals: 8,
      completedGoals: 7,
      lastReview: '2024-01-18',
      nextReview: '2024-07-18'
    },
    {
      id: 7,
      employee: 'Rohit Agarwal',
      employeeId: 'EMP007',
      department: 'Customer Success',
      position: 'Customer Success Manager',
      currentRating: 4.5,
      appraisal: 'Exceeds Expectations',
      goals: 6,
      completedGoals: 6,
      lastReview: '2024-01-22',
      nextReview: '2024-07-22'
    },
    {
      id: 8,
      employee: 'Deepika Joshi',
      employeeId: 'EMP008',
      department: 'Product Management',
      position: 'Product Manager',
      currentRating: 4.7,
      appraisal: 'Exceeds Expectations',
      goals: 7,
      completedGoals: 7,
      lastReview: '2024-01-28',
      nextReview: '2024-07-28'
    }
  ];

  const filteredData = performanceData.filter(emp =>
    emp.employee.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase()) ||
    emp.position.toLowerCase().includes(search.toLowerCase())
  );


  const getAppraisalColor = (appraisal) => {
    switch (appraisal) {
      case 'Exceeds Expectations': return 'hrms-badge-success';
      case 'Meets Expectations': return 'hrms-badge-primary';
      case 'Below Expectations': return 'hrms-badge-error';
      default: return 'hrms-badge-neutral';
    }
  };

  // Dialog handlers
  const handleAddClick = () => {
    setOpenData(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreate = () => {
    setOpenData(true);
  };

  const handleView = (employee) => {
    setSelectedData(employee);
    setOpenView(true);
  };

  const handleEdit = (employee) => {
    setSelectedData(employee);
    setFormData({
      employee: employee.employee,
      employeeId: employee.employeeId,
      department: employee.department,
      position: employee.position,
      manager: 'Manager Name', // Default value
      joinDate: '2022-01-15', // Default value
      currentRating: employee.currentRating.toString(),
      appraisal: employee.appraisal,
      performanceTrend: 'improving', // Default value
      goals: employee.goals.toString(),
      completedGoals: employee.completedGoals.toString(),
      projectsCompleted: '12', // Default value
      trainingHours: '24', // Default value
      clientSatisfaction: '4.8', // Default value
      lastReview: employee.lastReview,
      nextReview: employee.nextReview,
      reviewPeriod: 'Annual', // Default value
      reviewer: 'Manager Name', // Default value
      reviewType: 'Formal', // Default value
      technicalSkills: '4.7', // Default value
      communication: '4.3', // Default value
      leadership: '4.1', // Default value
      problemSolving: '4.6', // Default value
      teamwork: '4.4', // Default value
      comments: 'Performance review comments...' // Default value
    });
    setOpenEdit(true);
  };

  const handleDelete = (employee) => {
    setSelectedData(employee);
    setOpenDelete(true);
  };

  const handleSubmit = () => {
    console.log("Performance data submitted:", formData);
    setOpenData(false);
    setOpenEdit(false);
    setFormData({
      employee: '',
      department: '',
      position: '',
      manager: '',
      joinDate: '',
      appraisal: '',
      performanceTrend: '',
      goals: '',
      completedGoals: '',
      projectsCompleted: '',
      trainingHours: '',
      clientSatisfaction: '',
      lastReview: '',
      nextReview: '',
      reviewPeriod: '',
      reviewer: '',
      reviewType: '',
      technicalSkills: '',
      communication: '',
      leadership: '',
      problemSolving: '',
      teamwork: '',
      comments: ''
    });
  };

  const handleCloseDialog = () => {
    setOpenData(false);
    setOpenEdit(false);
    setOpenView(false);
    setOpenDelete(false);
    setSelectedData(null);
    // Reset form data
    setFormData({
      employee: '',
      employeeId: '',
      department: '',
      position: '',
      manager: '',
      joinDate: '',
      appraisal: '',
      performanceTrend: '',
      goals: '',
      completedGoals: '',
      projectsCompleted: '',
      trainingHours: '',
      clientSatisfaction: '',
      lastReview: '',
      nextReview: '',
      reviewPeriod: '',
      reviewer: '',
      reviewType: '',
      technicalSkills: '',
      communication: '',
      leadership: '',
      problemSolving: '',
      teamwork: '',
      comments: ''
    });
  };


  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Header */}
    

      {/* Search and Add Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap:"1rem", marginBottom: "1rem" }}>
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
        <Button
          variant="contained"
          sx={{textTransform: "none"}}
          startIcon={<Add />}
          onClick={handleAddClick}
        >
          Add Performance Review
        </Button>
      </Box>

      {/* Performance Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151", paddingTop: "8px", paddingBottom: "8px" }}>Employee</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", paddingTop: "8px", paddingBottom: "8px" }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", paddingTop: "8px", paddingBottom: "8px" }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", paddingTop: "8px", paddingBottom: "8px" }}>Appraisal</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", paddingTop: "8px", paddingBottom: "8px" }}>Goals Progress</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", paddingTop: "8px", paddingBottom: "8px" }}>Last Review</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", paddingTop: "8px", paddingBottom: "8px" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((emp) => (
                <TableRow key={emp.id} hover>
                  <TableCell sx={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Avatar sx={{ width: 32, height: 32, backgroundColor: "#3b82f6" }}>
                        {emp.employee.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1e293b" }}>
                          {emp.employee}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {emp.employeeId}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ paddingTop: "8px", paddingBottom: "8px" }}>{emp.department}</TableCell>
                  <TableCell sx={{ paddingTop: "8px", paddingBottom: "8px" }}>{emp.position}</TableCell>
                  <TableCell sx={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <Box className={`hrms-badge ${getAppraisalColor(emp.appraisal)}`}>
                      {emp.appraisal}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {emp.completedGoals}/{emp.goals}
                      </Typography>
                      <Box sx={{ width: "60px" }}>
                        <LinearProgress
                          variant="determinate"
                          value={(emp.completedGoals / emp.goals) * 100}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "#e5e7eb",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#10b981"
                            }
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ paddingTop: "8px", paddingBottom: "8px" }}>{emp.lastReview}</TableCell>
                  <TableCell sx={{ paddingTop: "8px", paddingBottom: "8px" }}>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                        onClick={() => handleView(emp)}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ color: "#000", fontSize: "16px" }}
                        onClick={() => handleEdit(emp)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ color: "#d32f2f", fontSize: "16px" }}
                        onClick={() => handleDelete(emp)}
                      >
                        <DeleteOutline />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        
        {/* Pagination */}
        <Box sx={{ padding: "1rem", borderTop: "1px solid #e5e7eb" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Showing {filteredData.length} of {performanceData.length} employees
            </Typography>
            <Pagination
              count={Math.ceil(filteredData.length / rowsPerPage)}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Common Dialog */}
      <CommonDialog
        open={openData || openEdit || openView || openDelete}
        onClose={handleCloseDialog}
        dialogTitle={
          openData
            ? "Add New Performance Review"
            : openEdit
            ? "Edit Performance Review"
            : openView
            ? "View Performance Details"
            : openDelete
            ? "Delete Performance Record"
            : ""
        }
        dialogContent={
          openData ? (
            <Create formData={formData} handleInputChange={handleInputChange} handleCreate={handleSubmit} handleClose={handleCloseDialog} />
          ) : openEdit ? (
            <EditComponent formData={formData} handleInputChange={handleInputChange} handleUpdate={handleSubmit} handleClose={handleCloseDialog} />
          ) : openView ? (
            selectedData && (
              <View selectedData={selectedData} />
            )
          ) : openDelete ? (
            selectedData && (
              <DeleteComponent selectedData={selectedData} handleDelete={() => console.log("Delete performance record")} handleClose={handleCloseDialog} />
            )
          ) : null
        }
        maxWidth={openDelete ? "xs" : "md"}
        fullWidth={!openDelete}
      />
    </Box>
  );
}