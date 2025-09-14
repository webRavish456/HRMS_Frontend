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
import {TextField, Box, Button, InputAdornment }from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import ViewStatus from '@/Component/leave/leave-status/view';
import DeleteStatus from '@/Component/leave/leave-status/delete';
import EditStatus from '@/Component/leave/leave-status/edit';
import CreateStatus from '@/Component/leave/leave-status/create';
import  PictureAsPdfIcon  from '@mui/icons-material/PictureAsPdf';

export default function status(){

  const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
  
  
    const [viewShow, setViewShow] = useState(false);
    
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
     const [deleteId ,setDeleteId] = useState(null);

  
const createData=(profile, date, duration, type, attachments, activity )=>{
    const row={ profile, date, duration, type, attachments, activity };
    return{
     ...row,
    action:(
      <>
      <IconButton
      style={{color: "#072eb0" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=> handleView(row)}
      >
      <VisibilityOutlined/>
      </IconButton>
      <IconButton
      style={{color: "#6b6666" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=> handleEdit()}
      >
      <EditIcon/>
      </IconButton>
      <IconButton
      style={{color:"#c70f3aff" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=> handleShowDelete()}
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
  createData("John Doe", "2025-09-01 9:00AM","Full Day","Casual Leave","","Approved"),
  createData("Jane Smith", "2025-09-02 01:00PM","Half Day","Sick Leave","","Pending"),
  createData("Michael Johnson", "2025-09-03 10:00AM","Full Day","Casual Leave","","Rejected"),
  createData("Emily Davis", "2025-09-04 2:00PM","Half Day","Sick Leave","","Approved")

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
    + Add Status
   </Button>
   </Box>
  <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='theading'>
            <TableCell sx={{fontWeight:"600"}}>PROFILE</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>DATE & TIME</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>LEAVE DURATION</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>LEAVE TYPE</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ATTACHMENTS</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ACTIVITY</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.profile}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.profile}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right"><PictureAsPdfIcon 
               sx={{color:"#d32f2f", curson:"pointer"}} titleAccess="View Attachment"/></TableCell>
              <TableCell align="right"  sx={{color:row.activity==="Approved" ? "green": row.activity==="Pending"? "grey": "red", fontWeight:"600"}} >{row.activity}</TableCell>
              <TableCell align="right">{row.action}</TableCell>
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
              ? "Create New Leave Status"
              : viewShow
              ? "View Leave Status"
              : editShow
              ? "Edit Leave Status"
              : deleteShow
              ? "Delete Leave Status"
              : ""
          }

          dialogContent={
            openData ? (
              <CreateStatus open={openData} handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewStatus viewData={ViewData} handleClose={handleClose}  />
            ) : editShow ? (
              <EditStatus
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteStatus
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
