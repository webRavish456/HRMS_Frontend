"use client";
import { useState } from "react";
import {
  Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TextField, IconButton, 
  FormControl, InputLabel, Select, MenuItem, Grid, InputAdornment, Pagination, Stack
} from "@mui/material";
import { EditOutlined, DeleteOutlined, VisibilityOutlined, Add, Search, FilterList, Download, Reply } from "@mui/icons-material";
import CommonDialog from "@/components/commonDialog";
import CreateTicket from "@/components/Ticket/allTickets/create";
import EditTicket from "@/components/Ticket/allTickets/edit";
import ViewTicket from "@/components/Ticket/allTickets/view";
import DeleteTicket from "@/components/Ticket/allTickets/delete";
import ReplyTicket from "@/components/Ticket/allTickets/reply";

export default function AllTickets() {
  const [tickets, setTickets] = useState([
    { 
      id: "TKT001", 
      code: "TCK101", 
      title: "Login Issue", 
      description: "Unable to login to the HRMS system",
      employee: "John Doe", 
      priority: "High", 
      endDate: "2025-09-05", 
      status: "Open",
      category: "Technical",
      assignedTo: "IT Support",
      createdDate: "2024-01-20"
    },
    { 
      id: "TKT002", 
      code: "TCK102", 
      title: "Payroll Bug", 
      description: "Payroll calculation error in salary processing",
      employee: "Jane Smith", 
      priority: "Medium", 
      endDate: "2025-09-10", 
      status: "In Progress",
      category: "Payroll",
      assignedTo: "HR Support",
      createdDate: "2024-01-22"
    },
    { 
      id: "TKT003", 
      code: "TCK103", 
      title: "Signup Issue", 
      description: "New employee registration not working",
      employee: "Lee William", 
      priority: "High", 
      endDate: "2025-09-15", 
      status: "Open",
      category: "Technical",
      assignedTo: "IT Support",
      createdDate: "2024-01-25"
    },
    { 
      id: "TKT004", 
      code: "TCK104", 
      title: "Dashboard Bug", 
      description: "Dashboard not loading properly",
      employee: "Joseph Daw", 
      priority: "Medium", 
      endDate: "2025-09-20", 
      status: "In Progress",
      category: "Technical",
      assignedTo: "IT Support",
      createdDate: "2024-01-28"
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [replyShow, setReplyShow] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Form data for create/edit
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    employee: "",
    priority: "Medium",
    endDate: "",
    category: "Technical"
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Open dialogs
  const handleOpenAdd = () => setOpenData(true);
  const handleClose = () => { 
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setReplyShow(false);
    setSelectedIndex(null);
    setFormData({
      title: "",
      description: "",
      employee: "",
      priority: "Medium",
      endDate: "",
      category: "Technical"
    });
  };

  const handleView = (ticket) => { setSelectedTicket(ticket); setViewShow(true); };
  const handleEdit = (ticket, index) => { 
    setSelectedTicket(ticket); 
    setSelectedIndex(index); 
    setFormData({
      title: ticket.title || "",
      description: ticket.description || "",
      employee: ticket.employee || "",
      priority: ticket.priority || "Medium",
      endDate: ticket.endDate || "",
      category: ticket.category || "Technical"
    });
    setEditShow(true); 
  };
  const handleDelete = (index) => { setSelectedIndex(index); setDeleteShow(true); };
  const handleReply = (ticket, index) => { setSelectedTicket(ticket); setSelectedIndex(index); setReplyShow(true); };

  // Helper functions
  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'hrms-badge-success';
      case 'In Progress': return 'hrms-badge-warning';
      case 'Open': return 'hrms-badge-error';
      case 'Closed': return 'hrms-badge-neutral';
      default: return 'hrms-badge-neutral';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'hrms-badge-error';
      case 'Medium': return 'hrms-badge-warning';
      case 'Low': return 'hrms-badge-success';
      default: return 'hrms-badge-neutral';
    }
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.title.toLowerCase().includes(search.toLowerCase()) ||
                         ticket.employee.toLowerCase().includes(search.toLowerCase()) ||
                         ticket.code.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || ticket.status === filterStatus;
    const matchesPriority = filterPriority === "all" || ticket.priority === filterPriority;
    const matchesCategory = filterCategory === "all" || ticket.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  // Add new ticket
  const handleAdd = () => {
    const newTicket = {
      ...formData,
      id: `TKT${String(tickets.length + 1).padStart(3, '0')}`,
      code: `TKT${String(tickets.length + 1).padStart(4, '0')}`,
      status: "Open",
      createdDate: new Date().toISOString().split('T')[0],
      assignedTo: "System",
      replies: []
    };
    setTickets([...tickets, newTicket]);
    handleClose();
  };

  // Update ticket
  const handleUpdate = () => {
    const updated = [...tickets];
    updated[selectedIndex] = {
      ...updated[selectedIndex],
      ...formData
    };
    setTickets(updated);
    handleClose();
  };

  // Delete ticket
  const confirmDelete = () => {
    setTickets(tickets.filter((_, i) => i !== selectedIndex));
    handleClose();
  };

  // Add reply to ticket
  const handleAddReply = (replyText, replyType) => {
    if (selectedTicket && selectedIndex !== null) {
      const updated = [...tickets];
      if (!updated[selectedIndex].replies) {
        updated[selectedIndex].replies = [];
      }
      updated[selectedIndex].replies.push({
        id: Date.now(),
        message: replyText,
        author: replyType === "support" ? "Support Team" : selectedTicket.employee,
        timestamp: new Date().toISOString(),
        type: replyType
      });
      
      // Update status based on reply type
      if (replyType === "support" && updated[selectedIndex].status === "Open") {
        updated[selectedIndex].status = "In Progress";
      }
      
      setTickets(updated);
    }
  };

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search tickets..."
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
          onClick={handleOpenAdd}
          style={{ height: "40px" }}
        >
          <Add />
          Create Ticket
        </button>
      </Box>

      {/* Ticket Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Ticket Code</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Employee</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((ticket, index) => (
                  <TableRow key={ticket.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#3b82f6" }}>
                        {ticket.code}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {ticket.title}
                      </Typography>
                    </TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>
                      <Box className={`hrms-badge ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box className={`hrms-badge ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </Box>
                    </TableCell>
                    <TableCell>{ticket.employee}</TableCell>
                    <TableCell>{ticket.assignedTo}</TableCell>
                    <TableCell>{ticket.endDate}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: "0.25rem" }}>
                        <IconButton 
                          size="small"
                          onClick={() => handleView(ticket)}
                          sx={{ color: "#1976D2", fontSize: "16px" }}
                          title="View Ticket"
                        >
                          <VisibilityOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => handleReply(ticket, index)}
                          sx={{ color: "#9c27b0", fontSize: "16px" }}
                          title="Reply to Ticket"
                        >
                          <Reply />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => handleEdit(ticket, index)}
                          sx={{ color: "#000", fontSize: "16px" }}
                          title="Edit Ticket"
                        >
                          <EditOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => handleDelete(index)}
                          sx={{ color: "#d32f2f", fontSize: "16px" }}
                          title="Delete Ticket"
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
              Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredTickets.length)} of {filteredTickets.length} tickets
            </Typography>
            <Pagination
              count={Math.ceil(filteredTickets.length / rowsPerPage)}
              page={page + 1}
              onChange={(event, value) => setPage(value - 1)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Common Dialog */}
      <CommonDialog
        open={openData || viewShow || editShow || deleteShow || replyShow}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Add New Ticket"
            : viewShow
            ? "Ticket Details"
            : editShow
            ? "Edit Ticket"
            : deleteShow
            ? "Delete Ticket"
            : replyShow
            ? "Reply to Ticket"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateTicket 
              formData={formData}
              handleInputChange={handleInputChange}
              handleCreate={handleAdd} 
              handleClose={handleClose} 
            />
          ) : viewShow ? (
            <ViewTicket 
              selectedTicket={selectedTicket} 
              handleClose={handleClose} 
              getStatusColor={getStatusColor}
              getPriorityColor={getPriorityColor}
            />
          ) : editShow ? (
            <EditTicket 
              formData={formData}
              handleInputChange={handleInputChange}
              handleUpdate={handleUpdate} 
              handleClose={handleClose} 
              selectedTicket={selectedTicket}
            />
          ) : deleteShow ? (
            <DeleteTicket 
              selectedTicket={selectedTicket}
              handleDelete={confirmDelete}
              handleClose={handleClose}
            />
          ) : replyShow ? (
            <ReplyTicket 
              selectedTicket={selectedTicket}
              onAddReply={handleAddReply}
              onClose={handleClose}
            />
          ) : null
        }
        maxWidth={deleteShow ? "xs" : replyShow ? "md" : "md"}
      />
    </Box>
  );
}




























