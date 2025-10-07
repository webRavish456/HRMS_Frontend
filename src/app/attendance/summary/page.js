"use client";

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  IconButton,
  Tooltip,
  Divider
} from '@mui/material';
import {
  Download,
  Add,
  Person,
  TrendingUp,
  AccessTime,
  CheckCircle,
  Warning,
  Error,
  Schedule,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

export default function AttendanceSummary() {
  const [selectedUser, setSelectedUser] = useState('NC');
  const [selectedPeriod, setSelectedPeriod] = useState('This month');
  const [currentMonth, setCurrentMonth] = useState('September 2025');
  const [currentPage, setCurrentPage] = useState(0);

  // Sample data
  const users = [
    { id: 'NC', name: 'Nilu Chaurasiya', role: 'Human Resource', avatar: 'NC' },
    { id: 'RK', name: 'Ravi Kumar', role: 'Developer', avatar: 'RK' },
    { id: 'AS', name: 'Amit Sharma', role: 'Manager', avatar: 'AS' },
    { id: 'PS', name: 'Priya Singh', role: 'Designer', avatar: 'PS' },
    { id: 'JS', name: 'John Smith', role: 'Analyst', avatar: 'JS' },
    { id: 'MS', name: 'Maria Garcia', role: 'Designer', avatar: 'MS' },
    { id: 'DL', name: 'David Lee', role: 'Developer', avatar: 'DL' },
    { id: 'SW', name: 'Sarah Wilson', role: 'Manager', avatar: 'SW' }
  ];

  const usersPerPage = 4;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const timeFilters = ['Today', 'This week', 'Last week', 'This month', 'Last month', 'This year'];

  const attendanceMetrics = {
    regular: 0,
    early: 0,
    late: 0,
    onLeave: 0
  };

  const summaryCards = [
    {
      title: 'Total schedule hour',
      value: '0:00:00',
      icon: <Schedule sx={{ color: '#3b82f6' }} />
    },
    {
      title: 'Total work hour',
      value: '179:00:00 (179.00 h)',
      icon: <AccessTime sx={{ color: '#10b981' }} />
    },
    {
      title: 'Total work availability',
      value: '101.70%',
      icon: <TrendingUp sx={{ color: '#f59e0b' }} />
    }
  ];

  const attendanceData = [
    {
      date: '2025-09-17',
      punchedIn: '09:00 AM',
      punchedOut: '06:00 PM',
      behavior: 'Regular',
      type: 'Full Day',
      breakTime: '1:00:00',
      totalHours: '8:00:00',
      entry: 'Manual',
      actions: 'Edit'
    },
    {
      date: '2025-09-16',
      punchedIn: '09:15 AM',
      punchedOut: '06:30 PM',
      behavior: 'Late',
      type: 'Full Day',
      breakTime: '1:00:00',
      totalHours: '8:15:00',
      entry: 'System',
      actions: 'Edit'
    }
  ];

  const getBehaviorColor = (behavior) => {
    switch (behavior) {
      case 'Regular': return '#10b981';
      case 'Early': return '#f59e0b';
      case 'Late': return '#ef4444';
      case 'On leave': return '#8b5cf6';
      default: return '#6b7280';
    }
  };

  const getBehaviorIcon = (behavior) => {
    switch (behavior) {
      case 'Regular': return <CheckCircle sx={{ fontSize: 16 }} />;
      case 'Early': return <TrendingUp sx={{ fontSize: 16 }} />;
      case 'Late': return <Warning sx={{ fontSize: 16 }} />;
      case 'On leave': return <Schedule sx={{ fontSize: 16 }} />;
      default: return <Person sx={{ fontSize: 16 }} />;
    }
  };

  return (
    <Box sx={{ padding: "1.5rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>

      {/* Action Buttons */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        gap: 2, 
        marginBottom: "2rem" 
      }}>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "0.5rem",
            textTransform: "none",
            fontWeight: 500,
            paddingX: "1.5rem",
            "&:hover": {
              backgroundColor: "#2563eb"
            }
          }}
        >
          Export all
        </Button>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{
            backgroundColor: "#3b82f6",
            color: "white",
            borderRadius: "0.5rem",
            textTransform: "none",
            fontWeight: 500,
            paddingX: "1.5rem",
            "&:hover": {
              backgroundColor: "#2563eb"
            }
          }}
        >
          Export
        </Button>
      </Box>

      {/* Users Section */}
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 600, 
          color: "#374151",
          marginBottom: "1rem"
        }}>
          Users
        </Typography>
        
        <Box sx={{ 
          display: "flex", 
          alignItems: "center", 
          gap: 2,
          position: "relative"
        }}>
          {/* Left Arrow */}
          <IconButton
            onClick={handlePreviousPage}
            sx={{
              backgroundColor: "#f3f4f6",
              color: "#6b7280",
              width: 32,
              height: 32,
              "&:hover": {
                backgroundColor: "#e5e7eb",
                color: "#374151"
              }
            }}
          >
            <ChevronLeft sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Users Carousel */}
          <Box sx={{ 
            display: "flex", 
            gap: 2, 
            justifyContent: "center",
            alignItems: "center"
          }}>
            {currentUsers.map((user) => (
              <Tooltip key={user.id} title={`${user.name} - ${user.role}`}>
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: selectedUser === user.id ? "#3b82f6" : "#e5e7eb",
                    color: selectedUser === user.id ? "white" : "#6b7280",
                    cursor: "pointer",
                    border: selectedUser === user.id ? "2px solid #3b82f6" : "2px solid transparent",
                    transition: "all 0.2s ease",
                    fontWeight: 600,
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: selectedUser === user.id ? "#2563eb" : "#d1d5db",
                      transform: "scale(1.05)"
                    }
                  }}
                  onClick={() => setSelectedUser(user.id)}
                >
                  {user.avatar}
                </Avatar>
              </Tooltip>
            ))}
          </Box>

          {/* Right Arrow */}
          <IconButton
            onClick={handleNextPage}
            sx={{
              backgroundColor: "#f3f4f6",
              color: "#6b7280",
              width: 32,
              height: 32,
              "&:hover": {
                backgroundColor: "#e5e7eb",
                color: "#374151"
              }
            }}
          >
            <ChevronRight sx={{ fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Page Indicators */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: 1, 
          marginTop: 1.5 
        }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: currentPage === index ? "#3b82f6" : "#d1d5db",
                transition: "all 0.2s ease"
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Current Month and Time Filters */}
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h5" sx={{ 
          fontWeight: 600, 
          color: "#1e293b",
          marginBottom: "1rem"
        }}>
          {currentMonth}
        </Typography>
        
        <Grid container spacing={2}>
          {timeFilters.map((filter) => (
            <Grid size={{xs:12, sm:6, md:2}} key={filter}>
              <Card 
                onClick={() => setSelectedPeriod(filter)}
                sx={{
                  borderRadius: "0.75rem",
                  boxShadow: selectedPeriod === filter 
                    ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
                    : "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                  border: selectedPeriod === filter ? "2px solid #3b82f6" : "1px solid #e5e7eb",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                    transform: "translateY(-1px)"
                  }
                }}
              >
                <CardContent sx={{ 
                  padding: "1rem",
                  textAlign: "center"
                }}>
                  <Typography variant="body2" sx={{ 
                    fontWeight: 500,
                    color: selectedPeriod === filter ? "#3b82f6" : "#6b7280",
                    fontSize: "0.875rem"
                  }}>
                    {filter}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Selected User Info */}
      <Box sx={{ marginBottom: "2rem" }}>
        {(() => {
          const user = users.find(u => u.id === selectedUser);
          return (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar sx={{ 
                width: 48, 
                height: 48, 
                backgroundColor: "#3b82f6",
                color: "white"
              }}>
                {user?.avatar}
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e293b" }}>
                  {user?.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#6b7280" }}>
                  {user?.role}
                </Typography>
              </Box>
            </Box>
          );
        })()}
      </Box>

      {/* Attendance Metrics Cards */}
      <Grid container spacing={3} sx={{ marginBottom: "2rem" }}>
        <Grid size={{xs:12, sm:6, md:3}}>
          <Card sx={{
            borderRadius: "0.75rem",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            border: "1px solid #e5e7eb",
            "&:hover": {
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }
          }}>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  borderRadius: "50%", 
                  backgroundColor: "#10b981" 
                }} />
                <Box>
                  <Typography variant="body2" sx={{ 
                    color: "#6b7280", 
                    marginBottom: "0.25rem",
                    fontSize: "0.875rem"
                  }}>
                    Regular
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    color: "#1e293b",
                    fontSize: "1.125rem"
                  }}>
                    {attendanceMetrics.regular} Days
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs:12, sm:6, md:3}}>
          <Card sx={{
            borderRadius: "0.75rem",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            border: "1px solid #e5e7eb",
            "&:hover": {
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }
          }}>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  borderRadius: "50%", 
                  backgroundColor: "#f59e0b" 
                }} />
                <Box>
                  <Typography variant="body2" sx={{ 
                    color: "#6b7280", 
                    marginBottom: "0.25rem",
                    fontSize: "0.875rem"
                  }}>
                    Early
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    color: "#1e293b",
                    fontSize: "1.125rem"
                  }}>
                    {attendanceMetrics.early} Days
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs:12, sm:6, md:3}}>
          <Card sx={{
            borderRadius: "0.75rem",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            border: "1px solid #e5e7eb",
            "&:hover": {
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }
          }}>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  borderRadius: "50%", 
                  backgroundColor: "#ef4444" 
                }} />
                <Box>
                  <Typography variant="body2" sx={{ 
                    color: "#6b7280", 
                    marginBottom: "0.25rem",
                    fontSize: "0.875rem"
                  }}>
                    Late
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    color: "#1e293b",
                    fontSize: "1.125rem"
                  }}>
                    {attendanceMetrics.late} Days
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{xs:12, sm:6, md:3}}>
          <Card sx={{
            borderRadius: "0.75rem",
            boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            border: "1px solid #e5e7eb",
            "&:hover": {
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
            }
          }}>
            <CardContent sx={{ padding: "1.5rem" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ 
                  width: 16, 
                  height: 16, 
                  borderRadius: "50%", 
                  backgroundColor: "#8b5cf6" 
                }} />
                <Box>
                  <Typography variant="body2" sx={{ 
                    color: "#6b7280", 
                    marginBottom: "0.25rem",
                    fontSize: "0.875rem"
                  }}>
                    On leave
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    color: "#1e293b",
                    fontSize: "1.125rem"
                  }}>
                    {attendanceMetrics.onLeave} Days
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ marginBottom: "2rem" }}>
        {summaryCards.map((card, index) => (
          <Grid size={{xs:12, md:4}} key={index}>
            <Card sx={{
              borderRadius: "0.75rem",
              boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
              border: "1px solid #e5e7eb",
              "&:hover": {
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
              }
            }}>
              <CardContent sx={{ padding: "1.5rem" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {card.icon}
                  <Box>
                    <Typography variant="body2" sx={{ 
                      color: "#6b7280", 
                      marginBottom: "0.25rem",
                      fontSize: "0.875rem"
                    }}>
                      {card.title}
                    </Typography>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: "#1e293b",
                      fontSize: "1.125rem"
                    }}>
                      {card.value}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Attendance Table */}
      <Card sx={{
        borderRadius: "0.75rem",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        border: "1px solid #e5e7eb"
      }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f8fafc" }}>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>DATE</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>PUNCHED IN</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>PUNCHED OUT</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>BEHAVIOR</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>TYPE</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>BREAK TIME</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>TOTAL HOURS</TableCell>
                <TableCell sx={{ fontWeight: 600, color: "#374151" }}>ENTRY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceData.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{ 
                    "&:hover": { backgroundColor: "#f8fafc" },
                    "&:last-child td": { borderBottom: 0 }
                  }}
                >
                  <TableCell sx={{ color: "#6b7280" }}>{row.date}</TableCell>
                  <TableCell sx={{ color: "#10b981", fontWeight: 500 }}>{row.punchedIn}</TableCell>
                  <TableCell sx={{ color: "#ef4444", fontWeight: 500 }}>{row.punchedOut}</TableCell>
                  <TableCell>
                    <Chip
                      icon={getBehaviorIcon(row.behavior)}
                      label={row.behavior}
                      size="small"
                      sx={{
                        backgroundColor: getBehaviorColor(row.behavior),
                        color: "white",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        height: "24px"
                      }}
                    />
                  </TableCell>
                  <TableCell sx={{ color: "#6b7280" }}>{row.type}</TableCell>
                  <TableCell sx={{ color: "#6b7280" }}>{row.breakTime}</TableCell>
                  <TableCell sx={{ color: "#1e293b", fontWeight: 500 }}>{row.totalHours}</TableCell>
                  <TableCell sx={{ color: "#6b7280" }}>{row.entry}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}