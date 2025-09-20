"use client"
import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Avatar,
  Pagination,
  Stack,
  Grid
} from '@mui/material';
import {
  Add,
  Search,
  VisibilityOutlined,
  Edit,
  DeleteOutline,
  TrendingUp,
  TrendingDown,
  AccountBalance
} from '@mui/icons-material';

export default function Finance(){
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

  // Finance Summary Data
  const financeSummary = [
    {
      id: "INC001",
      type: "Income",
      category: "Software License",
      branch: "Head Office",
      amount: 150000,
      date: "2024-01-15",
      status: "Received",
      client: "TechCorp Solutions"
    },
    {
      id: "EXP001", 
      type: "Expense",
      category: "Office Rent",
      branch: "Head Office",
      amount: 50000,
      date: "2024-01-15",
      status: "Paid",
      vendor: "Property Management"
    },
    {
      id: "INC002",
      type: "Income", 
      category: "Training Services",
      branch: "Delhi Branch",
      amount: 75000,
      date: "2024-01-20",
      status: "Received",
      client: "Global Training Inc"
    },
    {
      id: "EXP002",
      type: "Expense",
      category: "Equipment Purchase",
      branch: "Bangalore Branch",
      amount: 80000,
      date: "2024-01-20",
      status: "Paid",
      vendor: "Dell Technologies"
    },
    {
      id: "INC003",
      type: "Income",
      category: "Consulting Services", 
      branch: "Chennai Branch",
      amount: 120000,
      date: "2024-01-25",
      status: "Pending",
      client: "Digital Marketing Co"
    },
    {
      id: "EXP003",
      type: "Expense",
      category: "Marketing Campaign",
      branch: "Kolkata Branch",
      amount: 45000,
      date: "2024-01-28",
      status: "Paid",
      vendor: "Media Agency"
    }
  ];

  const filteredData = financeSummary.filter(item =>
    item.type.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase()) ||
    item.branch.toLowerCase().includes(search.toLowerCase()) ||
    item.client?.toLowerCase().includes(search.toLowerCase()) ||
    item.vendor?.toLowerCase().includes(search.toLowerCase()) ||
    item.id.toLowerCase().includes(search.toLowerCase())
  );

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const getTypeColor = (type) => {
    return type === 'Income' ? '#10b981' : '#ef4444';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Received':
      case 'Paid':
        return 'hrms-badge-success';
      case 'Pending':
        return 'hrms-badge-warning';
      default:
        return 'hrms-badge-default';
    }
  };

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Header */}
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>
          Finance Management
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Overview of all financial transactions including income and expenses
        </Typography>
      </Box>

      {/* Finance Overview Cards */}
      <Grid container spacing={3} sx={{ marginBottom: "2rem" }}>
        <Grid size={{xs:12, sm:6, md:4}}>
          <Box className="hrms-card" sx={{ textAlign: "center", padding: "1.5rem" }}>
            <AccountBalance sx={{ fontSize: 40, color: "#3b82f6", marginBottom: "1rem" }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "0.5rem" }}>
              Total Income
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#10b981" }}>
              ₹3,45,000
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6, md:4}}>
          <Box className="hrms-card" sx={{ textAlign: "center", padding: "1.5rem" }}>
            <TrendingDown sx={{ fontSize: 40, color: "#ef4444", marginBottom: "1rem" }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "0.5rem" }}>
              Total Expenses
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#ef4444" }}>
              ₹1,30,000
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6, md:4}}>
          <Box className="hrms-card" sx={{ textAlign: "center", padding: "1.5rem" }}>
            <TrendingUp sx={{ fontSize: 40, color: "#10b981", marginBottom: "1rem" }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "0.5rem" }}>
              Net Profit
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#10b981" }}>
              ₹2,15,000
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
        <TextField
          placeholder="Search financial transactions..."
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px"
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
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              backgroundColor: "#3b82f6",
              "&:hover": {
                backgroundColor: "#2563eb"
              }
            }}
          >
            Add Transaction
          </Button>
        </Stack>
      </Box>

      {/* Finance Transactions Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No</TableCell>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Client/Vendor</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((transaction, index) => (
                <TableRow key={transaction.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {transaction.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.type}
                      sx={{
                        backgroundColor: getTypeColor(transaction.type),
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.75rem"
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{transaction.category}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{transaction.branch}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: getTypeColor(transaction.type) }}>
                      ₹{transaction.amount.toLocaleString()}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>
                    {transaction.client || transaction.vendor}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>
                    {new Date(transaction.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.status}
                      className={getStatusColor(transaction.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ color: "#f59e0b" }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ color: "#ef4444" }}
                      >
                        <DeleteOutline />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        {/* Pagination */}
        <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            shape="rounded"
          />
        </Box>
      </Box>
    </Box>
  );
}