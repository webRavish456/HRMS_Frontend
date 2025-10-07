"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Box,
  Button,
  InputAdornment,
  Typography,
  Pagination,
  Stack,
  Chip,
  Avatar,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import {
  DeleteOutline,
  VisibilityOutlined,
  Edit,
  Search,
  Download,
  AccountBalanceWallet,
  Add
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';
import Delete from '@/components/Payroll/payslip-list/Delete';


export default function Paysliplist(){
  const router = useRouter();
  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);


  const handleView = (row) => {
    console.log("row",row)
    // Navigate to create payroll page with view mode
    router.push(`/payroll/create-payroll?mode=view&id=${row.id}`);
  };

  const handleEdit = (data) => {
    // Navigate to create payroll page with edit mode
    router.push(`/payroll/create-payroll?mode=edit&id=${data.id}`);
  };

  const handleShowDelete = (id) => {
    const selectedRow = rows.find(row => row.id === id);
    setViewData(selectedRow);
    setDeleteShow(true);
  };


  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setViewData(null);
  };

  const handleCreate = (data) => {
     setLoading(data);
     setOpenData(false);
  };

  const handleUpdate = (data) => {
     setLoading(data);
     setEditShow(false);
  };
  const handleDelete = () => {
    console.log("Deleting payslip:", ViewData);
    setDeleteShow(false);
    setViewData(null);
  }



  

const createData = (id, name, days, month, year, bsalary, bonus, tsalary, status) => {
  const row = { id, name, days, month, year, bsalary, bonus, tsalary, status };
  return {
    ...row,
    action: (
      <>
        <IconButton
          sx={{ color: "#3b82f6", padding: "4px" }}
          onClick={() => handleView(row)}
        >
          <VisibilityOutlined />
        </IconButton>
        <IconButton
          sx={{ color: "#6b7280", padding: "4px" }}
          onClick={() => handleEdit(row)}
        >
          <Edit />
        </IconButton>
        <IconButton
          sx={{ color: "#ef4444", padding: "4px" }}
          onClick={() => handleShowDelete(id)}
        >
          <DeleteOutline />
        </IconButton>
      </>
    )
  };
};




const rows = [
  createData(1, "John Doe", 22, "September", "2025", 50000, 5000, 55000, "Paid"),
  createData(2, "Jane Smith", 20, "September", "2025", 45000, 4000, 49000, "Pending"),
  createData(3, "Michael Johnson", 21, "September", "2025", 48000, 3500, 51500, "Paid"),
  createData(4, "Emily Davis", 22, "September", "2025", 52000, 6000, 58000, "Paid"),
  createData(5, "Sarah Wilson", 23, "September", "2025", 55000, 7000, 62000, "Paid"),
  createData(6, "David Brown", 19, "September", "2025", 42000, 3000, 45000, "Pending"),
  createData(7, "Lisa Garcia", 21, "September", "2025", 47000, 4000, 51000, "Paid"),
  createData(8, "Robert Lee", 22, "September", "2025", 51000, 5500, 56500, "Paid")
];

const filteredRows = rows.filter(row =>
  row.name.toLowerCase().includes(search.toLowerCase()) ||
  row.status.toLowerCase().includes(search.toLowerCase()) ||
  row.month.toLowerCase().includes(search.toLowerCase())
);

const startIndex = (page - 1) * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const paginatedRows = filteredRows.slice(startIndex, endIndex);

const getStatusColor = (status) => {
  switch (status) {
    case 'Paid': return 'hrms-badge-success';
    case 'Pending': return 'hrms-badge-warning';
    case 'Overdue': return 'hrms-badge-error';
    default: return 'hrms-badge-neutral';
  }
};

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search payslips..."
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
          className="hrms-btn hrms-btn-primary hrms-btn-fixed-height"
          onClick={() => router.push('/payroll/create-payroll')}
        >
          <Add />
          Add Payslip
        </button>
      </Box>

      {/* Payslip Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Work Days</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Basic Salary</TableCell>
                <TableCell>Bonus</TableCell>
                <TableCell>Total Salary</TableCell>
                <TableCell>Status</TableCell>
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
                        {row.name.split(' ').map(n => n[0]).join('')}
                      </Avatar>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {row.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.days}</TableCell>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.year}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>₹{row.bsalary.toLocaleString()}</TableCell>
                  <TableCell sx={{ fontWeight: 500 }}>₹{row.bonus.toLocaleString()}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>₹{row.tsalary.toLocaleString()}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(row.status)}`}>
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleView(row)}
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleEdit(row)}
                        sx={{ color: "#000", fontSize: "16px" }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleShowDelete(row.id)}
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

      <CommonDialog
        open={deleteShow}
        onClose={handleClose}
        dialogTitle="Delete PaySlip"
        dialogContent={
          <Delete selectedData={ViewData} handleDelete={handleDelete} handleClose={handleClose} />
        }
        maxWidth="xs"
        fullWidth={false}
      />
    </Box>
  );
}