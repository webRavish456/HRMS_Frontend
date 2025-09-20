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
  const [openCreate, setOpenCreate] = useState(false);
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
    setOpenCreate(false);
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
          onClick={() => setOpenCreate(true)}
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

      {/* Create Task Dialog */}
      <CommonDialog
        open={openCreate}
        onClose={handleClose}
        dialogTitle="Assign New Task"
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
                <TextField
                  fullWidth
                  label="Assigned To"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleInputChange}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Assigned By"
                  name="assignedBy"
                  value={formData.assignedBy}
                  onChange={handleInputChange}
                  className="hrms-form-input"
                />
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
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Progress (%)"
                  name="progress"
                  type="number"
                  value={formData.progress}
                  onChange={handleInputChange}
                  inputProps={{ min: 0, max: 100 }}
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
        primaryActionText="Assign Task"
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
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Assigned To:</Typography>
                  <Typography>{selectedTask.assignedTo}</Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Assigned By:</Typography>
                  <Typography>{selectedTask.assignedBy}</Typography>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Priority:</Typography>
                  <Box className={`hrms-badge ${getPriorityColor(selectedTask.priority)}`}>
                    {selectedTask.priority}
                  </Box>
                </Grid>
                <Grid size={{xs:12, sm:6}}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Progress:</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Box sx={{ width: "100px", height: "8px", backgroundColor: "#e5e5e5", borderRadius: "4px", overflow: "hidden" }}>
                      <Box 
                        sx={{ 
                          width: `${selectedTask.progress}%`, 
                          height: "100%", 
                          backgroundColor: selectedTask.progress === 100 ? "#10b981" : "#3b82f6"
                        }} 
                      />
                    </Box>
                    <Typography variant="caption">{selectedTask.progress}%</Typography>
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
                <TextField
                  fullWidth
                  label="Assigned To"
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleInputChange}
                  className="hrms-form-input"
                />
              </Grid>
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Assigned By"
                  name="assignedBy"
                  value={formData.assignedBy}
                  onChange={handleInputChange}
                  className="hrms-form-input"
                />
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
              <Grid size={{xs:12, sm:6}}>
                <TextField
                  fullWidth
                  label="Progress (%)"
                  name="progress"
                  type="number"
                  value={formData.progress}
                  onChange={handleInputChange}
                  inputProps={{ min: 0, max: 100 }}
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

export default AssignTaskPage;