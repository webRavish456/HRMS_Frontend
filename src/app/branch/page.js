"use client"
import * as React from 'react';
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


function createData(id, logo , name, location, status) {
  return { id, logo, name, location, status, 
    action:(
      <>
      <IconButton
      style={{color: "#072eb0" , padding:"4px", transform: "scale(0.8)"}}
      >
      <VisibilityOutlined/>
      </IconButton>
      <IconButton
      style={{color: "#6b6666" , padding:"4px", transform: "scale(0.8)"}}
      >
      <EditIcon/>
      </IconButton>
      <IconButton
      style={{color:"#c70f3aff" , padding:"4px", transform: "scale(0.8)"}}
      >
      <DeleteOutline/>
      </IconButton>
      </>
    )};
}

const rows = [
  createData(1, "abc", "John","Jamshedpur","Active")
];
export default function Branch() {
  return (
    <Layout>
     
  <div>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Branch logo</TableCell>
            <TableCell align="right">Branch Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
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
              <TableCell align="right">{row.logo}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell sx={{color:row.status==="Active" ? "green":"red", fontWeight:"600"}} align="right">{row.status}</TableCell>
              <TableCell align="right" >{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
  </div>
  </Layout>
  )
}