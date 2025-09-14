// 'use client';
// import Layout from "../../../components/Layout";
// import React, { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, IconButton, TablePagination, Button, TextField, Box, Tooltip, InputAdornment
// } from "@mui/material";
// import { Visibility, Delete, Edit, Search } from "@mui/icons-material";

// import CommonDialog from "../../../components/CommonDialog";
// import Create from "../../../components/employee-management/employee/Create";
// import View from "../../../components/employee-management/employee/View";
// import EditEmp from "../../../components/employee-management/employee/Edit";
// import DeleteEmp from "../../../components/employee-management/employee/Delete";

// const EmployeeListPage = () => {
//   const [employees, setEmployees] = useState([
//     { id: "EMP001", firstName: "Rahul", lastName: "Sharma", email: "rahul@example.com", mobile: "9876543210", role: "Manager", location: "Delhi", bank: "SBI", dept: "HR" },
//     { id: "EMP002", firstName: "Neha", lastName: "Kumari", email: "neha@example.com", mobile: "9123456780", role: "Developer", location: "Bangalore", bank: "HDFC", dept: "IT" },
//     { id: "EMP003", firstName: "Ankit", lastName: "Verma", email: "ankit@example.com", mobile: "9988776655", role: "Analyst", location: "Mumbai", bank: "ICICI", dept: "Finance" },
//   ]);

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [search, setSearch] = useState("");

//   // Dialog States
//   const [openData, setOpenData] = useState(false);
//   const [viewShow, setViewShow] = useState(false);
//   const [editShow, setEditShow] = useState(false);
//   const [deleteShow, setDeleteShow] = useState(false);

//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const handleClose = () => {
//     setOpenData(false);
//     setViewShow(false);
//     setEditShow(false);
//     setDeleteShow(false);
//     setSelectedEmployee(null);
//   };

//   const handleCreate = (newEmp) => {
//     setEmployees([...employees, newEmp]);
//     handleClose();
//   };

//   const handleUpdate = (updatedEmp) => {
//     setEmployees(employees.map(emp => emp.id === updatedEmp.id ? updatedEmp : emp));
//     handleClose();
//   };

//   const handleDelete = (id) => {
//     setEmployees(employees.filter(emp => emp.id !== id));
//     handleClose();
//   };

//   const filteredEmployees = employees.filter(
//     (emp) =>
//       emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
//       emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
//       emp.email.toLowerCase().includes(search.toLowerCase()) ||
//       emp.mobile.includes(search)
//   );

//   return (
//     <Paper sx={{ p: 2, boxShadow: "none" }}>
//   {/* 🔹 Top Section: Title + Search + Add Button */}
// <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
//   <h2 style={{ margin: 0 }}>Employee</h2>

//   <Box sx={{ display: "flex", gap: 1 }}>
//     <TextField
//       variant="outlined"
//       size="small"
//       placeholder="Search..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       InputProps={{
//         startAdornment: (
//           <InputAdornment position="start">
//             <Search />
//           </InputAdornment>
//         ),
//       }}
//     />
//     <Button variant="contained" color="primary" onClick={() => setOpenData(true)}>
//       + Add Employee
//     </Button>
//   </Box>
// </Box>

// {/* 🔹 Employee Table */}
//       <TableContainer sx={{ border: "1px solid #e0e0e0", borderRadius: "6px" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: "bold" }}>Sl.No</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Employee Id</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Mobile</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Bank Name</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredEmployees
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.firstName}</TableCell>
//                   <TableCell>{row.lastName}</TableCell>
//                   <TableCell>{row.email}</TableCell>
//                   <TableCell>{row.mobile}</TableCell>
//                   <TableCell>{row.role}</TableCell>
//                   <TableCell>{row.location}</TableCell>
//                   <TableCell>{row.bank}</TableCell>
//                   <TableCell>{row.dept}</TableCell>
//                   <TableCell sx={{ display: "flex", gap: "4px" }}>
//                     <Tooltip title="View">
//                       <IconButton size="small" color="primary" onClick={() => { setSelectedEmployee(row); setViewShow(true); }}>
//                         <Visibility />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Edit">
//                       <IconButton size="small" color="secondary" onClick={() => { setSelectedEmployee(row); setEditShow(true); }}>
//                         <Edit />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Delete">
//                       <IconButton size="small" color="error" onClick={() => { setSelectedEmployee(row); setDeleteShow(true); }}>
//                         <Delete />
//                       </IconButton>
//                     </Tooltip>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* 🔹 Pagination */}
//       <TablePagination
//         component="div"
//         count={filteredEmployees.length}
//         page={page}
//         onPageChange={(e, newPage) => setPage(newPage)}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={(e) => { setRowsPerPage(+e.target.value); setPage(0); }}
//       />

