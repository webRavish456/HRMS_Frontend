"use client";

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TextField,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
  InputAdornment,
  Stack
} from '@mui/material';
import { Add,  Search, Download, DeleteOutlined, VisibilityOutlined, EditOutlined } from '@mui/icons-material';
import Create from "../../../components/Attendance/attendance-request/Create";
import Edit from "../../../components/Attendance/attendance-request/Edit";
import View from "../../../components/Attendance/attendance-request/View";
import Delete from "../../../components/Attendance/attendance-request/Delete";
import CommonDialog from "../../../components/commonDialog";

const AttendanceRequestPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [requests, setRequests] = useState([
    {
      id: 1,
      employeeName: "John Doe",
      employeeId: "EMP001",
      requestDate: "2024-01-20",
      punchedIn: "09:00",
      punchedOut: "17:00",
      totalHours: "08:00 hrs",
      reason: "Work from home due to personal commitments",
      status: "Approved",
      approvedBy: "HR Manager"
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      employeeId: "EMP002",
      requestDate: "2024-01-21",
      punchedIn: "09:30",
      punchedOut: "18:00",
      totalHours: "08:30 hrs",
      reason: "Late arrival due to traffic jam",
      status: "Pending"
    },
    {
      id: 3,
      employeeName: "Alex Lee Wang",
      employeeId: "EMP003",
      requestDate: "2024-01-22",
      punchedIn: "08:45",
      punchedOut: "17:15",
      totalHours: "08:30 hrs",
      reason: "Early departure for medical appointment",
      status: "Rejected",
      approvedBy: "Team Lead"
    },
    {
      id: 4,
      employeeName: "Reyan Doe",
      employeeId: "EMP004",
      requestDate: "2024-01-23",
      punchedIn: "09:15",
      punchedOut: "18:30",
      totalHours: "09:15 hrs",
      reason: "Overtime work on project deadline",
      status: "Approved",
      approvedBy: "Project Manager"
    },
    {
      id: 5,
      employeeName: "Harry Potter",
      employeeId: "EMP005",
      requestDate: "2024-01-24",
      punchedIn: "08:30",
      punchedOut: "17:45",
      totalHours: "09:15 hrs",
      reason: "Half day leave for family event",
      status: "Pending"
    },
    {
      id: 6,
      employeeName: "Antila Williams",
      employeeId: "EMP006",
      requestDate: "2024-01-25",
      punchedIn: "09:45",
      punchedOut: "18:15",
      totalHours: "08:30 hrs",
      reason: "Late arrival due to public transport delay",
      status: "Approved",
      approvedBy: "HR Manager"
    },
    {
      id: 7,
      employeeName: "Sung Jin Woo",
      employeeId: "EMP007",
      requestDate: "2024-01-26",
      punchedIn: "08:15",
      punchedOut: "17:30",
      totalHours: "09:15 hrs",
      reason: "Work from home for personal reasons",
      status: "Rejected",
      approvedBy: "Team Lead"
    },
    {
      id: 8,
      employeeName: "Thomas Andre",
      employeeId: "EMP008",
      requestDate: "2024-01-27",
      punchedIn: "09:00",
      punchedOut: "18:00",
      totalHours: "09:00 hrs",
      reason: "Overtime for urgent project completion",
      status: "Pending"
    },
    {
      id: 9,
      employeeName: "Joseph Rock",
      employeeId: "EMP009",
      requestDate: "2024-01-28",
      punchedIn: "08:45",
      punchedOut: "17:45",
      totalHours: "09:00 hrs",
      reason: "Work from home due to weather conditions",
      status: "Approved",
      approvedBy: "HR Manager"
    }
  ]);

  const filteredRequests = requests.filter(request =>
    request.employeeName.toLowerCase().includes(search.toLowerCase()) ||
    request.employeeId.toLowerCase().includes(search.toLowerCase()) ||
    request.reason.toLowerCase().includes(search.toLowerCase()) ||
    request.status.toLowerCase().includes(search.toLowerCase())
  );

  const [openData, setOpenData] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    requestDate: "",
    punchedIn: "",
    punchedOut: "",
    totalHours: "",
    reason: "",
    status: "Pending",
    approvedBy: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClose = () => {
    setOpenData(false);
    setOpenEdit(false);
    setOpenView(false);
    setOpenDelete(false);
    setSelectedData(null);
    setSelectedIndex(null);
  };


  const handleCreate = () => {
    setOpenData(true);
  };

  const handleEdit = (request) => {
    setSelectedData(request);
    setFormData({
      employeeName: request.employeeName,
      employeeId: request.employeeId,
      requestDate: request.requestDate,
      punchedIn: request.punchedIn,
      punchedOut: request.punchedOut,
      totalHours: request.totalHours,
      reason: request.reason,
      status: request.status,
      approvedBy: request.approvedBy || ""
    });
    setOpenEdit(true);
  };

  const handleView = (request) => {
    setSelectedData(request);
    setOpenView(true);
  };

  const handleSubmit = () => {
    console.log("Attendance request submitted:", formData);
    setOpenData(false);
    setOpenEdit(false);
    setFormData({
      employeeName: "",
      employeeId: "",
      requestDate: "",
      punchedIn: "",
      punchedOut: "",
      totalHours: "",
      reason: "",
      status: "Pending",
      approvedBy: ""
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved": return "success";
      case "Pending": return "warning";
      case "Rejected": return "error";
      default: return "default";
    }
  };

  const handleApprove = (requestId) => {
    setRequests(requests.map(req => 
      req.id === requestId 
        ? { ...req, status: 'Approved', approvedBy: 'Current User' }
        : req
    ));
  };

  const handleReject = (requestId) => {
    setRequests(requests.map(req => 
      req.id === requestId 
        ? { ...req, status: 'Rejected', approvedBy: 'Current User' }
        : req
    ));
  };

  const handleDelete = () => {
    const updatedRequests = requests.filter((_, index) => index !== selectedIndex);
    setRequests(updatedRequests);
    setOpenDelete(false);
    setSelectedData(null);
    setSelectedIndex(null);
  };


  const getRequestTypeColor = (type) => {
    switch (type) {
      case 'WFH': return {
        backgroundColor: '#e0e7ff',
        color: '#3730a3'
      };
      case 'Leave': return {
        backgroundColor: '#fef3c7',
        color: '#92400e'
      };
      case 'Late Arrival': return {
        backgroundColor: '#fef3c7',
        color: '#92400e'
      };
      case 'Early Departure': return {
        backgroundColor: '#dbeafe',
        color: '#1e40af'
      };
      case 'Work From Home': return {
        backgroundColor: '#e0e7ff',
        color: '#3730a3'
      };
      case 'Overtime': return {
        backgroundColor: '#dcfce7',
        color: '#166534'
      };
      case 'Half Day': return {
        backgroundColor: '#f3e8ff',
        color: '#7c3aed'
      };
      default: return {
        backgroundColor: '#f3f4f6',
        color: '#374151'
      };
    }
  };

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Export Section */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search attendance requests..."
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
        <Button variant="contained" startIcon={<Download />} size="small" sx={{ height: "40px" }}>
          Export
        </Button>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleCreate}
          sx={{ height: "40px" }}
        >
          ADD ATTENDANCE
        </Button>
      </Box>

      {/* Attendance Requests Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>S. No.</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Profile</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Request Date</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Punched In</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Punched Out</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Total Hours</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRequests
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((request, index) => (
                <TableRow key={request.id} sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {request.employeeName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500 }}>
                      {request.requestDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#10b981", fontWeight: 600 }}>
                      {request.punchedIn}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#ef4444", fontWeight: 600 }}>
                      {request.punchedOut}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {request.totalHours}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box 
                      sx={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        ...getStatusColor(request.status)
                      }}
                    >
                      {request.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleView(request)}
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleEdit(request)}
                        sx={{ color: "#000000", fontSize: "16px" }}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => {
                          setSelectedData(request);
                          setSelectedIndex(page * rowsPerPage + index);
                          setOpenDelete(true);
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
          setSelectedData(null);
          setSelectedIndex(null);
        }}
        dialogTitle={
          openData
            ? "Submit New Request"
            : openEdit
            ? "Edit Request"
            : openView
            ? "Request Details"
            : openDelete
            ? "Delete Request"
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
              <View 
                selectedData={selectedData} 
                getStatusColor={getStatusColor}
                handleClose={handleClose}
              />
            )
          ) : openDelete ? (
            <Delete 
              selectedData={selectedData}
              handleDelete={handleDelete}
              handleClose={handleClose}
            />
          ) : null
        }
        maxWidth={openDelete ? "xs" : "md"}
        fullWidth={!openDelete}
      />
    </Box>
  );
};

export default AttendanceRequestPage;
