// import React, { useState } from "react";
// import { TextField, Button, Grid, MenuItem } from "@mui/material";

// const Create = ({ handleCreate, handleClose }) => {
//   const [form, setForm] = useState({
//     id: "EMP" + Math.floor(Math.random() * 1000),
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     role: "",
//     location: "",
//     bank: "",
//     dept: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     handleCreate(form);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={6}><TextField label="First Name" name="firstName" fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Last Name" name="lastName" fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Email" name="email" fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Mobile" name="mobile" fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Role" name="role" fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Department" name="dept" fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Location" name="location" fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Bank" name="bank" fullWidth onChange={handleChange} /></Grid>

//       <Grid item xs={12} sx={{ textAlign: "right" }}>
//         <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
//         <Button variant="contained" onClick={handleSubmit}>Save</Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default Create;















// "use client";
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Grid,
//   MenuItem,
//   Box,
// } from "@mui/material";

// const roles = ["Manager", "Developer", "Analyst", "HR", "Intern"];
// const departments = ["HR", "IT", "Finance", "Operations"];
// const banks = ["SBI", "HDFC", "ICICI", "Axis"];

// const Create = ({ handleCreate, handleClose }) => {
//   const [form, setForm] = useState({
//     id: "EMP" + Math.floor(Math.random() * 1000),
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     role: "",
//     location: "",
//     bank: "",
//     dept: "",
//     // Extra fields from 2nd screenshot
//     dob: "",
//     gender: "",
//     address: "",
//     accountNo: "",
//     ifsc: "",
//     branch: "",
//     doj: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleCreate(form);
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//       <Grid container spacing={2}>
//         {/* 🔹 First row (from 1st image) */}
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Email" name="email" value={form.email} onChange={handleChange} required />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Mobile" name="mobile" value={form.mobile} onChange={handleChange} required />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField select fullWidth label="Role" name="role" value={form.role} onChange={handleChange} required>
//             {roles.map((r) => <MenuItem key={r} value={r}>{r}</MenuItem>)}
//           </TextField>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Location" name="location" value={form.location} onChange={handleChange} required />
//         </Grid>

//         {/* 🔹 Second part (from 2nd image) */}
//         <Grid item xs={12} sm={6}>
//           <TextField type="date" fullWidth label="Date of Birth" name="dob" InputLabelProps={{ shrink: true }} value={form.dob} onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Gender" name="gender" value={form.gender} onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField fullWidth multiline rows={2} label="Address" name="address" value={form.address} onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Bank Name" name="bank" value={form.bank} onChange={handleChange} select>
//             {banks.map((b) => <MenuItem key={b} value={b}>{b}</MenuItem>)}
//           </TextField>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Department" name="dept" value={form.dept} onChange={handleChange} select>
//             {departments.map((d) => <MenuItem key={d} value={d}>{d}</MenuItem>)}
//           </TextField>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Account Number" name="accountNo" value={form.accountNo} onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="IFSC Code" name="ifsc" value={form.ifsc} onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Branch" name="branch" value={form.branch} onChange={handleChange} />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField type="date" fullWidth label="Date of Joining" name="doj" InputLabelProps={{ shrink: true }} value={form.doj} onChange={handleChange} />
//         </Grid>
//       </Grid>

//       {/* Buttons */}
//       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
//         <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
//         <Button type="submit" variant="contained" color="primary">Save</Button>
//       </Box>
//     </Box>
//   );
// };

// export default Create;






















// "use client";
// import React, { useState } from "react";
// import {
//   Grid,
//   TextField,
//   Typography,
//   MenuItem,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Button,
// } from "@mui/material";