//       {/* 🔹 Common Dialog */}
//       <CommonDialog
//         open={openData || viewShow || editShow || deleteShow}
//         onClose={handleClose}
//         dialogTitle={
//           openData
//             ? "Add Employee"
//             : viewShow
//             ? "View Employee"
//             : editShow
//             ? "Edit Employee"
//             : deleteShow
//             ? "Delete Employee"
//             : ""
//         }
//         dialogContent={
//           openData ? (
//             <Create handleCreate={handleCreate} handleClose={handleClose} />
//           ) : viewShow ? (
//             <View employee={selectedEmployee} />
//           ) : editShow ? (
//             <EditEmp employee={selectedEmployee} handleUpdate={handleUpdate} handleClose={handleClose} />
//           ) : deleteShow ? (
//             <DeleteEmp employee={selectedEmployee} handleDelete={handleDelete} handleClose={handleClose} />
//           ) : null
//         }
//       />
//     </Paper>
//   );
// };

// export default EmployeeListPage;




















// 'use client';

// import React, { useState } from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
//   Paper, IconButton, TablePagination, Button, TextField, Box, Tooltip, InputAdornment
// } from "@mui/material";
// import { Visibility, Delete, Edit, Search } from "@mui/icons-material";

// import CommonDialog from "../../../components/CommonDialog";
// import Create from "../../../components/employee-management/employee/Create";
// import View from "../../../components/employee-management/employee/View";
// import EditEmp from "../../../components/employee-management/employee/Edit";
// import DeleteEmp from "../../../components/employee-management/employee/Delete";

// const EmployeeListPage = () => {
//   const [employees, setEmployees] = useState([
//     { id: "EMP001", firstName: "Rahul", lastName: "Sharma", email: "rahul@example.com", mobile: "9876543210", role: "Manager", location: "Delhi", bank: "SBI", dept: "HR" },
//     { id: "EMP002", firstName: "Neha", lastName: "Kumari", email: "neha@example.com", mobile: "9123456780", role: "Developer", location: "Bangalore", bank: "HDFC", dept: "IT" },
//     { id: "EMP003", firstName: "Ankit", lastName: "Verma", email: "ankit@example.com", mobile: "9988776655", role: "Analyst", location: "Mumbai", bank: "ICICI", dept: "Finance" },
//   ]);

//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [search, setSearch] = useState("");

//   // Dialog States
//   const [openData, setOpenData] = useState(false);
//   const [viewShow, setViewShow] = useState(false);
//   const [editShow, setEditShow] = useState(false);
//   const [deleteShow, setDeleteShow] = useState(false);

//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   const handleClose = () => {
//     setOpenData(false);
//     setViewShow(false);
//     setEditShow(false);
//     setDeleteShow(false);
//     setSelectedEmployee(null);
//   };

//   const handleCreate = (newEmp) => {
//     setEmployees([...employees, newEmp]);
//     handleClose();
//   };

//   const handleUpdate = (updatedEmp) => {
//     setEmployees(employees.map(emp => emp.id === updatedEmp.id ? updatedEmp : emp));
//     handleClose();
//   };

//   const handleDelete = (id) => {
//     setEmployees(employees.filter(emp => emp.id !== id));
//     handleClose();
//   };

//   const filteredEmployees = employees.filter(
//     (emp) =>
//       emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
//       emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
//       emp.email.toLowerCase().includes(search.toLowerCase()) ||
//       emp.mobile.includes(search)
//   );

//   return (
//     <Paper sx={{ p: 2, boxShadow: "none" }}>
//       {/* 🔹 Top Section: Title + Search + Add Button */}
//       <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
//         <h2 style={{ margin: 0 }}>Employee</h2>