// "use client";
// import { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle,
//   TextField, IconButton, Typography
// } from "@mui/material";
// import { Edit, Delete, Visibility } from "@mui/icons-material";

// export default function AllTickets() {
//   const [tickets, setTickets] = useState([
//     { code: "TCK101", title: "Login Issue", employee: "John Doe", priority: "High", endDate: "2025-09-05", status: "Open" },
//     { code: "TCK102", title: "Payroll Bug", employee: "Jane Smith", priority: "Medium", endDate: "2025-09-10", status: "In Progress" },
//     { code: "TCK103", title: "Signup Issue", employee: "Lee William", priority: "High", endDate: "2025-09-15", status: "Open" },
//     { code: "TCK104", title: "Dashboard Bug", employee: "Joseph Daw", priority: "Medium", endDate: "2025-09-20", status: "In Progress" }
//   ]);

//   const [openAdd, setOpenAdd] = useState(false);
//   const [openView, setOpenView] = useState(false);
//   const [openEdit, setOpenEdit] = useState(false);
//   const [openDelete, setOpenDelete] = useState(false);

//   const [form, setForm] = useState({ code: "", title: "", employee: "", priority: "", endDate: "", status: "" });
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   // Open dialogs
//   const handleOpenAdd = () => setOpenAdd(true);
//   const handleCloseAdd = () => { resetForm(); setOpenAdd(false); };

