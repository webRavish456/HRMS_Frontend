'use client'
import Layout from '@/components/Layout';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Button } from "@mui/material";
import { useState } from "react";
import CommonDialog from '@/components/commonDialog';

import CreateIndicator from "@/components/performance/create";
import DeletePerformance from "@/components/performance/delete";
import EditIndicator from '@/components/performance/edit';
import ViewIndicator from '@/components/performance/view';
import Rating from '@mui/material/Rating';

export default function openingStock() {
 
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);

  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const createData = (employeeID, employeeName, department, designation, reviewPeriod, finalScore, status) => {
    const handleEdit = () => {
      setEditData({ employeeID, employeeName, department, designation, reviewPeriod, finalScore, status });
      setEditShow(true);
    };

    const handleView = () => {
      setViewData({ employeeID, employeeName, department, designation, reviewPeriod, finalScore, status });
      setViewShow(true);
    };

    const handleDelete = () => {
      setDeleteData({ employeeID, employeeName, department, designation, reviewPeriod, finalScore, status });
      setDeleteShow(true);
    };

    return {
      employeeID,
      employeeName,
      department,
      designation,
      reviewPeriod,
      finalScore,
      status,
      action: (
        <div className='action-btn'>
          <IconButton className="view-btn" onClick={handleView}><VisibilityIcon style={{ color: "#072eb0" }}/></IconButton>
          <IconButton className="edit-btn" onClick={handleEdit}><EditIcon style={{ color: "#6b6666" }}/></IconButton>
          <IconButton className="delete-btn" onClick={handleDelete}><DeleteIcon style={{ color: "#e6130b" }}/></IconButton>
        </div>
      )
    };
  };

  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
  };

  const handleCreate = (data) => {
    setOpenData(true);
  };

  const handleUpdate = (data) => {
    setEditShow(true);
  };

  const handleDelete = () => {
    setDeleteShow(true);
    setDeleteId(null);
  };

  const rows = [
    createData(1, "John Smith", "Industrials", "Manager", "Q1 2025", "3.8", "Active"),
    createData(2, "Emma Watson", "Health Care", "CEO", "Q1 2025", "3.2", "Active"),
    createData(3, "Raj Kumar", "Telecommunications", "Telecom Specialist", "Q2 2025", "3.6", "Inactive"),
    createData(4, "Anjali Sharma", "Financials", "Finance Manager", "Q2 2025", "3.6", "Active"),
    createData(5, "David Lee", "Technology", "Developer", "Q3 2025", "3.8", "Active"),
  ];

  const [search, setSearch] = useState("");

  const filteredRows = rows.filter(
    (row) =>
      row.employeeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1 style={{padding:'10px'}}>Performance</h1>
      <div className='btn-side' style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
        <TextField
          size='small'
          variant="outlined"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="staff-search"
        />
        <Button 
          className="add-btn" 
          style={{ border:'2px', color:'white', backgroundColor:'#1A2A80'}} 
          onClick={() => setOpenData(true)}
        >
          Add Performance
        </Button>
        <br />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 ,marginTop:'20px' }} aria-label="simple table" >
          <TableHead className="forheadcolor">
            <TableRow>
              <TableCell><b>Employee ID</b></TableCell>
              <TableCell align="right"><b>Employee Name</b></TableCell>
              <TableCell align="right"><b>Department</b></TableCell>
              <TableCell align="right"><b>Designation</b></TableCell>
              <TableCell align="right"><b>Review Period</b></TableCell>
              <TableCell align="right"><b>Final Score</b></TableCell>
              <TableCell align="right"><b>Status</b></TableCell>
              <TableCell align="right"><b>Action</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody className="forcolor" >
            {filteredRows.length > 0 ? (
              filteredRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.employeeID}</TableCell>
                  <TableCell align="right">{row.employeeName}</TableCell>
                  <TableCell align="right">{row.department}</TableCell>
                  <TableCell align="right">{row.designation}</TableCell>
                  <TableCell align="right">{row.reviewPeriod}</TableCell>
                  
                  {/* ⭐ Final Score with Rating */}
                  <TableCell align="right">
                    <Rating 
                      name="read-only" 
                      value={parseFloat(row.finalScore)} 
                      precision={0.1} 
                      readOnly 
                      size="small"
                    />
                    ({row.finalScore})
                  </TableCell>

                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.action}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={11} align="center" style={{fontWeight:"bold", color:"grey"}}>
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <CommonDialog
        open={openData || viewShow || editShow || deleteShow}
        onClose={handleClose}
        dialogTitle={
          openData
            ? "Create performance"
            : viewShow
            ? "View performance "
            : editShow
            ? "Edit performance"
            : deleteShow
            ? "Delete performance"
            : ""
        }
        dialogContent={
          openData ? (
            <CreateIndicator handleCreate={handleCreate} handleClose={handleClose} />
          ) : viewShow ? (
            <ViewIndicator viewData={ViewData} />
          ) : editShow ? (
            <EditIndicator
              editData={editData}
              handleUpdate={handleUpdate}
              handleClose={handleClose}
            />
          ) : deleteShow ? (
            <DeletePerformance
              deleteData={deleteData}
              handleDelete={handleDelete}
              handleClose={handleClose}
            />
          ) : null
        }
      />
    </Layout>
  );
}
