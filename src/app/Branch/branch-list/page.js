
// "use client";

// import Layout from "../../../components/Layout";
// import React, { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, IconButton,
//   TextField, Button
// } from "@mui/material";

// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import CommonDialog from "@/components/commonDialog";

// // Import Child Components
// import CreateBranch from "@/components/Branch/branch-list/create";
// import EditBranch from "@/components/Branch/branch-list/edit";
// import ViewBranch from "@/components/Branch/branch-list/view";
// import DeleteBranch from "@/components/Branch/branch-list/delete";

// const Branch = () => {
//   const [search, setSearch] = useState("");
//   const [rows, setRows] = useState([
//     { si: 1, _id: "b1", BranchName: "Delhi Branch", Location: "Delhi", Status: "active" },
//     { si: 2, _id: "b2", BranchName: "Parsudih", Location: "Kashmahal", Status: "active" },
//     { si: 3, _id: "b3", BranchName: "Bistupur", Location: "Sakchi", Status: "active" },
//     { si: 4, _id: "b4", BranchName: "Haldipokhar", Location: "Hata", Status: "active" },
//   ]);
//   // Dialog states
//   const [openData, setOpenData] = useState(false);
//   const [viewShow, setViewShow] = useState(false);
//   const [editShow, setEditShow] = useState(false);
//   const [deleteShow, setDeleteShow] = useState(false);

//   // Selected Data
//   const [viewData, setViewData] = useState(null);
//   const [editData, setEditData] = useState(null);
//   const [deleteId, setDeleteId] = useState(null);

//   const [isDeleting, setIsDeleting] = useState(false);

//   // Filter Rows
//   const filteredRows = rows.filter(
//     (row) =>
//       row.BranchName.toLowerCase().includes(search.toLowerCase()) ||
//       row.Location.toLowerCase().includes(search.toLowerCase())
//   );

//   // Close Dialog
//   const handleClose = () => {
//     setOpenData(false);
//     setViewShow(false);
//     setEditShow(false);
//     setDeleteShow(false);
//   };

//   // Handlers
//   const handleCreate = (newBranch) => {
//     setRows([...rows, { ...newBranch, si: rows.length + 1, _id: `b${rows.length + 1}` }]);
//     setOpenData(false);
//   };

//   const handleUpdate = (updatedBranch) => {
//     setRows(rows.map((row) => (row._id === updatedBranch._id ? updatedBranch : row)));
//     setEditShow(false);
//   };


// const handleDelete = () => {
//   setIsDeleting(true);
//   setTimeout(() => {
//     const updatedRows = rows.filter((row) => row._id !== deleteId);

//     // 🔑 Re-generate serial numbers
//     const reIndexedRows = updatedRows.map((row, index) => ({
//       ...row,
//       si: index + 1,   // line wise numbering
//     }));

//     setRows(reIndexedRows);
//     setIsDeleting(false);
//     handleClose();
//   }, 1000);
// };

//   return (
//     <Layout>
//       <div style={{ padding: "20px" }}>
//         {/* Header */}
//         <div style={{
//           display: "flex", justifyContent: "space-between",
//           alignItems: "center", marginBottom: "20px"
//         }}>
//           <h2 style={{ margin: 0 }}>Branch List</h2>
//           <div style={{ display: "flex", gap: "10px" }}>
//             <TextField
//               size="small"
//               placeholder="Search..."
//               variant="outlined"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <Button
//               variant="contained"
//               style={{ backgroundColor: "#1a237e", color: "#fff", fontWeight: "bold" }}
//               onClick={() => setOpenData(true)}
//             >
//               + Add New Branch
//             </Button>
//           </div>
//         </div>

