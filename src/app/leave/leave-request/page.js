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

const createData = (id, profile, leaveFrom, leaveTo, duration, type, reason, status, appliedDate) => {
  const row = { id, profile, date: leaveFrom, duration: leaveTo, type: duration, activity: type, attachments: reason, appliedDate };
  return {
    ...row,
    action: (
      <>
        <IconButton
          sx={{ color: "#3b82f6", padding: "4px" }}
          onClick={() => handleView(row)}
        >
          <VisibilityOutlined />
        </IconButton>
        <IconButton
          sx={{ color: "#6b7280", padding: "4px" }}
          onClick={() => handleEdit(row)}
        >
          <Edit />
        </IconButton>
        <IconButton
          sx={{ color: "#ef4444", padding: "4px" }}
          onClick={() => handleShowDelete(row.id)}
        >
          <DeleteOutline />
        </IconButton>
      </>
    )
  };
};

const handleView = (row) => {
  console.log('row', row);
  setViewData(row);
  setViewShow(true);
};

const handleEdit = (data) => {
  setEditData(data);
  setEditShow(true);
};

const handleShowDelete = (id) => {
  setDeleteId(id);
  setDeleteShow(true);
};

const handleClose = () => {
  setOpenData(false);
  setViewShow(false);
  setEditShow(false);
  setDeleteShow(false);
};

const handleCreate = (data) => {
  setOpenData(false);
};

const handleUpdate = (data) => {
  setEditShow(false);
};

const handleDelete = () => {
  setDeleteShow(false);
  setDeleteId(null);
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Approved': return 'hrms-badge-success';
    case 'Pending': return 'hrms-badge-warning';
    case 'Rejected': return 'hrms-badge-error';
    default: return 'hrms-badge-neutral';
  }
};
  

const rows = [
  createData(1, "My Request", "2025-09-15", "2025-09-17", "3 Days", "Casual Leave", "Family wedding", "Pending", "2025-09-10"),
  createData(2, "My Request", "2025-09-20", "2025-09-20", "1 Day", "Sick Leave", "Medical appointment", "Approved", "2025-09-18"),
  createData(3, "My Request", "2025-09-25", "2025-09-27", "3 Days", "Earned Leave", "Vacation", "Pending", "2025-09-22"),
  createData(4, "My Request", "2025-10-01", "2025-10-01", "1 Day", "Personal Leave", "Personal work", "Rejected", "2025-09-28"),
  createData(5, "My Request", "2025-10-05", "2025-10-07", "3 Days", "Casual Leave", "Festival celebration", "Pending", "2025-10-02"),
  createData(6, "My Request", "2025-10-10", "2025-10-10", "1 Day", "Sick Leave", "Health checkup", "Approved", "2025-10-08"),
  createData(7, "My Request", "2025-10-15", "2025-10-17", "3 Days", "Earned Leave", "Holiday trip", "Pending", "2025-10-12"),
  createData(8, "My Request", "2025-10-20", "2025-10-20", "1 Day", "Personal Leave", "Bank work", "Approved", "2025-10-18")
];

const filteredRows = rows.filter(row =>
  row.profile.toLowerCase().includes(search.toLowerCase()) ||
  row.type.toLowerCase().includes(search.toLowerCase()) ||
  row.activity.toLowerCase().includes(search.toLowerCase())
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
                <TableCell>S. No.</TableCell>
                <TableCell>Leave From</TableCell>
                <TableCell>Leave To</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Leave Type</TableCell>
                <TableCell>Reason</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Applied Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.activity}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280", maxWidth: "150px" }} noWrap>
                      {row.attachments}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(row.activity)}`}>
                      {row.activity}
                    </Box>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
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
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              {openData && "Create new leave request functionality will be implemented here."}
              {viewShow && `Viewing leave request for ${ViewData?.profile}`}
              {editShow && `Editing leave request for ${editData?.profile}`}
              {deleteShow && "Are you sure you want to delete this leave request?"}
            </Typography>
          </Box>
        }
      />
    </Box>
  );
}
