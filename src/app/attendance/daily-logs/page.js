"use client";

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
  Button
} from '@mui/material';
import { Search, Download } from '@mui/icons-material';

const DailyLogsPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const dailyLogs = [
    {
      id: 1,
      employeeName: "John Doe",
      employeeId: "EMP001",
      department: "IT",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      totalHours: "9h 0m",
      status: "Present",
      overtime: "1h 0m"
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      employeeId: "EMP002",
      department: "HR",
      checkIn: "09:15 AM",
      checkOut: "05:45 PM",
      totalHours: "8h 30m",
      status: "Present",
      overtime: "0h 30m"
    },
    {
      id: 3,
      employeeName: "Mike Johnson",
      employeeId: "EMP003",
      department: "Finance",
      checkIn: "08:45 AM",
      checkOut: "06:15 PM",
      totalHours: "9h 30m",
      status: "Present",
      overtime: "1h 30m"
    },
    {
      id: 4,
      employeeName: "Sarah Wilson",
      employeeId: "EMP004",
      department: "Marketing",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      totalHours: "9h 0m",
      status: "Present",
      overtime: "1h 0m"
    },
    {
      id: 5,
      employeeName: "David Brown",
      employeeId: "EMP005",
      department: "IT",
      checkIn: "09:30 AM",
      checkOut: "05:30 PM",
      totalHours: "8h 0m",
      status: "Present",
      overtime: "0h 0m"
    },
    {
      id: 6,
      employeeName: "Emily Davis",
      employeeId: "EMP006",
      department: "HR",
      checkIn: "08:30 AM",
      checkOut: "06:30 PM",
      totalHours: "10h 0m",
      status: "Present",
      overtime: "2h 0m"
    },
    {
      id: 7,
      employeeName: "Michael Garcia",
      employeeId: "EMP007",
      department: "Finance",
      checkIn: "09:15 AM",
      checkOut: "05:45 PM",
      totalHours: "8h 30m",
      status: "Present",
      overtime: "0h 30m"
    },
    {
      id: 8,
      employeeName: "Lisa Martinez",
      employeeId: "EMP008",
      department: "Marketing",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      totalHours: "9h 0m",
      status: "Present",
      overtime: "1h 0m"
    },
    {
      id: 9,
      employeeName: "Robert Anderson",
      employeeId: "EMP009",
      department: "IT",
      checkIn: "08:45 AM",
      checkOut: "06:15 PM",
      totalHours: "9h 30m",
      status: "Present",
      overtime: "1h 30m"
    },
    {
      id: 10,
      employeeName: "Jennifer Taylor",
      employeeId: "EMP010",
      department: "HR",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      totalHours: "9h 0m",
      status: "Present",
      overtime: "1h 0m"
    },
    {
      id: 11,
      employeeName: "William Thomas",
      employeeId: "EMP011",
      department: "Finance",
      checkIn: "09:30 AM",
      checkOut: "05:30 PM",
      totalHours: "8h 0m",
      status: "Present",
      overtime: "0h 0m"
    },
    {
      id: 12,
      employeeName: "Amanda Jackson",
      employeeId: "EMP012",
      department: "Marketing",
      checkIn: "08:30 AM",
      checkOut: "06:30 PM",
      totalHours: "10h 0m",
      status: "Present",
      overtime: "2h 0m"
    }
  ];

  const filteredLogs = dailyLogs.filter(log =>
    log.employeeName.toLowerCase().includes(search.toLowerCase()) ||
    log.employeeId.toLowerCase().includes(search.toLowerCase()) ||
    log.department.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present': return 'hrms-badge-success';
      case 'Absent': return 'hrms-badge-error';
      case 'Late': return 'hrms-badge-warning';
      case 'Half Day': return 'hrms-badge-info';
      default: return 'hrms-badge-neutral';
    }
  };

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Export Section */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search attendance logs..."
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
      </Box>

      {/* Attendance Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>S. No.</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Employee</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Check In</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Check Out</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Total Hours</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Overtime</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredLogs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((log, index) => (
                  <TableRow key={log.id} sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {log.employeeName}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#64748b" }}>
                          {log.employeeId}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{log.department}</TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: "#10b981", fontWeight: 600 }}>
                        {log.checkIn}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: "#ef4444", fontWeight: 600 }}>
                        {log.checkOut}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {log.totalHours}
                      </Typography>
                    </TableCell>
                    <TableCell>{log.overtime}</TableCell>
                    <TableCell>
                      <Box 
                        sx={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          ...getStatusColor(log.status)
                        }}
                      >
                        {log.status}
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
            Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredLogs.length)} of {filteredLogs.length} records
          </Typography>
          <Pagination
            count={Math.ceil(filteredLogs.length / rowsPerPage)}
            page={page + 1}
            onChange={(_, newPage) => setPage(newPage - 1)}
            color="primary"
            size="small"
          />
        </Stack>
      </Box>
      </Box>

    
    </Box>
  );
};

export default DailyLogsPage;
