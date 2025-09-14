"use client";
import { useState } from "react";
import Layout from "@/Component/Layout";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const CreatePayroll = () => {
  const [formData, setFormData] = useState({
    user: "",
    payslipMonth: "",
    basicSalary: "",
    workingDays: "",
    lopDays: "",
    paidDays: "",
    bonus: "",
    incentive: "",
    leaveDeduction: "",
    overtimeHours: "",
    overtimeRate: "",
    overtimePayment: "",
    pf: "",
    esi: "",
    allowances: [],
    empEpf: "",
    emplrEpf: "",
    salAdvance: "",
    paymentMethod: "",
    paymentDate: "",
    paymentStatus: "",
  });

  const [allowance, setAllowance] = useState({ name: "", amount: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAllowanceChange = (e) => {
    const { name, value } = e.target;
    setAllowance((prev) => ({ ...prev, [name]: value }));
  };

  const addAllowance = () => {
    if (allowance.name && allowance.amount) {
      setFormData((prev) => ({
        ...prev,
        allowances: [...prev.allowances, allowance],
      }));
      setAllowance({ name: "", amount: "" });
    }
  };

  const totalAllowance = formData.allowances.reduce(
    (sum, a) => sum + parseFloat(a.amount || 0),
    0
  );

  const netPayable =
    parseFloat(formData.basicSalary || 0) +
    parseFloat(formData.bonus || 0) +
    parseFloat(formData.incentive || 0) +
    parseFloat(formData.overtimePayment || 0) +
    totalAllowance -
    (parseFloat(formData.leaveDeduction || 0) +
      parseFloat(formData.pf || 0) +
      parseFloat(formData.esi || 0) +
      parseFloat(formData.salAdvance || 0));

  return (
    <Layout>
    <Box
      sx={{
        p: 1,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 2,
        width: "100%",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Create Payroll
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
      
        <FormControl sx={{ flex: "1 1 30%" }}>
          <InputLabel>User</InputLabel>
          <Select
            name="user"
            value={formData.user}
            label="User"
            onChange={handleChange}
          >
            <MenuItem value="user1">User 1</MenuItem>
            <MenuItem value="user2">User 2</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Payslip Month"
          name="payslipMonth"
          value={formData.payslipMonth}
          onChange={handleChange}
        />

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Basic Salary"
          name="basicSalary"
          type="number"
          value={formData.basicSalary}
          onChange={handleChange}
        />

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Working Days"
          name="workingDays"
          type="number"
          value={formData.workingDays}
          onChange={handleChange}
        />

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Loss of Pay Days"
          name="lopDays"
          type="number"
          value={formData.lopDays}
          onChange={handleChange}
        />

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Paid Days"
          name="paidDays"
          type="number"
          value={formData.paidDays}
          onChange={handleChange}
        />

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Bonus"
          name="bonus"
          type="number"
          value={formData.bonus}
          onChange={handleChange}
        />

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Incentive"
          name="incentive"
          type="number"
          value={formData.incentive}
          onChange={handleChange}
        />

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Leave Deduction"
          name="leaveDeduction"
          type="number"
          value={formData.leaveDeduction}
          onChange={handleChange}
        />
        <TextField
          sx={{ flex: "1 1 20%" }}
          label="Allowance Name"
          name="name"
          value={allowance.name}
          onChange={handleAllowanceChange}
        />

        <TextField
          sx={{ flex: "1 1 20%" }}
          label="Amount"
          name="amount"
          type="number"
          value={allowance.amount}
          onChange={handleAllowanceChange}
        />

        <Button
          sx={{ flex: "1 1 30%", height: "56px", fontSize:"15px", backgroundColor:"#115E59", color:"#ffffff"}}
          variant="contained"
          onClick={addAllowance}
        >
          Add
        </Button>
        
        <TextField
          sx={{ flex: "1 1 30%" }}
          label="PF"
          name="pf"
          type="number"
          value={formData.pf}
          onChange={handleChange}
        />
        <TextField
          sx={{ flex: "1 1 30%" }}
          label="ESI"
          name="esi"
          type="number"
          value={formData.esi}
          onChange={handleChange}
        />
        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Salary Advance"
          name="salAdvance"
          type="number"
          value={formData.salAdvance}
          onChange={handleChange}
        />

        <FormControl sx={{ flex: "1 1 30%" }}>
          <InputLabel>Payment Method</InputLabel>
          <Select
            name="paymentMethod"
            value={formData.paymentMethod}
            label="Payment Method"
            onChange={handleChange}
          >
            <MenuItem value="bank">Bank</MenuItem>
            <MenuItem value="cash">Cash</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ flex: "1 1 30%" }}
          label="Payment Date"
          type="date"
          name="paymentDate"
          value={formData.paymentDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        <FormControl sx={{ flex: "1 1 30%" }}>
          <InputLabel>Payment Status</InputLabel>
          <Select
            name="paymentStatus"
            value={formData.paymentStatus}
            label="Payment Status"
            onChange={handleChange}
          >
            <MenuItem value="paid">Paid</MenuItem>
            <MenuItem value="unpaid">Unpaid</MenuItem>
          </Select>
        </FormControl>

      
        <Box sx={{ flex: "1 1 100%", mt: 2 }}>
          <Typography>Total Allowance (₹): {totalAllowance.toFixed(2)}</Typography>
          <Typography>Net Payable (₹): {netPayable.toFixed(2)}</Typography>
        </Box>

 
        <TextField
          sx={{ flex: "1 1 100%", mt: 2 }}
          label="Note"
          multiline
          rows={3}
          placeholder="Add any note here..."
        />
      </Box>
    </Box>
    </Layout>
  );
};

export default CreatePayroll;