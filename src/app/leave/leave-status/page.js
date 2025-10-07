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
  Menu,
   MenuItem,
  Avatar
} from '@mui/material';
import {
  DeleteOutline,
  VisibilityOutlined,
  Edit,
  Search,
  Download,
  PictureAsPdf,
  Add,
  MoreVert
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';

export default function status(){

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  
const createData = (id, profile, leaveFrom, leaveTo, duration, type, reason, status, appliedDate) => {
  const row = { id, profile, date: leaveFrom, duration: leaveTo, type: duration, activity: type, attachments: reason, status, appliedDate };
  return {
    ...row,
  
  };
};



const handleShow = (event) => {
  setAnchorEl(event.currentTarget);
};


const handleClose = () => {
  setAnchorEl(null);
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
  createData(1, "John Doe", "2025-09-01", "2025-09-03", "3 Days", "Casual Leave", "Medical certificate", "Approved", "2025-08-28"),
  createData(2, "Jane Smith", "2025-09-05", "2025-09-05", "1 Day", "Sick Leave", "Doctor's note", "Pending", "2025-09-04"),
  createData(3, "Michael Johnson", "2025-09-10", "2025-09-12", "3 Days", "Earned Leave", "Travel documents", "Rejected", "2025-09-08"),
  createData(4, "Emily Davis", "2025-09-15", "2025-09-15", "1 Day", "Personal Leave", "Family emergency", "Approved", "2025-09-14"),
  createData(5, "Sarah Wilson", "2025-09-20", "2025-09-22", "3 Days", "Maternity Leave", "Medical report", "Approved", "2025-09-18"),
  createData(6, "David Brown", "2025-09-25", "2025-09-25", "1 Day", "Sick Leave", "Prescription", "Pending", "2025-09-24"),
  createData(7, "Lisa Garcia", "2025-09-28", "2025-09-30", "3 Days", "Casual Leave", "Wedding invitation", "Approved", "2025-09-26"),
  createData(8, "Robert Lee", "2025-10-02", "2025-10-04", "3 Days", "Earned Leave", "Vacation plans", "Rejected", "2025-09-30")
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
          placeholder="Search leave applications..."
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
          variant="outlined"
          startIcon={<Download />}
          sx={{ height: "40px", textTransform: "none" }}
        >
          Export Report
        </Button>
      </Box>

      {/* Leave Status Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Employee</TableCell>
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
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar sx={{ width: 24, height: 24, fontSize: "0.75rem" }}>
                        {row.profile.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {row.profile}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.activity}</TableCell>
                  <TableCell>
                    {row.attachments ? (
                      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <PictureAsPdf sx={{ color: "#ef4444", fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {row.attachments}
                        </Typography>
                      </Box>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(row.status)}`}>
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
        
                      <IconButton 
                        size="small"
                        onClick={handleShow}
                        sx={{ color: "#d32f2f", fontSize: "16px" }}
                      >
                        <MoreVert />
                      </IconButton>
                    </Box>

                    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(null)}
      >
        <MenuItem onClick={() => handleClose("Approved")}>Approve</MenuItem>
        <MenuItem onClick={() => handleClose("Rejected")}>Reject</MenuItem>
      </Menu>

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

     
    </Box>
  );
}