// const Create = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     fatherName: "",
//     email: "",
//     phone: "",
//     altPhone: "",
//     panNo: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     currentAddress: "",
//     permanentAddress: "",
//     employeeId: "#EMP0000014",
//     branch: "",
//     department: "",
//     designation: "",
//     employeeCode: "",
//     joiningDate: "",
//     role: "",
//     dob: "",
//     salary: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // 🔹 Here you can call API to save employee data
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container spacing={4}>
//         {/* ================= Left Column - Personal Detail ================= */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" gutterBottom>
//             Personal Detail
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField
//                 label="First Name *"
//                 fullWidth
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Last Name *"
//                 fullWidth
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 label="Father Name *"
//                 fullWidth
//                 name="fatherName"
//                 value={formData.fatherName}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Email *"
//                 fullWidth
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 label="Phone *"
//                 fullWidth
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Alternate Phone Number"
//                 fullWidth
//                 name="altPhone"
//                 value={formData.altPhone}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 label="Pan No. *"
//                 fullWidth
//                 name="panNo"
//                 value={formData.panNo}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <FormControl component="fieldset">
//                 <FormLabel>Gender *</FormLabel>
//                 <RadioGroup
//                   row
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                 >
//                   <FormControlLabel value="male" control={<Radio />} label="Male" />
//                   <FormControlLabel value="female" control={<Radio />} label="Female" />
//                 </RadioGroup>
//               </FormControl>
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 label="Password *"
//                 fullWidth
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Confirm Password *"
//                 fullWidth
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Current Address *"
//                 fullWidth
//                 multiline
//                 rows={2}
//                 name="currentAddress"
//                 value={formData.currentAddress}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Permanent Address *"
//                 fullWidth
//                 multiline
//                 rows={2}
//                 name="permanentAddress"
//                 value={formData.permanentAddress}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* ================= Right Column - Company Detail ================= */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" gutterBottom>
//             Company Detail
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Employee ID *"
//                 fullWidth
//                 name="employeeId"
//                 value={formData.employeeId}
//                 InputProps={{ readOnly: true }}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 select
//                 label="Branch Name *"
//                 fullWidth
//                 name="branch"
//                 value={formData.branch}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="branch1">Branch 1</MenuItem>
//                 <MenuItem value="branch2">Branch 2</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 select
//                 label="Department *"
//                 fullWidth
//                 name="department"
//                 value={formData.department}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="hr">HR</MenuItem>
//                 <MenuItem value="it">IT</MenuItem>
//                 <MenuItem value="finance">Finance</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 select
//                 label="Select Designation *"
//                 fullWidth
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="manager">Manager</MenuItem>
//                 <MenuItem value="developer">Developer</MenuItem>
//                 <MenuItem value="accountant">Accountant</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Employee Code *"
//                 fullWidth
//                 name="employeeCode"
//                 value={formData.employeeCode}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 type="date"
//                 label="Joining Date *"
//                 InputLabelProps={{ shrink: true }}
//                 fullWidth
//                 name="joiningDate"
//                 value={formData.joiningDate}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Role *"
//                 fullWidth
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 label="Basic Salary *"
//                 fullWidth
//                 name="salary"
//                 value={formData.salary}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 type="date"
//                 label="Date of Birth *"
//                 InputLabelProps={{ shrink: true }}
//                 fullWidth
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* ================= Form Actions ================= */}
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ mt: 3 }}>
//         <Grid item>
//           <Button variant="outlined">Cancel</Button>
//         </Grid>
//         <Grid item>
//           <Button type="submit" variant="contained" color="primary">
//             Save
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default Create;

































// "use client";
// import React, { useState } from "react";
// import {
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   MenuItem,
//   InputLabel,
//   Select,
//   FormControl,
// } from "@mui/material";

// const CreateEmployee = () => {
//   const [formData, setFormData] = useState({
//     // Personal
//     firstName: "",
//     lastName: "",
//     fatherName: "",
//     email: "",
//     phone: "",
//     altPhone: "",
//     pan: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     currentAddress: "",
//     permanentAddress: "",
//     dob: "",
//     // Company
//     employeeId: "",
//     branch: "",
//     department: "",
//     designation: "",
//     empCode: "",
//     joiningDate: "",
//     role: "",
//     basicSalary: "",
//     // Documents
//     certificate: null,
//     resume: null,
//     aadhar: null,
//     panDoc: null,
//     photo: null,
//     // Bank
//     accountHolder: "",
//     accountNumber: "",
//     ifsc: "",
//     bankName: "",
//     branchLocation: "",
//     bankBranch: "",
//     taxPayerId: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Employee Data Submitted:", formData);
//   };

//   return (
//     <Paper sx={{ p: 4, m: 3 }}>
//       <Typography variant="h5" component="h5" gutterBottom>
//         Add Employee
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         {/* ---------------- PERSONAL DETAILS ---------------- */}
//         <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
//           Personal Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="First Name" name="firstName" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Last Name" name="lastName" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Father Name" name="fatherName" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="email" label="Email" name="email" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Phone" name="phone" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Alternate Phone Number" name="altPhone" onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="PAN No." name="pan" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth required>
//               <InputLabel>Gender</InputLabel>
//               {/* <Select name="gender" onChange={handleChange}>
//                 <MenuItem value="Male">Male</MenuItem>
//                 <MenuItem value="Female">Female</MenuItem>
//               </Select> */}


//           <Select
//             name="gender"
//             value={formData.gender || ""}  // ✅ keeps it controlled always
//             onChange={handleChange}
//           >
//             <MenuItem value="Male">Male</MenuItem>
//             <MenuItem value="Female">Female</MenuItem>
//           </Select>











//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="password" label="Password" name="password" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="password" label="Confirm Password" name="confirmPassword" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField fullWidth label="Current Address" name="currentAddress" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField fullWidth label="Permanent Address" name="permanentAddress" onChange={handleChange} required />
//           </Grid>
//         </Grid>

