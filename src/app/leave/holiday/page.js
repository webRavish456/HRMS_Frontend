"use client"
import * as React from 'react';
import { useState } from 'react';
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
  Avatar
} from '@mui/material';
import {
  DeleteOutline,
  Edit,
  Search,
  Download,
  CalendarToday,
  Add,
  VisibilityOutlined
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';
import Create from '@/components/Leave/holiday/Create';
import EditComponent from '@/components/Leave/holiday/Edit';
import View from '@/components/Leave/holiday/View';
import Delete from '@/components/Leave/holiday/Delete';


export default function holiday(){
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
  const [formData, setFormData] = useState({
    holidayName: "",
    holidayType: "",
    holidayDate: "",
    branch: "",
    description: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

const createData = (id, holidayName, holidayType, holidayDate, branch, description, createdDate) => ({
  id, 
  holidayName, 
  holidayType, 
  holidayDate, 
  branch, 
  description, 
  createdDate
});

  const handleView = (row) => {
    setViewData(row);
    setViewShow(true);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setFormData({
      holidayName: data.holidayName,
      holidayType: data.holidayType,
      holidayDate: data.holidayDate,
      branch: data.branch,
      description: data.description
    });
    setEditShow(true);
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
    setEditData(null);
    setFormData({
      holidayName: "",
      holidayType: "",
      holidayDate: "",
      branch: "",
      description: ""
    });
  };

  const handleCreate = () => {
    console.log("Creating holiday:", formData);
    setOpenData(false);
    setFormData({
      holidayName: "",
      holidayType: "",
      holidayDate: "",
      branch: "",
      description: ""
    });
  };

  const handleUpdate = () => {
    console.log("Updating holiday:", formData);
    setEditShow(false);
    setFormData({
      holidayName: "",
      holidayType: "",
      holidayDate: "",
      branch: "",
      description: ""
    });
  };

  const handleDelete = () => {
    console.log("Deleting holiday:", ViewData);
    setDeleteShow(false);
    setViewData(null);
  };

  

const rows = [
  createData(1, "New Year's Day", "National Holiday", "2025-01-01", "All Branches", "New Year celebration", "2024-12-01"),
  createData(2, "Republic Day", "National Holiday", "2025-01-26", "All Branches", "Republic Day celebration", "2024-12-01"),
  createData(3, "Holi", "Festival", "2025-03-14", "All Branches", "Holi festival celebration", "2024-12-01"),
  createData(4, "Good Friday", "Religious Holiday", "2025-04-18", "All Branches", "Good Friday observance", "2024-12-01"),
  createData(5, "Independence Day", "National Holiday", "2025-08-15", "All Branches", "Independence Day celebration", "2024-12-01"),
  createData(6, "Gandhi Jayanti", "National Holiday", "2025-10-02", "All Branches", "Gandhi Jayanti observance", "2024-12-01"),
  createData(7, "Diwali", "Festival", "2025-10-20", "All Branches", "Diwali festival celebration", "2024-12-01"),
  createData(8, "Christmas", "Religious Holiday", "2025-12-25", "All Branches", "Christmas celebration", "2024-12-01")
];

const filteredRows = rows.filter(row =>
  row.holidayName.toLowerCase().includes(search.toLowerCase()) ||
  row.holidayType.toLowerCase().includes(search.toLowerCase()) ||
  row.branch.toLowerCase().includes(search.toLowerCase())
);

const startIndex = (page - 1) * rowsPerPage;
const endIndex = startIndex + rowsPerPage;
const paginatedRows = filteredRows.slice(startIndex, endIndex);


  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search holidays..."
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
          onClick={() => setOpenData(true)}
          style={{ height: "40px" }}
        >
          <Add />
          Add Holiday
        </button>
      </Box>

      {/* Holiday Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>S. No.</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Holiday Name</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Type</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Branch</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow key={row.id} sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CalendarToday sx={{ color: "#3b82f6", fontSize: 16 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {row.holidayName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {row.holidayDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#374151" }}>
                      {row.holidayType}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#6b7280" }}>
                      {row.branch}
                    </Typography>
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
        open={openData || viewShow || editShow || deleteShow}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Create New Holiday"
            : viewShow
            ? "View Holiday"
            : editShow
            ? "Edit Holiday"
            : deleteShow
            ? "Delete Holiday"
            : ""
        }
        dialogContent={
          openData ? (
            <Create formData={formData} handleInputChange={handleInputChange} handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <View selectedData={ViewData} />
          ) : editShow ? (
            <EditComponent formData={formData} handleInputChange={handleInputChange} handleUpdate={handleUpdate} handleClose={handleClose} />
          ) : deleteShow ? (
            <Delete selectedData={ViewData} handleDelete={handleDelete} handleClose={handleClose} />
          ) : null
        }
        maxWidth={deleteShow ? "xs" : "md"}
        fullWidth={!deleteShow}
      />
    </Box>
  );
}
