"use client";
import * as React from "react";
import {
  Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton,
  Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, Typography
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

export default function AttendanceRequest() {
  const [rows, setRows] = React.useState([
    { profile: "John Doe", in: "09:00 AM", out: "05:00 PM", type: "WFH", total: "08:00 hrs", status: "Approved" },
    { profile: "Jane Smith", in: "09:30 AM", out: "06:00 PM", type: "Leave", total: "07:30 hrs", status: "Pending" },
    { profile: "Alex Lee Wang", in: "10:00 AM", out: "06:30 PM", type: "WFH", total: "08:30 hrs", status: "Rejected" },
    { profile: "Reyan Doe", in: "09:00 AM", out: "05:00 PM", type: "WFH", total: "08:00 hrs", status: "Rejected" },
    { profile: "Harry Potter", in: "09:30 AM", out: "06:00 PM", type: "Leave", total: "07:30 hrs", status: "Pending" },
    { profile: "Antila Williams", in: "10:00 AM", out: "06:30 PM", type: "WFH", total: "08:30 hrs", status: "Pending" },
    { profile: "Sung Jin Woo", in: "09:00 AM", out: "05:00 PM", type: "WFH", total: "08:00 hrs", status: "Approved" },
    { profile: "Thomas Andre", in: "09:30 AM", out: "06:00 PM", type: "Leave", total: "07:30 hrs", status: "Approved" },
    { profile: "Joseph Rock", in: "10:00 AM", out: "06:30 PM", type: "WFH", total: "08:30 hrs", status: "Rejected" },
  ]);

  const [open, setOpen] = React.useState(false);      
  const [viewOpen, setViewOpen] = React.useState(false); 
  const [deleteOpen, setDeleteOpen] = React.useState(false); 
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [deleteIndex, setDeleteIndex] = React.useState(null);
  
  const [form, setForm] = React.useState({ profile: "", in: "", out: "", type: "", total: "", status: ""});
  const [viewData, setViewData] = React.useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (editingIndex !== null) {
      const updated = [...rows];
      updated[editingIndex] = form;
      setRows(updated);
    } else {
      setRows([...rows, form]);
    }
    setForm({ profile: "", in: "", out: "", type: "", total: "", status: "" });
    setEditingIndex(null);
    setOpen(false);
  };

  const handleView = (row) => { setViewData(row); setViewOpen(true); };
  const handleEdit = (row, index) => { setForm(row); setEditingIndex(index); setOpen(true); };
  
  const handleDelete = (index) => { 
    setDeleteIndex(index); 
    setDeleteOpen(true); 
  };
  const confirmDelete = () => {
    setRows(rows.filter((_, i) => i !== deleteIndex));
    setDeleteIndex(null);
    setDeleteOpen(false);
  };

  return (
    <>
      {/* Add Request Button */}
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Attendance Request
        </Typography>
        <Button
        variant="contained"
        onClick={() => { setOpen(true); setEditingIndex(null); }}
      >
        Add Attendance
      </Button>
      </Stack>

      {/* Table */}
      <TableContainer component={Paper} sx={{ maxWidth: "100%",height:"490px" }}>
        <Table size="small" sx={{ width: "100%" }}>
          <TableHead>
            <TableRow sx={{ background: "#000" }}>
              {["Profile","Punched in","Punched Out","Request Type","Total hours","Status","Actions"].map(h => (
                <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
                {[r.profile, r.in, r.out, r.type, r.total, r.status].map((v, j) => (
                  <TableCell key={j} sx={{ fontSize: 12, p: 1 }}>{v}</TableCell>
                ))}
                <TableCell sx={{ p: 1 }}>
                  <IconButton size="small" color="primary" onClick={() => handleView(r)}>
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="secondary" onClick={() => handleEdit(r, i)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error" onClick={() => handleDelete(i)}>
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add/Edit Dialog */}
      <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        sx={{ "& .MuiDialog-paper": { width: 600, height: 400, maxWidth: 600 } }}
      >
        <DialogTitle>{editingIndex !== null ? "Edit Request" : "Add Request"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, overflowY: "auto" }}>
          {["profile","in","out","type","total","status"].map((field) => (
            <TextField
              key={field}
              name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              size="small"
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleAdd}>
            {editingIndex !== null ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* View Dialog */}
      <Dialog 
        open={viewOpen} 
        onClose={() => setViewOpen(false)}
        sx={{ "& .MuiDialog-paper": { width: 600, height: 400, maxWidth: 600 } }}
      >
        <DialogTitle>View Request</DialogTitle>
        <DialogContent sx={{ overflowY: "auto" }}>
          {viewData && (
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {Object.entries(viewData).map(([k, v]) => (
                <Typography key={k}><b>{k}:</b> {v}</Typography>
              ))}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setViewOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog 
        open={deleteOpen} 
        onClose={() => setDeleteOpen(false)}
        sx={{ "& .MuiDialog-paper": { width: 500, height: 170, maxWidth: 500 } }}
      >
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent sx={{ display: "flex", alignItems: "center",height:"100%" }}>
          <Typography>This action will permanently delete the record.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={confirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}






















// "use client";
// import * as React from "react";
// import {
//   Box,Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, IconButton,
//   Button, Dialog, DialogTitle, DialogContent,
//   DialogActions, TextField, Typography
// } from "@mui/material";
// import { Visibility, Edit, Delete } from "@mui/icons-material";

// export default function AttendanceRequest() {
//   const [rows, setRows] = React.useState([
//     { profile: "John Doe", in: "09:00 AM", out: "05:00 PM", type: "WFH", total: "08:00 hrs", status: "Approved" },
//     { profile: "Jane Smith", in: "09:30 AM", out: "06:00 PM", type: "Leave", total: "07:30 hrs", status: "Pending" },
//     { profile: "Alex Lee", in: "10:00 AM", out: "06:30 PM", type: "WFH", total: "08:30 hrs", status: "Rejected" },
//   ]);

//   const [open, setOpen] = React.useState(false);      
//   const [viewOpen, setViewOpen] = React.useState(false); 
//   const [editingIndex, setEditingIndex] = React.useState(null);
//   const [form, setForm] = React.useState({
//     profile: "", in: "", out: "", type: "", total: "", status: ""
//   });
//   const [viewData, setViewData] = React.useState(null);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAdd = () => {
//     if (editingIndex !== null) {
//       const updated = [...rows];
//       updated[editingIndex] = form;
//       setRows(updated);
//     } else {
//       setRows([...rows, form]);
//     }
//     setForm({ profile: "", in: "", out: "", type: "", total: "", status: "" });
//     setEditingIndex(null);
//     setOpen(false);
//   };

//   const handleView = (row) => { setViewData(row); setViewOpen(true); };
//   const handleEdit = (row, index) => { setForm(row); setEditingIndex(index); setOpen(true); };
//   const handleDelete = (index) => setRows(rows.filter((_, i) => i !== index));

//   return (
//     <>
//       {/* Add Request Button */}
//       <Box display="flex" justifyContent="flex-end" mb={1}>
//       <Button
//         variant="contained"
//         onClick={() => { setOpen(true); setEditingIndex(null); }}
//       >
//         Add Request
//       </Button>
//       </Box>

//       {/* Table */}
//       <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
//         <Table size="small" sx={{ width: "100%" }}>
//           <TableHead>
//             <TableRow sx={{ background: "#000" }}>
//               {["Profile","Punched in","Punched Out","Request Type","Total hours","Status","Actions"].map(h => (
//                 <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((r, i) => (
//               <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
//                 {[r.profile, r.in, r.out, r.type, r.total, r.status].map((v, j) => (
//                   <TableCell key={j} sx={{ fontSize: 12, p: 1 }}>{v}</TableCell>
//                 ))}
//                 <TableCell sx={{ p: 1 }}>
//                   <IconButton size="small" color="primary" onClick={() => handleView(r)}>
//                     <Visibility fontSize="small" />
//                   </IconButton>
//                   <IconButton size="small" color="secondary" onClick={() => handleEdit(r, i)}>
//                     <Edit fontSize="small" />
//                   </IconButton>
//                   <IconButton size="small" color="error" onClick={() => handleDelete(i)}>
//                     <Delete fontSize="small" />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add/Edit Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>{editingIndex !== null ? "Edit Request" : "Add Request"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           {["profile","in","out","type","total","status"].map((field) => (
//             <TextField
//               key={field}
//               name={field}
//               label={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={form[field]}
//               onChange={handleChange}
//               size="small"
//             />
//           ))}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button variant="contained" onClick={handleAdd}>
//             {editingIndex !== null ? "Update" : "Add"}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* View Dialog */}
//       <Dialog open={viewOpen} onClose={() => setViewOpen(false)}>
//         <DialogTitle>View Request</DialogTitle>
//         <DialogContent>
//           {viewData && (
//             <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
//               {Object.entries(viewData).map(([k, v]) => (
//                 <Typography key={k}><b>{k}:</b> {v}</Typography>
//               ))}
//             </div>
//           )}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setViewOpen(false)}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }






























// export default function AttendanceRequest() {
  //   return <h2>Attendance Request Page</h2>;
  // }