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
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteOutline} from '@mui/icons-material';
import {TextField, Box, Button, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import EditHoliday from '@/Component/leave/holiday/edit';
import DeleteHoliday from '@/Component/leave/holiday/delete';
import CreateHoliday from '@/Component/leave/holiday/create';


export default function holiday(){
  
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
  
  
    const [viewShow, setViewShow] = useState(false);
    
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
     const [deleteId ,setDeleteId] = useState(null);

  const createData =(id, day)=>({
  id, day,
    action:(
      <>
      <IconButton
      style={{color: "#6b6666" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=>{handleEdit()}}
      >
      <EditIcon/>
      </IconButton>
      <IconButton
      style={{color:"#c70f3aff" , padding:"4px", transform: "scale(0.8)"}}
      onClick={()=>{handleShowDelete()}}
      >
      <DeleteOutline/>
      </IconButton>
      </>
    )
  });

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
  createData(1,"Friday"),
  createData(2,"Tuesday"),
  createData(3,"Wednesday"),
  createData(4,"Saturday")
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
    + Add Holiday
   </Button>
   </Box>
  <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='theading'>
            <TableCell sx={{fontWeight:"600"}}>ID</TableCell>
            <TableCell sx={{fontWeight:"600"}}>DAY NAME</TableCell>
            <TableCell sx={{fontWeight:"600"}}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.day}</TableCell>
              <TableCell>{row.action}</TableCell>
              
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
              ? "Create New Holiday"
              : editShow
              ? "Edit Holiday"
              : deleteShow
              ? "Delete Holiday"
              : ""
          }

          dialogContent={
            openData ? (
              <CreateHoliday open={openData} handleCreate={handleCreate} handleClose={handleClose} />
            ) : editShow ? (
              <EditHoliday
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteHoliday
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
