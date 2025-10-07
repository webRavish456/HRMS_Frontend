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
  VisibilityOutlined,
  EditOutlined,
  DeleteOutline
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';
import Create from '@/components/Finance/expense/Create';
import Edit from '@/components/Finance/expense/Edit';
import View from '@/components/Finance/expense/View';
import Delete from '@/components/Finance/expense/Delete';


export default function expense(){
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
    claimType: "Reimbursement",
    approvalStatus: "Pending",
    paymentMode: "",
    employee: "",
    department: "",
    attachment: "",
    description: "",
    vendor: "",
    project: ""
  });

  const createData = (id, name, type, amount, category, branch, date, claimType, approvalStatus, paymentMode, employee, department, attachment, description, vendor, project) => {
    return {
      id,
      name,
      type,
      amount,
      category,
      branch,
      date,
      claimType,
      approvalStatus,
      paymentMode,
      employee,
      department,
      attachment,
      description,
      vendor,
      project
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

  const getApprovalStatusColor = (approvalStatus) => {
    switch (approvalStatus) {
      case 'Approved':
        return '#10b981';
      case 'Pending':
        return '#f59e0b';
      case 'Rejected':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const getClaimTypeColor = (claimType) => {
    switch (claimType) {
      case 'Advance':
        return '#3b82f6';
      case 'Reimbursement':
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

  const handleDelete = (expense) => {
    setViewData(expense);
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
      status: "Active"
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

const expenseData = [
  createData("EXP001", "Laptop Purchase", "Equipment", 80000, "Electronics", "Head Office", "2024-01-15", "Reimbursement", "Approved", "Bank Transfer", "Rajesh Kumar", "Information Technology", "laptop_invoice.pdf", "Dell laptop for development work", "Dell Technologies", "HRMS Development"),
  createData("EXP002", "Office Chair", "Furniture", 5000, "Furniture", "Delhi Branch", "2024-01-20", "Reimbursement", "Approved", "Cheque", "Priya Sharma", "Information Technology", "chair_receipt.pdf", "Ergonomic office chair", "Office Furniture Co", "Office Setup"),
  createData("EXP003", "Printer Maintenance", "Equipment", 15000, "Electronics", "Bangalore Branch", "2024-01-25", "Reimbursement", "Pending", "Bank Transfer", "Amit Patel", "Information Technology", "printer_service.pdf", "Annual printer maintenance", "TechService Pro", "Office Maintenance"),
  createData("EXP004", "Whiteboard", "Office Supplies", 2000, "Supplies", "Chennai Branch", "2024-01-30", "Reimbursement", "Approved", "Cash", "Sneha Gupta", "Human Resources", "whiteboard_receipt.pdf", "Whiteboard for training room", "Office Supplies Inc", "Training Setup"),
  createData("EXP005", "Software License", "Software", 12000, "Software", "Kolkata Branch", "2024-02-01", "Advance", "Approved", "Bank Transfer", "Rohit Singh", "Human Resources", "software_license.pdf", "Annual software license renewal", "SoftwareCorp", "HRMS Project"),
  createData("EXP006", "Internet Bill", "Utilities", 3000, "Utilities", "Hyderabad Branch", "2024-02-05", "Reimbursement", "Approved", "Bank Transfer", "Anita Desai", "Finance & Accounting", "internet_bill.pdf", "Monthly internet bill", "Internet Provider", "Office Operations"),
  createData("EXP007", "Training Course", "Training", 25000, "Education", "Pune Branch", "2024-02-10", "Advance", "Pending", "Bank Transfer", "Vikram Joshi", "Finance & Accounting", "training_certificate.pdf", "Advanced Excel training", "Training Institute", "Skill Development"),
  createData("EXP008", "Office Rent", "Rent", 50000, "Facilities", "Jaipur Branch", "2024-02-15", "Reimbursement", "Approved", "Bank Transfer", "Kavita Reddy", "Marketing & Sales", "rent_receipt.pdf", "Monthly office rent", "Property Management", "Office Operations"),
  createData("EXP009", "Travel Expense", "Travel", 15000, "Travel", "Kochi Branch", "2024-02-20", "Reimbursement", "Approved", "Bank Transfer", "Arjun Mehta", "Marketing & Sales", "travel_receipts.pdf", "Client meeting travel", "Travel Agency", "Client Visit"),
  createData("EXP010", "Medical Checkup", "Medical", 8000, "Healthcare", "Ahmedabad Branch", "2024-02-25", "Reimbursement", "Approved", "Bank Transfer", "Deepika Nair", "Operations", "medical_bill.pdf", "Annual health checkup", "Health Center", "Employee Wellness"),
  createData("EXP011", "Conference Fee", "Training", 18000, "Education", "Head Office", "2024-03-01", "Advance", "Pending", "Bank Transfer", "Suresh Kumar", "Customer Support", "conference_receipt.pdf", "Industry conference attendance", "Conference Organizer", "Professional Development"),
  createData("EXP012", "Office Supplies", "Office Supplies", 4000, "Supplies", "Delhi Branch", "2024-03-05", "Reimbursement", "Approved", "Cash", "Meera Iyer", "Administration", "supplies_receipt.pdf", "Monthly office supplies", "Office Depot", "Office Operations"),
];

// Filter data based on search
const filteredData = expenseData.filter(expense =>
  expense.name.toLowerCase().includes(search.toLowerCase()) ||
  expense.type.toLowerCase().includes(search.toLowerCase()) ||
  expense.category.toLowerCase().includes(search.toLowerCase()) ||
  expense.branch.toLowerCase().includes(search.toLowerCase()) ||
  expense.id.toLowerCase().includes(search.toLowerCase()) ||
  expense.employee.toLowerCase().includes(search.toLowerCase()) ||
  expense.department.toLowerCase().includes(search.toLowerCase()) ||
  expense.claimType.toLowerCase().includes(search.toLowerCase()) ||
  expense.approvalStatus.toLowerCase().includes(search.toLowerCase())
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
          placeholder="Search by name, employee, department, claim type, approval status..."
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
          Add Expense
        </Button>
      </Box>

      {/* Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No</TableCell>
                <TableCell>Expense ID</TableCell>
                <TableCell>Expense Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((expense, index) => (
                <TableRow key={expense.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {expense.id}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {expense.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={expense.type}
                      size="small"
                      sx={{
                        backgroundColor: expense.type === 'Equipment' ? '#fef3c7' : expense.type === 'Utilities' ? '#dbeafe' : '#f3e8ff',
                        color: expense.type === 'Equipment' ? '#92400e' : expense.type === 'Utilities' ? '#1e40af' : '#7c3aed'
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#ef4444" }}>
                    ₹{expense.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.branch}</TableCell>
                  <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(expense)}
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(expense)}
                        sx={{ color: "#6b7280" }}
                      >
                        <EditOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(expense)}
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
            ? "Add New Expense"
            : viewShow
            ? "View Expense Details"
            : editShow
            ? "Edit Expense"
            : deleteShow
            ? "Delete Expense"
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