//   const handleView = (ticket) => { setForm(ticket); setOpenView(true); };
//   const handleCloseView = () => setOpenView(false);

//   const handleEdit = (ticket, index) => { setForm(ticket); setSelectedIndex(index); setOpenEdit(true); };
//   const handleCloseEdit = () => { resetForm(); setOpenEdit(false); };

//   const handleDelete = (index) => { setSelectedIndex(index); setOpenDelete(true); };
//   const handleCloseDelete = () => { setSelectedIndex(null); setOpenDelete(false); };

//   // Reset form
//   const resetForm = () => setForm({ code: "", title: "", employee: "", priority: "", endDate: "", status: "" });

//   // Add new ticket
//   const handleAdd = () => {
//     setTickets([...tickets, form]);
//     handleCloseAdd();
//   };

//   // Update ticket
//   const handleUpdate = () => {
//     const updated = [...tickets];
//     updated[selectedIndex] = form;
//     setTickets(updated);
//     handleCloseEdit();
//   };

//   // Delete ticket
//   const confirmDelete = () => {
//     setTickets(tickets.filter((_, i) => i !== selectedIndex));
//     handleCloseDelete();
//   };

//   return (
//     <div style={{ padding: "7px" }}>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleOpenAdd}
//         style={{ float: "right", marginBottom: "10px" }}
//       >
//         Add Ticket
//       </Button>

