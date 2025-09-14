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
import ViewExpense from '@/Component/report/expense/view';
import EditExpense from '@/Component/report/expense/edit';
import DeleteExpense from '@/Component/report/expense/delete';
import CreateExpense from '@/Component/report/expense/create';


export default function expense(){

  const [ViewData, setViewData] = useState(null);
    const [editData, setEditData] = useState(null);
    const [openData, setOpenData] = useState(false);
  
  
    const [viewShow, setViewShow] = useState(false);
    
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
      const [deleteId ,setDeleteId] = useState(null);

  const createData=(sl, name, type, price, feature, status)=>{
  const row={sl, name, type, price, feature, status}
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
  createData(1,"Laptop","Electronics",80000,"Yes","Active"),
  createData(2,"Office Chair","Furniture",5000,"No","Active"),
  createData(3,"Printer","Electronics",15000,"Yes","Inactive"),
  createData(4,"Whiteboard","Office Supplies",2000,"No","Active")
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
    + Add CreateExpense
   </Button>
   </Box>
  <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='theading'>
            <TableCell sx={{fontWeight:"600"}}>SL. No</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>PRODUCT NAME</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>PRODUCT TYPE</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>UNIT PRICE</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>SHOWED AS FEATURE</TableCell>
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
              <TableCell>{row.sl}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.feature}</TableCell>
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
              ? "Create New Expense Report"
              : viewShow
              ? "View Expense Report"
              : editShow
              ? "Edit Expense Report"
              : deleteShow
              ? "Delete Expense Report"
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