//         <Box sx={{ display: "flex", gap: 1 }}>
//           <TextField
//             name="search"
//             size="small"
         
//             value={search}
//             variant="outlined"
//             onChange={(e) => setSearch(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Search fontSize="small" />
//                 </InputAdornment>
//               ),
//             }}
//           />
          
//           <Button variant="contained" color="primary" onClick={() => setOpenData(true)}>
//             + Add Employee
//           </Button>
//         </Box>
//       </Box>

//       {/* 🔹 Employee Table */}
//       <TableContainer sx={{ border: "1px solid #e0e0e0", borderRadius: "6px" }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: "bold" }}>Sl.No</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Employee Id</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Mobile</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Bank Name</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredEmployees
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.firstName}</TableCell>
//                   <TableCell>{row.lastName}</TableCell>
//                   <TableCell>{row.email}</TableCell>
//                   <TableCell>{row.mobile}</TableCell>
//                   <TableCell>{row.role}</TableCell>
//                   <TableCell>{row.location}</TableCell>
//                   <TableCell>{row.bank}</TableCell>
//                   <TableCell>{row.dept}</TableCell>
//                   <TableCell sx={{ display: "flex", gap: "4px" }}>
//                     <Tooltip title="View">
//                       <IconButton
//                         size="small"
//                         color="primary"
//                         onClick={() => { setSelectedEmployee(row); setViewShow(true); }}
//                       >
//                         <Visibility />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Edit">
//                       <IconButton
//                         size="small"
//                         color="secondary"
//                         onClick={() => { setSelectedEmployee(row); setEditShow(true); }}
//                       >
//                         <Edit />
//                       </IconButton>
//                     </Tooltip>
//                     <Tooltip title="Delete">
//                       <IconButton
//                         size="small"
//                         color="error"
//                         onClick={() => { setSelectedEmployee(row); setDeleteShow(true); }}
//                       >
//                         <Delete />
//                       </IconButton>
//                     </Tooltip>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* 🔹 Pagination */}
//       <TablePagination
//         component="div"
//         count={filteredEmployees.length}
//         page={page}
//         onPageChange={(e, newPage) => setPage(newPage)}
//         rowsPerPage={rowsPerPage}
//         onRowsPerPageChange={(e) => { setRowsPerPage(+e.target.value); setPage(0); }}
//       />

//       {/* 🔹 Common Dialog */}
//       <CommonDialog
//         open={openData || viewShow || editShow || deleteShow}
//         onClose={handleClose}
//         dialogTitle={
//           openData
//             ? "Add Employee"
//             : viewShow
//             ? "View Employee"
//             : editShow
//             ? "Edit Employee"
//             : deleteShow
//             ? "Delete Employee"
//             : ""
//         }
//         dialogContent={
//           openData ? (
//             <Create handleCreate={handleCreate} handleClose={handleClose} />
//           ) : viewShow ? (
//             <View employee={selectedEmployee} />
//           ) : editShow ? (
//             <EditEmp employee={selectedEmployee} handleUpdate={handleUpdate} handleClose={handleClose} />
//           ) : deleteShow ? (
//             <DeleteEmp employee={selectedEmployee} handleDelete={handleDelete} handleClose={handleClose} />
//           ) : null
//         }
//       />
//     </Paper>
//   );
// };

// export default EmployeeListPage;



































'use client';

import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, TablePagination, Button, TextField, Box, Tooltip, InputAdornment
} from "@mui/material";
import { Visibility, Delete, Edit, Search } from "@mui/icons-material";

import CommonDialog from "../../../components/CommonDialog";
import Create from "../../../components/employee-management/employee/Create";
import View from "../../../components/employee-management/employee/View";
import EditEmp from "../../../components/employee-management/employee/Edit";
import DeleteEmp from "../../../components/employee-management/employee/Delete";

