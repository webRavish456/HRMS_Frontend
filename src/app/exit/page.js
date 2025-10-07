"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Avatar,
  Pagination,
  Stack,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Divider
} from "@mui/material";
import {
  Add,
  Search,
  EditOutlined,
  DeleteOutline,
  VisibilityOutlined,
  Person,
  CalendarToday,
  AttachMoney,
  Description
} from "@mui/icons-material";
import Create from "../../components/Exit/Create";
import EditComponent from "../../components/Exit/Edit";
import View from "../../components/Exit/View";
import DeleteComponent from "../../components/Exit/Delete";
import CommonDialog from "../../components/commonDialog";

export default function Exit() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [openData, setOpenData] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    position: "",
    resignationDate: "",
    lastWorkingDate: "",
    noticePeriod: "",
    resignationReason: "",
    clearanceStatus: "Pending",
    handoverStatus: "Pending",
    finalSettlement: "",
    pendingDues: "",
    companyAssets: "",
    feedback: "",
    hrRemarks: "",
    approval: "Pending"
  });

  const createData = (
    employeeName,
    employeeId,
    department,
    position,
    resignationDate,
    lastWorkingDate,
    noticePeriod,
    resignationReason,
    clearanceStatus,
    handoverStatus,
    finalSettlement,
    pendingDues,
    companyAssets,
    feedback,
    hrRemarks,
    approval
  ) => ({
    employeeName,
    employeeId,
    department,
    position,
    resignationDate,
    lastWorkingDate,
    noticePeriod,
    resignationReason,
    clearanceStatus,
    handoverStatus,
    finalSettlement,
    pendingDues,
    companyAssets,
    feedback,
    hrRemarks,
    approval
  });

  const exitData = [
    createData(
      "Rajesh Kumar",
      "EMP001",
      "Engineering",
      "Senior Developer",
      "2024-01-15",
      "2024-02-15",
      "30 days",
      "Better opportunity",
      "Completed",
      "Completed",
      "₹85,000",
      "₹0",
      "Laptop, ID Card",
      "Good work environment, learned a lot",
      "Professional exit, good performer",
      "Approved"
    ),
    createData(
      "Priya Sharma",
      "EMP002",
      "HR",
      "HR Executive",
      "2024-01-20",
      "2024-02-20",
      "30 days",
      "Personal reasons",
      "Pending",
      "Completed",
      "₹45,000",
      "₹5,000",
      "Laptop, Mobile",
      "Supportive team, good growth",
      "Will be missed, excellent work",
      "Approved"
    ),
    createData(
      "Amit Singh",
      "EMP003",
      "Sales",
      "Sales Manager",
      "2024-01-25",
      "2024-02-25",
      "30 days",
      "Career growth",
      "Pending",
      "Pending",
      "₹0",
      "₹12,000",
      "Laptop, Car",
      "",
      "Exit process pending",
      "Pending"
    ),
    createData(
      "Sneha Patel",
      "EMP004",
      "Finance",
      "Accountant",
      "2024-01-30",
      "2024-03-01",
      "30 days",
      "Relocation",
      "Completed",
      "Completed",
      "₹52,000",
      "₹0",
      "Laptop, Calculator",
      "Great learning experience",
      "Efficient worker, smooth exit",
      "Approved"
    ),
    createData(
      "Vikram Joshi",
      "EMP005",
      "Operations",
      "Operations Head",
      "2024-02-01",
      "2024-03-01",
      "30 days",
      "Entrepreneurship",
      "Completed",
      "Completed",
      "₹1,20,000",
      "₹0",
      "Laptop, Company Car",
      "Excellent leadership experience",
      "Outstanding performer, future collaboration possible",
      "Approved"
    )
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "success";
      case "Pending": return "warning";
      case "Approved": return "success";
      case "Rejected": return "error";
      default: return "default";
    }
  };

  const getReasonColor = (reason) => {
    switch (reason) {
      case "Better opportunity": return "primary";
      case "Personal reasons": return "secondary";
      case "Career growth": return "info";
      case "Relocation": return "warning";
      case "Entrepreneurship": return "success";
      default: return "default";
    }
  };



  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Exit data submitted:", formData);
    setOpenData(false);
    setFormData({
      employeeName: "",
      employeeId: "",
      department: "",
      position: "",
      resignationDate: "",
      lastWorkingDate: "",
      noticePeriod: "",
      resignationReason: "",
      clearanceStatus: "Pending",
      handoverStatus: "Pending",
      finalSettlement: "",
      pendingDues: "",
      companyAssets: "",
      feedback: "",
      hrRemarks: "",
      approval: "Pending"
    });
  };

  const handleView = (data) => {
    setSelectedData(data);
    setOpenView(true);
  };

  const handleEdit = (data) => {
    setSelectedData(data);
    setFormData(data);
    setOpenEdit(true);
  };

  const handleDelete = (data) => {
    setSelectedData(data);
    setOpenDelete(true);
  };

  const filteredRequests = exitData.filter(request =>
    request.employeeName.toLowerCase().includes(search.toLowerCase()) ||
    request.employeeId.toLowerCase().includes(search.toLowerCase()) ||
    request.department.toLowerCase().includes(search.toLowerCase()) ||
    request.position.toLowerCase().includes(search.toLowerCase()) ||
    request.resignationReason.toLowerCase().includes(search.toLowerCase()) ||
    request.achievement.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "1.5rem", gap: 2 }}>
        <TextField
          placeholder="Search by employee name, ID, department, position..."
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
        
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenData(true)}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            backgroundColor: "#3b82f6",
            "&:hover": {
              backgroundColor: "#2563eb"
            }
          }}
        >
          Add Exit
        </Button>
      </Box>

      {/* Table */}
      <Box className="hrms-card">
        <TableContainer>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Resignation Date</TableCell>
                <TableCell>Last Working Date</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Clearance</TableCell>
                <TableCell>Final Settlement</TableCell>
                <TableCell>Approval</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {filteredRequests
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => (
                <TableRow key={index} hover>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, backgroundColor: "#3b82f6" }}>
                        <Person sx={{ fontSize: 18 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {data.employeeName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {data.employeeId}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {data.department}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#6b7280" }}>
                        {data.position}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(data.resignationDate).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {new Date(data.lastWorkingDate).toLocaleDateString()}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={data.resignationReason}
                      size="small"
                      color={getReasonColor(data.resignationReason)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={data.clearanceStatus}
                      size="small"
                      color={getStatusColor(data.clearanceStatus)}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#059669" }}>
                      {data.finalSettlement}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={data.approval}
                      size="small"
                      color={getStatusColor(data.approval)}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(data)}
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(data)}
                        sx={{ color: "#374151" }}
                      >
                        <EditOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(data)}
                        sx={{ color: "#dc2626" }}
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
        <Box sx={{ padding: "0.75rem 1rem", borderTop: "1px solid #e5e5e5", backgroundColor: "#fafafa" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ color: "#333", fontWeight: 500, fontSize: "0.875rem" }}>
            Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredRequests.length)} of {filteredRequests.length} records
          </Typography>
          <Pagination
            count={Math.ceil(filteredRequests.length / rowsPerPage)}
            page={page + 1}
            onChange={(_, newPage) => setPage(newPage - 1)}
            color="primary"
            size="small"
          />
        </Stack>
      </Box>
      </Box>

   

      {/* Common Dialog */}
      <CommonDialog
        open={openData || openEdit || openView || openDelete}
        onClose={() => {
          setOpenData(false);
          setOpenEdit(false);
          setOpenView(false);
          setOpenDelete(false);
        }}
        dialogTitle={
          openData
            ? "Add New Exit"
            : openEdit
            ? "Edit Exit Details"
            : openView
            ? "Exit Details"
            : openDelete
            ? "Confirm Delete"
            : ""
        }
        dialogContent={
          openData ? (
            <Create formData={formData} handleInputChange={handleInputChange} handleCreate={handleSubmit} handleClose={() => setOpenData(false)} />
          ) : openEdit ? (
            <EditComponent formData={formData} handleInputChange={handleInputChange} handleUpdate={handleSubmit} handleClose={() => setOpenEdit(false)} />
          ) : openView ? (
            selectedData && (
              <View selectedData={selectedData} getStatusColor={getStatusColor} />
            )
          ) : openDelete ? (
            <DeleteComponent selectedData={selectedData} handleDelete={handleSubmit} handleClose={() => setOpenDelete(false)} />
          ) : null
        }
        maxWidth={openDelete ? "xs" : "md"}
        fullWidth={!openDelete}
      />
    </Box>
  );
}
