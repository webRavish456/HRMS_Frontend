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
import ViewStaff from '@/Component/report/staff/view';
import EditStaff from '@/Component/report/staff/edit';
import DeleteStaff from '@/Component/report/staff/delete';
import CreateStaff from '@/Component/report/staff/create';


export default function staff(){

  const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
  
  
    const [viewShow, setViewShow] = useState(false);
    
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    const [deleteId ,setDeleteId] = useState(null);

  const createData=(sl,department, staff, present, absent, attendance, status)=>{
  const row={sl,department, staff, present, absent, attendance, status} 
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
  createData(1, "IT",25,23,2,"92%","Active"),
  createData(2, "HR",15,14,1,"93%","Active"),
  createData(3, "Finance",20,19,1,"95%","Active"),
  createData(4, "Marketing",18,16,2,"89%","Active")
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
    + Add Staff
   </Button>
   </Box>
  <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='theading'>
            <TableCell sx={{fontWeight:"600"}}>SL. No</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>DEPARTMENT</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>TOTAL STAFF</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>PRESENT TODAY</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ABSENT TODAY</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>AVERAGE ATTENDANCE</TableCell>
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
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.staff}</TableCell>
              <TableCell align="right">{row.present}</TableCell>
              <TableCell align="right">{row.absent}</TableCell>
              <TableCell align="right">{row.attendance}</TableCell>
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
              ? "Create New Staff Report"
              : viewShow
              ? "View Staff Report"
              : editShow
              ? "Edit Staff Report"
              : deleteShow
              ? "Delete Staff Report"
              : ""
          }

          dialogContent={
            openData ? (
              <CreateStaff open={openData} handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewStaff viewData={ViewData} handleClose={handleClose}  />
            ) : editShow ? (
              <EditStaff
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteStaff
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