//         {/* ---------------- COMPANY DETAILS ---------------- */}
//         <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//           Company Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Employee ID" name="employeeId" value="#EMP00001" disabled />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Department" name="department" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Branch Name" name="branch" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Designation" name="designation" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Employee Code" name="empCode" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="date" label="Joining Date" name="joiningDate" InputLabelProps={{ shrink: true }} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Role" name="role" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="date" label="Date of Birth" name="dob" InputLabelProps={{ shrink: true }} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Basic Salary" name="basicSalary" onChange={handleChange} required />
//           </Grid>
//         </Grid>

//         {/* ---------------- DOCUMENT UPLOAD ---------------- */}
//         <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//           Document Uploads
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Certificate
//               <input type="file" hidden name="certificate" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Resume
//               <input type="file" hidden name="resume" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Aadhar
//               <input type="file" hidden name="aadhar" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload PAN Card
//               <input type="file" hidden name="panDoc" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Photo
//               <input type="file" hidden name="photo" accept=".jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//           </Grid>
//         </Grid>

//         {/* ---------------- BANK DETAILS ---------------- */}
//         <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//           Bank Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Account Holder Name" name="accountHolder" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Account Number" name="accountNumber" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="IFSC Code" name="ifsc" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Branch Location" name="branchLocation" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Bank Name" name="bankName" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Bank Branch" name="bankBranch" onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Tax Payer ID" name="taxPayerId" onChange={handleChange} required />
//           </Grid>
//         </Grid>

//         {/* ---------------- SUBMIT ---------------- */}
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
//           Submit
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default CreateEmployee;


























"use client";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";

const CreateEmployee = ({ handleCreate, handleClose }) => {
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    fatherName: "",
    email: "",
    phone: "",
    altPhone: "",
    panNo: "",
    gender: "",
    password: "",
    confirmPassword: "",
    currentAddress: "",
    permanentAddress: "",
    dob: "",

    // Documents
    certificate: null,
    resume: null,
    aadharDoc: null,
    panDoc: null,
    photo: null,

    // Company Details
    employeeId: "",
    branchName: "",
    department: "",
    designation: "",
    employeeCode: "",
    joiningDate: "",
    role: "",

    // Bank Details
    accountHolderName: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
    bankBranch: "",
    branchLocation: "",
    taxPayerId: "",
    basicSalary: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(formData);
    handleClose();
  };

  return (
    <Paper sx={{ p: 4, m: 3, maxHeight: "80vh", overflowY: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Add New Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          Personal Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Father Name" name="fatherName" value={formData.fatherName} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Alternate Phone" name="altPhone" value={formData.altPhone} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="PAN No" name="panNo" value={formData.panNo} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}>
            <TextField select fullWidth label="Gender" name="gender" value={formData.gender} onChange={handleChange}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}><TextField type="password" fullWidth label="Password" name="password" value={formData.password} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="password" fullWidth label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Current Address" name="currentAddress" value={formData.currentAddress} onChange={handleChange} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Permanent Address" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="date" fullWidth label="Date of Birth" name="dob" InputLabelProps={{ shrink: true }} value={formData.dob} onChange={handleChange} /></Grid>
        </Grid>

        {/* Documents */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Documents</Typography>
        <Grid container spacing={2}>
          {[
            { label: "Upload Certificate", name: "certificate" },
            { label: "Upload Resume", name: "resume" },
            { label: "Upload Aadhar Document", name: "aadharDoc" },
            { label: "Upload PAN Card Document", name: "panDoc" },
            { label: "Upload Photo", name: "photo" },
          ].map((doc, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Button variant="contained" component="label" fullWidth>
                {doc.label}
                <input type="file" hidden name={doc.name} onChange={handleChange} />
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Company Details */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Company Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="Employee ID" name="employeeId" value={formData.employeeId} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Branch Name" name="branchName" value={formData.branchName} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Designation" name="designation" value={formData.designation} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Employee Code" name="employeeCode" value={formData.employeeCode} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="date" fullWidth label="Joining Date" name="joiningDate" InputLabelProps={{ shrink: true }} value={formData.joiningDate} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Role" name="role" value={formData.role} onChange={handleChange} /></Grid>
        </Grid>

        {/* Bank Details */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Bank Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="Account Holder Name" name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="IFSC Code" name="ifsc" value={formData.ifsc} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Bank Branch" name="bankBranch" value={formData.bankBranch} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Branch Location" name="branchLocation" value={formData.branchLocation} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Tax Payer ID" name="taxPayerId" value={formData.taxPayerId} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Basic Salary" name="basicSalary" value={formData.basicSalary} onChange={handleChange} /></Grid>
        </Grid>

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>Save Employee</Button>
      </form>
    </Paper>
  );
};

export default CreateEmployee;
























