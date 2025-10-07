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
  Checkbox,
} from "@mui/material";
import CommonDialog from "@/components/commonDialog";
import CreateTodo from "@/components/task/to-do-task/create";
import EditTodo from "@/components/task/to-do-task/edit";
import ViewTodo from "@/components/task/to-do-task/view";
import DeleteTodo from "@/components/task/to-do-task/delete";
import {
  Add,
  EditOutlined,
  DeleteOutlined,
  VisibilityOutlined,
  Search,
  FilterList,
  Download,
  CheckCircle,
  RadioButtonUnchecked,
} from "@mui/icons-material";

const ToDoTaskPage = () => {
  const [todoTasks, setTodoTasks] = useState([
    {
      id: "TODO001",
      taskTitle: "Review Code Changes",
      description: "Review the latest code changes in the HRMS project",
      category: "Development",
      priority: "High",
      status: "Pending",
      dueDate: "2024-02-15",
      createdDate: "2024-01-20",
      completed: false
    },
    {
      id: "TODO002", 
      taskTitle: "Update Documentation",
      description: "Update API documentation for new endpoints",
      category: "Documentation",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-02-20",
      createdDate: "2024-01-22",
      completed: false
    },
    {
      id: "TODO003",
      taskTitle: "Team Meeting Preparation",
      description: "Prepare agenda for weekly team meeting",
      category: "Meeting",
      priority: "Low",
      status: "Completed",
      dueDate: "2024-02-10",
      createdDate: "2024-01-18",
      completed: true
    }
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

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
    category: "General",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
    completed: false,
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
      category: "General",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
      completed: false,
      notes: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleCreate = () => {
    const newTask = {
      id: `TODO${String(todoTasks.length + 1).padStart(3, '0')}`,
      ...formData,
      createdDate: new Date().toISOString().split('T')[0]
    };
    setTodoTasks([...todoTasks, newTask]);
    handleClose();
  };

  const handleEdit = () => {
    setTodoTasks(todoTasks.map(task => 
      task.id === selectedTask.id 
        ? { ...task, ...formData }
        : task
    ));
    handleClose();
  };

  const handleDelete = () => {
    setTodoTasks(todoTasks.filter(task => task.id !== selectedTask.id));
    handleClose();
  };

  const handleToggleComplete = (taskId) => {
    setTodoTasks(todoTasks.map(task => 
      task.id === taskId 
        ? { 
            ...task, 
            completed: !task.completed,
            status: !task.completed ? "Completed" : "Pending"
          }
        : task
    ));
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

  const filteredTasks = todoTasks.filter(task => {
    const matchesSearch = task.taskTitle.toLowerCase().includes(search.toLowerCase()) ||
                         task.description.toLowerCase().includes(search.toLowerCase()) ||
                         task.category.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filterStatus === "all" || task.status === filterStatus;
    const matchesCategory = filterCategory === "all" || task.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const completedTasks = todoTasks.filter(task => task.completed).length;
  const totalTasks = todoTasks.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

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
          Add To-do
        </button>
      </Box>

      {/* To-Do Table */}
      <Box className="hrms-card">
        <Box className="hrms-card-content" sx={{ padding: 0 }}>
          <Table className="hrms-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No.</TableCell>
                <TableCell>Task Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTasks
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((task, index) => (
                  <TableRow key={task.id} sx={{ opacity: task.completed ? 0.7 : 1 }}>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          fontWeight: 600,
                          textDecoration: task.completed ? "line-through" : "none",
                          color: task.completed ? "#666" : "inherit"
                        }}
                      >
                        {task.taskTitle}
                      </Typography>
                    </TableCell>
                    <TableCell>{task.category}</TableCell>
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
                              category: task.category,
                              priority: task.priority,
                              status: task.status,
                              dueDate: task.dueDate,
                              completed: task.completed,
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
            ? "Add To-do List"
            : openEdit
            ? "Edit To-do List"
            : openView
            ? "Task Details"
            : openDelete
            ? "Delete Task"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateTodo 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleCreate={handleCreate}
              handleClose={handleClose}
            />
          ) : openEdit ? (
            <EditTodo 
              formData={formData} 
              handleInputChange={handleInputChange}
              handleUpdate={handleEdit}
              handleClose={handleClose}
            />
          ) : openView ? (
            selectedTask && (
              <ViewTodo 
                selectedTask={selectedTask} 
                getStatusColor={getStatusColor}
                getPriorityColor={getPriorityColor}
                handleClose={handleClose}
              />
            )
          ) : openDelete ? (
            selectedTask && (
              <DeleteTodo 
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

export default ToDoTaskPage;