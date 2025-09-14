// 'use client';

// // import Layout from "@/components/Layout";

// export default function HomePage() {
//   return (
//     // <Layout>
 
//     // </Layout>
//     <h1>welcome</h1>
//   );
// }







'use client';
// import Layout from "../../../components/Layout";

import React, { useState } from "react";
// import CommonDialog from "../../../components/Commondialog";
// import create from ""



import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, TablePagination, Button, TextField, Box, Tooltip
} from "@mui/material";
import { Visibility, Delete, Edit } from "@mui/icons-material";
import CommonDialog from "@/components/CommonDialog";
import ExpenseForm from "@/components/expense-management/expense/create";
import ViewExpense from "@/components/expense-management/expense/view";
import EditExpense from "@/components/expense-management/expense/edit";
import DeleteConfirmation from "@/components/expense-management/expense/delete";


const ExpenseListPage = () => {
  // Example expense data
  const [expenses] = useState([
    { id: "EXP001", category: "Travel", person: "Rahul Sharma", amount: 2500, payment: "Cash", ref: "REF123", date: "2025-08-01" },
    { id: "EXP002", category: "Food", person: "Neha Kumari", amount: 50000, payment: "Card", ref: "REF124", date: "2025-08-05" },
    { id: "EXP003", category: "Stationery", person: "Ankit Verma", amount: 800, payment: "UPI", ref: "REF125", date: "2025-08-10" },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


// Expense states
const [openExpense, setOpenExpense] = useState(false);
const [viewExpense, setViewExpense] = useState(false);
const [editExpense, setEditExpense] = useState(false);
const [deleteExpense, setDeleteExpense] = useState(false);

const [selectedExpense, setSelectedExpense] = useState(null);

// Close all dialogs
const handleClose = () => {
  setOpenExpense(false);
  setViewExpense(false);
  setEditExpense(false);
  setDeleteExpense(false);
  setSelectedExpense(null);
};

// Create expense
const handleCreate = (newExpense) => {
  setExpenses([...expenses, newExpense]);
  handleClose();
};

// Update expense
const handleUpdate = (updatedExpense) => {
  setExpenses(
    expenses.map(exp => exp.id === updatedExpense.id ? updatedExpense : exp)
  );
  handleClose();
};

// Delete expense
const handleDelete = (id) => {
  setExpenses(expenses.filter(exp => exp.id !== id));
  handleClose();
}



  // Search filter
  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.category.toLowerCase().includes(search.toLowerCase()) ||
      exp.person.toLowerCase().includes(search.toLowerCase()) ||
      exp.payment.toLowerCase().includes(search.toLowerCase()) ||
      exp.ref.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // <Layout>
      <Paper sx={{ p: 2, boxShadow: "none" }}>
        
        {/* 🔹 Top Section: Title + Add Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <h2 style={{ margin: 0 }}>Expense</h2>
          <Button variant="contained" color="primary">
            + Add Expense
          </Button>
        </Box>

        {/* 🔹 Search Box */}
        <Box sx={{ mb: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
          />
        </Box>

        {/* 🔹 Expense Table */}
        <TableContainer sx={{ border: "1px solid #e0e0e0", borderRadius: "6px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Sl.No</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Person Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Payment</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>REF</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredExpenses
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:nth-of-type(even)": { backgroundColor: "#fafafa" },
                      "& td, & th": { border: 0 },
                    }}
                  >
                    <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.person}</TableCell>
                    <TableCell>₹{row.amount}</TableCell>
                    <TableCell>{row.payment}</TableCell>
                    <TableCell>{row.ref}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <Tooltip title="View">
                        <IconButton size="small" color="primary"><Visibility
                         onClick={() => { setSelectedExpense(row);  setViewExpense(true); }}
                        /></IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton size="small" color="secondary"><Edit 
                        onClick={() => { setSelectedExpense(row);  setEditExpense(true); }}
                        /></IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton size="small" color="error"
                        onClick={() => { setSelectedExpense(row);  setDeleteExpense(true); }}
                        ><Delete /></IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 🔹 Pagination */}
        <TablePagination
          component="div"
          count={filteredExpenses.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
     
     {/* </Layout>  */}






  <CommonDialog
          open={openExpense || viewExpense || editExpense || deleteExpense}
          onClose={handleClose}
          dialogTitle={
            openExpense
              ? "Create New Project"
              :  viewExpense
              ? "View Project"
              : editExpense
              ? "Edit Expense"
              : deleteExpense
              ? "Delete Project"
              : ""
          }
          dialogContent={
            openExpense ? (
              <ExpenseForm handleCreate={handleCreate} handleClose={handleClose} />
            ) : viewExpense? (
              <ViewExpense viewData={selectedExpense} />
            ) : editExpense ? (
              <EditExpense
                editData={selectedExpense}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            )  : deleteExpense ? (
               <DeleteConfirmation
              handleDelete={handleDelete}
              // isDeleting={isDeleting}
              handleClose={handleClose}
              selectedExpense={selectedExpense}
              />
            ) : null
          }
        />
    

 </Paper>

   );
};

export default ExpenseListPage;