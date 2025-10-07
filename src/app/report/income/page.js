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
import View from '@/components/Report/income/View';


export default function income(){
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
    const file = new Blob([`Income Report\n\nGenerated on: ${new Date().toLocaleDateString()}\n\n${incomeData.map((income, index) => 
      `${index + 1}. ${income.name} (${income.id})\n   Type: ${income.type}\n   Amount: ₹${income.amount.toLocaleString()}\n   Category: ${income.category}\n   Branch: ${income.branch}\n   Vendor: ${income.vendor}\n   Status: ${income.status}\n   Date: ${new Date(income.date).toLocaleDateString()}\n`
    ).join('\n')}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `income-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

const incomeData = [
  createData("INC001", "HRMS Software License", "Recurring", 150000, "Software", "Head Office", "2024-01-15", "TechCorp Solutions", "HRMS Implementation", "Bank Transfer", "2024-01-30", "2024-01-28", "Paid"),
  createData("INC002", "Employee Training Program", "One-time", 75000, "Education", "Delhi Branch", "2024-01-20", "Global Training Inc", "Leadership Development", "Cheque", "2024-02-15", "2024-02-10", "Paid"),
  createData("INC003", "Payroll Processing Service", "Recurring", 45000, "Service", "Bangalore Branch", "2024-01-25", "PayrollPro Services", "Monthly Payroll", "Bank Transfer", "2024-02-05", "2024-02-03", "Paid"),
  createData("INC004", "Recruitment Campaign", "One-time", 120000, "Marketing", "Chennai Branch", "2024-01-30", "Digital Marketing Co", "Tech Hiring Campaign", "Bank Transfer", "2024-02-20", "2024-02-18", "Paid"),
  createData("INC005", "Office Equipment Purchase", "One-time", 85000, "Equipment", "Head Office", "2024-02-05", "Office Supplies Ltd", "Computers and Furniture", "Credit Card", "2024-02-25", "2024-02-22", "Paid"),
  createData("INC006", "Cloud Storage Subscription", "Recurring", 25000, "Software", "All Branches", "2024-02-10", "CloudTech Inc", "Monthly Cloud Storage", "Bank Transfer", "2024-02-28", "2024-02-25", "Paid"),
  createData("INC007", "Security Services", "Recurring", 60000, "Security", "Head Office", "2024-02-15", "SecureGuard Ltd", "Monthly Security Services", "Bank Transfer", "2024-03-15", "2024-03-12", "Paid"),
  createData("INC008", "Legal Consultation", "One-time", 95000, "Legal", "Head Office", "2024-02-20", "Legal Associates", "Employment Law Consultation", "Bank Transfer", "2024-03-20", "2024-03-18", "Paid"),
  createData("INC009", "Insurance Premium", "Recurring", 180000, "Insurance", "All Branches", "2024-02-25", "Insurance Corp", "Annual Insurance Premium", "Bank Transfer", "2024-03-25", "2024-03-22", "Paid"),
  createData("INC010", "Marketing Campaign", "One-time", 110000, "Marketing", "Mumbai Branch", "2024-03-01", "Marketing Solutions", "Brand Awareness Campaign", "Bank Transfer", "2024-03-30", "2024-03-28", "Paid"),
  createData("INC011", "IT Support Services", "Recurring", 35000, "Service", "All Branches", "2024-03-05", "TechSupport Inc", "Monthly IT Support", "Bank Transfer", "2024-04-05", "2024-04-02", "Paid"),
  createData("INC012", "Office Renovation", "One-time", 200000, "Infrastructure", "Head Office", "2024-03-10", "BuildCorp Ltd", "Office Space Renovation", "Bank Transfer", "2024-04-10", "2024-04-08", "Paid")
];

// Filter data based on search
const filteredData = incomeData.filter(income =>
  income.name.toLowerCase().includes(search.toLowerCase()) ||
  income.type.toLowerCase().includes(search.toLowerCase()) ||
  income.category.toLowerCase().includes(search.toLowerCase()) ||
  income.branch.toLowerCase().includes(search.toLowerCase()) ||
  income.vendor.toLowerCase().includes(search.toLowerCase()) ||
  income.status.toLowerCase().includes(search.toLowerCase()) ||
  income.id.toLowerCase().includes(search.toLowerCase())
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
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Income</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Category</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Branch</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {paginatedData.map((income, index) => (
                <TableRow key={income.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <Avatar sx={{ width: 32, height: 32, backgroundColor: "#10b981" }}>
                        {income.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1f2937" }}>
                          {income.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {income.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getTypeColor(income.type)}`}>
                      {income.type}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#059669" }}>₹{income.amount.toLocaleString()}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{income.category}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{income.branch}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(income.status)}`}>
                      {income.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(income)}
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
          dialogTitle="Income Report"
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