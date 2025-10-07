"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Grid,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import {
  Add,
  EditOutlined,
  DeleteOutlined,
  VisibilityOutlined,
  Search,
  FilterList,
  Download,
} from "@mui/icons-material";
import CommonDialog from "@/components/commonDialog";
import CreateBranch from "@/components/Branch/create";
import EditBranch from "@/components/Branch/edit";
import ViewBranch from "@/components/Branch/view";
import DeleteBranch from "@/components/Branch/delete";

const BranchPage = () => {
  const [branches, setBranches] = useState([
    {
      id: "BR001",
      branchName: "Head Office",
      branchLocation: "Mumbai, Maharashtra",
      status: "Active",
      createdAt: "2024-01-15"
    },
    {
      id: "BR002", 
      branchName: "Delhi Branch",
      branchLocation: "New Delhi, Delhi",
      status: "Active",
      createdAt: "2024-02-20"
    },
    {
      id: "BR003",
      branchName: "Bangalore Branch",
      branchLocation: "Bangalore, Karnataka",
      status: "Active",
      createdAt: "2024-03-10"
    },
    {
      id: "BR004",
      branchName: "Chennai Branch",
      branchLocation: "Chennai, Tamil Nadu",
      status: "Active",
      createdAt: "2024-03-25"
    },
    {
      id: "BR005",
      branchName: "Kolkata Branch",
      branchLocation: "Kolkata, West Bengal",
      status: "Active",
      createdAt: "2024-04-05"
    },
    {
      id: "BR006",
      branchName: "Hyderabad Branch",
      branchLocation: "Hyderabad, Telangana",
      status: "Active",
      createdAt: "2024-04-15"
    },
    {
      id: "BR007",
      branchName: "Pune Branch",
      branchLocation: "Pune, Maharashtra",
      status: "Active",
      createdAt: "2024-04-20"
    },
    {
      id: "BR008",
      branchName: "Ahmedabad Branch",
      branchLocation: "Ahmedabad, Gujarat",
      status: "Inactive",
      createdAt: "2024-05-01"
    },
    {
      id: "BR009",
      branchName: "Jaipur Branch",
      branchLocation: "Jaipur, Rajasthan",
      status: "Active",
      createdAt: "2024-05-10"
    },
    {
      id: "BR010",
      branchName: "Kochi Branch",
      branchLocation: "Kochi, Kerala",
      status: "Active",
      createdAt: "2024-05-15"
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Dialog States
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);


  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setSelectedBranch(null);
  };

  const handleCreate = (formData) => {
    const newBranch = {
      id: `BR${String(branches.length + 1).padStart(3, '0')}`,
      ...formData,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setBranches([...branches, newBranch]);
    handleClose();
  };

  const handleUpdate = (formData) => {
    setBranches(branches.map(branch => 
      branch.id === selectedBranch.id 
        ? { ...branch, ...formData }
        : branch
    ));
    handleClose();
  };

  const handleDelete = () => {
    setBranches(branches.filter(branch => branch.id !== selectedBranch.id));
    handleClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'hrms-badge-success';
      case 'Inactive': return 'hrms-badge-error';
      default: return 'hrms-badge-neutral';
    }
  };

  const filteredBranches = branches.filter(branch => {
    const matchesSearch = branch.branchName.toLowerCase().includes(search.toLowerCase()) ||
                         branch.branchLocation.toLowerCase().includes(search.toLowerCase()) ||
                         branch.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || branch.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search branches..."
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
          Add Branch
        </button>
      </Box>

      {/* Branch Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Branch Name</TableCell>
                <TableCell>Branch Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBranches
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((branch, index) => (
                  <TableRow key={branch.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{branch.id}</TableCell>
                    <TableCell>{branch.branchName}</TableCell>
                    <TableCell>{branch.branchLocation}</TableCell>
                    <TableCell>
                      <Box className={`hrms-badge ${getStatusColor(branch.status)}`}>
                        {branch.status}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: "0.25rem" }}>
                        <IconButton 
                          size="small"
                          onClick={() => { setSelectedBranch(branch); setViewShow(true); }}
                          sx={{ color: "#1976D2", fontSize: "16px" }}
                        >
                          <VisibilityOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => { 
                            setSelectedBranch(branch); 
                            setEditShow(true); 
                          }}
                          sx={{ color: "#000", fontSize: "16px" }}
                        >
                          <EditOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => { setSelectedBranch(branch); setDeleteShow(true); }}
                          sx={{ color: "#d32f2f", fontSize: "16px" }}
                        >
                          <DeleteOutlined />
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
              Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredBranches.length)} of {filteredBranches.length} branches
            </Typography>
            <Pagination
              count={Math.ceil(filteredBranches.length / rowsPerPage)}
              page={page + 1}
              onChange={(event, value) => setPage(value - 1)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Common Dialog */}
      <CommonDialog
        open={openData || viewShow || editShow || deleteShow}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Add Branch"
            : viewShow
            ? "Branch Details"
            : editShow
            ? "Edit Branch"
            : deleteShow
            ? "Delete Branch"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateBranch 
              handleCreate={handleCreate} 
              handleClose={handleClose} 
            />
          ) : viewShow ? (
            <ViewBranch 
              selectedBranch={selectedBranch} 
              handleClose={handleClose} 
              getStatusColor={getStatusColor} 
            />
          ) : editShow ? (
            <EditBranch 
              handleUpdate={handleUpdate} 
              handleClose={handleClose} 
              selectedBranch={selectedBranch}
            />
          ) : deleteShow ? (
            <DeleteBranch 
              selectedBranch={selectedBranch} 
              handleDelete={handleDelete}
              handleClose={handleClose}
            />
          ) : null
        }
        maxWidth={deleteShow ? "xs" : "md"}
        fullWidth={!deleteShow}
      />
    </Box>
  );
};

export default BranchPage;
