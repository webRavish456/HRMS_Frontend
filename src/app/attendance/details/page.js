"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack,
  InputAdornment,
  Pagination,
} from "@mui/material";
import { Search, Download } from "@mui/icons-material";

export default function AttendanceDetails() {
  const today = new Date();
  const [view, setView] = useState("thisWeek");
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


  if (!isClient) {
    return (
      <Box sx={{ padding: "0.5rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved": return {
        backgroundColor: "#dcfce7",
        color: "#166534"
      };
      case "Pending": return {
        backgroundColor: "#fef3c7",
        color: "#92400e"
      };
      case "Rejected": return {
        backgroundColor: "#fee2e2",
        color: "#dc2626"
      };
      default: return {
        backgroundColor: "#f3f4f6",
        color: "#374151"
      };
    }
  };

  return (
    <Box sx={{ 
      padding: "1.5rem", 
      backgroundColor: "#f8fafc", 
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Fixed Header Section */}
      <Box sx={{ 
        position: "sticky",
        top: 0,
        backgroundColor: "#f8fafc",
        zIndex: 10,
        paddingBottom: "1rem"
      }}>
        {/* Search and Export Section */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "1.5rem"
        }}>
          <Box></Box>
          <Box sx={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
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
                  backgroundColor: "white",
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
            <Button 
              variant="contained" 
              startIcon={<Download />} 
              sx={{ 
                height: "44px",
                borderRadius: "0.5rem",
                backgroundColor: "#3b82f6",
                color: "white",
                fontWeight: 600,
                fontSize: "0.875rem",
                "&:hover": {
                  backgroundColor: "#2563eb"
                }
              }}
            >
              Export
            </Button>
          </Box>
        </Box>

        {/* Filter Buttons - Right Side */}
        <Box sx={{ 
          marginBottom: "1.5rem"
        }}>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="flex-end">
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
                  fontWeight: 600,
                  minWidth: "110px",
                  height: "40px",
                  fontSize: "0.875rem",
                  ...(view === val ? {
                    backgroundColor: "#3b82f6",
                    color: "white",
                    boxShadow: "0 2px 4px 0 rgb(59 130 246 / 0.3)",
                    "&:hover": {
                      backgroundColor: "#2563eb",
                      boxShadow: "0 4px 8px 0 rgb(59 130 246 / 0.4)"
                    }
                  } : {
                    borderColor: "#e2e8f0",
                    color: "#64748b",
                    backgroundColor: "white",
                    "&:hover": {
                      borderColor: "#3b82f6",
                      backgroundColor: "#f8fafc",
                      color: "#3b82f6"
                    }
                  })
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Attendance Details Table */}
      <Box className="hrms-card" sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <TableContainer 
          component={Box}
          className="hrms-card-content"
          sx={{ 
            padding: 0, 
            maxHeight: "calc(100vh - 300px)",
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px"
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f1f1f1",
              borderRadius: "4px"
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#c1c1c1",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#a8a8a8"
              }
            }
          }}
        >
          <Table className="hrms-table">
            <TableHead sx={{ position: "relative", top: 0, backgroundColor: "#f8fafc", zIndex: 1 }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, color: "#374151", backgroundColor: "#f8fafc" }}>S. No.</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", backgroundColor: "#f8fafc" }}>Employee Name</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", backgroundColor: "#f8fafc" }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151", backgroundColor: "#f8fafc" }}>Total Hours</TableCell>
                {dateHeaders.map((d) => (
                  <TableCell key={d} sx={{ fontWeight: 600, color: "#374151", backgroundColor: "#f8fafc" }}>
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
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {emp.name}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>
                      {emp.role}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {total}:00
                    </Typography>
                  </TableCell>
                  {dateHeaders.map((d) => (
                    <TableCell key={d}>
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
        </TableContainer>

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
      </Box>

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