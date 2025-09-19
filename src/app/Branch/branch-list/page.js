


"use client";

import Layout from "../../../components/Layout";
import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, IconButton,
  TextField, Button
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import CommonDialog from "@/components/commonDialog";

// Child Components
import CreateBranch from "@/components/Branch/branch-list/create";
import EditBranch from "@/components/Branch/branch-list/edit";
import ViewBranch from "@/components/Branch/branch-list/view";
import DeleteBranch from "@/components/Branch/branch-list/delete";

export default function Branch() {
  const [search, setSearch] = useState("");
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [viewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  // 🔹 Helper function to create row
  const createData = (si, _id, BranchName, Location, Status) => {
    const handleView = () => {
      setViewData({ si, _id, BranchName, Location, Status });
      setViewShow(true);
    };

    const handleEdit = () => {
      setEditData({ si, _id, BranchName, Location, Status });
      setEditShow(true);
    };

    const handleDelete = () => {
      setDeleteData({ si, _id, BranchName, Location, Status });
      setDeleteShow(true);
    };

    return {
      si,
      _id,
      BranchName,
      Location,
      Status,
      action: (
        <>
          <IconButton onClick={handleView}>
            <VisibilityIcon style={{ color: "#072eb0" }} />
          </IconButton>
          <IconButton onClick={handleEdit}>
            <EditIcon style={{ color: "#6b6666" }} />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon style={{ color: "#e6130b" }} />
          </IconButton>
        </>
      )
    };
  };

  // 🔹 Initial rows
  const [rows, setRows] = useState([
    createData(1, "b1", "Delhi Branch", "Delhi", "active"),
    createData(2, "b2", "Parsudih", "Kashmahal", "active"),
    createData(3, "b3", "Bistupur", "Sakchi", "active"),
    createData(4, "b4", "Haldipokhar", "Hata", "active"),
  ]);

  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
    setViewData(null);
    setEditData(null);
    setDeleteData(null);
  };

  const handleCreate = (newBranch) => {
    const newRow = createData(
      rows.length + 1,
      `b${rows.length + 1}`,
      newBranch.BranchName,
      newBranch.Location,
      newBranch.Status
    );
    setRows([...rows, newRow]);
    setOpenData(false);
  };

  const handleUpdate = (updatedBranch) => {
    const updatedRows = rows.map((row) =>
      row._id === updatedBranch._id
        ? createData(row.si, row._id, updatedBranch.BranchName, updatedBranch.Location, updatedBranch.Status)
        : row
    );
    setRows(updatedRows);
    setEditShow(false);
  };

  const handleDelete = () => {
    const updatedRows = rows.filter((row) => row._id !== deleteData._id);

    // 🔑 Re-index Sl.No
    const reIndexedRows = updatedRows.map((row, index) =>
      createData(index + 1, row._id, row.BranchName, row.Location, row.Status)
    );

    setRows(reIndexedRows);
    setDeleteShow(false);
  };

  // 🔹 Search filter
  const filteredRows = rows.filter(
    (row) =>
      row.BranchName.toLowerCase().includes(search.toLowerCase()) ||
      row.Location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", marginBottom: "20px"
        }}>
          <h2 style={{ margin: 0 }}>Branch List</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              size="small"
              placeholder="Search..."
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              variant="contained"
              style={{ backgroundColor: "#1a237e", color: "#fff", fontWeight: "bold" }}
              onClick={() => setOpenData(true)}
            >
              + Add New Branch
            </Button>
          </div>
        </div>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="forheadcolor">
              <TableRow>
                <TableCell><b>Sl.No</b></TableCell>
                <TableCell><b>Branch Name</b></TableCell>
                <TableCell><b>Location</b></TableCell>
                <TableCell><b>Status</b></TableCell>
                <TableCell><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="forcolor">
              {filteredRows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.si}</TableCell>
                  <TableCell>{row.BranchName}</TableCell>
                  <TableCell>{row.Location}</TableCell>
                  <TableCell>{row.Status}</TableCell>
                  <TableCell>{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Dialog */}
        <CommonDialog
          open={openData || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            openData
              ? "Create New Branch"
              : viewShow
              ? "View Branch"
              : editShow
              ? "Edit Branch"
              : deleteShow
              ? "Delete Branch"
              : ""
          }
          dialogContent={
            openData ? (
              <CreateBranch handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewBranch viewData={viewData} />
            ) : editShow ? (
              <EditBranch editData={editData} handleUpdate={handleUpdate} handleClose={handleClose} />
            ) : deleteShow ? (
              <DeleteBranch handleDelete={handleDelete} handleClose={handleClose} />
            ) : null
          }
        />
      </div>
    </Layout>
  );
}
