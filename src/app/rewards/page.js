"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
  Avatar,
  Pagination,
  Stack,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Divider
} from "@mui/material";
import {
  Add,
  Search,
  EditOutlined,
  DeleteOutline,
  VisibilityOutlined,
  Person,
  EmojiEvents,
  AttachMoney,
  CalendarToday,
  Description
} from "@mui/icons-material";
import Create from "../../components/Rewards/Create";
import EditComponent from "../../components/Rewards/Edit";
import View from "../../components/Rewards/View";
import DeleteComponent from "../../components/Rewards/Delete";
import CommonDialog from "../../components/commonDialog";

export default function Rewards() {
  const [search, setSearch] = useState("");
  const [openData, setOpenData] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [selectedData, setSelectedData] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    department: "",
    position: "",
    rewardCategory: "",
    rewardAmount: "",
    rewardDate: "",
    performancePeriod: "",
    achievement: "",
    awardedBy: "",
    approvalStatus: "Pending",
    description: "",
    points: ""
  });

  const createData = (
    employeeName,
    employeeId,
    department,
    position,
    rewardCategory,
    rewardAmount,
    rewardDate,
    performancePeriod,
    achievement,
    awardedBy,
    approvalStatus,
    description,
    points
  ) => ({
    employeeName,
    employeeId,
    department,
    position,
    rewardCategory,
    rewardAmount,
    rewardDate,
    performancePeriod,
    achievement,
    awardedBy,
    approvalStatus,
    description,
    points
  });

  const rewardsData = [
    createData(
      "Rajesh Kumar",
      "EMP001",
      "Engineering",
      "Senior Developer",
      "Performance Bonus",
      "₹25,000",
      "2024-01-15",
      "Q4 2023",
      "Exceeded project delivery targets by 20%",
      "Tech Lead",
      "Approved",
      "Outstanding performance in Q4, delivered 3 major features ahead of schedule",
      "500"
    ),
    createData(
      "Priya Sharma",
      "EMP002",
      "HR",
      "HR Executive",
      "Employee of the Month",
      "Gift Voucher ₹5,000",
      "2024-01-20",
      "January 2024",
      "Improved employee satisfaction scores by 15%",
      "HR Manager",
      "Approved",
      "Excellent work in organizing team building activities and improving employee engagement",
      "200"
    ),
    createData(
      "Amit Singh",
      "EMP003",
      "Sales",
      "Sales Manager",
      "Sales Achievement",
      "₹50,000",
      "2024-01-25",
      "Q4 2023",
      "Achieved 150% of quarterly sales target",
      "Sales Director",
      "Approved",
      "Exceptional sales performance, closed 5 major deals worth ₹2M",
      "1000"
    ),
    createData(
      "Sneha Patel",
      "EMP004",
      "Finance",
      "Accountant",
      "Innovation Award",
      "Certificate + Gift",
      "2024-01-30",
      "Q4 2023",
      "Implemented automated expense tracking system",
      "Finance Manager",
      "Approved",
      "Innovative solution that reduced manual work by 40%",
      "150"
    ),
    createData(
      "Vikram Joshi",
      "EMP005",
      "Operations",
      "Operations Head",
      "Leadership Excellence",
      "₹75,000",
      "2024-02-01",
      "Annual 2023",
      "Led successful digital transformation initiative",
      "CEO",
      "Approved",
      "Outstanding leadership in driving operational efficiency improvements",
      "1500"
    ),
    createData(
      "Anita Desai",
      "EMP006",
      "Marketing",
      "Marketing Specialist",
      "Team Player",
      "Team Lunch + Recognition",
      "2024-02-05",
      "January 2024",
      "Collaborated effectively across 3 departments",
      "Marketing Manager",
      "Approved",
      "Great team player, always willing to help colleagues",
      "100"
    )
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Performance Bonus": return "primary";
      case "Employee of the Month": return "secondary";
      case "Sales Achievement": return "success";
      case "Innovation Award": return "warning";
      case "Leadership Excellence": return "error";
      case "Team Player": return "info";
      default: return "default";
    }
  };

  const filteredRequests = rewardsData.filter(request =>
    request.employeeName.toLowerCase().includes(search.toLowerCase()) ||
    request.employeeId.toLowerCase().includes(search.toLowerCase()) ||
    request.department.toLowerCase().includes(search.toLowerCase()) ||
    request.position.toLowerCase().includes(search.toLowerCase()) ||
    request.rewardCategory.toLowerCase().includes(search.toLowerCase()) ||
    request.achievement.toLowerCase().includes(search.toLowerCase())
  );


  const getStatusColor = (status) => {
    switch (status) {
      case "Approved": return "success";
      case "Pending": return "warning";
      case "Rejected": return "error";
      default: return "default";
    }
  };





  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Reward data submitted:", formData);
    setOpenData(false);
    setFormData({
      employeeName: "",
      employeeId: "",
      department: "",
      position: "",
      rewardCategory: "",
      rewardAmount: "",
      rewardDate: "",
      performancePeriod: "",
      achievement: "",
      awardedBy: "",
      approvalStatus: "Pending",
      description: "",
      points: ""
    });
  };

  const handleView = (data) => {
    setSelectedData(data);
    setOpenView(true);
  };

  const handleEdit = (data) => {
    setSelectedData(data);
    setFormData(data);
    setOpenEdit(true);
  };

  const handleDelete = (data) => {
    setSelectedData(data);
    setOpenDelete(true);
  };


  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Action Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "1.5rem", gap: 2 }}>
        <TextField
          placeholder="Search by employee name, ID, department, reward type..."
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
          Add Reward
        </Button>
      </Box>

      {/* Table */}
      <Box className="hrms-card">
        <TableContainer>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Amount/Value</TableCell>
                <TableCell>Performance Period</TableCell>
                <TableCell>Achievement</TableCell>
                <TableCell>Approval Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {filteredRequests
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => (
                <TableRow key={index} hover>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar sx={{ width: 32, height: 32, backgroundColor: "#f59e0b" }}>
                        <EmojiEvents sx={{ fontSize: 18 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {data.employeeName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#6b7280" }}>
                          {data.employeeId} • {data.department}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={data.rewardCategory}
                      size="small"
                      color={getCategoryColor(data.rewardCategory)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: "#059669" }}>
                      {data.rewardAmount}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {data.performancePeriod}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {data.achievement}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={data.approvalStatus}
                      size="small"
                      color={getStatusColor(data.approvalStatus)}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        size="small"
                        onClick={() => handleView(data)}
                        sx={{ color: "#3b82f6" }}
                      >
                        <VisibilityOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleEdit(data)}
                        sx={{ color: "#374151" }}
                      >
                        <EditOutlined fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => handleDelete(data)}
                        sx={{ color: "#dc2626" }}
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
        <Box sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "1rem",
          borderTop: "1px solid #e5e7eb"
        }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredRequests.length)} of {filteredRequests.length} records
            </Typography>
          </Stack>
          <Pagination
            count={Math.ceil(filteredRequests.length / rowsPerPage)}
            page={page + 1}
            onChange={(_, newPage) => setPage(newPage - 1)}
            color="primary"
            shape="rounded"
            size="small"
          />
        </Box>
      </Box>

    

      {/* Common Dialog */}
      <CommonDialog
        open={openData || openEdit || openView || openDelete}
        onClose={() => {
          setOpenData(false);
          setOpenEdit(false);
          setOpenView(false);
          setOpenDelete(false);
        }}
        dialogTitle={
          openData
            ? "Add New Reward"
            : openEdit
            ? "Edit Reward Details"
            : openView
            ? "Reward Details"
            : openDelete
            ? "Confirm Delete"
            : ""
        }
        dialogContent={
          openData ? (
            <Create formData={formData} handleInputChange={handleInputChange} handleCreate={handleSubmit} handleClose={() => setOpenData(false)} />
          ) : openEdit ? (
            <EditComponent formData={formData} handleInputChange={handleInputChange} handleUpdate={handleSubmit} handleClose={() => setOpenEdit(false)} />
          ) : openView ? (
            selectedData && (
              <View selectedData={selectedData} getCategoryColor={getCategoryColor} getStatusColor={getStatusColor} />
            )
          ) : openDelete ? (
            <DeleteComponent selectedData={selectedData} handleDelete={handleSubmit} handleClose={() => setOpenDelete(false)} />
          ) : null
        }
        maxWidth={openDelete ? "xs" : "md"}
        fullWidth={!openDelete}
      />
    </Box>
  );
}
