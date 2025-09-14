"use client";
import * as React from "react";
import {
  Stack,Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton,
  Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, Typography
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

export default function DailyLog() {
  const [rows, setRows] = React.useState([
    { profile: "John Doe", in: "09:00 AM", out: "05:00 PM", behavior: "Good", break: "01:00 hr", total: "07:00 hrs", entry: "Office" },
    { profile: "Jane Smith", in: "09:30 AM", out: "06:00 PM", behavior: "Excellent", break: "00:45 hr", total: "07:45 hrs", entry: "Remote" },
    { profile: "Reyan Doe", in: "09:00 AM", out: "05:00 PM", behavior: "Good", break: "01:00 hr", total: "07:00 hrs", entry: "Office" },
    { profile: "Harry Potter", in: "09:30 AM", out: "06:00 PM", behavior: "Excellent", break: "00:45 hr", total: "07:45 hrs", entry: "Remote" },
    { profile: "Antila Williams", in: "09:00 AM", out: "05:00 PM", behavior: "Good", break: "01:00 hr", total: "07:00 hrs", entry: "Office" },
    { profile: "Josef Rock", in: "09:30 AM", out: "06:00 PM", behavior: "Excellent", break: "00:45 hr", total: "07:45 hrs", entry: "Remote" },
    { profile: "Sung Jin Woo", in: "09:00 AM", out: "05:00 PM", behavior: "Excellent", break: "01:00 hr", total: "07:00 hrs", entry: "Office" },
    { profile: "Thomas Andre", in: "09:30 AM", out: "06:00 PM", behavior: "Good", break: "00:45 hr", total: "07:45 hrs", entry: "Remote" },
  ]);

  const [open, setOpen] = React.useState(false);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState(null);
  const [deleteIndex, setDeleteIndex] = React.useState(null);

  const [form, setForm] = React.useState({
    profile: "", in: "", out: "", behavior: "", break: "", total: "", entry: ""
  });
  const [viewData, setViewData] = React.useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (editingIndex !== null) {
      const updated = [...rows];
      updated[editingIndex] = form;
      setRows(updated);
    } else {
      setRows([...rows, form]);
    }
    setForm({ profile: "", in: "", out: "", behavior: "", break: "", total: "", entry: "" });
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
      {/* Add Attendance Button */}
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Daily Logs
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
              {["Profile","Punched in","Punched Out","Behavior","Break time","Total hours","Entry","Actions"].map(h => (
                <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
                {[r.profile, r.in, r.out, r.behavior, r.break, r.total, r.entry].map((v, j) => (
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

      {/* Dialog for Adding/Editing Attendance */}
      <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{
    sx: { width: "600px", height: "450px" }
  }}>
        <DialogTitle>{editingIndex !== null ? "Edit Attendance" : "Add Attendance"}</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          {["profile","in","out","behavior","break","total","entry"].map((field) => (
            <TextField
              key={field}
              name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
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

      {/* Dialog for Viewing Attendance */}
      <Dialog open={viewOpen} onClose={() => setViewOpen(false)} PaperProps={{
    sx: { width: "500px", height: "350px" }
  }}>
        <DialogTitle>View Attendance</DialogTitle>
        <DialogContent>
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
      <Dialog open={deleteOpen} onClose={() => setDeleteOpen(false)} PaperProps={{
    sx: { width: "500px", height: "170px" }
  }}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <Typography>This action will permanently delete the record.</Typography>
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
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, IconButton,
//   Button, Dialog, DialogTitle, DialogContent,
//   DialogActions, TextField, Typography
// } from "@mui/material";
// import { Visibility, Edit, Delete } from "@mui/icons-material";

// export default function DailyLog() {
//   const [rows, setRows] = React.useState([
//     { profile: "John Doe", in: "09:00 AM", out: "05:00 PM", behavior: "Good", break: "01:00 hr", total: "07:00 hrs", entry: "Office" },
//     { profile: "Jane Smith", in: "09:30 AM", out: "06:00 PM", behavior: "Excellent", break: "00:45 hr", total: "07:45 hrs", entry: "Remote" },
//   ]);

//   const [open, setOpen] = React.useState(false);
//   const [viewOpen, setViewOpen] = React.useState(false);
//   const [editingIndex, setEditingIndex] = React.useState(null);
//   const [form, setForm] = React.useState({
//     profile: "", in: "", out: "", behavior: "", break: "", total: "", entry: ""
//   });
//   const [viewData, setViewData] = React.useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     if (editingIndex !== null) {
//       const updated = [...rows];
//       updated[editingIndex] = form;
//       setRows(updated);
//     } else {
//       setRows([...rows, form]);
//     }
//     setForm({ profile: "", in: "", out: "", behavior: "", break: "", total: "", entry: "" });
//     setEditingIndex(null);
//     setOpen(false);
//   };

//   const handleView = (row) => { setViewData(row); setViewOpen(true); };
//   const handleEdit = (row, index) => { setForm(row); setEditingIndex(index); setOpen(true); };
//   const handleDelete = (index) => { setRows(rows.filter((_, i) => i !== index)); };

//   return (
//     <div style={{ width: "100%", overflowX: "auto" }}>
//       {/* Add Attendance Button */}
//       <Button
//         variant="contained"
//         sx={{ mb: 2, background: "#000" }}
//         onClick={() => { setOpen(true); setEditingIndex(null); }}
//       >
//         Add Attendance
//       </Button>

//       {/* Table */}
//       <TableContainer component={Paper} sx={{ width: "100%" }}>
//         <Table size="small" sx={{ width: "100%" }}>
//           <TableHead>
//             <TableRow sx={{ background: "#000" }}>
//               {["Profile","Punched in","Punched Out","Behavior","Break time","Total hours","Entry","Actions"].map(h => (
//                 <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((r, i) => (
//               <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
//                 {[r.profile, r.in, r.out, r.behavior, r.break, r.total, r.entry].map((v, j) => (
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

//       {/* Dialog for Adding/Editing Attendance */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>{editingIndex !== null ? "Edit Attendance" : "Add Attendance"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           {["profile","in","out","behavior","break","total","entry"].map((field) => (
//             <TextField
//               key={field}
//               name={field}
//               label={field.charAt(0).toUpperCase() + field.slice(1)}
//               value={form[field]}
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

//       {/* Dialog for Viewing Attendance */}
//       <Dialog open={viewOpen} onClose={() => setViewOpen(false)}>
//         <DialogTitle>View Attendance</DialogTitle>
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

// export default function DailyLog() {
//   const [rows, setRows] = React.useState([
//     { profile: "John Doe", in: "09:00 AM", out: "05:00 PM", behavior: "Good", break: "01:00 hr", total: "07:00 hrs", entry: "Office" },
//     { profile: "Jane Smith", in: "09:30 AM", out: "06:00 PM", behavior: "Excellent", break: "00:45 hr", total: "07:45 hrs", entry: "Remote" },
//   ]);

//   const [open, setOpen] = React.useState(false);      // Add/Edit dialog
//   const [viewOpen, setViewOpen] = React.useState(false); // View dialog
//   const [editingIndex, setEditingIndex] = React.useState(null);
//   const [form, setForm] = React.useState({
//     profile: "", in: "", out: "", behavior: "", break: "", total: "", entry: ""
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
//     setForm({ profile: "", in: "", out: "", behavior: "", break: "", total: "", entry: "" });
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
//       {/* Add Attendance Button */}
//       <Button
//         variant="contained"
//         sx={{ mb: 2, background: "#000" }}
//         onClick={() => { setOpen(true); setEditingIndex(null); }}
//       >
//         Add Attendance
//       </Button>

//       {/* Table */}
//       <TableContainer component={Paper} sx={{ maxWidth: 1650 }}>
//         <Table size="small" sx={{ width: "81.77vw" }}>
//           <TableHead>
//             <TableRow sx={{ background: "#000" }}>
//               {["Profile","Punched in","Punched Out","Behavior","Break time","Total hours","Entry","Actions"].map(h => (
//                 <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((r, i) => (
//               <TableRow key={i} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
//                 {[r.profile, r.in, r.out, r.behavior, r.break, r.total, r.entry].map((v, j) => (
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

//       {/* Dialog for Adding/Editing Attendance */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>{editingIndex !== null ? "Edit Attendance" : "Add Attendance"}</DialogTitle>
//         <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//           {["profile","in","out","behavior","break","total","entry"].map((field) => (
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

//       {/* Dialog for Viewing Attendance */}
//       <Dialog open={viewOpen} onClose={() => setViewOpen(false)}>
//         <DialogTitle>View Attendance</DialogTitle>
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
// ];

// export default function DailyLog() {
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











































































// "use client";
// import * as React from "react";
// import {
  //   Table, TableBody, TableCell, TableContainer,
  //   TableHead, TableRow, Paper, IconButton, Button, Box
  // } from "@mui/material";
  // import { Visibility, Edit, Delete } from "@mui/icons-material";
  
  // export default function CompactTable() {
    //   const [rows, setRows] = React.useState([
//     { id: 1, name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
//     { id: 2, name: "Ice cream sandwich", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
//     { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
//   ]);

//   // --- Handlers ---
//   const handleView = (row) => alert(
  //     `Details:\nName: ${row.name}\nCalories: ${row.calories}\nFat: ${row.fat}\nCarbs: ${row.carbs}\nProtein: ${row.protein}`
  //   );
  
  //   const handleEdit = (row) => {
    //     const newName = prompt("Enter new name:", row.name);
    //     if (newName) {
      //       setRows(rows.map(r => r.id === row.id ? { ...r, name: newName } : r));
//     }
//   };

//   const handleDelete = (id) => setRows(rows.filter(r => r.id !== id));

//   const handleAddUser = () => {
  //     const name = prompt("Enter Dessert name:");
  //     if (!name) return;
  //     const newRow = {
    //       id: Date.now(),
    //       name,
    //       calories: Math.floor(Math.random() * 300),
    //       fat: (Math.random() * 20).toFixed(1),
    //       carbs: Math.floor(Math.random() * 70),
    //       protein: (Math.random() * 10).toFixed(1),
    //     };
    //     setRows([...rows, newRow]);
    //   };
    
    //   return (
      //     <Box>
      //       {/* Top Bar */}
      //       <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
      //         <Button variant="contained" size="small" onClick={handleAddUser}>
      //           + Add User
      //         </Button>
      //       </Box>
      
      //       {/* Table */}
      //       <TableContainer component={Paper} sx={{ maxWidth: 700 }}>
      //         <Table size="small">
      //           <TableHead>
      //             <TableRow sx={{ background: "#000" }}>
      //               {["Dessert", "Calories", "Fat", "Carbs", "Protein", "Actions"].map(h => (
//                 <TableCell key={h} sx={{ color: "#fff", fontSize: 13, p: 1 }}>{h}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.id} sx={{ "&:nth-of-type(odd)": { background: "#f5f5f5" } }}>
//                 {[row.name, row.calories, row.fat, row.carbs, row.protein].map((v, i) => (
  //                   <TableCell key={i} sx={{ fontSize: 12, p: 1 }}>{v}</TableCell>
  //                 ))}
  //                 <TableCell sx={{ p: 1 }}>
  //                   <IconButton size="small" color="primary" onClick={() => handleView(row)}>
  //                     <Visibility fontSize="small" />
  //                   </IconButton>
  //                   <IconButton size="small" color="secondary" onClick={() => handleEdit(row)}>
  //                     <Edit fontSize="small" />
  //                   </IconButton>
  //                   <IconButton size="small" color="error" onClick={() => handleDelete(row.id)}>
  //                     <Delete fontSize="small" />
  //                   </IconButton>
  //                 </TableCell>
  //               </TableRow>
  //             ))}
  //           </TableBody>
  //         </Table>
  //       </TableContainer>
  //     </Box>
  //   );
  // }
  
  
  
  
  
  
  
  
  // export default function DailyLog() {
    //   return <h2>Daily Log Page</h2>;
    // }