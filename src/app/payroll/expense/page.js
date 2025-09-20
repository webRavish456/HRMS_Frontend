"use client";
import React, { useState } from 'react';
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
  Paper,
  IconButton,
  InputAdornment,
  Pagination,
  Chip,
  Avatar,
  Stack
} from '@mui/material';
import {
  Search,
  Download,
  Add,
  Edit,
  DeleteOutline,
  VisibilityOutlined,
  AttachMoney
} from '@mui/icons-material';

export default function Expense() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const createData = (id, employee, category, amount, date, status, description) => ({
    id, employee, category, amount, date, status, description,
    action: (
      <>
        <IconButton sx={{ color: "#3b82f6", padding: "4px" }}>
          <VisibilityOutlined />
        </IconButton>
        <IconButton sx={{ color: "#6b7280", padding: "4px" }}>
          <Edit />
        </IconButton>
        <IconButton sx={{ color: "#ef4444", padding: "4px" }}>
          <DeleteOutline />
        </IconButton>
      </>
    )
  });

  const rows = [
    createData(1, "John Doe", "Travel", 2500, "2025-09-15", "Approved", "Client meeting travel"),
    createData(2, "Jane Smith", "Meals", 800, "2025-09-14", "Pending", "Team lunch"),
    createData(3, "Mike Johnson", "Office Supplies", 1200, "2025-09-13", "Approved", "Stationery items"),
    createData(4, "Emily Davis", "Travel", 3200, "2025-09-12", "Approved", "Conference travel"),
    createData(5, "Sarah Wilson", "Meals", 600, "2025-09-11", "Pending", "Client dinner"),
    createData(6, "David Brown", "Office Supplies", 900, "2025-09-10", "Approved", "Printer supplies"),
    createData(7, "Lisa Garcia", "Travel", 1800, "2025-09-09", "Approved", "Site visit"),
    createData(8, "Robert Lee", "Meals", 450, "2025-09-08", "Pending", "Coffee meeting")
  ];

  const filteredRows = rows.filter(row =>
    row.employee.toLowerCase().includes(search.toLowerCase()) ||
    row.category.toLowerCase().includes(search.toLowerCase()) ||
    row.status.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, endIndex);

const getStatusColor = (status) => {
  switch (status) {
    case 'Approved': return 'hrms-badge-success';
    case 'Pending': return 'hrms-badge-warning';
    case 'Rejected': return 'hrms-badge-error';
    default: return 'hrms-badge-neutral';
  }
};

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search expenses..."
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
          style={{ height: "40px" }}
        >
          <Add />
          Add Expense
        </button>
      </Box>

      {/* Expense Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Description</TableCell>
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
                        {row.employee.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {row.employee}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <AttachMoney sx={{ color: "#3b82f6", fontSize: 16 }} />
                      <Typography variant="body2" sx={{ color: "#6b7280" }}>
                        {row.category}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>₹{row.amount.toLocaleString()}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(row.status)}`}>
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ maxWidth: "200px" }}>
                    <Typography variant="body2" noWrap>
                      {row.description}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ color: "#000", fontSize: "16px" }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton 
                        size="small"
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
    </Box>
  );
}