const EmployeeListPage = () => {
  // 🔹 Employee State (full object, not limited fields)
  const [employees, setEmployees] = useState([
    {
      employeeId: "EMP001",
      firstName: "Rahul",
      lastName: "Sharma",
      fatherName: "Mr. Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      altPhone: "9123450000",
      pan: "ABCDE1234F",
      gender: "Male",
      dob: "1995-05-12",
      currentAddress: "Delhi",
      permanentAddress: "Delhi",
      branch: "Delhi",
      department: "HR",
      designation: "Manager",
      empCode: "MNG001",
      joiningDate: "2020-01-01",
      role: "Manager",
      basicSalary: "75000",
      accountHolder: "Rahul Sharma",
      accountNumber: "1234567890",
      ifsc: "SBIN0001234",
      bankName: "SBI",
      branchLocation: "Delhi",
      bankBranch: "Connaught Place",
      taxPayerId: "TAX12345"
    },
    {
      employeeId: "EMP002",
      firstName: "Neha",
      lastName: "Kumari",
      fatherName: "Mr. Kumar",
      email: "neha@example.com",
      phone: "9123456780",
      altPhone: "9876500000",
      pan: "XYZAB6789K",
      gender: "Female",
      dob: "1997-08-20",
      currentAddress: "Bangalore",
      permanentAddress: "Patna",
      branch: "Bangalore",
      department: "IT",
      designation: "Developer",
      empCode: "DEV002",
      joiningDate: "2021-03-15",
      role: "Developer",
      basicSalary: "60000",
      accountHolder: "Neha Kumari",
      accountNumber: "2345678901",
      ifsc: "HDFC0002345",
      bankName: "HDFC",
      branchLocation: "Bangalore",
      bankBranch: "MG Road",
      taxPayerId: "TAX67890"
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  // Dialog States
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setSelectedEmployee(null);
  };

  // 🔹 Add Employee
  const handleCreate = (newEmp) => {
    setEmployees([...employees, { ...newEmp, employeeId: `EMP${employees.length + 1}` }]);
    handleClose();
  };

  // 🔹 Update Employee
  const handleUpdate = (updatedEmp) => {
    setEmployees(employees.map(emp => emp.employeeId === updatedEmp.employeeId ? updatedEmp : emp));
    handleClose();
  };

  // 🔹 Delete Employee
  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.employeeId !== id));
    handleClose();
  };

  // 🔹 Search
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.firstName.toLowerCase().includes(search.toLowerCase()) ||
      emp.lastName.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.phone.includes(search)
  );

  return (
    <Paper sx={{ p: 2, boxShadow: "none" }}>
      {/* 🔹 Top Section: Title + Search + Add Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <h2 style={{ margin: 0 }}>Employee</h2>

        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            name="search"
            size="small"
            value={search}
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
          
          <Button variant="contained" color="primary" onClick={() => setOpenData(true)}>
            + Add Employee
          </Button>
        </Box>
      </Box>

      {/* 🔹 Employee Table */}
      <TableContainer sx={{ border: "1px solid #e0e0e0", borderRadius: "6px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Sl.No</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Employee Id</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>First Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Last Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={row.employeeId}>
                  <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                  <TableCell>{row.employeeId}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell sx={{ display: "flex", gap: "4px" }}>
                    <Tooltip title="View">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => { setSelectedEmployee(row); setViewShow(true); }}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        color="secondary"
                        onClick={() => { setSelectedEmployee(row); setEditShow(true); }}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => { setSelectedEmployee(row); setDeleteShow(true); }}
                      >
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* 🔹 Pagination */}
      <TablePagination
        component="div"
        count={filteredEmployees.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => { setRowsPerPage(+e.target.value); setPage(0); }}
      />

      {/* 🔹 Common Dialog */}
      <CommonDialog
        open={openData || viewShow || editShow || deleteShow}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Add Employee"
            : viewShow
            ? "View Employee"
            : editShow
            ? "Edit Employee"
            : deleteShow
            ? "Delete Employee"
            : ""
        }
        dialogContent={
          openData ? (
            <Create handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <View employee={selectedEmployee} />
          ) : editShow ? (
            <EditEmp employee={selectedEmployee} handleUpdate={handleUpdate} handleClose={handleClose} />
          ) : deleteShow ? (
            <DeleteEmp employee={selectedEmployee} handleDelete={handleDelete} handleClose={handleClose} />
          ) : null
        }
      />
    </Paper>
  );
};

export default EmployeeListPage;