//         {/* Table */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Sl.No</TableCell>
//                 <TableCell>Branch Name</TableCell>
//                 <TableCell>Location</TableCell>
//                 <TableCell>Status</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredRows.map((row) => (
//                 <TableRow key={row._id}>
//                   <TableCell>{row.si}</TableCell>
//                   <TableCell>{row.BranchName}</TableCell>
//                   <TableCell>{row.Location}</TableCell>
//                   <TableCell>{row.Status}</TableCell>
//                   <TableCell>
//                     <IconButton onClick={() => { setViewData(row); setViewShow(true); }}>
//                       <VisibilityIcon style={{ color: "#072eb0" }} />
//                     </IconButton>
//                     <IconButton onClick={() => { setEditData(row); setEditShow(true); }}>
//                       <EditIcon style={{ color: "#6b6666" }} />
//                     </IconButton>
//                     <IconButton onClick={() => { setDeleteId(row._id); setDeleteShow(true); }}>
//                       <DeleteIcon style={{ color: "#e6130b" }} />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* Common Dialog */}
//         <CommonDialog
//           open={openData || viewShow || editShow || deleteShow}
//           onClose={handleClose}
//           dialogTitle={
//             openData ? "Create New Branch" :
//             viewShow ? "View Branch" :
//             editShow ? "Edit Branch" :
//             deleteShow ? "Delete Branch" : ""
//           }
//           dialogContent={
//             openData ? (
//               <CreateBranch handleCreate={handleCreate} handleClose={handleClose} />
//             ) : viewShow ? (
//               <ViewBranch viewData={viewData} />
//             ) : editShow ? (
//               <EditBranch editData={editData} handleUpdate={handleUpdate} handleClose={handleClose} />
//             ) : deleteShow ? (
//               <DeleteBranch handleDelete={handleDelete} isDeleting={isDeleting} handleClose={handleClose} />
//             ) : null
//           }
//         />
//       </div>
//     </Layout>
//   );
// };

// export default Branch;


// "use client";

// import Layout from "../../../components/Layout";
// import React, { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, IconButton,
//   TextField, Button
// } from "@mui/material";

// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";

// import CommonDialog from "@/components/commonDialog";

// // Child Components
// import CreateBranch from "@/components/Branch/branch-list/create";
// import EditBranch from "@/components/Branch/branch-list/edit";
// import ViewBranch from "@/components/Branch/branch-list/view";
// import DeleteBranch from "@/components/Branch/branch-list/delete";

// export default function Branch() {
//   const [search, setSearch] = useState("");

//   // 🔹 Helper function to create row
//   const createData = (si, _id, BranchName, Location, Status) => {
//     return {
//       si,
//       _id,
//       BranchName,
//       Location,
//       Status,
//       action: (
//         <>
//           <IconButton onClick={() => handleOpen("view", { si, _id, BranchName, Location, Status })}>
//             <VisibilityIcon style={{ color: "#072eb0" }} />
//           </IconButton>
//           <IconButton onClick={() => handleOpen("edit", { si, _id, BranchName, Location, Status })}>
//             <EditIcon style={{ color: "#6b6666" }} />
//           </IconButton>
//           <IconButton onClick={() => handleOpen("delete", { si, _id })}>
//             <DeleteIcon style={{ color: "#e6130b" }} />
//           </IconButton>
//         </>
//       )
//     };
//   };

//   // 🔹 Initial rows
//   const [rows, setRows] = useState([
//     createData(1, "b1", "Delhi Branch", "Delhi", "active"),
//     createData(2, "b2", "Parsudih", "Kashmahal", "active"),
//     createData(3, "b3", "Bistupur", "Sakchi", "active"),
//     createData(4, "b4", "Haldipokhar", "Hata", "active"),
//   ]);

//   const [dialogState, setDialogState] = useState({ open: false, type: "" });
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [isDeleting, setIsDeleting] = useState(false);

//   // 🔹 Handlers
//   const handleOpen = (type, row = null) => {
//     setDialogState({ open: true, type });
//     setSelectedRow(row);
//   };

//   const handleClose = () => {
//     setDialogState({ open: false, type: "" });
//     setSelectedRow(null);
//   };

//   const handleCreate = (newBranch) => {
//     const newRow = createData(
//       rows.length + 1,
//       `b${rows.length + 1}`,
//       newBranch.BranchName,
//       newBranch.Location,
//       newBranch.Status
//     );
//     setRows([...rows, newRow]);
//     handleClose();
//   };

