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
import Create from "../../../components/Recruitment/offer-letter/Create";
import Edit from "../../../components/Recruitment/offer-letter/Edit";
import View from "../../../components/Recruitment/offer-letter/View";
import Delete from "../../../components/Recruitment/offer-letter/Delete";
import CommonDialog from "../../../components/commonDialog";

const OfferLetterPage = () => {
  const [offerLetters, setOfferLetters] = useState([
    {
      id: "OL001",
      candidateName: "John Doe",
      jobTitle: "Frontend Developer",
      department: "IT",
      branch: "Head Office",
      salary: "₹6,00,000",
      startDate: "2024-02-01",
      status: "Sent",
      sentDate: "2024-01-20",
      responseDate: "2024-01-25",
      response: "Accepted"
    },
    {
      id: "OL002",
      candidateName: "Jane Smith",
      jobTitle: "Marketing Specialist",
      department: "Marketing",
      branch: "Delhi Branch",
      salary: "₹5,50,000",
      startDate: "2024-02-15",
      status: "Accepted",
      sentDate: "2024-01-25",
      responseDate: "2024-01-30",
      response: "Accepted"
    },
    {
      id: "OL003",
      candidateName: "Mike Johnson",
      jobTitle: "Sales Executive",
      department: "Sales",
      branch: "Bangalore Branch",
      salary: "₹4,80,000",
      startDate: "2024-03-01",
      status: "Draft",
      sentDate: "",
      responseDate: "",
      response: "Pending"
    },
    {
      id: "OL004",
      candidateName: "Sarah Wilson",
      jobTitle: "HR Coordinator",
      department: "HR",
      branch: "Chennai Branch",
      salary: "₹4,50,000",
      startDate: "2024-03-15",
      status: "Sent",
      sentDate: "2024-03-01",
      responseDate: "2024-03-05",
      response: "Accepted"
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDepartment, setFilterDepartment] = useState("all");

  // Dialog States
  const [openData, setOpenData] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // Form States
  const [formData, setFormData] = useState({
    candidateName: "",
    jobTitle: "",
    department: "",
    branch: "",
    salary: "",
    startDate: "",
    status: "Draft",
    sentDate: "",
    responseDate: "",
    response: "Pending",
    benefits: "",
    notes: ""
  });

  const handleClose = () => {
    setOpenData(false);
    setOpenView(false);
    setOpenEdit(false);
    setOpenDelete(false);
    setSelectedData(null);
    setFormData({ 
      candidateName: "", 
      jobTitle: "", 
      department: "", 
      branch: "",
      salary: "", 
      startDate: "", 
      status: "Draft",
      response: "Pending",
      notes: "",
      benefits: "",
      sentDate: "",
      responseDate: ""
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCreate = () => {
    setOpenData(true);
  };

  const handleView = (offer) => {
    setSelectedData(offer);
    setOpenView(true);
  };

  const handleEdit = (offer) => {
    setSelectedData(offer);
    setFormData({
      candidateName: offer.candidateName,
      jobTitle: offer.jobTitle,
      department: offer.department,
      branch: offer.branch,
      salary: offer.salary,
      startDate: offer.startDate,
      status: offer.status,
      sentDate: offer.sentDate || "",
      responseDate: offer.responseDate || "",
      response: offer.response || "Pending",
      benefits: offer.benefits || "",
      notes: offer.notes || ""
    });
    setOpenEdit(true);
  };

  const handleDelete = (offer) => {
    setSelectedData(offer);
    setOpenDelete(true);
  };

  const handleSubmit = () => {
    if (openData) {
      // Create new offer letter
      const newOffer = {
        id: `OL${String(offerLetters.length + 1).padStart(3, '0')}`,
        ...formData,
        sentDate: formData.status === "Sent" ? new Date().toISOString().split('T')[0] : "",
        responseDate: ""
      };
      setOfferLetters([...offerLetters, newOffer]);
    } else if (openEdit) {
      // Update existing offer letter
      setOfferLetters(offerLetters.map(offer => 
        offer.id === selectedData.id 
          ? { ...offer, ...formData }
          : offer
      ));
    }
    handleClose();
  };

  const handleDeleteConfirm = () => {
    setOfferLetters(offerLetters.filter(offer => offer.id !== selectedData.id));
    handleClose();
  };

  const handleDownloadOffer = (offer) => {
    // Create a simple PDF content for the offer letter
    const offerContent = `
      OFFER LETTER
      
      Date: ${new Date().toLocaleDateString()}
      Offer Letter ID: ${offer.id}
      
      Dear ${offer.candidateName},
      
      We are pleased to offer you the position of ${offer.jobTitle} in our ${offer.department} department at ${offer.branch}.
      
      Position Details:
      - Job Title: ${offer.jobTitle}
      - Department: ${offer.department}
      - Branch: ${offer.branch}
      - Start Date: ${offer.startDate}
      - Salary: ${offer.salary}
      - Status: ${offer.status}
      
      Please respond to this offer by ${offer.responseDate || 'TBD'}.
      
      We look forward to welcoming you to our team.
      
      Best regards,
      HR Team
    `;
    
    // Create and download the file
    const blob = new Blob([offerContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Offer_Letter_${offer.candidateName.replace(/\s+/g, '_')}_${offer.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted': return 'hrms-badge-success';
      case 'Sent': return 'hrms-badge-warning';
      case 'Draft': return 'hrms-badge-info';
      case 'Rejected': return 'hrms-badge-error';
      case 'Expired': return 'hrms-badge-neutral';
      default: return 'hrms-badge-neutral';
    }
  };

  const filteredOffers = offerLetters.filter(offer => {
    const matchesSearch = offer.candidateName.toLowerCase().includes(search.toLowerCase()) ||
                         offer.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
                         offer.department.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || offer.status === filterStatus;
    const matchesDepartment = filterDepartment === "all" || offer.department === filterDepartment;
    
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  return (
    <Box sx={{ padding: "0.5rem" }}>
    
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginBottom: "1rem", gap: "1rem" }}>
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <TextField
            placeholder="Search offer letters..."
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
       
        </Box>
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
         
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleCreate}
            sx={{ height: "40px", textTransform: "none" }}
          >
            Create Offer Letter
          </Button>
        </Box>
      </Box>

      {/* Offer Letters Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No</TableCell>
                <TableCell>Candidate</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Branch</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Response</TableCell>
                <TableCell>Download</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOffers.map((offer) => (
                <TableRow key={offer.id} hover>
                  <TableCell>{filteredOffers.indexOf(offer) + 1}</TableCell>
                  <TableCell>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {offer.candidateName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {offer.sentDate ? `Sent: ${offer.sentDate}` : "Not sent"}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{offer.jobTitle}</TableCell>
                  <TableCell>{offer.department}</TableCell>
                  <TableCell>{offer.branch}</TableCell>
                  <TableCell>{offer.salary}</TableCell>
                  <TableCell>{offer.startDate}</TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${getStatusColor(offer.status)}`}>
                      {offer.status}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={`hrms-badge ${
                      offer.response === 'Accepted' ? 'hrms-badge-success' : 
                      offer.response === 'Rejected' ? 'hrms-badge-error' : 'hrms-badge-neutral'
                    }`}>
                      {offer.response}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <IconButton 
                      size="small"
                      onClick={() => handleDownloadOffer(offer)}
                      sx={{ color: "#10b981", fontSize: "16px" }}
                      title="Download Offer Letter"
                    >
                      <Download />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      <IconButton 
                        size="small"
                        onClick={() => handleView(offer)}
                        sx={{ color: "#1976D2", fontSize: "16px" }}
                      >
                        <VisibilityOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleEdit(offer)}
                        sx={{ color: "#000", fontSize: "16px" }}
                      >
                        <EditOutlined />
                      </IconButton>
                      <IconButton 
                        size="small"
                        onClick={() => handleDelete(offer)}
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
        
        {/* Pagination */}
        <Box sx={{ padding: "1rem", borderTop: "1px solid #e5e7eb" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: "#6b7280" }}>
              Showing {filteredOffers.length} of {offerLetters.length} offer letters
            </Typography>
            <Pagination
              count={Math.ceil(filteredOffers.length / rowsPerPage)}
              page={page + 1}
              onChange={(event, value) => setPage(value - 1)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Common Dialog */}
      <CommonDialog
        open={openData || openEdit || openView || openDelete}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Create Offer Letter"
            : openEdit
            ? "Edit Offer Letter"
            : openView
            ? "Offer Letter Details"
            : openDelete
            ? "Delete Offer Letter"
            : ""
        }
        dialogContent={
          openData ? (
            <Create 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleCreate={handleSubmit}
              handleClose={handleClose}
            />
          ) : openEdit ? (
            <Edit 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleUpdate={handleSubmit}
              handleClose={handleClose}
            />
          ) : openView ? (
            selectedData && (
              <View selectedData={selectedData} getStatusColor={getStatusColor} />
            )
          ) : openDelete ? (
            selectedData && (
              <Delete 
                selectedData={selectedData}
                handleDelete={handleDeleteConfirm}
                handleClose={handleClose}
              />
            )
          ) : null
        }
        maxWidth={openDelete ? "xs" : "md"}
        fullWidth={!openDelete}
      />
    </Box>
  );
};

export default OfferLetterPage;