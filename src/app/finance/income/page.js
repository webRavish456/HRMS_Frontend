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
  EditOutlined,
  DeleteOutline
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';
import Create from '@/components/Finance/income/Create';
import Edit from '@/components/Finance/income/Edit';
import View from '@/components/Finance/income/View';
import Delete from '@/components/Finance/income/Delete';


export default function income(){
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
    const [viewShow, setViewShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    amount: "",
    category: "",
    branch: "",
    date: "",
    client: "",
    project: "",
    paymentMethod: "",
    dueDate: "",
    receivedDate: "",
    description: ""
  });

  const createData = (id, name, type, amount, category, branch, date, client, project, paymentMethod, dueDate, receivedDate, description) => {
    return {
      id,
      name,
      type,
      amount,
      category,
      branch,
      date,
      client,
      project,
      paymentMethod,
      dueDate,
      receivedDate,
      description
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'hrms-badge-success';
      case 'Inactive':
        return 'hrms-badge-error';
      case 'Pending':
        return 'hrms-badge-warning';
      default:
        return 'hrms-badge-default';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Recurring':
        return '#3b82f6';
      case 'One-time':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Software':
        return '#10b981';
      case 'Service':
        return '#f59e0b';
      case 'Education':
        return '#3b82f6';
      case 'Marketing':
        return '#ef4444';
      case 'Sales':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

    const handleView = (row) => {
    setViewData(row);
    setViewShow(true);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setFormData(data);
    setEditShow(true);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDelete = (income) => {
    setViewData(income);
    setDeleteShow(true);
  };
  
  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setViewData(null);
    setFormData({
      id: "",
      name: "",
      type: "",
      amount: "",
      category: "",
      branch: "",
      date: "",
      status: "Active",
      client: "",
      project: "",
      paymentMethod: "",
      invoiceNumber: "",
      dueDate: "",
      receivedDate: "",
      description: ""
    });
  };

  const handleCreate = (data) => {
     setOpenData(false);
  };

  const handleUpdate = (data) => {
    setEditShow(false);
  };

  const handleDeleteConfirm = () => {
    setDeleteShow(false);
    setViewData(null);
  };

const incomeData = [
  createData("INC001", "HRMS Software License", "Recurring", 150000, "Software", "Head Office", "2024-01-15", "TechCorp Solutions", "HRMS Implementation", "Bank Transfer", "2024-01-30", "2024-01-28", "Annual HRMS software license renewal"),
  createData("INC002", "Employee Training Program", "One-time", 75000, "Education", "Delhi Branch", "2024-01-20", "Global Training Inc", "Leadership Development", "Cheque", "2024-02-15", "2024-02-10", "Executive leadership training program"),
  createData("INC003", "Payroll Processing Service", "Recurring", 45000, "Service", "Bangalore Branch", "2024-01-25", "PayrollPro Services", "Monthly Payroll", "Bank Transfer", "2024-02-05", "2024-02-03", "Monthly payroll processing and compliance"),
  createData("INC004", "Recruitment Campaign", "One-time", 120000, "Marketing", "Chennai Branch", "2024-01-30", "Digital Marketing Co", "Tech Hiring Campaign", "Bank Transfer", "2024-02-20", "2024-02-18", "Digital recruitment campaign for tech positions"),
  createData("INC005", "Performance Management Tool", "One-time", 200000, "Software", "Kolkata Branch", "2024-02-01", "PerfTech Solutions", "Performance System", "Bank Transfer", "2024-02-25", "2024-02-22", "Performance management software implementation"),
  createData("INC006", "Cloud Infrastructure", "Recurring", 85000, "Software", "Hyderabad Branch", "2024-02-05", "CloudTech Services", "AWS Infrastructure", "Bank Transfer", "2024-03-05", "2024-03-02", "Monthly cloud hosting and infrastructure"),
  createData("INC007", "Legal Compliance Training", "One-time", 95000, "Education", "Pune Branch", "2024-02-10", "LegalEdu Institute", "Compliance Training", "Bank Transfer", "2024-03-10", "", "Legal compliance training for HR team"),
  createData("INC008", "Employee Wellness Program", "Recurring", 60000, "Service", "Jaipur Branch", "2024-02-15", "WellnessFirst", "Health & Wellness", "Bank Transfer", "2024-03-15", "2024-03-12", "Quarterly employee wellness program"),
  createData("INC009", "Security Audit Service", "One-time", 110000, "Service", "Kochi Branch", "2024-02-20", "SecureAudit Pro", "Security Assessment", "Cheque", "2024-03-20", "2024-03-18", "Annual security audit and compliance check"),
  createData("INC010", "Employee Benefits Platform", "Recurring", 70000, "Software", "Ahmedabad Branch", "2024-02-25", "BenefitsTech", "Benefits Management", "Bank Transfer", "2024-03-25", "2024-03-22", "Monthly employee benefits platform subscription"),
  createData("INC011", "HR Analytics Dashboard", "One-time", 180000, "Software", "Head Office", "2024-03-01", "AnalyticsPro", "HR Analytics", "Bank Transfer", "2024-03-30", "2024-03-28", "Custom HR analytics dashboard development"),
  createData("INC012", "Employee Engagement Survey", "One-time", 45000, "Service", "Delhi Branch", "2024-03-05", "EngageMetrics", "Employee Survey", "Bank Transfer", "2024-04-05", "2024-04-02", "Annual employee engagement survey and analysis"),
];

// Filter data based on search
const filteredData = incomeData.filter(income =>
  income.name.toLowerCase().includes(search.toLowerCase()) ||
  income.type.toLowerCase().includes(search.toLowerCase()) ||
  income.category.toLowerCase().includes(search.toLowerCase()) ||
  income.branch.toLowerCase().includes(search.toLowerCase()) ||
  income.id.toLowerCase().includes(search.toLowerCase()) ||
  income.client.toLowerCase().includes(search.toLowerCase()) ||
  income.project.toLowerCase().includes(search.toLowerCase()) ||
  income.paymentMethod.toLowerCase().includes(search.toLowerCase())
);

// Pagination
const startIndex = (page - 1) * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const paginatedData = filteredData.slice(startIndex, endIndex);
const totalPages = Math.ceil(filteredData.length / rowsPerPage);




  return (
    <Box sx={{ padding: "0.5rem" }}>

      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "1.5rem", gap: 2 }}>
        <TextField
          placeholder="Search by name, client, project, payment method..."
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "300px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              backgroundColor: "#fff",
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
        
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenData(true)}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            backgroundColor: "#3b82f6",
            "&:hover": {
              backgroundColor: "#2563eb"
            }
          }}
        >
          Add Income
        </Button>
      </Box>

      {/* Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No</TableCell>
                <TableCell>Income</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
        <TableBody>
              {paginatedData.map((income, index) => (
                <TableRow key={income.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {income.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {income.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {income.client}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={income.type}
                      size="small"
                      sx={{
                        backgroundColor: getTypeColor(income.type),
                        color: "white",
                        fontWeight: 500,
                        fontSize: "0.75rem"
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#10b981" }}>
                    ₹{income.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={income.category}
                      size="small"
                      sx={{
                        backgroundColor: getCategoryColor(income.category),
                        color: "white",
                        fontWeight: 500,
                        fontSize: "0.75rem"
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{income.branch}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{new Date(income.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(income)}
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(income)}
                        sx={{ color: "#6b7280" }}
                      >
                        <EditOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(income)}
                        sx={{ color: "#ef4444" }}
                      >
                        <DeleteOutline fontSize="small" />
                      </IconButton>
                    </Stack>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Box>

        {/* Pagination */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "1rem",
          borderTop: "1px solid #e5e7eb"
        }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredData.length)} of {filteredData.length} records
            </Typography>
          </Stack>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(event, value) => setPage(value)}
            color="primary"
            shape="rounded"
            size="small"
          />
        </Box>
      </Box>

      {/* Dialog */}
    <CommonDialog
          open={openData || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            openData
              ? "Add New Income"
              : viewShow
              ? "View Income Details"
              : editShow
              ? "Edit Income"
              : deleteShow
              ? "Delete Income"
              : ""
          }
        dialogContent={
          openData ? (
            <Create formData={formData} handleInputChange={handleFormChange} />
          ) : viewShow ? (
            <View selectedData={ViewData} getStatusColor={getStatusColor} />
          ) : editShow ? (
            <Edit formData={formData} handleInputChange={handleFormChange} />
          ) : deleteShow ? (
            <Delete selectedData={ViewData} />
          ) : null
        }
        primaryAction={openData || editShow || deleteShow}
        primaryActionText={openData ? "Create" : editShow ? "Update" : "Delete"}
        primaryActionColor={deleteShow ? "error" : "primary"}
        onPrimaryAction={openData ? handleCreate : editShow ? handleUpdate : handleDeleteConfirm}
        secondaryActionText={viewShow ? "Close" : "Cancel"}
        showActions={!viewShow}
        maxWidth={deleteShow ? "xs" : "md"}
        fullWidth={!deleteShow}
      />
    </Box>
  )
}