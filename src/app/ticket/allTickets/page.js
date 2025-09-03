"use client";
import { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, IconButton, Typography
} from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";

export default function AllTickets() {
  const [tickets, setTickets] = useState([
    { code: "TCK101", title: "Login Issue", employee: "John Doe", priority: "High", endDate: "2025-09-05", status: "Open" },
    { code: "TCK102", title: "Payroll Bug", employee: "Jane Smith", priority: "Medium", endDate: "2025-09-10", status: "In Progress" },
    { code: "TCK103", title: "Signup Issue", employee: "Lee William", priority: "High", endDate: "2025-09-15", status: "Open" },
    { code: "TCK104", title: "Dashboard Bug", employee: "Joseph Daw", priority: "Medium", endDate: "2025-09-20", status: "In Progress" }
  ]);

  const [openAdd, setOpenAdd] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [form, setForm] = useState({ code: "", title: "", employee: "", priority: "", endDate: "", status: "" });
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Open dialogs
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => { resetForm(); setOpenAdd(false); };

  const handleView = (ticket) => { setForm(ticket); setOpenView(true); };
  const handleCloseView = () => setOpenView(false);

  const handleEdit = (ticket, index) => { setForm(ticket); setSelectedIndex(index); setOpenEdit(true); };
  const handleCloseEdit = () => { resetForm(); setOpenEdit(false); };

  const handleDelete = (index) => { setSelectedIndex(index); setOpenDelete(true); };
  const handleCloseDelete = () => { setSelectedIndex(null); setOpenDelete(false); };

  // Reset form
  const resetForm = () => setForm({ code: "", title: "", employee: "", priority: "", endDate: "", status: "" });

  // Add new ticket
  const handleAdd = () => {
    setTickets([...tickets, form]);
    handleCloseAdd();
  };

  // Update ticket
  const handleUpdate = () => {
    const updated = [...tickets];
    updated[selectedIndex] = form;
    setTickets(updated);
    handleCloseEdit();
  };

  // Delete ticket
  const confirmDelete = () => {
    setTickets(tickets.filter((_, i) => i !== selectedIndex));
    handleCloseDelete();
  };

  return (
    <div style={{ padding: "7px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenAdd}
        style={{ float: "right", marginBottom: "10px" }}
      >
        Add Ticket
      </Button>

      <TableContainer component={Paper} sx={{height:"348px"}}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Ticket Code</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Employee</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket, index) => (
              <TableRow key={index}>
                <TableCell>{ticket.code}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.employee}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>{ticket.endDate}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>
                  <IconButton color="info" onClick={() => handleView(ticket)}><Visibility /></IconButton>
                  <IconButton color="primary" onClick={() => handleEdit(ticket, index)}><Edit /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(index)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Ticket Dialog */}
      <Dialog open={openAdd} onClose={handleCloseAdd} fullWidth maxWidth="md">
        <DialogTitle>Add New Ticket</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Ticket Code" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} fullWidth />
          <TextField label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} fullWidth />
          <TextField label="Employee" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} fullWidth />
          <TextField label="Priority" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} fullWidth />
          <TextField type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} fullWidth />
          <TextField label="Status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd}>Cancel</Button>
          <Button onClick={handleAdd} variant="contained" color="primary">Add</Button>
        </DialogActions>
      </Dialog>

      {/* View Ticket Dialog */}
      <Dialog open={openView} onClose={handleCloseView} fullWidth maxWidth="sm">
        <DialogTitle>Ticket Details</DialogTitle>
        <DialogContent dividers>
          {Object.entries(form).map(([key, value]) => (
            <Typography key={key} sx={{ mb: 1 }}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseView}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Ticket Dialog */}
      <Dialog open={openEdit} onClose={handleCloseEdit} fullWidth maxWidth="md">
        <DialogTitle>Edit Ticket</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Ticket Code" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} fullWidth />
          <TextField label="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} fullWidth />
          <TextField label="Employee" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} fullWidth />
          <TextField label="Priority" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })} fullWidth />
          <TextField type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} fullWidth />
          <TextField label="Status" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleUpdate} variant="contained" color="primary">Update</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirm Dialog */}
      <Dialog open={openDelete} onClose={handleCloseDelete} fullWidth maxWidth="xs">
        <DialogTitle>Delete Ticket</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this ticket?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
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