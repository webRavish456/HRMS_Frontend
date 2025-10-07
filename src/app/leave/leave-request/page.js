"use client"
import * as React from 'react';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Box,
  Button,
  InputAdornment,
  Typography,
  Pagination,
  Stack,
  Chip,
  Avatar
} from '@mui/material';
import {
  DeleteOutline,
  VisibilityOutlined,
  Edit,
  Search,
  Download,
  PictureAsPdf,
  Add
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';
import Create from '@/components/Leave/leave-request/Create';
import EditComponent from '@/components/Leave/leave-request/Edit';
import View from '@/components/Leave/leave-request/View';
import Delete from '@/components/Leave/leave-request/Delete';


export default function request(){
  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    leaveType: "",
    leaveFrom: "",
    leaveTo: "",
    duration: "",
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

const createData = (id, employeeName, employeeId, leaveFrom, leaveTo, duration, leaveType, reason, status, appliedDate) => {
  const row = { 
    id, 
    employeeName, 
    employeeId, 
    leaveFrom, 
    leaveTo, 
    duration, 
    leaveType, 
    reason, 
    status, 
    appliedDate 
  };
  return row;
};

const handleView = (row) => {
  setViewData(row);
  setViewShow(true);
};

const handleEdit = (data) => {
  setEditData(data);
  setFormData({
    employeeName: data.employeeName,
    employeeId: data.employeeId,
    leaveType: data.leaveType,
    leaveFrom: data.leaveFrom,
    leaveTo: data.leaveTo,
    duration: data.duration,
    reason: data.reason,
    status: data.status,
    approvedBy: data.approvedBy || ""
  });
  setEditShow(true);
};

const handleShowDelete = (id) => {
  const selectedRow = rows.find(row => row.id === id);
  setViewData(selectedRow);
  setDeleteShow(true);
};

const handleClose = () => {
  setOpenData(false);
  setViewShow(false);
  setEditShow(false);
  setDeleteShow(false);
  setViewData(null);
  setEditData(null);
  setFormData({
    employeeName: "",
    employeeId: "",
    leaveType: "",
    leaveFrom: "",
    leaveTo: "",
    duration: "",
    reason: "",
    status: "Pending",
    approvedBy: ""
  });
};

const handleCreate = () => {
  console.log("Creating leave request:", formData);
  setOpenData(false);
  setFormData({
    employeeName: "",
    employeeId: "",
    leaveType: "",
    leaveFrom: "",
    leaveTo: "",
    duration: "",
    reason: "",
    status: "Pending",
    approvedBy: ""
  });
};

const handleUpdate = () => {
  console.log("Updating leave request:", formData);
  setEditShow(false);
  setFormData({
    employeeName: "",
    employeeId: "",
    leaveType: "",
    leaveFrom: "",
    leaveTo: "",
    duration: "",
    reason: "",
    status: "Pending",
    approvedBy: ""
  });
};

const handleDelete = () => {
  console.log("Deleting leave request:", ViewData);
  setDeleteShow(false);
  setViewData(null);
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Approved': return 'success';
    case 'Pending': return 'warning';
    case 'Rejected': return 'error';
    default: return 'default';
  }
};
  

const rows = [
  createData(1, "John Doe", "EMP001", "2025-09-15", "2025-09-17", "3", "Casual Leave", "Family wedding", "Pending", "2025-09-10"),
  createData(2, "Jane Smith", "EMP002", "2025-09-20", "2025-09-20", "1", "Sick Leave", "Medical appointment", "Approved", "2025-09-18"),
  createData(3, "Mike Johnson", "EMP003", "2025-09-25", "2025-09-27", "3", "Earned Leave", "Vacation", "Pending", "2025-09-22"),
  createData(4, "Sarah Wilson", "EMP004", "2025-10-01", "2025-10-01", "1", "Personal Leave", "Personal work", "Rejected", "2025-09-28"),
  createData(5, "David Brown", "EMP005", "2025-10-05", "2025-10-07", "3", "Casual Leave", "Festival celebration", "Pending", "2025-10-02"),
  createData(6, "Lisa Davis", "EMP006", "2025-10-10", "2025-10-10", "1", "Sick Leave", "Health checkup", "Approved", "2025-10-08"),
  createData(7, "Tom Miller", "EMP007", "2025-10-15", "2025-10-17", "3", "Earned Leave", "Holiday trip", "Pending", "2025-10-12"),
  createData(8, "Emma Garcia", "EMP008", "2025-10-20", "2025-10-20", "1", "Personal Leave", "Bank work", "Approved", "2025-10-18")
];

const filteredRows = rows.filter(row =>
  row.employeeName.toLowerCase().includes(search.toLowerCase()) ||
  row.employeeId.toLowerCase().includes(search.toLowerCase()) ||
  row.leaveType.toLowerCase().includes(search.toLowerCase()) ||
  row.reason.toLowerCase().includes(search.toLowerCase()) ||
  row.status.toLowerCase().includes(search.toLowerCase())
);

const startIndex = (page - 1) * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const paginatedRows = filteredRows.slice(startIndex, endIndex);


  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search my leave requests..."
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
          className="hrms-btn hrms-btn-primary"
          onClick={() => setOpenData(true)}
          style={{ height: "40px" }}
        >
          <Add />
          Leave Request
        </button>
      </Box>

      {/* My Leave Requests Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>S. No.</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Employee Name</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Leave From</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Leave To</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Duration</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Leave Type</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Reason</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Applied Date</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow key={row.id} sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {row.employeeName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {row.leaveFrom}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {row.leaveTo}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {row.duration} Days
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#374151" }}>
                      {row.leaveType}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280", maxWidth: "150px" }} noWrap>
                      {row.reason}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      color={getStatusColor(row.status)}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {row.appliedDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleView(row)}
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleEdit(row)}
                        sx={{ color: "#000", fontSize: "16px" }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleShowDelete(row.id)}
                        sx={{ color: "#d32f2f", fontSize: "16px" }}
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
        <Box sx={{ padding: "0.75rem 1rem", borderTop: "1px solid #e5e5e5", backgroundColor: "#fafafa" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: "#333", fontWeight: 500, fontSize: "0.875rem" }}>
              Showing {startIndex + 1} to {Math.min(endIndex, filteredRows.length)} of {filteredRows.length} records
            </Typography>
            <Pagination
              count={Math.ceil(filteredRows.length / rowsPerPage)}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      <CommonDialog
        open={openData || viewShow || editShow || deleteShow}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Create New Leave Request"
            : viewShow
            ? "View Leave Request"
            : editShow
            ? "Edit Leave Request"
            : deleteShow
            ? "Delete Leave Request"
            : ""
        }
        dialogContent={
          openData ? (
            <Create formData={formData} handleInputChange={handleInputChange} handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <View selectedData={ViewData} getStatusColor={getStatusColor} />
          ) : editShow ? (
            <EditComponent formData={formData} handleInputChange={handleInputChange} handleUpdate={handleUpdate} handleClose={handleClose} />
          ) : deleteShow ? (
            <Delete selectedData={ViewData} handleDelete={handleDelete} handleClose={handleClose} />
          ) : null
        }
        maxWidth={deleteShow ? "xs" : "md"}
        fullWidth={!deleteShow}
      />
    </Box>
  );
}
