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
    currentRating: '',
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
      employee: 'John Doe',
      employeeId: 'EMP001',
      department: 'Engineering',
      position: 'Senior Developer',
      currentRating: 4.5,
      appraisal: 'Exceeds Expectations',
      goals: 8,
      completedGoals: 7,
      lastReview: '2024-01-15',
      nextReview: '2024-07-15'
    },
    {
      id: 2,
      employee: 'Jane Smith',
      employeeId: 'EMP002',
      department: 'Marketing',
      position: 'Marketing Manager',
      currentRating: 4.2,
      appraisal: 'Meets Expectations',
      goals: 6,
      completedGoals: 5,
      lastReview: '2024-01-20',
      nextReview: '2024-07-20'
    },
    {
      id: 3,
      employee: 'Mike Johnson',
      employeeId: 'EMP003',
      department: 'Sales',
      position: 'Sales Executive',
      currentRating: 3.8,
      appraisal: 'Meets Expectations',
      goals: 10,
      completedGoals: 8,
      lastReview: '2024-01-10',
      nextReview: '2024-07-10'
    }
  ];

  const filteredData = performanceData.filter(emp =>
    emp.employee.toLowerCase().includes(search.toLowerCase()) ||
    emp.department.toLowerCase().includes(search.toLowerCase()) ||
    emp.position.toLowerCase().includes(search.toLowerCase())
  );

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'success';
    if (rating >= 4.0) return 'primary';
    if (rating >= 3.5) return 'warning';
    return 'error';
  };

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
      currentRating: '',
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
      currentRating: '',
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
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Employee</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Current Rating</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Appraisal</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Goals Progress</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Last Review</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((emp) => (
                <TableRow key={emp.id} hover>
                  <TableCell>
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
                  <TableCell>{emp.department}</TableCell>
                  <TableCell>{emp.position}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {emp.currentRating}
                      </Typography>
                      <Box sx={{ width: "60px" }}>
                        <LinearProgress
                          variant="determinate"
                          value={(emp.currentRating / 5) * 100}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: "#e5e7eb",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: getRatingColor(emp.currentRating) === "success" ? "#10b981" : 
                                             getRatingColor(emp.currentRating) === "primary" ? "#3b82f6" : 
                                             getRatingColor(emp.currentRating) === "warning" ? "#f59e0b" : "#ef4444"
                            }
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getAppraisalColor(emp.appraisal)}`}>
                      {emp.appraisal}
                    </Box>
                  </TableCell>
                  <TableCell>
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
                  <TableCell>{emp.lastReview}</TableCell>
                  <TableCell>
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
            <Create formData={formData} handleInputChange={handleInputChange} />
          ) : openEdit ? (
            <EditComponent formData={formData} handleInputChange={handleInputChange} />
          ) : openView ? (
            selectedData && (
              <View selectedData={selectedData} getRatingColor={getRatingColor} />
            )
          ) : openDelete ? (
            selectedData && (
              <DeleteComponent selectedData={selectedData} />
            )
          ) : null
        }
        primaryAction={openData || openEdit || openDelete}
        primaryActionText={
          openData
            ? "Create Review"
            : openEdit
            ? "Update Review"
            : openDelete
            ? "Delete"
            : ""
        }
        onPrimaryAction={
          openData
            ? handleSubmit
            : openEdit
            ? handleSubmit
            : openDelete
            ? () => console.log("Delete performance record")
            : null
        }
        secondaryActionText={openView ? "Close" : "Cancel"}
        showActions={!openView}
        primaryActionColor={openDelete ? "error" : "primary"}
      />
    </Box>
  );
}