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
  const [openCreate, setOpenCreate] = useState(false);
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
    setOpenCreate(false);
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
          onClick={() => setOpenCreate(true)}
        >
          <Add />
          Add Task
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

      {/* Create Task Dialog */}
      <CommonDialog
        open={openCreate}
        onClose={handleClose}
        dialogTitle="Add New Task"
        dialogContent={
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Grid container spacing={2}>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Task Title"
                  name="taskTitle"
                  value={formData.taskTitle}
                  onChange={handleInputChange}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Task Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Development">Development</MenuItem>
                    <MenuItem value="Documentation">Documentation</MenuItem>
                    <MenuItem value="Meeting">Meeting</MenuItem>
                    <MenuItem value="General">General</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <FormControl fullWidth>
                  <InputLabel>Priority</InputLabel>
                  <Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Overdue">Overdue</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Due Date"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Additional Notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                  className="hrms-form-input"
                />
              </Grid>
            </Grid>
          </Box>
        }
        primaryAction={true}
        primaryActionText="Add Task"
        onPrimaryAction={handleCreate}
        secondaryActionText="Cancel"
        onSecondaryAction={handleClose}
        maxWidth="md"
      />

      {/* View Task Dialog */}
      <CommonDialog
        open={openView}
        onClose={handleClose}
        dialogTitle="Task Details"
        dialogContent={
          selectedTask && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Grid container spacing={2}>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Task ID:</Typography>
                  <Typography>{selectedTask.id}</Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Status:</Typography>
                  <Box className={`hrms-badge ${getStatusColor(selectedTask.status)}`}>
                    {selectedTask.status}
                  </Box>
                </Grid>
                <Grid size={{xs:12}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Task Title:</Typography>
                  <Typography>{selectedTask.taskTitle}</Typography>
                </Grid>
                <Grid size={{xs:12}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Description:</Typography>
                  <Typography>{selectedTask.description}</Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Category:</Typography>
                  <Typography>{selectedTask.category}</Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Priority:</Typography>
                  <Box className={`hrms-badge ${getPriorityColor(selectedTask.priority)}`}>
                    {selectedTask.priority}
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Due Date:</Typography>
                  <Typography>{selectedTask.dueDate}</Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Created Date:</Typography>
                  <Typography>{selectedTask.createdDate}</Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Completed:</Typography>
                  <Box className={`hrms-badge ${selectedTask.completed ? 'hrms-badge-success' : 'hrms-badge-neutral'}`}>
                    {selectedTask.completed ? 'Yes' : 'No'}
                  </Box>
                </Grid>
                {selectedTask.notes && (
                  <Grid size={{xs:12}}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Notes:</Typography>
                    <Typography>{selectedTask.notes}</Typography>
                  </Grid>
                )}
              </Grid>
            </Box>
          )
        }
        showActions={false}
        maxWidth="md"
      />

      {/* Edit Task Dialog */}
      <CommonDialog
        open={openEdit}
        onClose={handleClose}
        dialogTitle="Edit Task"
        dialogContent={
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Grid container spacing={2}>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Task Title"
                  name="taskTitle"
                  value={formData.taskTitle}
                  onChange={handleInputChange}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Task Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Development">Development</MenuItem>
                    <MenuItem value="Documentation">Documentation</MenuItem>
                    <MenuItem value="Meeting">Meeting</MenuItem>
                    <MenuItem value="General">General</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <FormControl fullWidth>
                  <InputLabel>Priority</InputLabel>
                  <Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="Overdue">Overdue</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Due Date"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField
                  fullWidth
                  label="Additional Notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  multiline
                  rows={3}
                  className="hrms-form-input"
                />
              </Grid>
            </Grid>
          </Box>
        }
        primaryAction={true}
        primaryActionText="Save Changes"
        onPrimaryAction={handleEdit}
        secondaryActionText="Cancel"
        onSecondaryAction={handleClose}
        maxWidth="md"
      />

      {/* Delete Task Dialog */}
      <CommonDialog
        open={openDelete}
        onClose={handleClose}
        dialogTitle="Delete Task"
        dialogContent={
          <Typography>
            Are you sure you want to delete the task "{selectedTask?.taskTitle}"?
          </Typography>
        }
        primaryAction={true}
        primaryActionText="Delete"
        primaryActionColor="error"
        onPrimaryAction={handleDelete}
        secondaryActionText="Cancel"
        onSecondaryAction={handleClose}
        maxWidth="sm"
      />
    </Box>
  );
};

export default ToDoTaskPage;