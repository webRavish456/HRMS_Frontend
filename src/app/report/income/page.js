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
    setDeleteId(null);
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

// Form component for Add/Edit
const renderForm = (isEdit = false) => (
  <Box sx={{ padding: "1.5rem" }}>
    <Grid container spacing={3}>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Income Name"
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
            <MenuItem value="Recurring">Recurring</MenuItem>
            <MenuItem value="One-time">One-time</MenuItem>
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
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Service">Service</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
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
        <TextField
          fullWidth
          label="Client Name"
          value={formData.client}
          onChange={(e) => handleFormChange('client', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Project Name"
          value={formData.project}
          onChange={(e) => handleFormChange('project', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Payment Method</InputLabel>
          <Select
            value={formData.paymentMethod}
            onChange={(e) => handleFormChange('paymentMethod', e.target.value)}
            label="Payment Method"
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
        <TextField
          fullWidth
          label="Due Date"
          type="date"
          value={formData.dueDate}
          onChange={(e) => handleFormChange('dueDate', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Received Date"
          type="date"
          value={formData.receivedDate}
          onChange={(e) => handleFormChange('receivedDate', e.target.value)}
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid size={{xs:12}}>
        <TextField
          fullWidth
          label="Description"
          multiline
          rows={3}
          value={formData.description}
          onChange={(e) => handleFormChange('description', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
    </Grid>
  </Box>
);



  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap:"1rem", alignItems: "center", marginBottom: "1rem" }}>
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
        
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<Download />}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              borderColor: "#d1d5db",
              color: "#374151",
              height:'40px',
              "&:hover": {
                borderColor: "#9ca3af",
                backgroundColor: "#f9fafb"
              }
            }}
          >
            Export
          </Button>
         
        </Stack>
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
                        onClick={() => handleDelete(income.id)}
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
              ? "Create New Income Report"
              : viewShow
              ? "View Income Report"
              : editShow
              ? "Edit Income Report"
              : deleteShow
              ? "Delete Income Report"
              : ""
          }
          dialogContent={
            openData ? (
            renderForm(false)
            ) : viewShow ? (
            <Box sx={{ padding: "1.5rem", backgroundColor: "#f8fafc", minHeight: "400px" }}>
              <Box sx={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                {/* Header */}
                <Box sx={{ textAlign: "center", marginBottom: "2rem", borderBottom: "2px solid #e5e7eb", paddingBottom: "1rem" }}>
                  <Typography variant="h4" sx={{ color: "#1e293b", fontWeight: 700, marginBottom: "0.5rem" }}>
                    INCOME REPORT
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#6b7280" }}>
                    Generated on {new Date().toLocaleDateString()}
                  </Typography>
                </Box>

                {/* Income Details */}
                <Grid container spacing={3}>
                  <Grid size={{xs:12, sm:6}}>
                    <Box sx={{ marginBottom: "1rem" }}>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                        Income ID:
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                        {ViewData?.id}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{xs:12, sm:6}}>
                    <Box sx={{ marginBottom: "1rem" }}>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                        Income Name:
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                        {ViewData?.name}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{xs:12, sm:6}}>
                    <Box sx={{ marginBottom: "1rem" }}>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                        Client:
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                        {ViewData?.client}
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
                        Payment Method:
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                        {ViewData?.paymentMethod}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{xs:12, sm:6}}>
                    <Box sx={{ marginBottom: "1rem" }}>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                        Due Date:
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
                        {ViewData?.dueDate ? new Date(ViewData.dueDate).toLocaleDateString() : "Not Set"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{xs:12, sm:6}}>
                    <Box sx={{ marginBottom: "1rem" }}>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                        Received Date:
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#10b981", fontWeight: 600 }}>
                        {ViewData?.receivedDate ? new Date(ViewData.receivedDate).toLocaleDateString() : "Not Received"}
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
                        Amount:
                      </Typography>
                      <Typography variant="body1" sx={{ color: "#10b981", fontWeight: 600 }}>
                        ₹{ViewData?.amount?.toLocaleString()}
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
                        {ViewData?.date ? new Date(ViewData.date).toLocaleDateString() : "Not Set"}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{xs:12, sm:6}}>
                    <Box sx={{ marginBottom: "1rem" }}>
                      <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
                        Status:
                      </Typography>
                      <Chip
                        label={ViewData?.status}
                        className={getStatusColor(ViewData?.status)}
                        size="small"
                      />
                    </Box>
                  </Grid>
                </Grid>

                {/* Footer */}
                <Box sx={{ marginTop: "2rem", textAlign: "center", borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
                  <Typography variant="body2" sx={{ color: "#6b7280", marginBottom: "1rem" }}>
                    This is a computer generated report
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<Download />}
                    sx={{
                      borderRadius: "8px",
                      textTransform: "none",
                      backgroundColor: "#3b82f6",
                      "&:hover": {
                        backgroundColor: "#2563eb"
                      }
                    }}
                  >
                    Download PDF
                  </Button>
                </Box>
              </Box>
            </Box>
            ) : editShow ? (
            renderForm(true)
            ) : deleteShow ? (
            <Box sx={{ padding: "2rem", textAlign: "center" }}>
              <Typography variant="body1" sx={{ color: "#6b7280" }}>
                Are you sure you want to delete this income report?
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