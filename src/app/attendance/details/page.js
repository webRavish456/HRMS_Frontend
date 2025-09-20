"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Stack,
  InputAdornment,
  Pagination,
} from "@mui/material";
import { Search, Download } from "@mui/icons-material";
import AddAttendance from "../../../components/Attendance/details/AddAttendance";
import CommonDialog from "../../../components/commonDialog";

export default function AttendanceDetails() {
  const today = new Date();
  const [view, setView] = useState("thisWeek");
  const [openDialog, setOpenDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const employees = [
    { name: "Super Admin", role: "Admin" },
    { name: "John Doe", role: "Developer" },
    { name: "Sarah Lee", role: "Designer" },
    { name: "Amit Kumar", role: "HR" },
    { name: "Emma Brown", role: "Tester" },
    { name: "Michael Johnson", role: "Manager" },
    { name: "Lisa Wilson", role: "Analyst" },
    { name: "David Smith", role: "Developer" },
    { name: "Jennifer Davis", role: "Designer" },
    { name: "Robert Brown", role: "HR" },
    { name: "Amanda Taylor", role: "Tester" },
    { name: "William Anderson", role: "Manager" },
  ];

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase()) ||
    emp.role.toLowerCase().includes(search.toLowerCase())
  );

  // Format date yyyy-mm-dd
  const formatDate = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;

  // Generate predictable hours based on employee name and date
  const getPredictableHours = (empName, dateStr) => {
    // Create a simple hash from employee name and date
    const hash = (empName + dateStr).split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    const hrs = Math.abs(hash) % 9;
    return hrs === 0 ? "0:00" : `${hrs}:00`;
  };

  // Create predictable attendance records
  const generateData = () => {
    const data = {};
    employees.forEach((emp) => {
      data[emp.name] = {};
      // Generate data for current year
      for (let m = 0; m < 12; m++) {
        const year = today.getFullYear();
        const daysInMonth = new Date(year, m + 1, 0).getDate(); // Get actual days in month
        for (let d = 1; d <= daysInMonth; d++) {
          const date = new Date(year, m, d);
          const dateStr = formatDate(date);
          data[emp.name][dateStr] = getPredictableHours(emp.name, dateStr);
        }
      }
    });
    return data;
  };

  const [records, setRecords] = useState(generateData());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Date helpers
  const getStartOfWeek = (d) => {
    const date = new Date(d);
    const diff = date.getDate() - date.getDay();
    return new Date(date.setDate(diff));
  };
  const getEndOfWeek = (d) => {
    const start = getStartOfWeek(d);
    return new Date(start.getFullYear(), start.getMonth(), start.getDate() + 6);
  };

  const isInRange = (date, start, end) =>
    new Date(date) >= new Date(start) && new Date(date) <= new Date(end);

  const getRange = () => {
    const todayStr = formatDate(today);
    let start, end;

    if (view === "today") {
      start = end = todayStr;
    } else if (view === "thisWeek") {
      start = formatDate(getStartOfWeek(today));
      end = formatDate(getEndOfWeek(today));
    } else if (view === "lastWeek") {
      const startOfThis = getStartOfWeek(today);
      start = formatDate(
        new Date(startOfThis.getFullYear(), startOfThis.getMonth(), startOfThis.getDate() - 7)
      );
      end = formatDate(
        new Date(startOfThis.getFullYear(), startOfThis.getMonth(), startOfThis.getDate() - 1)
      );
    } else if (view === "thisMonth") {
      start = formatDate(new Date(today.getFullYear(), today.getMonth(), 1));
      end = formatDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
    } else if (view === "lastMonth") {
      start = formatDate(new Date(today.getFullYear(), today.getMonth() - 1, 1));
      end = formatDate(new Date(today.getFullYear(), today.getMonth(), 0));
    } else if (view === "thisYear") {
      start = formatDate(new Date(today.getFullYear(), 0, 1));
      end = formatDate(new Date(today.getFullYear(), 11, 31));
    }
    return { start, end };
  };

  const { start, end } = getRange();

  const getDatesBetween = (s, e) => {
    const dates = [];
    let d = new Date(s);
    while (d <= new Date(e)) {
      dates.push(formatDate(d));
      d.setDate(d.getDate() + 1);
    }
    return dates;
  };

  const dateHeaders = getDatesBetween(start, end);

  const addTodayAttendance = (empName, hours) => {
    const todayStr = formatDate(today);
    setRecords((prev) => ({
      ...prev,
      [empName]: { ...prev[empName], [todayStr]: hours },
    }));
  };

  if (!isClient) {
    return (
      <Box sx={{ padding: "0.5rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }


  return (
    <Box sx={{ padding: "1.5rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Page Header */}
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 700, 
          color: "#1e293b", 
          marginBottom: "0.5rem",
          fontSize: "1.875rem"
        }}>
          HRMS Dashboard
        </Typography>
        <Typography variant="h6" sx={{ 
          color: "#64748b", 
          fontWeight: 500,
          fontSize: "1.125rem"
        }}>
          Attendance Details
        </Typography>
      </Box>

      {/* Search and Export Section */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        marginBottom: "1.5rem",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      }}>
        <TextField
          placeholder="Search attendance details..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: "#64748b" }} />
              </InputAdornment>
            ),
          }}
          sx={{ 
            width: "350px", 
            "& .MuiOutlinedInput-root": { 
              height: "44px",
              borderRadius: "0.5rem",
              "& fieldset": {
                borderColor: "#e2e8f0"
              },
              "&:hover fieldset": {
                borderColor: "#cbd5e1"
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3b82f6"
              }
            }
          }}
        />
        <Box sx={{ display: "flex", gap: "0.75rem" }}>
          <Button 
            variant="outlined" 
            startIcon={<Download />} 
            sx={{ 
              height: "44px",
              borderRadius: "0.5rem",
              borderColor: "#e2e8f0",
              color: "#64748b",
              fontWeight: 500,
              "&:hover": {
                borderColor: "#cbd5e1",
                backgroundColor: "#f8fafc"
              }
            }}
          >
            Export
          </Button>
          <Button 
            variant="contained" 
            onClick={() => setOpenDialog(true)} 
            sx={{ 
              height: "44px",
              borderRadius: "0.5rem",
              backgroundColor: "#3b82f6",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#2563eb"
              }
            }}
          >
            Add Attendance
          </Button>
        </Box>
      </Box>

      {/* Filter Buttons */}
      <Box sx={{ 
        marginBottom: "1.5rem",
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
      }}>
        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
          {[
            ["today", "Today"],
            ["thisWeek", "This Week"],
            ["lastWeek", "Last Week"],
            ["thisMonth", "This Month"],
            ["lastMonth", "Last Month"],
            ["thisYear", "This Year"],
          ].map(([val, label]) => (
            <Button
              key={val}
              variant={view === val ? "contained" : "outlined"}
              onClick={() => setView(val)}
              sx={{ 
                textTransform: "capitalize",
                borderRadius: "0.5rem",
                fontWeight: 500,
                minWidth: "100px",
                height: "36px",
                ...(view === val ? {
                  backgroundColor: "#3b82f6",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#2563eb"
                  }
                } : {
                  borderColor: "#e2e8f0",
                  color: "#64748b",
                  "&:hover": {
                    borderColor: "#cbd5e1",
                    backgroundColor: "#f8fafc"
                  }
                })
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* Attendance Details Table */}
      <Box sx={{
        backgroundColor: "white",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        overflow: "auto"
      }}>
        <Box sx={{ 
          padding: 0, 
          overflowX: "auto", 
          width: "100%", 
          maxWidth: "100%",
          minWidth: "100%",
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f5f9",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#cbd5e1",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#94a3b8",
            },
          },
        }}>
          <Table className="hrms-table" sx={{ 
            minWidth: "auto", 
            width: "max-content",
            tableLayout: "fixed"
          }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f8fafc" }}>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: "#1e293b", 
                  minWidth: "60px", 
                  position: "sticky", 
                  left: 0, 
                  backgroundColor: "#f8fafc", 
                  zIndex: 1,
                  borderBottom: "2px solid #e2e8f0",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>S. No.</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: "#1e293b", 
                  minWidth: "120px", 
                  position: "sticky", 
                  left: "60px", 
                  backgroundColor: "#f8fafc", 
                  zIndex: 1,
                  borderBottom: "2px solid #e2e8f0",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>Profile</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: "#1e293b", 
                  minWidth: "100px", 
                  position: "sticky", 
                  left: "180px", 
                  backgroundColor: "#f8fafc", 
                  zIndex: 1,
                  borderBottom: "2px solid #e2e8f0",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>Role</TableCell>
                <TableCell sx={{ 
                  fontWeight: 600, 
                  color: "#1e293b", 
                  minWidth: "80px", 
                  position: "sticky", 
                  left: "280px", 
                  backgroundColor: "#f8fafc", 
                  zIndex: 1,
                  borderBottom: "2px solid #e2e8f0",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>Total</TableCell>
                {dateHeaders.map((d) => (
                  <TableCell key={d} sx={{ 
                    fontWeight: 600, 
                    color: "#1e293b", 
                    minWidth: "80px", 
                    width: "80px",
                    textAlign: "center",
                    borderBottom: "2px solid #e2e8f0",
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em"
                  }}>
                    {new Date(d).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((emp, index) => {
              const empRecords = records[emp.name];
              let total = 0;
              dateHeaders.forEach((d) => {
                const val = empRecords[d] || "0:00";
                total += parseInt(val.split(":")[0], 10);
              });

              return (
                <TableRow key={emp.name} sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}>
                  <TableCell sx={{ position: "sticky", left: 0, backgroundColor: "white", zIndex: 1 }}>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell sx={{ position: "sticky", left: "60px", backgroundColor: "white", zIndex: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {emp.name}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ position: "sticky", left: "180px", backgroundColor: "white", zIndex: 1 }}>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                      {emp.role}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ position: "sticky", left: "280px", backgroundColor: "white", zIndex: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {total}:00
                    </Typography>
                  </TableCell>
                  {dateHeaders.map((d) => (
                    <TableCell key={d} sx={{ 
                      minWidth: "80px", 
                      width: "80px",
                      textAlign: "center"
                    }}>
                      <Typography variant="body2">
                        {empRecords[d] || "0:00"}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </Box>
      </Box>

      {/* Pagination */}
      <Box sx={{ padding: "0.75rem 1rem", borderTop: "1px solid #e5e5e5", backgroundColor: "#fafafa" }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" sx={{ color: "#333", fontWeight: 500, fontSize: "0.875rem" }}>
            Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredEmployees.length)} of {filteredEmployees.length} records
          </Typography>
          <Pagination
            count={Math.ceil(filteredEmployees.length / rowsPerPage)}
            page={page + 1}
            onChange={(_, newPage) => setPage(newPage - 1)}
            color="primary"
            size="small"
          />
        </Stack>
      </Box>

      {/* Common Dialog */}
      <CommonDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        dialogTitle="Add Today Attendance"
        dialogContent={
          <AddAttendance 
            employees={employees} 
            addTodayAttendance={addTodayAttendance} 
          />
        }
        primaryAction={true}
        primaryActionText="Save"
        onPrimaryAction={() => setOpenDialog(false)}
        secondaryActionText="Cancel"
        maxWidth="sm"
      />
    </Box>
  );
}






























// "use client";
// import * as React from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead,
//   TableRow, Paper, Button, Dialog, DialogTitle, DialogContent,
//   TextField, DialogActions, Box
// } from "@mui/material";

// // Generate current month's dates dynamically
// const getMonthDates = () => {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = now.getMonth();
//   const days = new Date(year, month + 1, 0).getDate();
//   return Array.from({ length: days }, (_, i) => `Aug ${i + 1}`);
// };

// // Random total hours generator (hh:mm)
// const randomHours = () => {
//   const h = Math.floor(Math.random() * 9) + 1;
//   const m = Math.floor(Math.random() * 59);
//   return `${h}:${m.toString().padStart(2, "0")}`;
// };

// export default function AttendanceDetails() {
//   const [rows, setRows] = React.useState([
//     { profile: "Super Admin", total: "6:45", daily: Array(31).fill("09:00") },
//     { profile: "Manager", total: "7:20", daily: Array(31).fill("—") },
//   ]);

//   const [open, setOpen] = React.useState(false);
//   const [form, setForm] = React.useState({ profile: "", total: "", daily: [] });

//   const dates = getMonthDates();

//   // Summary data
//   const summary = [
//     { profile: "Today", total: randomHours() },
//     { profile: "This Week", total: randomHours() },
//     { profile: "Last Week", total: randomHours() },
//     { profile: "This Month", total: randomHours() },
//     { profile: "Last Month", total: randomHours() },
//     { profile: "This Year", total: randomHours() },
//   ];

//   const handleAdd = () => {
//     setRows([...rows, { ...form, daily: Array(31).fill("—") }]);
//     setOpen(false);
//     setForm({ profile: "", total: "", daily: [] });
//   };

//   return (
//     <div style={{ width: "100%", overflowX: "auto" }}>
//       <Box display="flex" justifyContent="flex-end" mb={1}>
//         <Button
//           variant="contained"
//           onClick={() => setOpen(true)}
//         >
//           Add Attendance
//         </Button>
//       </Box>

//       <TableContainer component={Paper}>
//         <Table size="small" style={{ minWidth: 900 }}>
//           <TableHead>
//             <TableRow sx={{ background: "#f0f0f0" }}>
//               <TableCell sx={{ fontWeight: "bold" }}>Profile</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
//               {dates.map((d) => (
//                 <TableCell key={d} sx={{ fontWeight: "bold" }}>{d}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {/* Summary Rows */}
//             {summary.map((s, i) => (
//               <TableRow key={i} sx={{ background: "#fafafa" }}>
//                 <TableCell sx={{ fontWeight: "bold" }}>{s.profile}</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>{s.total}</TableCell>
//                 {dates.map((_, j) => (
//                   <TableCell key={j}>—</TableCell>
//                 ))}
//               </TableRow>
//             ))}

//             {/* User Rows */}
//             {rows.map((r, i) => (
//               <TableRow key={i}>
//                 <TableCell>{r.profile}</TableCell>
//                 <TableCell>{r.total}</TableCell>
//                 {r.daily.map((v, j) => (
//                   <TableCell key={j}>{v}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Attendance Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>Add Attendance</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="dense"
//             label="Profile"
//             fullWidth
//             value={form.profile}
//             onChange={(e) => setForm({ ...form, profile: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Total"
//             fullWidth
//             value={form.total}
//             onChange={(e) => setForm({ ...form, total: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleAdd} variant="contained">Add</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
































// "use client";
// import * as React from "react";
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead,
//   TableRow, Paper, Button, Dialog, DialogTitle, DialogContent,
//   TextField, DialogActions
// } from "@mui/material";

// // Generate current month's dates dynamically
// const getMonthDates = () => {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = now.getMonth();
//   const days = new Date(year, month + 1, 0).getDate();
//   return Array.from({ length: days }, (_, i) => `Aug ${i + 1}`);
// };

// export default function AttendanceDetails() {
//   const [rows, setRows] = React.useState([
//     { profile: "Super Admin", total: "0:00", daily: Array(31).fill("09:00") },
//     { profile: "Manager", total: "12:35", daily: Array(31).fill("—") },
//   ]);

//   const [open, setOpen] = React.useState(false);
//   const [form, setForm] = React.useState({ profile: "", total: "", daily: [] });

//   const dates = getMonthDates();

//   const handleAdd = () => {
//     setRows([...rows, { ...form, daily: Array(31).fill("—") }]);
//     setOpen(false);
//     setForm({ profile: "", total: "", daily: [] });
//   };

//   return (
//     <div style={{ width: "100%", overflowX: "auto" }}>
//       <Button
//         variant="contained"
//         sx={{ float: "right", mb: 1 }}
//         onClick={() => setOpen(true)}
//       >
//         Add Attendance
//       </Button>

//       <TableContainer component={Paper}>
//         <Table size="small" style={{ minWidth: 900 }}>
//           <TableHead>
//             <TableRow sx={{ background: "#f0f0f0" }}>
//               <TableCell sx={{ fontWeight: "bold" }}>Profile</TableCell>
//               <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
//               {dates.map((d) => (
//                 <TableCell key={d} sx={{ fontWeight: "bold" }}>{d}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {rows.map((r, i) => (
//               <TableRow key={i}>
//                 <TableCell>{r.profile}</TableCell>
//                 <TableCell>{r.total}</TableCell>
//                 {r.daily.map((v, j) => (
//                   <TableCell key={j}>{v}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Add Attendance Dialog */}
//       <Dialog open={open} onClose={() => setOpen(false)}>
//         <DialogTitle>Add Attendance</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="dense"
//             label="Profile"
//             fullWidth
//             value={form.profile}
//             onChange={(e) => setForm({ ...form, profile: e.target.value })}
//           />
//           <TextField
//             margin="dense"
//             label="Total"
//             fullWidth
//             value={form.total}
//             onChange={(e) => setForm({ ...form, total: e.target.value })}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpen(false)}>Cancel</Button>
//           <Button onClick={handleAdd} variant="contained">Add</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }