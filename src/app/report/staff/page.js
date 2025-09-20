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
  LinearProgress,
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


export default function staff(){
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
    staffName: "",
    staffType: "",
    department: "",
    position: "",
    salary: ""
  });

  const createData = (id, staffName, staffType, department, position, salary) => {
    return {
      id,
      staffName,
      staffType,
      department,
      position,
      salary
    };
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'hrms-badge-success';
      case 'Inactive':
        return 'hrms-badge-error';
      default:
        return 'hrms-badge-default';
    }
  };

  const getAttendanceColor = (attendance) => {
    const percentage = parseInt(attendance);
    if (percentage >= 90) return '#10b981';
    if (percentage >= 80) return '#f59e0b';
    return '#ef4444';
  };

  const getStaffTypeColor = (staffType) => {
    switch (staffType) {
      case 'HR':
        return '#3b82f6';
      case 'Accounts':
        return '#10b981';
      case 'Security':
        return '#f59e0b';
      case 'Receptionist':
        return '#8b5cf6';
      case 'Office Boy':
        return '#06b6d4';
      case 'Pantry Staff':
        return '#f97316';
      case 'Housekeeping':
        return '#84cc16';
      case 'IT Support':
        return '#6366f1';
      case 'Admin':
        return '#ec4899';
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
      staffName: "",
      staffType: "",
      department: "",
      position: "",
      totalStaff: "",
      present: "",
      absent: "",
      attendance: "",
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

const staffData = [
  createData("STF001", "Priya Sharma", "HR", "Human Resources", "HR Manager", "₹45,000"),
  createData("STF002", "Rajesh Kumar", "Accounts", "Finance & Accounting", "Accountant", "₹35,000"),
  createData("STF003", "Amit Singh", "Security", "Security", "Security Guard", "₹18,000"),
  createData("STF004", "Sunita Patel", "Receptionist", "Front Office", "Receptionist", "₹22,000"),
  createData("STF005", "Vikram Yadav", "Office Boy", "General", "Office Boy", "₹15,000"),
  createData("STF006", "Meera Joshi", "Pantry Staff", "Cafeteria", "Pantry Staff", "₹16,000"),
  createData("STF007", "Ramesh Gupta", "Housekeeping", "Maintenance", "Sweeper/Housekeeping", "₹14,000"),
  createData("STF008", "Anita Verma", "IT Support", "Information Technology", "IT Support", "₹40,000"),
  createData("STF009", "Suresh Tiwari", "Admin", "Administration", "Admin Assistant", "₹28,000"),
  createData("STF010", "Kavita Singh", "HR", "Human Resources", "HR Executive", "₹38,000"),
  createData("STF011", "Manoj Agarwal", "Accounts", "Finance & Accounting", "Senior Accountant", "₹42,000"),
  createData("STF012", "Deepak Sharma", "Security", "Security", "Senior Security Guard", "₹20,000"),
];

// Filter data based on search
const filteredData = staffData.filter(staff =>
  staff.staffName.toLowerCase().includes(search.toLowerCase()) ||
  staff.staffType.toLowerCase().includes(search.toLowerCase()) ||
  staff.department.toLowerCase().includes(search.toLowerCase()) ||
  staff.position.toLowerCase().includes(search.toLowerCase()) ||
  staff.salary.toLowerCase().includes(search.toLowerCase()) ||
  staff.id.toLowerCase().includes(search.toLowerCase())
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
          label="Staff Name"
          value={formData.staffName}
          onChange={(e) => handleFormChange('staffName', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <FormControl fullWidth size="small">
          <InputLabel>Staff Type</InputLabel>
          <Select
            value={formData.staffType}
            onChange={(e) => handleFormChange('staffType', e.target.value)}
            label="Staff Type"
          >
            <MenuItem value="HR">HR</MenuItem>
            <MenuItem value="Accounts">Accounts</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Receptionist">Receptionist</MenuItem>
            <MenuItem value="Office Boy">Office Boy</MenuItem>
            <MenuItem value="Pantry Staff">Pantry Staff</MenuItem>
            <MenuItem value="Housekeeping">Housekeeping</MenuItem>
            <MenuItem value="IT Support">IT Support</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
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
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Finance & Accounting">Finance & Accounting</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
            <MenuItem value="Front Office">Front Office</MenuItem>
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Cafeteria">Cafeteria</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Information Technology">Information Technology</MenuItem>
            <MenuItem value="Administration">Administration</MenuItem>
            <MenuItem value="Customer Support">Customer Support</MenuItem>
            <MenuItem value="Administration">Administration</MenuItem>
            <MenuItem value="Legal & Compliance">Legal & Compliance</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Position"
          value={formData.position}
          onChange={(e) => handleFormChange('position', e.target.value)}
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid size={{xs:12, sm:6}}>
        <TextField
          fullWidth
          label="Salary"
          value={formData.salary}
          onChange={(e) => handleFormChange('salary', e.target.value)}
          variant="outlined"
          size="small"
          placeholder="e.g., ₹25,000"
        />
      </Grid>
    </Grid>
  </Box>
);

// PDF Report component for View
const renderPDFReport = (staff) => (
  <Box sx={{ padding: "1.5rem", backgroundColor: "#f8fafc", minHeight: "400px" }}>
    <Box sx={{ backgroundColor: "white", padding: "2rem", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: "2rem", borderBottom: "2px solid #e5e7eb", paddingBottom: "1rem" }}>
        <Typography variant="h4" sx={{ color: "#1e293b", fontWeight: 700, marginBottom: "0.5rem" }}>
          STAFF REPORT
        </Typography>
        <Typography variant="body1" sx={{ color: "#6b7280" }}>
          Generated on {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      {/* Staff Details */}
      <Grid container spacing={3}>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Staff ID:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {staff.id}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Staff Name:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {staff.staffName}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Staff Type:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {staff.staffType}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Department:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {staff.department}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Position:
            </Typography>
            <Typography variant="body1" sx={{ color: "#1e293b", fontWeight: 600 }}>
              {staff.position}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="body2" sx={{ color: "#6b7280", fontWeight: 500, marginBottom: "0.25rem" }}>
              Salary:
            </Typography>
            <Typography variant="body1" sx={{ color: "#059669", fontWeight: 600 }}>
              {staff.salary}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ marginTop: "2rem", textAlign: "center", borderTop: "1px solid #e5e7eb", paddingTop: "1rem" }}>
        <Typography variant="body2" sx={{ color: "#6b7280" }}>
          This is a computer generated report
        </Typography>
      </Box>
    </Box>
  </Box>
);


  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap:"1rem", marginBottom: "1rem" }}>
   <TextField
            placeholder="Search by staff name, type, department, position, salary..."
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
        <TableContainer>
          <Table className="hrms-table">
        <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>S. No</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Staff</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Staff Type</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Department</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Position</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Salary</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {paginatedData.map((staff, index) => (
                <TableRow key={staff.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, fontSize: "0.875rem", backgroundColor: "#6366f1" }}>
                        {staff.id.slice(-2)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1f2937" }}>
                          {staff.staffName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {staff.id}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={staff.staffType}
                      size="small"
                      sx={{
                        backgroundColor: getStaffTypeColor(staff.staffType),
                        color: "white",
                        fontWeight: 500,
                        fontSize: "0.75rem"
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{staff.department}</TableCell>
                  <TableCell sx={{ fontWeight: 500, color: "#374151" }}>{staff.position}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#059669" }}>
                      {staff.salary}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(staff)}
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined fontSize="small" />
                      </IconButton>
                     
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(staff.id)}
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
    </TableContainer>

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
            ? "Add New Staff"
              : viewShow
            ? "Staff Report"
              : editShow
            ? "Edit Staff"
              : deleteShow
            ? "Delete Staff"
              : ""
          }
          dialogContent={
            openData ? (
            renderForm(false)
            ) : viewShow ? (
            <Box>
              {renderPDFReport(ViewData)}
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
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
            ) : editShow ? (
            renderForm(true)
            ) : deleteShow ? (
            <Box sx={{ padding: "2rem", textAlign: "center" }}>
              <Typography variant="body1" sx={{ color: "#6b7280" }}>
                Are you sure you want to delete this staff record?
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