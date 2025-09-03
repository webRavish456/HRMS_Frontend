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
import { IconButton} from '@mui/material';
import { DeleteOutline,VisibilityOutlined } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import {TextField, Box, Button, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import CommonDialog from '@/Component/CommonDialog';
import ViewExpense from '@/Component/payroll/expense/view';
import DeleteExpense from '@/Component/payroll/expense/delete';
import EditExpense from '@/Component/payroll/expense/edit';
import CreateExpense from '@/Component/payroll/expense/create';
import  PictureAsPdfIcon  from '@mui/icons-material/PictureAsPdf';
export default function expense(){

  const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
  
  
    const [viewShow, setViewShow] = useState(false);
    
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);

    const [deleteId ,setDeleteId] = useState(null);

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
  };



  const createData=(user, category, description, amount, deal, date, attachment)=> {
   const row={user, category, description, amount, deal, date, attachment};
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
    )}};


const rows = [
  createData("John Doe","Travel","Flight to Delhi",12000,"Approved","2025-09-01",""),
  createData("Jane Smith","Food","Team Lunch",2500,"Pending","2025-09-03",""),
  createData("Michael Johnson","Supplies","Office Stationery",1200,"Approved","2025-09-05",""),
  createData("Emily Davis","Travel","Taxi Fare",800,"Rejected","2025-09-07","")

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
   <Button variant="contained" color="primary" onClick={()=>setOpenData(true)}  sx={{borderRadius:"20px", backgroundColor:"#10705aff",px:3}}>
    + Add Expense
   </Button>
   </Box>
  <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='theading'>
          <TableRow>
            <TableCell sx={{fontWeight:"600"}}>USER</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>CATEGORY</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>DESCRIPTION</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>AMOUNT</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>DEAL</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>DATE</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ATTACHMENT</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.user}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right" sx={{color:row.deal==="Approved" ? "green": row.deal==="Pending"? "grey": "red", fontWeight:"600"}}>{row.deal}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><PictureAsPdfIcon 
               sx={{color:"#d32f2f", curson:"pointer"}} titleAccess="View Attachment"/></TableCell>
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
              ? "Create New Expense"
              : viewShow
              ? "View Expense"
              : editShow
              ? "Edit Expense"
              : deleteShow
              ? "Delete Expense"
              : ""
          }

          dialogContent={
            openData ? (
              <CreateExpense open={openData} handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewShow ? (
              <ViewExpense viewData={ViewData} handleClose={handleClose}  />
            ) : editShow ? (
              <EditExpense
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeleteExpense
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