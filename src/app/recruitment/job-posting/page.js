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
import Create from "../../../components/Recruitment/job-posting/Create";
import EditComponent from "../../../components/Recruitment/job-posting/Edit";
import View from "../../../components/Recruitment/job-posting/View";
import DeleteComponent from "../../../components/Recruitment/job-posting/Delete";
import CommonDialog from "../../../components/commonDialog";

const JobPostingPage = () => {
  const [jobPostings, setJobPostings] = useState([
    {
      id: "JP001",
      jobTitle: "Frontend Developer",
      department: "IT",
      location: "Mumbai",
      experience: "2-4 years",
      salary: "₹6-8 LPA",
      status: "Active",
      postedDate: "2024-01-15",
      branch:"Delhi Branch",
      applications: 25
    },
    {
      id: "JP002", 
      jobTitle: "HR Manager",
      department: "HR",
      location: "Delhi",
      experience: "5-7 years",
      salary: "₹8-12 LPA",
      status: "Active",
      postedDate: "2024-02-20",
      branch:"Mumbai Branch",
      applications: 15
    },
    {
      id: "JP003",
      jobTitle: "Backend Developer",
      department: "IT",
      location: "Bangalore",
      experience: "3-5 years",
      salary: "₹7-10 LPA",
      status: "Closed",
      postedDate: "2024-03-10",
      branch:"Kolkata Branch",
      applications: 30
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
    jobTitle: "",
    department: "",
    location: "",
    experience: "",
    salary: "",
    branch:"",
    status: "Active",
    description: "",
    requirements: ""
  });

  const handleClose = () => {
    setOpenData(false);
    setOpenView(false);
    setOpenEdit(false);
    setOpenDelete(false);
    setSelectedData(null);
    setFormData({ 
      jobTitle: "", 
      department: "", 
      location: "", 
      branch:"",
      experience: "", 
      salary: "", 
      status: "Active",
      description: "",
      requirements: ""
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreate = () => {
    const newJob = {
      id: `JP${String(jobPostings.length + 1).padStart(3, '0')}`,
      ...formData,
      postedDate: new Date().toISOString().split('T')[0],
      applications: 0
    };
    setJobPostings([...jobPostings, newJob]);
    handleClose();
  };

  const handleEdit = () => {
    setJobPostings(jobPostings.map(job => 
      job.id === selectedData.id 
        ? { ...job, ...formData }
        : job
    ));
    handleClose();
  };

  const handleDelete = () => {
    setJobPostings(jobPostings.filter(job => job.id !== selectedData.id));
    handleClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'hrms-badge-success';
      case 'Closed': return 'hrms-badge-error';
      case 'Draft': return 'hrms-badge-warning';
      default: return 'hrms-badge-neutral';
    }
  };

  const filteredJobs = jobPostings.filter(job => {
    const matchesSearch = job.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
                         job.department.toLowerCase().includes(search.toLowerCase()) ||
                         job.location.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || job.status === filterStatus;
    const matchesDepartment = filterDepartment === "all" || job.department === filterDepartment;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search jobs..."
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
          className="hrms-btn hrms-btn-primary hrms-btn-fixed-height"
          onClick={() => setOpenData(true)}
        >
          <Add />
          Post New Job
        </button>
      </Box>

      {/* Job Posting Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredJobs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((job, index) => (
                  <TableRow key={job.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{job.jobTitle}</TableCell>
                    <TableCell>{job.department}</TableCell>
                    <TableCell>{job.branch}</TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>{job.experience}</TableCell>
                    <TableCell>{job.salary}</TableCell>
                    <TableCell>
                      <Box className={`hrms-badge ${getStatusColor(job.status)}`}>
                        {job.status}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: "0.25rem" }}>
                        <IconButton 
                          size="small"
                          onClick={() => { setSelectedData(job); setOpenView(true); }}
                          sx={{ color: "#1976D2", fontSize: "16px" }}
                        >
                          <VisibilityOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => { 
                            setSelectedData(job); 
                            setFormData({
                              jobTitle: job.jobTitle,
                              department: job.department,
                              location: job.location,
                              branch: job.branch,
                              experience: job.experience,
                              salary: job.salary,
                              status: job.status,
                              description: job.description || "",
                              requirements: job.requirements || ""
                            });
                            setOpenEdit(true); 
                          }}
                          sx={{ color: "#000", fontSize: "16px" }}
                        >
                          <EditOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => { setSelectedData(job); setOpenDelete(true); }}
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
              Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredJobs.length)} of {filteredJobs.length} jobs
            </Typography>
            <Pagination
              count={Math.ceil(filteredJobs.length / rowsPerPage)}
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
            ? "Post New Job"
            : openEdit
            ? "Edit Job Posting"
            : openView
            ? "Job Details"
            : openDelete
            ? "Delete Job Posting"
            : ""
        }
        dialogContent={
          openData ? (
            <Create formData={formData} handleInputChange={handleInputChange} />
          ) : openEdit ? (
            <EditComponent formData={formData} handleInputChange={handleInputChange} />
          ) : openView ? (
            selectedData && (
              <View selectedData={selectedData} getStatusColor={getStatusColor} />
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
            ? "Post Job"
            : openEdit
            ? "Save Changes"
            : openDelete
            ? "Delete"
            : ""
        }
        onPrimaryAction={
          openData
            ? handleCreate
            : openEdit
            ? handleEdit
            : openDelete
            ? handleDelete
            : null
        }
        secondaryActionText={openView ? "Close" : "Cancel"}
        showActions={!openView}
        primaryActionColor={openDelete ? "error" : "primary"}
        maxWidth={openDelete ? "xs" : "md"}
        fullWidth={!openDelete}
      />
    </Box>
  );
};

export default JobPostingPage;