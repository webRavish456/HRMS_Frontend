
"use client";
import Layout from "../../../components/Layout";
import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, IconButton, TextField
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommonDialog from "@/components/commonDialog";

// 🔹 Import Assign Task CRUD
import CreateAssign from "@/components/task/all-task/assign-task/create";
import EditAssign from "@/components/task/all-task/assign-task/edit";
import DeleteAssign from "@/components/task/all-task/assign-task/delete";
import ViewAssign from "@/components/task/all-task/assign-task/view";
// 🔹 Import To Do Task CRUD
import CreateTodo from "@/components/task/all-task/to-do-task/create";
import EditTodo from "@/components/task/all-task/to-do-task/edit";
import DeleteTodo from "@/components/task/all-task/to-do-task/delete";
import ViewTodo from "@/components/task/all-task/to-do-task/view";

const TaskTables = () => {
  const [activeTable, setActiveTable] = useState("assign");
  const [search, setSearch] = useState("");

  // Dialog states
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  // Selected row data
  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔹 createData helper (To Do Task)
  const createTodoData = (id, taskName,priority, startDate, dueDate, description,  remark, status) => {
    const handleView = () => {
      setViewData({ id, taskName,priority,  startDate, dueDate, description, remark, status });
      setViewShow(true);
    };
    const handleEdit = () => {
      setEditData({ id, taskName, priority, startDate, dueDate,description, remark, status });
      setEditShow(true);
    };
    const handleDelete = () => {
      setDeleteData({ id, taskName, priority, startDate, dueDate, description, remark, status });
      setDeleteShow(true);
    };
    return {
      id, taskName,priority,  startDate, dueDate, description, remark,status,
      action: (
        <>
          <IconButton style={{ color: "#072eb0" }} onClick={handleView}><VisibilityIcon /></IconButton>
          <IconButton style={{ color: "#4caf50" }} onClick={handleEdit}><EditIcon /></IconButton>
          <IconButton style={{ color: "#f44336" }} onClick={handleDelete}><DeleteIcon /></IconButton>
        </>
      )
    };
  };

  // 🔹 createData helper (Assign Task)
  const createAssignData = (id, taskName, priority, startDate, dueDate, assignee, description, remarks, status) => {
    const handleView = () => {
      setViewData({ id, taskName, priority, startDate, dueDate, assignee, description, remarks, status });
      setViewShow(true);
    };
    const handleEdit = () => {
      setEditData({ id, taskName, priority, startDate, dueDate,  assignee, description, remarks, status });
      setEditShow(true);
    };
    const handleDelete = () => {
      setDeleteData({ id, taskName, priority, startDate, dueDate,  assignee,description, remarks, status });
      setDeleteShow(true);
    };
    return {
      id, taskName, priority, startDate, dueDate, assignee, description, remarks, status,
      action: (
        <>
          <IconButton style={{ color: "#072eb0" }} onClick={handleView}><VisibilityIcon /></IconButton>
          <IconButton style={{ color: "#4caf50" }} onClick={handleEdit}><EditIcon /></IconButton>
          <IconButton style={{ color: "#f44336" }} onClick={handleDelete}><DeleteIcon /></IconButton>
        </>
      )
    };
  };

  // 🔹 Dummy Data
  const [todoRows] = useState([
    createTodoData(1, "Jjkjo", "Frontend Fix", "05-09-2025", "05-09-2025","Manager","good", "In Progress"),
    createTodoData(2, "jhhuh", "Backend API", "10-09-2025","05-09-2025", "Team Lead","good", "Pending"),
  ]);

  const [assignRows] = useState([
    createAssignData(1, "qasth", "High", "10-01-2025", "11-01-2025","huih" ,"gguyh", "afgh", "Completed"),
    createAssignData(2, "abc", "High", "22-11-2024", "22-11-2024","bjj", "This is first task", "remarks", "Pending"),
  ]);

  // 🔹 Search Filter
  const filteredAssign = assignRows.filter((row) =>
    Object.values(row).some((val) => val.toString().toLowerCase().includes(search.toLowerCase()))
  );
  const filteredTodo = todoRows.filter((row) =>
    Object.values(row).some((val) => val.toString().toLowerCase().includes(search.toLowerCase()))
  );

  // 🔹 Handlers
  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setViewData(null);
    setEditData(null);
    setDeleteData(null);
  };

  const handleCreate = (data) => {
    console.log("Created:", data);
    setOpenData(false);
  };

  const handleUpdate = (data) => {
    console.log("Updated:", data);
    setEditShow(false);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      console.log("Deleted:", deleteData);
      setIsDeleting(false);
      setDeleteShow(false);
    }, 1000);
  };

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        {/* Switch Buttons */}
        <div style={{ marginBottom: "20px" }}>
          <Button
            variant={activeTable === "assign" ? "contained" : "outlined"}
            style={{ marginRight: "10px" }}
            onClick={() => { setActiveTable("assign"); setSearch(""); }}
          >
            Assign Task
          </Button>
          <Button
            variant={activeTable === "todo" ? "contained" : "outlined"}
            onClick={() => { setActiveTable("todo"); setSearch(""); }}
          >
            To Do Task
          </Button>
        </div>

        {/* Search & Add Button */}
        <div style={{ marginBottom: "20px", justifyContent:'flex-end',gap:'10px', display:'flex' }} >
          <TextField
            label="Search..."
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: "300px" }}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#1a237e", color: "#fff", fontWeight: "bold" }}
            onClick={() => setOpenData(true)}
          >
            {activeTable === "assign" ? "Create Assign Task" : "Create To Do Task"}
          </Button>
        </div>

        {/* To Do Task Table */}
        {activeTable === "todo" && (
          <TableContainer component={Paper}>

          <h2>To do task</h2>
            <Table>
              <TableHead className="forheadcolor">
                <TableRow>
                  <TableCell><b>Task Name</b></TableCell>
                  <TableCell><b>Priority</b></TableCell>
                  <TableCell><b>Start date</b></TableCell>
                  <TableCell><b>Due date</b></TableCell>
                  <TableCell> <b>Description</b></TableCell>
                  <TableCell><b>Remark</b></TableCell>
                  <TableCell><b>Status</b></TableCell>
                  <TableCell><b>Action</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="forcolor">
                {filteredTodo.length > 0 ? (
                  filteredTodo.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.taskName}</TableCell>
                      <TableCell>{row.priority}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.dueDate}</TableCell>
                      <TableCell>{row.description}</TableCell>
                       <TableCell>{row. remark}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.action}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow><TableCell colSpan={6} align="center">No results found</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Assign Task Table */}
        {activeTable === "assign" && (
          <TableContainer component={Paper}>
           <h2>Assign Task</h2>
            <Table>
              <TableHead className="forheadcolor">
                <TableRow>
                  <TableCell><b>Task Name</b></TableCell>
                  <TableCell><b>Priority</b></TableCell>
                  <TableCell><b>Start Date</b></TableCell>
                  <TableCell><b>Due Date</b></TableCell>
                  <TableCell><b>Assignee</b></TableCell>
                  <TableCell><b>Description</b></TableCell>
                  <TableCell><b>Remarks</b></TableCell>
                  <TableCell><b>Status</b></TableCell>
                  <TableCell><b>Action</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="forcolor">
                {filteredAssign.length > 0 ? (
                  filteredAssign.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.taskName}</TableCell>
                      <TableCell>{row.priority}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.dueDate}</TableCell>
                      <TableCell>{row. assignee}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.remarks}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.action}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow><TableCell colSpan={9} align="center">No results found</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>

      {/* 🔹 Common Dialog */}
      <CommonDialog
        open={openData || viewShow || editShow || deleteShow}
        onClose={handleClose}
        dialogTitle={
          openData
            ? activeTable === "assign" ? "Create Assign Task" : "Create To Do Task"
            : viewShow
            ? activeTable === "assign" ? "View Assign Task" : "View To Do Task"
            : editShow
            ? activeTable === "assign" ? "Edit Assign Task" : "Edit To Do Task"
            : deleteShow
            ? activeTable === "assign" ? "Delete Assign Task" : "Delete To Do Task"
            : ""
        }
        dialogContent={
          openData ? (
            activeTable === "assign"
              ? <CreateAssign handleCreate={handleCreate} handleClose={handleClose} />
              : <CreateTodo handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            activeTable === "assign"
              ? <ViewAssign viewData={viewData} />
              : <ViewTodo viewData={viewData} />
          ) : editShow ? (
            activeTable === "assign"
              ? <EditAssign editData={editData} handleUpdate={handleUpdate} handleClose={handleClose} />
              : <EditTodo editData={editData} handleUpdate={handleUpdate} handleClose={handleClose} />
          ) : deleteShow ? (
            activeTable === "assign"
              ? <DeleteAssign handleDelete={handleDelete} isDeleting={isDeleting} handleClose={handleClose} />
              : <DeleteTodo handleDelete={handleDelete} isDeleting={isDeleting} handleClose={handleClose} />
          ) : null
        }
      />
    </Layout>
  );
};

export default TaskTables;