//   const handleUpdate = (updatedBranch) => {
//     const updatedRows = rows.map((row) =>
//       row._id === updatedBranch._id
//         ? createData(row.si, row._id, updatedBranch.BranchName, updatedBranch.Location, updatedBranch.Status)
//         : row
//     );
//     setRows(updatedRows);
//     handleClose();
//   };

//   const handleDelete = () => {
//     setIsDeleting(true);
//     setTimeout(() => {
//       const updatedRows = rows.filter((row) => row._id !== selectedRow._id);

//       // 🔑 Re-index Sl.No
//       const reIndexedRows = updatedRows.map((row, index) =>
//         createData(index + 1, row._id, row.BranchName, row.Location, row.Status)
//       );

//       setRows(reIndexedRows);
//       setIsDeleting(false);
//       handleClose();
//     }, 1000);
//   };

//   // 🔹 Search filter
//   const filteredRows = rows.filter(
//     (row) =>
//       row.BranchName.toLowerCase().includes(search.toLowerCase()) ||
//       row.Location.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Layout>
//       <div style={{ padding: "20px" }}>
//         {/* Header */}
//         <div style={{
//           display: "flex", justifyContent: "space-between",
//           alignItems: "center", marginBottom: "20px"
//         }}>
//           <h2 style={{ margin: 0 }}>Branch List</h2>
//           <div style={{ display: "flex", gap: "10px" }}>
//             <TextField
//               size="small"
//               placeholder="Search..."
//               variant="outlined"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <Button
//               variant="contained"
//               style={{ backgroundColor: "#1a237e", color: "#fff", fontWeight: "bold" }}
//               onClick={() => handleOpen("create")}
//             >
//               + Add New Branch
//             </Button>
//           </div>
//         </div>

//         {/* Table */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead className="forheadcolor">
//               <TableRow>
//                 <TableCell><b>Sl.No</b></TableCell>
//                 <TableCell><b>Branch Name</b></TableCell>
//                 <TableCell><b>Location</b></TableCell>
//                 <TableCell><b>Status</b></TableCell>
//                 <TableCell><b>Action</b></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody className="forcolor">
//               {filteredRows.map((row) => (
//                 <TableRow key={row._id}>
//                   <TableCell>{row.si}</TableCell>
//                   <TableCell>{row.BranchName}</TableCell>
//                   <TableCell>{row.Location}</TableCell>
//                   <TableCell>{row.Status}</TableCell>
//                   <TableCell>{row.action}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* Dialog */}
//         <CommonDialog
//           open={dialogState.open}
//           onClose={handleClose}
//           dialogTitle={
//             dialogState.type === "create" ? "Create New Branch" :
//             dialogState.type === "view" ? "View Branch" :
//             dialogState.type === "edit" ? "Edit Branch" :
//             dialogState.type === "delete" ? "Delete Branch" : ""
//           }
//           dialogContent={
//             dialogState.type === "create" ? (
//               <CreateBranch handleCreate={handleCreate} handleClose={handleClose} />
//             ) : dialogState.type === "view" ? (
//               <ViewBranch viewData={selectedRow} />
//             ) : dialogState.type === "edit" ? (
//               <EditBranch editData={selectedRow} handleUpdate={handleUpdate} handleClose={handleClose} />
//             ) : dialogState.type === "delete" ? (
//               <DeleteBranch handleDelete={handleDelete} isDeleting={isDeleting} handleClose={handleClose} />
//             ) : null
//           }
//         />
//       </div>
//     </Layout>
//   );
// }


"use client";

import Layout from "../../../components/Layout";
import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton,
  TextField, Button
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import CommonDialog from "@/components/commonDialog";

// Child Components
import CreateBranch from "@/components/Branch/branch-list/create";
import EditBranch from "@/components/Branch/branch-list/edit";
import ViewBranch from "@/components/Branch/branch-list/view";
import DeleteBranch from "@/components/Branch/branch-list/delete";

