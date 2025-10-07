"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Grid,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import {
  Add,
  EditOutlined,
  DeleteOutlined,
  VisibilityOutlined,
  Search,
  FilterList,
  Download,
} from "@mui/icons-material";
import Create from "../../../components/Recruitment/job-onboarding/Create";
import Edit from "../../../components/Recruitment/job-onboarding/Edit";
import View from "../../../components/Recruitment/job-onboarding/View";
import Delete from "../../../components/Recruitment/job-onboarding/Delete";
import CommonDialog from "../../../components/commonDialog";

const JobOnboardingPage = () => {
  const [onboardings, setOnboardings] = useState([
    {
      id: "ON001",
      candidateName: "John Doe",
      jobTitle: "Frontend Developer",
      department: "IT",
      branch: "Head Office",
      startDate: "2024-02-01",
      status: "In Progress",
      assignedTo: "HR Manager",
      documents: "Pending",
      orientation: "Scheduled"
    },
    {
      id: "ON002",
      candidateName: "Jane Smith",
      jobTitle: "Marketing Specialist",
      department: "Marketing",
      branch: "Delhi Branch",
      startDate: "2024-02-15",
      status: "Completed",
      assignedTo: "HR Manager",
      documents: "Completed",
      orientation: "Completed"
    },
    {
      id: "ON003",
      candidateName: "Mike Johnson",
      jobTitle: "Sales Executive",
      department: "Sales",
      branch: "Bangalore Branch",
      startDate: "2024-03-01",
      status: "Pending",
      assignedTo: "HR Manager",
      documents: "Pending",
      orientation: "Pending"
    },
    {
      id: "ON004",
      candidateName: "Sarah Wilson",
      jobTitle: "HR Coordinator",
      department: "HR",
      branch: "Chennai Branch",
      startDate: "2024-03-15",
      status: "In Progress",
      assignedTo: "HR Manager",
      documents: "Completed",
      orientation: "Scheduled"
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");

  // Dialog States
  const [openData, setOpenData] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // Form States
  const [formData, setFormData] = useState({
    candidateName: "",
    jobTitle: "",
    department: "",
    branch: "",
    startDate: "",
    status: "Pending",
    assignedTo: "",
    documents: "Pending",
    orientation: "Pending",
    notes: ""
  });

  const handleClose = () => {
    setOpenData(false);
    setOpenView(false);
    setOpenEdit(false);
    setOpenDelete(false);
    setSelectedData(null);
    setFormData({ 
      candidateName: "", 
      jobTitle: "", 
      department: "", 
      branch: "",
      startDate: "", 
      status: "Pending",
      assignedTo: "",
      documents: "Pending",
      orientation: "Pending",
      notes: ""
    });
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

  const handleView = (onboarding) => {
    setSelectedData(onboarding);
    setOpenView(true);
  };

  const handleEdit = (onboarding) => {
    setSelectedData(onboarding);
    setFormData({
      candidateName: onboarding.candidateName,
      jobTitle: onboarding.jobTitle,
      department: onboarding.department,
      branch: onboarding.branch,
      startDate: onboarding.startDate,
      status: onboarding.status,
      assignedTo: onboarding.assignedTo,
      documents: onboarding.documents,
      orientation: onboarding.orientation,
      notes: onboarding.notes || ""
    });
    setOpenEdit(true);
  };

  const handleDelete = (onboarding) => {
    setSelectedData(onboarding);
    setOpenDelete(true);
  };

  const handleSubmit = () => {
    if (openData) {
      // Create new onboarding
      const newOnboarding = {
        id: `ON${String(onboardings.length + 1).padStart(3, '0')}`,
        ...formData
      };
      setOnboardings([...onboardings, newOnboarding]);
    } else if (openEdit) {
      // Update existing onboarding
      setOnboardings(onboardings.map(onboarding => 
        onboarding.id === selectedData.id 
          ? { ...onboarding, ...formData }
          : onboarding
      ));
    }
    handleClose();
  };

  const handleDeleteConfirm = () => {
    setOnboardings(onboardings.filter(onboarding => onboarding.id !== selectedData.id));
    handleClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'hrms-badge-success';
      case 'In Progress': return 'hrms-badge-warning';
      case 'Pending': return 'hrms-badge-info';
      case 'On Hold': return 'hrms-badge-error';
      default: return 'hrms-badge-neutral';
    }
  };

  const filteredOnboardings = onboardings.filter(onboarding => {
    const matchesSearch = onboarding.candidateName.toLowerCase().includes(search.toLowerCase()) ||
                         onboarding.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
                         onboarding.department.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || onboarding.status === filterStatus;
    const matchesDepartment = filterDepartment === "all" || onboarding.department === filterDepartment;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  return (
    <Box sx={{ padding: "0.5rem" }}>

        <Box sx={{ display: "flex", gap: "0.5rem", paddingBottom:"1rem", display:'flex', justifyContent:'flex-end' }}>
        <Box>
          <TextField
            placeholder="Search onboardings..."
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
      
        </Box>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleCreate}
            sx={{ height: "40px", textTransform: "none" }}
          >
            Add Onboarding
          </Button>
        </Box>
     

      {/* Onboarding Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No</TableCell>
                <TableCell>Candidate</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Documents</TableCell>
                <TableCell>Orientation</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOnboardings.map((onboarding) => (
                <TableRow key={onboarding.id} hover>
                  <TableCell>{filteredOnboardings.indexOf(onboarding) + 1}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {onboarding.candidateName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {onboarding.assignedTo}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{onboarding.jobTitle}</TableCell>
                  <TableCell>{onboarding.department}</TableCell>
                  <TableCell>{onboarding.branch}</TableCell>
                  <TableCell>{onboarding.startDate}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(onboarding.status)}`}>
                      {onboarding.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${
                      onboarding.documents === 'Completed' ? 'hrms-badge-success' : 'hrms-badge-warning'
                    }`}>
                      {onboarding.documents}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${
                      onboarding.orientation === 'Completed' ? 'hrms-badge-success' : 'hrms-badge-warning'
                    }`}>
                      {onboarding.orientation}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleView(onboarding)}
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleEdit(onboarding)}
                        sx={{ color: "#000", fontSize: "16px" }}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleDelete(onboarding)}
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
        
        {/* Pagination */}
        <Box sx={{ padding: "1rem", borderTop: "1px solid #e5e7eb" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Showing {filteredOnboardings.length} of {onboardings.length} onboardings
            </Typography>
            <Pagination
              count={Math.ceil(filteredOnboardings.length / rowsPerPage)}
              page={page + 1}
              onChange={(event, value) => setPage(value - 1)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Common Dialog */}
      <CommonDialog
        open={openData || openEdit || openView || openDelete}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Add New Onboarding"
            : openEdit
            ? "Edit Onboarding"
            : openView
            ? "Onboarding Details"
            : openDelete
            ? "Delete Onboarding"
            : ""
        }
        dialogContent={
          openData ? (
            <Create 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleCreate={handleSubmit}
              handleClose={handleClose}
            />
          ) : openEdit ? (
            <Edit 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleUpdate={handleSubmit}
              handleClose={handleClose}
            />
          ) : openView ? (
            selectedData && (
              <View selectedData={selectedData} getStatusColor={getStatusColor} />
            )
          ) : openDelete ? (
            selectedData && (
              <Delete 
                selectedData={selectedData}
                handleDelete={handleDeleteConfirm}
                handleClose={handleClose}
              />
            )
          ) : null
        }
        maxWidth={openDelete ? "xs" : "md"}
        fullWidth={!openDelete}
      />
    </Box>
  );
};

export default JobOnboardingPage;