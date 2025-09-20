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
  Edit,
  DeleteOutline
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';


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

  const handleDelete = (id) => {
    setDeleteId(id);
    setDeleteShow(true);
  };

  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
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
    setDeleteId(null);
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

// Form component for Add/Edit
const renderForm = (isEdit = false) => (
  <Box sx={{ padding: "1.5rem" }}>
    <Grid container spacing={3}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Expense Name"
          value={formData.name}
          onChange={(e) => handleFormChange('name', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => handleFormChange('type', e.target.value)}
            label="Type"
          >
            <MenuItem value="Equipment">Equipment</MenuItem>
            <MenuItem value="Utilities">Utilities</MenuItem>
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Training">Training</MenuItem>
            <MenuItem value="Facilities">Facilities</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={formData.amount}
          onChange={(e) => handleFormChange('amount', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) => handleFormChange('category', e.target.value)}
            label="Category"
          >
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Utilities">Utilities</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Supplies">Supplies</MenuItem>
            <MenuItem value="Facilities">Facilities</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Branch</InputLabel>
          <Select
            value={formData.branch}
            onChange={(e) => handleFormChange('branch', e.target.value)}
            label="Branch"
          >
            <MenuItem value="Head Office">Head Office</MenuItem>
            <MenuItem value="Delhi Branch">Delhi Branch</MenuItem>
            <MenuItem value="Bangalore Branch">Bangalore Branch</MenuItem>
            <MenuItem value="Chennai Branch">Chennai Branch</MenuItem>
            <MenuItem value="Kolkata Branch">Kolkata Branch</MenuItem>
            <MenuItem value="Hyderabad Branch">Hyderabad Branch</MenuItem>
            <MenuItem value="Pune Branch">Pune Branch</MenuItem>
            <MenuItem value="Ahmedabad Branch">Ahmedabad Branch</MenuItem>
            <MenuItem value="Jaipur Branch">Jaipur Branch</MenuItem>
            <MenuItem value="Kochi Branch">Kochi Branch</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Date"
          type="date"
          value={formData.date}
          onChange={(e) => handleFormChange('date', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Claim Type</InputLabel>
          <Select
            value={formData.claimType}
            onChange={(e) => handleFormChange('claimType', e.target.value)}
            label="Claim Type"
          >
            <MenuItem value="Advance">Advance</MenuItem>
            <MenuItem value="Reimbursement">Reimbursement</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Approval Status</InputLabel>
          <Select
            value={formData.approvalStatus}
            onChange={(e) => handleFormChange('approvalStatus', e.target.value)}
            label="Approval Status"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Approved">Approved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Payment Mode</InputLabel>
          <Select
            value={formData.paymentMode}
            onChange={(e) => handleFormChange('paymentMode', e.target.value)}
            label="Payment Mode"
          >
            <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            <MenuItem value="Cheque">Cheque</MenuItem>
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="UPI">UPI</MenuItem>
            <MenuItem value="Credit Card">Credit Card</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Employee</InputLabel>
          <Select
            value={formData.employee}
            onChange={(e) => handleFormChange('employee', e.target.value)}
            label="Employee"
          >
            <MenuItem value="Rajesh Kumar">Rajesh Kumar</MenuItem>
            <MenuItem value="Priya Sharma">Priya Sharma</MenuItem>
            <MenuItem value="Amit Patel">Amit Patel</MenuItem>
            <MenuItem value="Sneha Gupta">Sneha Gupta</MenuItem>
            <MenuItem value="Rohit Singh">Rohit Singh</MenuItem>
            <MenuItem value="Anita Desai">Anita Desai</MenuItem>
            <MenuItem value="Vikram Joshi">Vikram Joshi</MenuItem>
            <MenuItem value="Kavita Reddy">Kavita Reddy</MenuItem>
            <MenuItem value="Arjun Mehta">Arjun Mehta</MenuItem>
            <MenuItem value="Deepika Nair">Deepika Nair</MenuItem>
            <MenuItem value="Suresh Kumar">Suresh Kumar</MenuItem>
            <MenuItem value="Meera Iyer">Meera Iyer</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Department</InputLabel>
          <Select
            value={formData.department}
            onChange={(e) => handleFormChange('department', e.target.value)}
            label="Department"
          >
            <MenuItem value="Information Technology">Information Technology</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Finance & Accounting">Finance & Accounting</MenuItem>
            <MenuItem value="Marketing & Sales">Marketing & Sales</MenuItem>
            <MenuItem value="Operations">Operations</MenuItem>
            <MenuItem value="Customer Support">Customer Support</MenuItem>
            <MenuItem value="Administration">Administration</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <Box>
          <Typography variant="body2" sx={{ marginBottom: 1, color: 'text.secondary' }}>
            Attachment
          </Typography>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            onChange={(e) => handleFormChange('attachment', e.target.files[0]?.name || '')}
            className="hrms-file-input"
          />
          {formData.attachment && (
            <Typography variant="caption" sx={{ color: 'text.secondary', marginTop: 0.5, display: 'block' }}>
              Selected: {formData.attachment}
            </Typography>
          )}
        </Box>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Description"
          value={formData.description}
          onChange={(e) => handleFormChange('description', e.target.value)}
          variant="outlined"
          size="small"
          multiline
          rows={2}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Vendor"
          value={formData.vendor}
          onChange={(e) => handleFormChange('vendor', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Project"
          value={formData.project}
          onChange={(e) => handleFormChange('project', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  </Box>
);

// PDF Report component for View
const renderPDFReport = (expense) => (
  <Box sx={{ padding: "1.5rem", backgroundColor: "#f8fafc", minHeight: "400px" }}>
    <Box sx={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: "2rem", borderBottom: "2px solid #e5e7eb", paddingBottom: "1rem" }}>
        <Typography variant="h4" sx={{ color: "#1e293b", fontWeight: 700, marginBottom: "0.5rem" }}>
          EXPENSE DETAILS
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          View expense information
        </Typography>
      </Box>

      {/* Expense Details */}
      <Grid container spacing={3}>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Expense ID:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {expense.id}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Expense Name:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {expense.name}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Type:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {expense.type}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Amount:
            </Typography>
            <Typography variant="body1" sx={{ color: "#ef4444", fontWeight: 600 }}>
              ₹{expense.amount.toLocaleString()}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Category:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {expense.category}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Date:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {new Date(expense.date).toLocaleDateString()}
            </Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  </Box>
);


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
                        <Edit fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(expense.id)}
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
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
              shape="rounded"
            />
          </Box>
        )}
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
            renderForm(false)
          ) : viewShow ? (
            <Box sx={{ padding: "2rem" }}>
              <Grid container spacing={3}>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Expense ID:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.id}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Expense Name:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Employee:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.employee}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Department:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.department}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Branch:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.branch}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Claim Type:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.claimType}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Approval Status:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.approvalStatus}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Amount:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      ₹{ViewData?.amount?.toLocaleString()}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Type:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.type}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Category:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.category}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Date:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {new Date(ViewData?.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Vendor:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.vendor}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Project:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.project}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{xs:12}}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                      Description:
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                      {ViewData?.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ) : editShow ? (
            renderForm(true)
          ) : deleteShow ? (
            <Box sx={{ padding: "2rem", textAlign: "center" }}>
              <Typography variant="body1" sx={{ color: "#6b7280" }}>
                Are you sure you want to delete this expense record?
              </Typography>
            </Box>
          ) : null
        }
        dialogActions={
          <Stack direction="row" spacing={2} sx={{ padding: "1rem" }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                borderColor: "#d1d5db",
                color: "#374151"
              }}
            >
              {viewShow ? "Close" : "Cancel"}
            </Button>
            {(openData || editShow) && (
              <Button
                variant="contained"
                onClick={openData ? handleCreate : handleUpdate}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  backgroundColor: "#3b82f6"
                }}
              >
                {openData ? "Create" : "Update"}
              </Button>
            )}
            {deleteShow && (
              <Button
                variant="contained"
                onClick={handleDeleteConfirm}
                sx={{
                  borderRadius: "8px",
                  textTransform: "none",
                  backgroundColor: "#ef4444",
                  "&:hover": {
                    backgroundColor: "#dc2626"
                  }
                }}
              >
                Delete
              </Button>
            )}
          </Stack>
        }
      />
    </Box>
  )
}