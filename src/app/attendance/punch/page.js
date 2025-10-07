"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  AccessTime,
  Login,
  Logout,
  Schedule,
  LocationOn,
  CheckCircle,
} from "@mui/icons-material";
import PunchConfirmation from "../../../components/Attendance/punch/PunchConfirmation";
import CommonDialog from "../../../components/commonDialog";

const AttendancePunchPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [punchRecords, setPunchRecords] = useState([
    {
      id: "PCH001",
      date: "2024-01-28",
      punchIn: "09:00:00",
      punchOut: "18:00:00",
      totalHours: "9h 0m",
      status: "Present",
      location: "Office"
    },
    {
      id: "PCH002",
      date: "2024-01-27",
      punchIn: "09:15:00",
      punchOut: "17:45:00",
      totalHours: "8h 30m",
      status: "Present",
      location: "Office"
    },
    {
      id: "PCH003",
      date: "2024-01-26",
      punchIn: "09:30:00",
      punchOut: null,
      totalHours: "In Progress",
      status: "Present",
      location: "Office"
    }
  ]);

  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [isPunchedOut, setIsPunchedOut] = useState(false);
  const [openData, setOpenData] = useState(false);
  const [punchType, setPunchType] = useState("");
  const [breakNote, setBreakNote] = useState("");

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePunch = (type) => {
    setPunchType(type);
    setOpenData(true);
  };

  const handleBreak = () => {
    setPunchType("break");
    setOpenData(true);
  };

  const handleClose = () => {
    setOpenData(false);
    setPunchType("");
    setBreakNote("");
  };

  const confirmBreak = () => {
    // Handle break logic here
    console.log("Break started with note:", breakNote);
    handleClose();
  };

  const confirmPunch = () => {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    const dateString = now.toISOString().split('T')[0];

    if (punchType === "in") {
      const newRecord = {
        id: `PCH${String(punchRecords.length + 1).padStart(3, '0')}`,
        date: dateString,
        punchIn: timeString,
        punchOut: null,
        totalHours: "In Progress",
        status: "Present",
        location: "Office"
      };
      setPunchRecords([newRecord, ...punchRecords]);
      setIsPunchedIn(true);
    } else {
      // Update the latest record with punch out
      const updatedRecords = [...punchRecords];
      const latestRecord = updatedRecords.find(record => !record.punchOut);
      if (latestRecord) {
        latestRecord.punchOut = timeString;
        const punchInTime = new Date(`${latestRecord.date} ${latestRecord.punchIn}`);
        const punchOutTime = new Date(`${latestRecord.date} ${timeString}`);
        const diffMs = punchOutTime - punchInTime;
        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        latestRecord.totalHours = `${hours}h ${minutes}m`;
      }
      setPunchRecords(updatedRecords);
      setIsPunchedIn(false);
      setIsPunchedOut(true);
    }
    handleClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present': return 'hrms-badge-success';
      case 'Late': return 'hrms-badge-warning';
      case 'Absent': return 'hrms-badge-error';
      default: return 'hrms-badge-neutral';
    }
  };

  return (
    <Box sx={{ padding: "1rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* Page Header */}
      <Box sx={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#374151" }}>
              Good Morning, Super Admin
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography variant="body1" sx={{ color: "#64748b" }}>
              It's {currentTime.toLocaleTimeString()} (Asia/Calcutta)
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "#64748b" }}>
            You are today!
          </Typography>
        </Box>
        
        {/* Action Buttons - Right Top */}
        <Box sx={{ display: "flex", gap: "1rem" }}>
          {!isPunchedIn && !isPunchedOut ? (
            <Button
              variant="contained"
              onClick={() => handlePunch("in")}
              sx={{
                padding: "0.5rem 1rem",
                backgroundColor: "#10b981",
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#059669"
                }
              }}
            >
              Punch In
            </Button>
          ) : isPunchedIn && !isPunchedOut ? (
            <>
              <Button
                variant="contained"
                onClick={handleBreak}
                sx={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f59e0b",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#d97706"
                  }
                }}
              >
                Break Time
              </Button>
              <Button
                variant="contained"
                onClick={() => handlePunch("out")}
                sx={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#ef4444",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#dc2626"
                  }
                }}
              >
                Punch Out
              </Button>
            </>
          ) : null}
        </Box>
      </Box>


      {/* Main Content Grid */}
      <Grid container spacing={3}>
        {/* Left Column - Punch Status & Leave Info */}
        <Grid size={{xs:12, lg:8}}>
          {/* Punch Status Cards */}
          <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
            <Grid size={{xs:12, sm:6}}>
              <Card sx={{ 
                borderRadius: "12px", 
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "1px solid #e2e8f0"
              }}>
                <CardContent sx={{ textAlign: "center", padding: "1.5rem" }}>
                  <Box sx={{ 
                    backgroundColor: "#f0f9ff", 
                    borderRadius: "50%", 
                    width: "60px", 
                    height: "60px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    margin: "0 auto 1rem" 
                  }}>
                    <Login sx={{ fontSize: 30, color: "#0ea5e9" }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "0.5rem" }}>
                    {isPunchedIn ? "09:00 AM" : "Not Yet"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748b" }}>
                    Punch in time
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid size={{xs:12, sm:6}}>
              <Card sx={{ 
                borderRadius: "12px", 
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "1px solid #e2e8f0"
              }}>
                <CardContent sx={{ textAlign: "center", padding: "1.5rem" }}>
                  <Box sx={{ 
                    backgroundColor: "#fef3c7", 
                    borderRadius: "50%", 
                    width: "60px", 
                    height: "60px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    margin: "0 auto 1rem" 
                  }}>
                    <Logout sx={{ fontSize: 30, color: "#f59e0b" }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "0.5rem" }}>
                    {isPunchedIn ? "Not Yet" : "06:00 PM"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748b" }}>
                    Punch out time
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Leave Information */}
          <Card sx={{ 
            borderRadius: "12px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            marginBottom: "2rem"
          }}>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "1.5rem" }}>
                Leave Information
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6, md:3}}>
                  <Box sx={{ textAlign: "center", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>
                      12
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", marginBottom: "0.5rem" }}>
                      Total leave allowance
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                      <Chip label="CL - 6" size="small" sx={{ backgroundColor: "#dbeafe", color: "#1e40af" }} />
                      <Chip label="SL - 6" size="small" sx={{ backgroundColor: "#dcfce7", color: "#166534" }} />
                    </Box>
                  </Box>
                </Grid>
                
                <Grid size={{xs:12, sm:6, md:3}}>
                  <Box sx={{ textAlign: "center", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>
                      2
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", marginBottom: "0.5rem", whiteSpace: "nowrap" }}>
                      Leave taken
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                      <Chip label="Paid - 2" size="small" sx={{ backgroundColor: "#dbeafe", color: "#1e40af" }} />
                      <Chip label="Unpaid - 0" size="small" sx={{ backgroundColor: "#dcfce7", color: "#166534" }} />
                    </Box>
                  </Box>
                </Grid>
                
                <Grid size={{xs:12, sm:6, md:3}}>
                  <Box sx={{ textAlign: "center", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>
                      10
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", marginBottom: "0.5rem" }}>
                      Total leave available
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                      <Chip label="CL - 4" size="small" sx={{ backgroundColor: "#dbeafe", color: "#1e40af" }} />
                      <Chip label="SL - 6" size="small" sx={{ backgroundColor: "#dcfce7", color: "#166534" }} />
                    </Box>
                  </Box>
                </Grid>
                
                <Grid size={{xs:12, sm:6, md:3}}>
                  <Box sx={{ textAlign: "center", padding: "1rem", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: "#1e293b", marginBottom: "0.5rem" }}>
                      0
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#64748b", marginBottom: "0.5rem" }}>
                      Leave request pending
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                      <Chip label="Paid - 0" size="small" sx={{ backgroundColor: "#dbeafe", color: "#1e40af" }} />
                      <Chip label="Unpaid - 0" size="small" sx={{ backgroundColor: "#dcfce7", color: "#166534" }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Recent Punch Records */}
          <Card sx={{ 
            borderRadius: "12px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "1.5rem" }}>
                Recent Punch Records
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Date</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Punch In</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Punch Out</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Total Hours</TableCell>
                      <TableCell sx={{ fontWeight: 600, color: "#374151" }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {punchRecords.slice(0, 5).map((record) => (
                      <TableRow key={record.id} sx={{ '&:hover': { backgroundColor: '#f8fafc' } }}>
                        <TableCell>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {new Date(record.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <Login sx={{ fontSize: 16, color: "#10b981" }} />
                            <Typography>{record.punchIn}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          {record.punchOut ? (
                            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                              <Logout sx={{ fontSize: 16, color: "#ef4444" }} />
                              <Typography>{record.punchOut}</Typography>
                            </Box>
                          ) : (
                            <Typography sx={{ color: "#666", fontStyle: "italic" }}>
                              In Progress
                            </Typography>
                          )}
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {record.totalHours}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={record.status} 
                            size="small" 
                            sx={{ 
                              backgroundColor: record.status === 'Present' ? '#dcfce7' : '#fef3c7',
                              color: record.status === 'Present' ? '#166534' : '#92400e'
                            }} 
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Time Log */}
        <Grid size={{xs:12, lg:4}}>
          <Card sx={{ 
            borderRadius: "12px", 
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            height: "fit-content"
          }}>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b", marginBottom: "1.5rem" }}>
                Time Log
              </Typography>
              
              {/* Today */}
              <Box sx={{ marginBottom: "2rem" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#374151", marginBottom: "1rem" }}>
                  Today
                </Typography>
                <Box sx={{ backgroundColor: "#f8fafc", padding: "1rem", borderRadius: "8px" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>9h 0m 0s</Typography>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>Scheduled</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>00:00</Typography>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>Worked</Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>00:00</Typography>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>Break</Typography>
                  </Box>
                </Box>
              </Box>

              {/* This Month */}
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#374151", marginBottom: "1rem" }}>
                  This Month
                </Typography>
                <Box sx={{ backgroundColor: "#f8fafc", padding: "1rem", borderRadius: "8px" }}>
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <AccessTime sx={{ fontSize: 16, color: "#64748b" }} />
                      <Typography variant="body2" sx={{ color: "#64748b" }}>Total Schedule time</Typography>
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b" }}>180h 0m</Typography>
                  </Box>
                  
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#64748b", marginBottom: "0.5rem" }}>Worked time</Typography>
                    <Box sx={{ backgroundColor: "#e2e8f0", borderRadius: "4px", height: "8px", marginBottom: "0.5rem" }}>
                      <Box sx={{ backgroundColor: "#3b82f6", height: "100%", width: "75%", borderRadius: "4px" }}></Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>135h 0m</Typography>
                  </Box>
                  
                  <Box sx={{ marginBottom: "1rem" }}>
                    <Typography variant="body2" sx={{ color: "#64748b", marginBottom: "0.5rem" }}>Shortage time</Typography>
                    <Box sx={{ backgroundColor: "#e2e8f0", borderRadius: "4px", height: "8px", marginBottom: "0.5rem" }}>
                      <Box sx={{ backgroundColor: "#f59e0b", height: "100%", width: "25%", borderRadius: "4px" }}></Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>45h 0m</Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="body2" sx={{ color: "#64748b", marginBottom: "0.5rem" }}>Over time</Typography>
                    <Box sx={{ backgroundColor: "#e2e8f0", borderRadius: "4px", height: "8px", marginBottom: "0.5rem" }}>
                      <Box sx={{ backgroundColor: "#10b981", height: "100%", width: "10%", borderRadius: "4px" }}></Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: "#64748b" }}>18h 0m</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Common Dialog */}
      <CommonDialog
        open={openData}
        onClose={handleClose}
        dialogTitle={
          punchType === "in" 
            ? "Confirm Punch In" 
            : punchType === "out" 
            ? "Confirm Punch Out" 
            : punchType === "break"
            ? "Start Break"
            : ""
        }
        dialogContent={
          punchType === "break" ? (
            <Box sx={{ padding: "1rem 0" }}>
              <TextField
                fullWidth
                label="Take break note"
                multiline
                rows={3}
                value={breakNote}
                onChange={(e) => setBreakNote(e.target.value)}
                placeholder="Take break note"
                sx={{ marginBottom: "1rem" }}
              />
              <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    padding: "0.5rem 1rem",
                    textTransform: "none",
                    borderColor: "#666",
                    color: "#666",
                    "&:hover": {
                      borderColor: "#333",
                      color: "#333"
                    }
                  }}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  onClick={confirmBreak}
                  sx={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#f59e0b",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#d97706"
                    }
                  }}
                >
                  Start
                </Button>
              </Box>
            </Box>
          ) : (
            <Box>
              <PunchConfirmation 
                punchType={punchType}
                currentTime={currentTime}
                location="Office, Mumbai, Maharashtra"
              />
              <Box sx={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end", marginTop: "1rem" }}>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    padding: "0.5rem 1rem",
                    textTransform: "none",
                    borderColor: "#666",
                    color: "#666",
                    "&:hover": {
                      borderColor: "#333",
                      color: "#333"
                    }
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={confirmPunch}
                  sx={{
                    padding: "0.5rem 1rem",
                    backgroundColor: punchType === "in" ? "#10b981" : "#ef4444",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: punchType === "in" ? "#059669" : "#dc2626"
                    }
                  }}
                >
                  Confirm {punchType === "in" ? "Punch In" : "Punch Out"}
                </Button>
              </Box>
            </Box>
          )
        }
        maxWidth="sm"
      />
    </Box>
  );
};

export default AttendancePunchPage;