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
import EditComponent from "../../../components/Attendance/attendance-request/Edit";
import View from "../../../components/Attendance/attendance-request/View";
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
      punchedIn: "09:00 AM",
      punchedOut: "05:00 PM",
      requestType: "WFH",
      totalHours: "08:00 hrs",
      status: "Approved"
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      employeeId: "EMP002",
      punchedIn: "09:30 AM",
      punchedOut: "06:00 PM",
      requestType: "Leave",
      totalHours: "07:30 hrs",
      status: "Pending"
    },
    {
      id: 3,
      employeeName: "Alex Lee Wang",
      employeeId: "EMP003",
      punchedIn: "08:45 AM",
      punchedOut: "05:15 PM",
      requestType: "WFH",
      totalHours: "08:30 hrs",
      status: "Rejected"
    },
    {
      id: 4,
      employeeName: "Reyan Doe",
      employeeId: "EMP004",
      punchedIn: "09:15 AM",
      punchedOut: "06:30 PM",
      requestType: "Leave",
      totalHours: "09:15 hrs",
      status: "Approved"
    },
    {
      id: 5,
      employeeName: "Harry Potter",
      employeeId: "EMP005",
      punchedIn: "08:30 AM",
      punchedOut: "05:45 PM",
      requestType: "WFH",
      totalHours: "09:15 hrs",
      status: "Pending"
    },
    {
      id: 6,
      employeeName: "Antila Williams",
      employeeId: "EMP006",
      punchedIn: "09:45 AM",
      punchedOut: "06:15 PM",
      requestType: "Leave",
      totalHours: "08:30 hrs",
      status: "Approved"
    },
    {
      id: 7,
      employeeName: "Sung Jin Woo",
      employeeId: "EMP007",
      punchedIn: "08:15 AM",
      punchedOut: "05:30 PM",
      requestType: "WFH",
      totalHours: "09:15 hrs",
      status: "Rejected"
    },
    {
      id: 8,
      employeeName: "Thomas Andre",
      employeeId: "EMP008",
      punchedIn: "09:00 AM",
      punchedOut: "06:00 PM",
      requestType: "Leave",
      totalHours: "09:00 hrs",
      status: "Pending"
    },
    {
      id: 9,
      employeeName: "Joseph Rock",
      employeeId: "EMP009",
      punchedIn: "08:45 AM",
      punchedOut: "05:45 PM",
      requestType: "WFH",
      totalHours: "09:00 hrs",
      status: "Approved"
    }
  ]);

  const filteredRequests = requests.filter(request =>
    request.employeeName.toLowerCase().includes(search.toLowerCase()) ||
    request.employeeId.toLowerCase().includes(search.toLowerCase()) ||
    request.requestType.toLowerCase().includes(search.toLowerCase()) ||
    request.status.toLowerCase().includes(search.toLowerCase())
  );

  const [openData, setOpenData] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    requestType: "",
    requestDate: "",
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


  const handleCreate = () => {
    setOpenData(true);
  };

  const handleEdit = (request) => {
    setSelectedData(request);
    setFormData({
      employeeName: request.employeeName,
      employeeId: request.employeeId,
      requestType: request.requestType,
      requestDate: request.requestDate,
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
      requestType: "",
      requestDate: "",
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
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Punched in</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Punched Out</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Request Type</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Total hours</TableCell>
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
                    <Box 
                      sx={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        ...getRequestTypeColor(request.requestType)
                      }}
                    >
                      {request.requestType}
                    </Box>
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
        open={openData || openEdit || openView}
        onClose={() => {
          setOpenData(false);
          setOpenEdit(false);
          setOpenView(false);
        }}
        dialogTitle={
          openData
            ? "Submit New Request"
            : openEdit
            ? "Edit Request"
            : openView
            ? "Request Details"
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
          ) : null
        }
        primaryAction={openData || openEdit}
        primaryActionText={openData ? "Submit Request" : "Update Request"}
        onPrimaryAction={handleSubmit}
        secondaryActionText={openView ? "Close" : "Cancel"}
        showActions={!openView}
      />
    </Box>
  );
};

export default AttendanceRequestPage;
