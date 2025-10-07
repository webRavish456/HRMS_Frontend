"use client";

import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import { Search, Add, VisibilityOutlined, EditOutlined, DeleteOutlined } from "@mui/icons-material";
import CommonDialog from "@/components/commonDialog";
import { useRouter } from "next/navigation";

const StaffPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [deleteShow, setDeleteShow] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Sample staff data
  const [staffData, setStaffData] = useState([
    {
      id: "STAFF001",
      staffId: "STAFF001",
      fullName: "Priya Singh",
      email: "priya.singh@company.com",
      phone: "9876543210",
      department: "Administration",
      position: "Office Administrator",
      branch: "Head Office",
      joinDate: "2020-01-15",
      status: "Active",
      address: "123 Main Street, Mumbai",
      emergencyContact: "9876543211"
    },
    {
      id: "STAFF002",
      employeeId: "STAFF002", 
      fullName: "Rajesh Kumar",
      email: "rajesh.kumar@company.com",
      phone: "9123456780",
      department: "Support",
      position: "Support Staff",
      branch: "Delhi Branch",
      joinDate: "2021-03-20",
      status: "Active",
      address: "456 Park Avenue, Delhi",
      emergencyContact: "9123456781"
    },
    {
      id: "STAFF003",
      employeeId: "STAFF003",
      fullName: "Sunita Patel",
      email: "sunita.patel@company.com",
      phone: "9988776655",
      department: "Maintenance",
      position: "Maintenance Staff",
      branch: "Bangalore Branch",
      joinDate: "2019-08-10",
      status: "Active",
      address: "789 Business District, Bangalore",
      emergencyContact: "9988776656"
    },
    {
      id: "STAFF004",
      employeeId: "STAFF004",
      fullName: "Amit Verma",
      email: "amit.verma@company.com",
      phone: "9876543212",
      department: "Security",
      position: "Security Guard",
      branch: "Chennai Branch",
      joinDate: "2022-02-15",
      status: "Active",
      address: "321 Corporate Plaza, Chennai",
      emergencyContact: "9876543213"
    },
    {
      id: "STAFF005",
      employeeId: "STAFF005",
      fullName: "Meera Joshi",
      email: "meera.joshi@company.com",
      phone: "9876543214",
      department: "Housekeeping",
      position: "Housekeeping Staff",
      branch: "Kolkata Branch",
      joinDate: "2021-11-08",
      status: "Active",
      address: "654 Business Center, Kolkata",
      emergencyContact: "9876543215"
    }
  ]);

  const filteredStaff = staffData.filter(staff =>
    staff.fullName.toLowerCase().includes(search.toLowerCase()) ||
    staff.email.toLowerCase().includes(search.toLowerCase()) ||
    staff.department.toLowerCase().includes(search.toLowerCase()) ||
    staff.position.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreateStaff = () => {
    router.push("/staff/create");
  };

  const handleViewStaff = (staffId) => {
    router.push(`/staff/view/${staffId}`);
  };

  const handleEditStaff = (staffId) => {
    router.push(`/staff/edit/${staffId}`);
  };

  const handleDelete = () => {
    const updatedStaff = staffData.filter((_, index) => index !== selectedIndex);
    setStaffData(updatedStaff);
    setDeleteShow(false);
    setSelectedStaff(null);
    setSelectedIndex(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "hrms-badge-success";
      case "Inactive":
        return "hrms-badge-error";
      default:
        return "hrms-badge-neutral";
    }
  };

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search staff..."
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
          onClick={handleCreateStaff}
          style={{ height: "40px" }}
        >
          <Add />
          Add Staff
        </button>
      </Box>

      {/* Staff Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
          <TableHead>
            <TableRow>
              <TableCell>S. No.</TableCell>
              <TableCell>Staff</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Branch</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Joining Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStaff
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((staff, index) => (
                <TableRow key={staff.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {staff.fullName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {staff.employeeId}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="body2">{staff.email}</Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {staff.phone}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{staff.department}</TableCell>
                  <TableCell>{staff.position}</TableCell>
                  <TableCell>{staff.branch}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(staff.status)}`}>
                      {staff.status}
                    </Box>
                  </TableCell>
                  <TableCell>{staff.joinDate}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleViewStaff(staff.id)}
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleEditStaff(staff.id)}
                        sx={{ color: "#000", fontSize: "16px" }}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => { 
                          setSelectedStaff(staff); 
                          setSelectedIndex(page * rowsPerPage + index);
                          setDeleteShow(true); 
                        }}
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
            Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredStaff.length)} of {filteredStaff.length} staff
          </Typography>
          <Pagination
            count={Math.ceil(filteredStaff.length / rowsPerPage)}
            page={page + 1}
            onChange={(_, newPage) => setPage(newPage - 1)}
            color="primary"
            size="small"
          />
        </Stack>
      </Box>
      </Box>

      {/* Delete Confirmation Dialog */}
      <CommonDialog
        open={deleteShow}
        onClose={() => {
          setDeleteShow(false);
          setSelectedStaff(null);
          setSelectedIndex(null);
        }}
        dialogTitle="Delete Staff"
        dialogContent={
          <Box sx={{ padding: "1rem 0" }}>
            <Typography variant="body1" sx={{ mb: 2, color: "#374151", fontSize: "0.95rem" }}>
              Are you sure you want to delete the staff member{" "}
              <Typography component="span" sx={{ fontWeight: 600, color: "#1f2937" }}>
                {selectedStaff?.name}
              </Typography>
              ?
            </Typography>
          </Box>
        }
        primaryAction={true}
        primaryActionText="Delete"
        primaryActionColor="error"
        onPrimaryAction={handleDelete}
        secondaryActionText="Cancel"
        maxWidth="xs"
        fullWidth={false}
      />
    </Box>
  );
};

export default StaffPage;
