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
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Add,
  Search,
  Download,
  PictureAsPdf,
  VisibilityOutlined,
  Edit,
  DeleteOutline
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';
import View from '@/components/Report/expense/View';


export default function expense(){
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [ViewData, setViewData] = useState(null);
  const [viewShow, setViewShow] = useState(false);

  const createData = (id, name, type, amount, category, branch, date, vendor, description, paymentMethod, dueDate, paidDate, status) => {
    return {
      id,
      name,
      type,
      amount,
      category,
      branch,
      date,
      vendor,
      description,
      paymentMethod,
      dueDate,
      paidDate,
      status
    };
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Recurring':
        return 'hrms-badge-success';
      case 'One-time':
        return 'hrms-badge-warning';
      default:
        return 'hrms-badge-default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid':
        return 'hrms-badge-success';
      case 'Pending':
        return 'hrms-badge-warning';
      case 'Overdue':
        return 'hrms-badge-error';
      default:
        return 'hrms-badge-default';
    }
  };

  const handleView = (row) => {
    setViewData(row);
    setViewShow(true);
  };

  const handleClose = () => {
    setViewShow(false);
    setViewData(null);
  };

  const handleDownloadPDF = () => {
    // Create a simple PDF download functionality
    const element = document.createElement('a');
    const file = new Blob([`Expense Report\n\nGenerated on: ${new Date().toLocaleDateString()}\n\n${expenseData.map((expense, index) => 
      `${index + 1}. ${expense.name} (${expense.id})\n   Type: ${expense.type}\n   Amount: ₹${expense.amount.toLocaleString()}\n   Category: ${expense.category}\n   Branch: ${expense.branch}\n   Vendor: ${expense.vendor}\n   Status: ${expense.status}\n   Date: ${new Date(expense.date).toLocaleDateString()}\n`
    ).join('\n')}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `expense-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

const expenseData = [
  createData("EXP001", "Office Rent", "Recurring", 50000, "Rent", "Head Office", "2024-01-01", "Property Management", "Monthly Office Rent", "Bank Transfer", "2024-01-05", "2024-01-03", "Paid"),
  createData("EXP002", "Employee Salaries", "Recurring", 250000, "Payroll", "All Branches", "2024-01-31", "Payroll Department", "Monthly Employee Salaries", "Bank Transfer", "2024-02-01", "2024-01-31", "Paid"),
  createData("EXP003", "Electricity Bill", "Recurring", 15000, "Utilities", "Head Office", "2024-01-15", "Power Company", "Monthly Electricity", "Bank Transfer", "2024-01-20", "2024-01-18", "Paid"),
  createData("EXP004", "Internet Services", "Recurring", 8000, "Utilities", "All Branches", "2024-01-10", "Internet Provider", "Monthly Internet", "Bank Transfer", "2024-01-15", "2024-01-12", "Paid"),
  createData("EXP005", "Office Supplies", "One-time", 12000, "Supplies", "Head Office", "2024-01-20", "Office Depot", "Stationery and Supplies", "Credit Card", "2024-01-25", "2024-01-22", "Paid"),
  createData("EXP006", "Software Licenses", "Recurring", 25000, "Software", "All Branches", "2024-01-05", "Software Corp", "Annual Software Licenses", "Bank Transfer", "2024-01-10", "2024-01-08", "Paid"),
  createData("EXP007", "Marketing Campaign", "One-time", 75000, "Marketing", "All Branches", "2024-01-25", "Marketing Agency", "Digital Marketing Campaign", "Bank Transfer", "2024-02-01", "2024-01-30", "Paid"),
  createData("EXP008", "Travel Expenses", "One-time", 35000, "Travel", "Head Office", "2024-01-30", "Travel Agency", "Business Travel", "Credit Card", "2024-02-05", "2024-02-02", "Paid"),
  createData("EXP009", "Equipment Maintenance", "Recurring", 18000, "Maintenance", "All Branches", "2024-01-12", "Maintenance Co", "Monthly Equipment Service", "Bank Transfer", "2024-01-17", "2024-01-15", "Paid"),
  createData("EXP010", "Legal Fees", "One-time", 45000, "Legal", "Head Office", "2024-01-18", "Law Firm", "Legal Consultation", "Bank Transfer", "2024-01-25", "2024-01-22", "Paid"),
  createData("EXP011", "Insurance Premium", "Recurring", 30000, "Insurance", "All Branches", "2024-01-08", "Insurance Co", "Annual Insurance", "Bank Transfer", "2024-01-15", "2024-01-12", "Paid"),
  createData("EXP012", "Training Program", "One-time", 55000, "Training", "All Branches", "2024-01-22", "Training Institute", "Employee Development", "Bank Transfer", "2024-01-30", "2024-01-28", "Paid")
];

// Filter data based on search
const filteredData = expenseData.filter(expense =>
  expense.name.toLowerCase().includes(search.toLowerCase()) ||
  expense.type.toLowerCase().includes(search.toLowerCase()) ||
  expense.category.toLowerCase().includes(search.toLowerCase()) ||
  expense.branch.toLowerCase().includes(search.toLowerCase()) ||
  expense.vendor.toLowerCase().includes(search.toLowerCase()) ||
  expense.status.toLowerCase().includes(search.toLowerCase()) ||
  expense.id.toLowerCase().includes(search.toLowerCase())
);

// Pagination
const startIndex = (page - 1) * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const paginatedData = filteredData.slice(startIndex, endIndex);
const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap:"1rem", marginBottom: "1rem" }}>
   <TextField
            placeholder="Search by name, type, category, branch, vendor, status..."
    variant="outlined"
    size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
    sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#fff",
              "& fieldset": {
                borderColor: "#d1d5db",
              },
              "&:hover fieldset": {
                borderColor: "#9ca3af",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3b82f6",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#6b7280" }} />
              </InputAdornment>
            ),
          }}
        />
        
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={handleDownloadPDF}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              borderColor: "#d1d5db",
              color: "#374151",
              "&:hover": {
                borderColor: "#9ca3af",
                backgroundColor: "#f9fafb"
              }
            }}
          >
            Download
          </Button>
        </Stack>
      </Box>

      {/* Table */}
      <Box className="hrms-card">
        <TableContainer>
          <Table className="hrms-table">
        <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>S. No</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Expense</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Branch</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {paginatedData.map((expense, index) => (
                <TableRow key={expense.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Avatar sx={{ width: 32, height: 32, backgroundColor: "#dc2626" }}>
                        {expense.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1f2937" }}>
                          {expense.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {expense.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getTypeColor(expense.type)}`}>
                      {expense.type}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#dc2626" }}>₹{expense.amount.toLocaleString()}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{expense.category}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{expense.branch}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(expense.status)}`}>
                      {expense.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(expense)}
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        {/* Pagination */}
        <Box sx={{ padding: "1rem", borderTop: "1px solid #e5e7eb" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} records
            </Typography>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Dialog */}
    <CommonDialog
          open={viewShow}
          onClose={handleClose}
          dialogTitle="Expense Report"
          dialogContent={
            ViewData && (
              <View 
                selectedData={ViewData} 
                getTypeColor={getTypeColor}
                getStatusColor={getStatusColor}
              />
            )
          }
          maxWidth="md"
          fullWidth={true}
        />
    </Box>
  )
}