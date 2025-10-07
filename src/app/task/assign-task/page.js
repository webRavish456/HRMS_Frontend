"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Grid,
  InputAdornment,
  Pagination,
  Stack,
} from "@mui/material";
import CommonDialog from "@/components/commonDialog";
import CreateAssign from "@/components/task/assign-task/create";
import EditAssign from "@/components/task/assign-task/edit";
import ViewAssign from "@/components/task/assign-task/view";
import DeleteAssign from "@/components/task/assign-task/delete";
import {
  Add,
  EditOutlined,
  DeleteOutlined,
  VisibilityOutlined,
  Search,
  FilterList,
  Download,
  Assignment,
} from "@mui/icons-material";

const AssignTaskPage = () => {
  const [tasks, setTasks] = useState([
    {
      id: "TSK001",
      taskTitle: "Complete Frontend Development",
      description: "Develop responsive UI components for HRMS dashboard",
      assignedTo: "John Doe",
      assignedBy: "Project Manager",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-02-15",
      createdDate: "2024-01-20",
      progress: 65
    },
    {
      id: "TSK002", 
      taskTitle: "Database Optimization",
      description: "Optimize database queries for better performance",
      assignedTo: "Jane Smith",
      assignedBy: "Tech Lead",
      priority: "Medium",
      status: "Pending",
      dueDate: "2024-02-20",
      createdDate: "2024-01-22",
      progress: 0
    },
    {
      id: "TSK003",
      taskTitle: "API Documentation",
      description: "Create comprehensive API documentation",
      assignedTo: "Mike Johnson",
      assignedBy: "Project Manager",
      priority: "Low",
      status: "Completed",
      dueDate: "2024-02-10",
      createdDate: "2024-01-18",
      progress: 100
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");

  // Dialog States
  const [openData, setOpenData] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Form States
  const [formData, setFormData] = useState({
    taskTitle: "",
    description: "",
    assignedTo: "",
    assignedBy: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
    progress: 0,
    notes: ""
  });

  const handleClose = () => {
    setOpenData(false);
    setOpenView(false);
    setOpenEdit(false);
    setOpenDelete(false);
    setSelectedTask(null);
    setFormData({
      taskTitle: "",
      description: "",
      assignedTo: "",
      assignedBy: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
      progress: 0,
      notes: ""
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreate = () => {
    const newTask = {
      id: `TSK${String(tasks.length + 1).padStart(3, '0')}`,
      ...formData,
      createdDate: new Date().toISOString().split('T')[0]
    };
    setTasks([...tasks, newTask]);
    handleClose();
  };

  const handleEdit = () => {
    setTasks(tasks.map(task => 
      task.id === selectedTask.id 
        ? { ...task, ...formData }
        : task
    ));
    handleClose();
  };

  const handleDelete = () => {
    setTasks(tasks.filter(task => task.id !== selectedTask.id));
    handleClose();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'hrms-badge-success';
      case 'In Progress': return 'hrms-badge-warning';
      case 'Pending': return 'hrms-badge-neutral';
      case 'Overdue': return 'hrms-badge-error';
      default: return 'hrms-badge-neutral';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'hrms-badge-error';
      case 'Medium': return 'hrms-badge-warning';
      case 'Low': return 'hrms-badge-success';
      default: return 'hrms-badge-neutral';
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.taskTitle.toLowerCase().includes(search.toLowerCase()) ||
                         task.assignedTo.toLowerCase().includes(search.toLowerCase()) ||
                         task.assignedBy.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || task.status === filterStatus;
    const matchesPriority = filterPriority === "all" || task.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <Box sx={{ padding: "0.5rem" }}>
      {/* Search and Create Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <TextField
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ width: "300px", "& .MuiOutlinedInput-root": { height: "40px" } }}
        />
        <button 
          className="hrms-btn hrms-btn-primary hrms-btn-fixed-height"
          onClick={() => setOpenData(true)}
        >
          <Add />
          Assign Task
        </button>
      </Box>

      {/* Task Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Task Title</TableCell>
                <TableCell>Assigned To</TableCell>
                <TableCell>Assigned By</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTasks
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((task, index) => (
                  <TableRow key={task.id}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {task.taskTitle}
                      </Typography>
                    </TableCell>
                    <TableCell>{task.assignedTo}</TableCell>
                    <TableCell>{task.assignedBy}</TableCell>
                    <TableCell>
                      <Box className={`hrms-badge ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box className={`hrms-badge ${getStatusColor(task.status)}`}>
                        {task.status}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Box sx={{ width: "60px", height: "8px", backgroundColor: "#e5e5e5", borderRadius: "4px", overflow: "hidden" }}>
                          <Box 
                            sx={{ 
                              width: `${task.progress}%`, 
                              height: "100%", 
                              backgroundColor: task.progress === 100 ? "#10b981" : "#3b82f6",
                              transition: "width 0.3s ease"
                            }} 
                          />
                        </Box>
                        <Typography variant="caption">{task.progress}%</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{task.dueDate}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: "0.25rem" }}>
                        <IconButton 
                          size="small"
                          onClick={() => { setSelectedTask(task); setOpenView(true); }}
                          sx={{ color: "#1976D2", fontSize: "16px" }}
                        >
                          <VisibilityOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => { 
                            setSelectedTask(task); 
                            setFormData({
                              taskTitle: task.taskTitle,
                              description: task.description,
                              assignedTo: task.assignedTo,
                              assignedBy: task.assignedBy,
                              priority: task.priority,
                              status: task.status,
                              dueDate: task.dueDate,
                              progress: task.progress,
                              notes: task.notes || ""
                            });
                            setOpenEdit(true); 
                          }}
                          sx={{ color: "#000", fontSize: "16px" }}
                        >
                          <EditOutlined />
                        </IconButton>
                        <IconButton 
                          size="small"
                          onClick={() => { setSelectedTask(task); setOpenDelete(true); }}
                          sx={{ color: "#d32f2f", fontSize: "16px" }}
                        >
                          <DeleteOutlined />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
        <Box sx={{ padding: "0.75rem 1rem", borderTop: "1px solid #e5e5e5", backgroundColor: "#fafafa" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: "#333", fontWeight: 500, fontSize: "0.875rem" }}>
              Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, filteredTasks.length)} of {filteredTasks.length} tasks
            </Typography>
            <Pagination
              count={Math.ceil(filteredTasks.length / rowsPerPage)}
              page={page + 1}
              onChange={(event, value) => setPage(value - 1)}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>

      {/* Common Dialog */}
      <CommonDialog
        open={openData || openEdit || openView || openDelete}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Assign New Task"
            : openEdit
            ? "Edit Task"
            : openView
            ? "Task Details"
            : openDelete
            ? "Delete Task"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateAssign 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleCreate={handleCreate}
              handleClose={handleClose}
            />
          ) : openEdit ? (
            <EditAssign 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleUpdate={handleEdit}
              handleClose={handleClose}
            />
          ) : openView ? (
            selectedTask && (
              <ViewAssign 
                selectedTask={selectedTask} 
                getStatusColor={getStatusColor}
                getPriorityColor={getPriorityColor}
                handleClose={handleClose}
              />
            )
          ) : openDelete ? (
            selectedTask && (
              <DeleteAssign 
                selectedTask={selectedTask}
                handleDelete={handleDelete}
                handleClose={handleClose}
              />
            )
          ) : null
        }
        maxWidth={openDelete ? "xs" : "md"}
      />
    </Box>
  );
};

export default AssignTaskPage;