//       <TableContainer component={Paper} sx={{height:"70vh"}}>
//         <Table>
//           <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
//             <TableRow>
//               <TableCell>Ticket Code</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Employee</TableCell>
//               <TableCell>Priority</TableCell>
//               <TableCell>End Date</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tickets.map((ticket, index) => (
//               <TableRow key={index}>
//                 <TableCell>{ticket.code}</TableCell>
//                 <TableCell>{ticket.title}</TableCell>
//                 <TableCell>{ticket.employee}</TableCell>
//                 <TableCell>{ticket.priority}</TableCell>
//                 <TableCell>{ticket.endDate}</TableCell>
//                 <TableCell>{ticket.status}</TableCell>
//                 <TableCell>
//                   <IconButton color="info" onClick={() => handleView(ticket)}><Visibility /></IconButton>
//                   <IconButton color="primary" onClick={() => handleEdit(ticket, index)}><Edit /></IconButton>
//                   <IconButton color="error" onClick={() => handleDelete(index)}><Delete /></IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Ticket Dialog */}
//       <Dialog open={openAdd} onClose={handleCloseAdd}>
//         <DialogTitle>Add New Ticket</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Ticket Code" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
//           <TextField label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
//           <TextField label="Employee" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} />
//           <TextField label="Priority" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} />
//           <TextField type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
//           <TextField label="Status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseAdd}>Cancel</Button>
//           <Button onClick={handleAdd} variant="contained" color="primary">Add</Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Ticket Dialog */}
//       <Dialog open={openView} onClose={handleCloseView}>
//         <DialogTitle>Ticket Details</DialogTitle>
//         <DialogContent>
//           {Object.entries(form).map(([key, value]) => (
//             <Typography key={key} sx={{ mb: 1 }}>
//               <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
//             </Typography>
//           ))}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseView}>Close</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Edit Ticket Dialog */}
//       <Dialog open={openEdit} onClose={handleCloseEdit}>
//         <DialogTitle>Edit Ticket</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Ticket Code" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
//           <TextField label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
//           <TextField label="Employee" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} />
//           <TextField label="Priority" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} />
//           <TextField type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
//           <TextField label="Status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseEdit}>Cancel</Button>
//           <Button onClick={handleUpdate} variant="contained" color="primary">Update</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Delete Confirm Dialog */}
//       <Dialog open={openDelete} onClose={handleCloseDelete}>
//         <DialogTitle>Delete Ticket</DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to delete this ticket?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDelete}>Cancel</Button>
//           <Button onClick={confirmDelete} color="error" variant="contained">Delete</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }



















// "use client";
// import { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle,
//   TextField, IconButton
// } from "@mui/material";
// import { Edit, Delete } from "@mui/icons-material";

// export default function AllTickets() {
//   const [tickets, setTickets] = useState([
//     { code: "TCK101", title: "Login Issue", employee: "John Doe", priority: "High", endDate: "2025-09-05", status: "Open" },
//     { code: "TCK102", title: "Payroll Bug", employee: "Jane Smith", priority: "Medium", endDate: "2025-09-10", status: "In Progress" },
//   ]);

//   const [open, setOpen] = useState(false);
//   const [form, setForm] = useState({ code: "", title: "", employee: "", priority: "", endDate: "", status: "" });

//   // Handle dialog open/close
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setForm({ code: "", title: "", employee: "", priority: "", endDate: "", status: "" });
//     setOpen(false);
//   };

//   // Add new ticket
//   const handleAdd = () => {
//     setTickets([...tickets, form]);
//     handleClose();
//   };

//   // Delete ticket
//   const handleDelete = (index) => {
//     setTickets(tickets.filter((_, i) => i !== index));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <Button variant="contained" color="primary" onClick={handleOpen} style={{ float: "right", marginBottom: "10px" }}>
//         Add Ticket
//       </Button>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
//             <TableRow>
//               <TableCell>Ticket Code</TableCell>
//               <TableCell>Title</TableCell>
//               <TableCell>Employee</TableCell>
//               <TableCell>Priority</TableCell>
//               <TableCell>End Date</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tickets.map((ticket, index) => (
//               <TableRow key={index}>
//                 <TableCell>{ticket.code}</TableCell>
//                 <TableCell>{ticket.title}</TableCell>
//                 <TableCell>{ticket.employee}</TableCell>
//                 <TableCell>{ticket.priority}</TableCell>
//                 <TableCell>{ticket.endDate}</TableCell>
//                 <TableCell>{ticket.status}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary"><Edit /></IconButton>
//                   <IconButton color="error" onClick={() => handleDelete(index)}><Delete /></IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Ticket Dialog */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Add New Ticket</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           <TextField label="Ticket Code" fullWidth value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
//           <TextField label="Title" fullWidth value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
//           <TextField label="Employee" fullWidth value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} />
//           <TextField label="Priority" fullWidth value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} />
//           <TextField type="date" fullWidth value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
//           <TextField label="Status" fullWidth value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleAdd} variant="contained" color="primary">Add</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }




















// export default function Ticket(){
//     return(
//         <>
//             <h1>Ticket Management</h1>
//         </>
//     )
// }