export default function Branch() {
  const [search, setSearch] = useState("");
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  // 🔹 Helper function to create row
  const createData = (si, _id, BranchName, Location, Status) => {
    const handleView = () => {
      setViewData({ si, _id, BranchName, Location, Status });
      setViewShow(true);
    };

    const handleEdit = () => {
      setEditData({ si, _id, BranchName, Location, Status });
      setEditShow(true);
    };

    const handleDelete = () => {
      setDeleteData({ si, _id, BranchName, Location, Status });
      setDeleteShow(true);
    };

    return {
      si,
      _id,
      BranchName,
      Location,
      Status,
      action: (
        <>
          <IconButton onClick={handleView}>
            <VisibilityIcon style={{ color: "#072eb0" }} />
          </IconButton>
          <IconButton onClick={handleEdit}>
            <EditIcon style={{ color: "#6b6666" }} />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon style={{ color: "#e6130b" }} />
          </IconButton>
        </>
      )
    };
  };

  // 🔹 Initial rows
  const [rows, setRows] = useState([
    createData(1, "b1", "Delhi Branch", "Delhi", "active"),
    createData(2, "b2", "Parsudih", "Kashmahal", "active"),
    createData(3, "b3", "Bistupur", "Sakchi", "active"),
    createData(4, "b4", "Haldipokhar", "Hata", "active"),
  ]);

  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setViewData(null);
    setEditData(null);
    setDeleteData(null);
  };

  const handleCreate = (newBranch) => {
    const newRow = createData(
      rows.length + 1,
      `b${rows.length + 1}`,
      newBranch.BranchName,
      newBranch.Location,
      newBranch.Status
    );
    setRows([...rows, newRow]);
    setOpenData(false);
  };

  const handleUpdate = (updatedBranch) => {
    const updatedRows = rows.map((row) =>
      row._id === updatedBranch._id
        ? createData(row.si, row._id, updatedBranch.BranchName, updatedBranch.Location, updatedBranch.Status)
        : row
    );
    setRows(updatedRows);
    setEditShow(false);
  };

  const handleDelete = () => {
    const updatedRows = rows.filter((row) => row._id !== deleteData._id);

    // 🔑 Re-index Sl.No
    const reIndexedRows = updatedRows.map((row, index) =>
      createData(index + 1, row._id, row.BranchName, row.Location, row.Status)
    );

    setRows(reIndexedRows);
    setDeleteShow(false);
  };

  // 🔹 Search filter
  const filteredRows = rows.filter(
    (row) =>
      row.BranchName.toLowerCase().includes(search.toLowerCase()) ||
      row.Location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", marginBottom: "20px"
        }}>
          <h2 style={{ margin: 0 }}>Branch List</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              size="small"
              placeholder="Search..."
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#1a237e", color: "#fff", fontWeight: "bold" }}
              onClick={() => setOpenData(true)}
            >
              + Add New Branch
            </Button>
          </div>
        </div>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="forheadcolor">
              <TableRow>
                <TableCell><b>Sl.No</b></TableCell>
                <TableCell><b>Branch Name</b></TableCell>
                <TableCell><b>Location</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="forcolor">
              {filteredRows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.si}</TableCell>
                  <TableCell>{row.BranchName}</TableCell>
                  <TableCell>{row.Location}</TableCell>
                  <TableCell>{row.Status}</TableCell>
                  <TableCell>{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dialog */}
        <CommonDialog
          open={openData || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            openData
              ? "Create New Branch"
              : viewShow
              ? "View Branch"
              : editShow
              ? "Edit Branch"
              : deleteShow
              ? "Delete Branch"
              : ""
          }
          dialogContent={
            openData ? (
              <CreateBranch handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewBranch viewData={viewData} />
            ) : editShow ? (
              <EditBranch editData={editData} handleUpdate={handleUpdate} handleClose={handleClose} />
            ) : deleteShow ? (
              <DeleteBranch handleDelete={handleDelete} handleClose={handleClose} />
            ) : null
          }
        />
      </div>
    </Layout>
  );
}
