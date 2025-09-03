"use client"
import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from '@/Component/Layout';
import CommonDialog from '@/Component/CommonDialog';
import { IconButton} from '@mui/material';
import { DeleteOutline,VisibilityOutlined } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import {TextField, Box, Button, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import EditEmployee from '@/Component/report/employee/edit';
import ViewEmployee from '@/Component/report/employee/view';
import DeleteEmployee from '@/Component/report/employee/delete';
import CreateEmployee from '@/Component/report/employee/create';


export default function employee(){

  const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
  
  
    const [viewShow, setViewShow] = useState(false);
    
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    const [deleteId ,setDeleteId] = useState(null);

const createData=(sl, id, name, department, attendance, salary, status) => {
  const row={sl, id, name, department, attendance, salary, status}
   return{
    ...row,
    action:(
      <>
      <IconButton
      style={{color: "#072eb0" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=>handleView(row)}
      >
      <VisibilityOutlined/>
      </IconButton>
      <IconButton
      style={{color: "#6b6666" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=>handleEdit()}
      >
      <EditIcon/>
      </IconButton>
      <IconButton
      style={{color:"#c70f3aff" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=>handleShowDelete()}
      >
      <DeleteOutline/>
      </IconButton>
      </>
    )}
  };

const handleView = (row) => {
    console.log("row",row)
    setViewData(row);
    setViewShow(true);
  };

  const handleEdit = (data) => {
    setEditData(data);
    setEditShow(true);
  };

  const handleShowDelete = (id) => {
    setDeleteId(id);
    setDeleteShow(true);
  };

  
  const handleClose = () => {
    setOpenData(false);
    setViewShow(false);
    setEditShow(false);
    setDeleteShow(false);
  };

  const handleCreate = (data) => {
     setLoading(data);
     setOpenData(false);
  };

  const handleUpdate = (data) => {
     setLoading(data);
    setEditShow(false);
  };

  const handleDelete=()=>{
    setDeleteShow(false);
    setDeleteId(null);
  }

const rows = [
  createData(1,"101","John Doe","IT",22,50000,"Active"),
  createData(2,"102","Jane Smith","HR",20,45000,"Inactive"),
  createData(3,"103","Michael Smith","Finance",21,48000,"Active"),
  createData(4,"104","Emily Davis","Marketing",22,52000,"Active"),
];




  return (
    <Layout>
    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems:"center", gap:"10px", mb: 2 }}>
   <TextField
    label="Search"
    variant="outlined"
    size="small"
    sx={{
      "&.MuiOutlinedInput-root":{mr:2, width: "400px" ,
      borderRadius:"30px",
      backgroundColor:"#fff",}
     }}
     InputProps={{
      endAdornment:(
        <InputAdornment position='start'>
          <SearchIcon color="action"/>
        </InputAdornment>
      )
     }}
  />
   <Button variant="contained" color="primary" onClick={()=>setOpenData(true)} sx={{borderRadius:"20px", backgroundColor:"#10705aff",px:3}}>
    + Add Employee
   </Button>
   </Box>
  <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='theading'>
            <TableCell sx={{fontWeight:"600"}}>SL. No</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>EMPLOYEE ID</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>EMPLOYEE NAME</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>DEPARTMENT</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ATTENDANCE</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>SALARY</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ACTIVITY STATUS</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sl}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.sl}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.attendance}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell sx={{color:row.status==="Active" ? "green":"red", fontWeight:"600"}} align="right">{row.status}</TableCell>
              <TableCell align="right" >{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <CommonDialog
          open={openData || viewShow || editShow || deleteShow}
          onClose={handleClose}
          dialogTitle={
            openData
              ? "Create New Employee Report"
              : viewShow
              ? "View Employee Report"
              : editShow
              ? "Edit Employee Report"
              : deleteShow
              ? "Delete Employee Report"
              : ""
          }

          dialogContent={
            openData ? (
              <CreateEmployee  open={openData} handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewEmployee viewData={ViewData} handleClose={handleClose}  />
            ) : editShow ? (
              <EditEmployee
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteEmployee
                handleDelete={handleDelete}
                // isDeleting={isDeleting}
                handleClose={handleClose}
              />
            ) : null
          }
        />

  
  </div>
  </Layout>
  )
}