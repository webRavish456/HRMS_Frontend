"use client";
import * as React from "react";
import {
  Stack, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton,
  Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, Typography
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

export default function PunchLog() {
  const [rows, setRows] = React.useState([
    { title: "Morning Shift", start: "2025-08-01 09:00 AM", end: "2025-08-01 05:00 PM", desc: "Regular working hours" },
    { title: "Late Entry", start: "2025-08-02 10:00 AM", end: "2025-08-02 06:30 PM", desc: "Traffic delay" },
    { title: "Half Day", start: "2025-08-03 09:00 AM", end: "2025-08-03 01:00 PM", desc: "Personal work" },
    { title: "Overtime", start: "2025-08-04 09:00 AM", end: "2025-08-04 08:00 PM", desc: "Extra workload" },
    { title: "Remote Work", start: "2025-08-05 09:30 AM", end: "2025-08-05 06:00 PM", desc: "Work from home" },
    { title: "Morning Shift", start: "2025-08-01 09:00 AM", end: "2025-08-01 05:00 PM", desc: "Regular working hours" },
    { title: "Overtime", start: "2025-08-04 09:00 AM", end: "2025-08-04 08:00 PM", desc: "Extra workload" },
    { title: "Remote Work", start: "2025-08-05 09:30 AM", end: "2025-08-05 06:00 PM", desc: "Work from home" },
    { title: "Half Day", start: "2025-08-03 09:00 AM", end: "2025-08-03 01:00 PM", desc: "Personal work" },
  ]);

  const [open, setOpen] = React.useState(false);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const [editingIndex, setEditingIndex] = React.useState(null);
  const [deleteIndex, setDeleteIndex] = React.useState(null);

  const [form, setForm] = React.useState({ title: "", start: "", end: "", desc: "" });
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
    setForm({ title: "", start: "", end: "", desc: "" });
    setEditingIndex(null);
    setOpen(false);
  };

  const handleView = (row) => { setViewData(row); setViewOpen(true); };
  const handleEdit = (row, index) => { setForm(row); setEditingIndex(index); setOpen(true); };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      setRows(rows.filter((_, i) => i !== deleteIndex));
    }
    setDeleteIndex(null);
    setDeleteOpen(false);
  };

  return (
    <div style={{ width: "100%", overflowX: "auto" }}>
      {/* Add Entry Button */}
      {/* <Box display="flex" justifyContent="flex-end" mb={1}>
        <Button
          variant="contained"
          onClick={() => { setOpen(true); setEditingIndex(null); }}
        >
          Add Punch Log
        </Button>
      </Box> */}
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          PunchIn/PunchOut
        </Typography>
        <Button
        variant="contained"
        onClick={() => { setOpen(true); setEditingIndex(null); }}
      >
        Add Attendance
      </Button>
      </Stack>

      {/* Table */}
      <TableContainer component={Paper} sx={{ width: "100%",height:"490px" }}>
        <Table size="small" sx={{ width: "100%" }}>
          <TableHead>
            <TableRow sx={{ background: "#000" }}>
              {["Title", "Start date", "End date", "Description", "Actions"].map(h => (
                <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
                {[r.title, r.start, r.end, r.desc].map((v, j) => (
                  <TableCell key={j} sx={{ fontSize: 12, p: 1 }}>{v}</TableCell>
                ))}
                <TableCell sx={{ p: 1 }}>
                  <IconButton size="small" color="primary" onClick={() => handleView(r)}>
                    <Visibility fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="secondary" onClick={() => handleEdit(r, i)}>
                    <Edit fontSize="small" />
                  </IconButton>
                  <IconButton size="small" color="error" onClick={() => handleDeleteClick(i)}>
                    <Delete fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Adding/Editing */}
      <Dialog 
        open={open} 
        onClose={() => setOpen(false)} 
        sx={{ "& .MuiDialog-paper": { width: 600, height: 450, maxWidth: 600 } }}
      >
        <DialogTitle sx={{marginBottom:"20px",color:"red"}}>{editingIndex !== null ? "Edit Punch Log" : "Add Punch Log"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1, overflowY: "auto",marginBottom:"10px" }}>
          {[
            { name: "title", label: "Title" },
            { name: "start", label: "Start date" },
            { name: "end", label: "End date" },
            { name: "desc", label: "Description" }
          ].map((f) => (
            <TextField
              key={f.name}
              name={f.name}
              label={f.label}
              value={form[f.name]}
              onChange={handleChange}
              size="small"
              fullWidth
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

      {/* Dialog for Viewing */}
      <Dialog 
        open={viewOpen} 
        onClose={() => setViewOpen(false)} 
        sx={{ "& .MuiDialog-paper": { width: 500, height: 350, maxWidth: 500 } }}
      >
        <DialogTitle>View Punch Log</DialogTitle>
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
        <DialogContent sx={{ display: "flex",justifyContent: "center", flexGrow: 1 }}>
          <Typography>This action will permanently delete this record.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteOpen(false)}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleConfirmDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
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

// export default function PunchLog() {
//   const [rows, setRows] = React.useState([
//     { title: "Morning Shift", start: "2025-08-01 09:00 AM", end: "2025-08-01 05:00 PM", desc: "Regular working hours" },
//     { title: "Late Entry", start: "2025-08-02 10:00 AM", end: "2025-08-02 06:30 PM", desc: "Traffic delay" },
//     { title: "Half Day", start: "2025-08-03 09:00 AM", end: "2025-08-03 01:00 PM", desc: "Personal work" },
//     { title: "Overtime", start: "2025-08-04 09:00 AM", end: "2025-08-04 08:00 PM", desc: "Extra workload" },
//     { title: "Remote Work", start: "2025-08-05 09:30 AM", end: "2025-08-05 06:00 PM", desc: "Work from home" },
//   ]);

//   const [open, setOpen] = React.useState(false);
//   const [viewOpen, setViewOpen] = React.useState(false);
//   const [editingIndex, setEditingIndex] = React.useState(null);
//   const [form, setForm] = React.useState({ title: "", start: "", end: "", desc: "" });
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
//     setForm({ title: "", start: "", end: "", desc: "" });
//     setEditingIndex(null);
//     setOpen(false);
//   };

//   const handleView = (row) => { setViewData(row); setViewOpen(true); };
//   const handleEdit = (row, index) => { setForm(row); setEditingIndex(index); setOpen(true); };
//   const handleDelete = (index) => setRows(rows.filter((_, i) => i !== index));

//   return (
//     <div style={{ width: "100%", overflowX: "auto" }}>
//       {/* Add Entry Button */}
//       <Box display="flex" justifyContent="flex-end" mb={1}>
//       <Button
//         variant="contained"
//         onClick={() => { setOpen(true); setEditingIndex(null); }}
//       >
//         Add Punch Log
//       </Button>
//       </Box>

//       {/* Table */}
//       <TableContainer component={Paper} sx={{ width: "100%" }}>
//         <Table size="small" sx={{ width: "100%" }}>
//           <TableHead>
//             <TableRow sx={{ background: "#000" }}>
//               {["Title","Start date","End date","Description","Actions"].map(h => (
//                 <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((r, i) => (
//               <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
//                 {[r.title, r.start, r.end, r.desc].map((v, j) => (
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

//       {/* Dialog for Adding/Editing */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>{editingIndex !== null ? "Edit Punch Log" : "Add Punch Log"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           {[
//             {name:"title", label:"Title"},
//             {name:"start", label:"Start date"},
//             {name:"end", label:"End date"},
//             {name:"desc", label:"Description"}
//           ].map((f) => (
//             <TextField
//               key={f.name}
//               name={f.name}
//               label={f.label}
//               value={form[f.name]}
//               onChange={handleChange}
//               size="small"
//               fullWidth
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

//       {/* Dialog for Viewing */}
//       <Dialog open={viewOpen} onClose={() => setViewOpen(false)}>
//         <DialogTitle>View Punch Log</DialogTitle>
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
//     </div>
//   );
// }




















// "use client";
// import * as React from "react";
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, IconButton,
//   Button, Dialog, DialogTitle, DialogContent,
//   DialogActions, TextField, Typography
// } from "@mui/material";
// import { Visibility, Edit, Delete } from "@mui/icons-material";

// export default function PunchLog() {
//   const [rows, setRows] = React.useState([
//     { title: "Morning Shift", start: "2025-08-01 09:00 AM", end: "2025-08-01 05:00 PM", desc: "Regular working hours" },
//     { title: "Late Entry", start: "2025-08-02 10:00 AM", end: "2025-08-02 06:30 PM", desc: "Traffic delay" },
//     { title: "Half Day", start: "2025-08-03 09:00 AM", end: "2025-08-03 01:00 PM", desc: "Personal work" },
//     { title: "Overtime", start: "2025-08-04 09:00 AM", end: "2025-08-04 08:00 PM", desc: "Extra workload" },
//     { title: "Remote Work", start: "2025-08-05 09:30 AM", end: "2025-08-05 06:00 PM", desc: "Work from home" },
//   ]);

//   const [open, setOpen] = React.useState(false);         // Add/Edit dialog
//   const [viewOpen, setViewOpen] = React.useState(false); // View dialog
//   const [editingIndex, setEditingIndex] = React.useState(null);
//   const [form, setForm] = React.useState({
//     title: "", start: "", end: "", desc: ""
//   });
//   const [viewData, setViewData] = React.useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     if (editingIndex !== null) {
//       // Update row
//       const updated = [...rows];
//       updated[editingIndex] = form;
//       setRows(updated);
//     } else {
//       // Add new row
//       setRows([...rows, form]);
//     }
//     setForm({ title: "", start: "", end: "", desc: "" });
//     setEditingIndex(null);
//     setOpen(false);
//   };

//   const handleView = (row) => {
//     setViewData(row);
//     setViewOpen(true);
//   };

//   const handleEdit = (row, index) => {
//     setForm(row);
//     setEditingIndex(index);
//     setOpen(true);
//   };

//   const handleDelete = (index) => {
//     setRows(rows.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//       {/* Add Entry Button */}
//       <Button
//         variant="contained"
//         sx={{ mb: 2, background: "#000" }}
//         onClick={() => { setOpen(true); setEditingIndex(null); }}
//       >
//         Add Punch Log
//       </Button>

//       {/* Table */}
//       <TableContainer component={Paper} sx={{ maxWidth: 1200 }}>
//         <Table size="small" sx={{ width: "75vw" }}>
//           <TableHead>
//             <TableRow sx={{ background: "#000" }}>
//               {["Title","Start date","End date","Description","Actions"].map(h => (
//                 <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((r, i) => (
//               <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
//                 {[r.title, r.start, r.end, r.desc].map((v, j) => (
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

//       {/* Dialog for Adding/Editing */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>{editingIndex !== null ? "Edit Punch Log" : "Add Punch Log"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           {[
//             {name:"title", label:"Title"},
//             {name:"start", label:"Start date"},
//             {name:"end", label:"End date"},
//             {name:"desc", label:"Description"}
//           ].map((f) => (
//             <TextField
//               key={f.name}
//               name={f.name}
//               label={f.label}
//               value={form[f.name]}
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

//       {/* Dialog for Viewing */}
//       <Dialog open={viewOpen} onClose={() => setViewOpen(false)}>
//         <DialogTitle>View Punch Log</DialogTitle>
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




















// "use client";
// import * as React from "react";
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, IconButton
// } from "@mui/material";
// import { Visibility, Edit, Delete } from "@mui/icons-material";

// const rows = [
//   { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
//   { name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
//   { name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
//   { name: "Golden Ice cream", calories: 23.7, fat: 0.9, carbs: 3.7, protein: 0.3 },
//   { name: "Mega Eclair", calories: 2620, fat: 160.0, carbs: 240, protein: 60.0 },
// ];

// export default function Punch() {
//   return (
//     <TableContainer component={Paper} sx={{ maxWidth: 1650 }}>
//       <Table size="small" sx={{width:"81.77vw"}}>
//         <TableHead>
//           <TableRow sx={{ background: "#000" }}>
//             {["Dessert", "Calories", "Fat", "Carbs", "Protein", "Actions"].map(h => (
//               <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((r) => (
//             <TableRow key={r.name} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
//               {[r.name, r.calories, r.fat, r.carbs, r.protein].map((v, i) => (
//                 <TableCell key={i} sx={{ fontSize: 12, p: 1 }}>{v}</TableCell>
//               ))}
//               <TableCell sx={{ p: 1 }}>
//                 <IconButton size="small" color="primary"><Visibility fontSize="small" /></IconButton>
//                 <IconButton size="small" color="secondary"><Edit fontSize="small" /></IconButton>
//                 <IconButton size="small" color="error"><Delete fontSize="small" /></IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }














// export default function Punch() {
  //   return <h2>Punch In/Out Page</h2>;
  // }