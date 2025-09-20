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
  Add
} from '@mui/icons-material';
import CommonDialog from '@/components/commonDialog';


export default function holiday(){
  const [editData, setEditData] = useState(null);
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);

const createData = (id, day, date, type) => ({
  id, day, date, type,
  action: (
    <>
      <IconButton
        sx={{ color: "#6b7280", padding: "4px" }}
        onClick={() => handleEdit({ id, day, date, type })}
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
});

  const handleEdit = (data) => {
    setEditData(data);
    setEditShow(true);
  };

  const handleShowDelete = (id) => {
    setDeleteId(id);
    setDeleteShow(true);
  };

  
  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
  };

  const handleCreate = (data) => {
     setLoading(data);
     setOpenData(false);
  };

  const handleUpdate = (data) => {
     setLoading(data);
    setEditShow(false);
  };
  const handleDelete=()=>{
    setDeleteShow(false);
    setDeleteId(null);
  }
  

const rows = [
  createData(1, "New Year's Day", "2025-01-01", "National Holiday"),
  createData(2, "Republic Day", "2025-01-26", "National Holiday"),
  createData(3, "Holi", "2025-03-14", "Festival"),
  createData(4, "Good Friday", "2025-04-18", "Religious Holiday"),
  createData(5, "Independence Day", "2025-08-15", "National Holiday"),
  createData(6, "Gandhi Jayanti", "2025-10-02", "National Holiday"),
  createData(7, "Diwali", "2025-10-20", "Festival"),
  createData(8, "Christmas", "2025-12-25", "Religious Holiday")
];

const filteredRows = rows.filter(row =>
  row.day.toLowerCase().includes(search.toLowerCase()) ||
  row.type.toLowerCase().includes(search.toLowerCase())
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
                <TableCell>S. No.</TableCell>
                <TableCell>Holiday Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CalendarToday sx={{ color: "#3b82f6", fontSize: 16 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {row.day}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${
                      row.type === "National Holiday" ? "hrms-badge-error" : 
                      row.type === "Festival" ? "hrms-badge-warning" : "hrms-badge-success"
                    }`}>
                      {row.type}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
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
            : editShow
            ? "Edit Holiday"
            : deleteShow
            ? "Delete Holiday"
            : ""
        }
        dialogContent={
          <Box sx={{ padding: 2 }}>
            <Typography variant="body1">
              {openData && "Create new holiday functionality will be implemented here."}
              {editShow && `Editing holiday: ${editData?.day}`}
              {deleteShow && "Are you sure you want to delete this holiday?"}
            </Typography>
          </Box>
        }
      />
    </Box>
  );
}
