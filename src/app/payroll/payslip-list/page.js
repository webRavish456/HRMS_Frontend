"use client"
import { useState } from 'react';
import * as React from 'react';
import CommonDialog from '@/Component/CommonDialog';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TextField, Button, Box, InputAdornment} from '@mui/material';
import Paper from '@mui/material/Paper';
import Layout from '@/Component/Layout';
import { IconButton} from '@mui/material';
import { DeleteOutline,VisibilityOutlined } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import ViewPayslipList from '@/Component/payroll/payslip-list/view';
import SearchIcon from '@mui/icons-material/Search'
import DeletePayslipList from '@/Component/payroll/payslip-list/delete';
import EditPayslipList from '@/Component/payroll/payslip-list/edit';
import CreatePayslipList from '@/Component/payroll/payslip-list/create';


export default function Paysliplist(){
  const [ViewData, setViewData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [openData, setOpenData] = useState(false);
  const [viewShow, setViewShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [deleteId ,setDeleteId] = useState(null);

  const [loading, setLoading] = useState(true);


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



  

  const  createData=(id, name, days, month, year, bsalary, bonus, tsalary, status)=>{
    const row={id, name, days, month, year, bsalary, bonus, tsalary, status} ;
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
      onClick={()=>handleShowDelete(id)}
      >
      <DeleteOutline/>
      </IconButton>
      </>
    )}
  };




const rows = [
  createData(1,"John Doe", 22, "September", "2025", 50000, 5000, 55000, "Paid"),
  createData(2,"Jane Smith", 20, "September", "2025", 45000, 4000, 49000, "Pending"),
  createData(3,"Michael Johnson", 21, "September", "2025", 48000, 3500, 51500, "Paid"),
  createData(4,"Emily Davis", 22, "September", "2025", 52000, 6000, 58000, "Paid")
];

  return (
    <Layout>
  <div>
   <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems:"center", gap:"10px", mb: 2 }}>
   <TextField
    label="Search"
    variant="outlined"
    size="small"
    sx={{
      width:"400px",
      "&.MuiOutlinedInput-root":{mr:2, 
      borderRadius:"30px"
     }}}
     InputProps={{
      endAdornment:(
        <InputAdornment position='end'>
          <SearchIcon color="action"/>
        </InputAdornment>
      )
     }}
  />
   <Button variant="contained" color="primary" onClick={()=>setOpenData(true)}  sx={{borderRadius:"20px", backgroundColor:"#223e38ff",px:3}}>
    + Add Payslip
   </Button>
   </Box>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='theading'>
            <TableCell sx={{fontWeight:"600"}}>Id</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>NAME</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>WORK DAYS</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>MONTH</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>YEAR</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>BASIC SALARY</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>BONUS</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>TOTAL SALARY</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>STATUS</TableCell>
            <TableCell align="right" sx={{fontWeight:"600"}}>ACTION</TableCell>
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.days}</TableCell>
              <TableCell align="right">{row.month}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.bsalary}</TableCell>
              <TableCell align="right">{row.bonus}</TableCell>
              <TableCell align="right">{row.tsalary}</TableCell>
              <TableCell sx={{color:row.status==="Paid" ? "green": row.status==="Pending"? "grey": "red", fontWeight:"600"}} align="right">{row.status}</TableCell>
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
              ? "Create New PaySlip"
              : viewShow
              ? "View PaySlip"
              : editShow
              ? "Edit PaySlip"
              : deleteShow
              ? "Delete PaySlip"
              : ""
          }

          dialogContent={
            openData ? (
              <CreatePayslipList open={openData}  handleClose={handleClose} />
            ) : viewShow ? (
              <ViewPayslipList viewData={ViewData} handleClose={handleClose}  />
            ) : editShow ? (
              <EditPayslipList
                editData={editData}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            ) : deleteShow ? (
              <DeletePayslipList
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