// import React, { useState } from "react";
// import { TextField, Button, Grid } from "@mui/material";

// const EditEmp = ({ employee, handleUpdate, handleClose }) => {
//   const [form, setForm] = useState(employee);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     handleUpdate(form);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={6}><TextField label="First Name" name="firstName" value={form.firstName} fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Last Name" name="lastName" value={form.lastName} fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Email" name="email" value={form.email} fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Mobile" name="mobile" value={form.mobile} fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Role" name="role" value={form.role} fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Department" name="dept" value={form.dept} fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Location" name="location" value={form.location} fullWidth onChange={handleChange} /></Grid>
//       <Grid item xs={6}><TextField label="Bank" name="bank" value={form.bank} fullWidth onChange={handleChange} /></Grid>

//       <Grid item xs={12} sx={{ textAlign: "right" }}>
//         <Button onClick={handleClose} sx={{ mr: 1 }}>Cancel</Button>
//         <Button variant="contained" onClick={handleSubmit}>Update</Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default EditEmp;










// "use client";
// import React, { useState, useEffect } from "react";
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

// const EditEmployee = ({ employeeData }) => {
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

//   // Pre-fill data when editing
//   useEffect(() => {
//     if (employeeData) {
//       setFormData((prev) => ({
//         ...prev,
//         ...employeeData,
//       }));
//     }
//   }, [employeeData]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Updated Employee Data:", formData);
//     // 👉 Here you would call API to update the employee record
//   };

//   return (
//     <Paper sx={{ p: 4, m: 3 }}>
//       <Typography variant="h5" gutterBottom>
//         Edit Employee
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         {/* ---------------- PERSONAL DETAILS ---------------- */}
//         <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
//           Personal Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Father Name" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Alternate Phone Number" name="altPhone" value={formData.altPhone} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="PAN No." name="pan" value={formData.pan} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth required>
//               <InputLabel>Gender</InputLabel>
//               <Select name="gender" value={formData.gender} onChange={handleChange}>
//                 <MenuItem value="Male">Male</MenuItem>
//                 <MenuItem value="Female">Female</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="password" label="Password" name="password" value={formData.password} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="password" label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField fullWidth label="Current Address" name="currentAddress" value={formData.currentAddress} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField fullWidth label="Permanent Address" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} required />
//           </Grid>
//         </Grid>

//         {/* ---------------- COMPANY DETAILS ---------------- */}
//         <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//           Company Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Employee ID" name="employeeId" value={formData.employeeId} disabled />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Branch Name" name="branch" value={formData.branch} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Designation" name="designation" value={formData.designation} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Employee Code" name="empCode" value={formData.empCode} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="date" label="Joining Date" name="joiningDate" value={formData.joiningDate} InputLabelProps={{ shrink: true }} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Role" name="role" value={formData.role} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth type="date" label="Date of Birth" name="dob" value={formData.dob} InputLabelProps={{ shrink: true }} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Basic Salary" name="basicSalary" value={formData.basicSalary} onChange={handleChange} required />
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
//             {formData.certificate && <Typography variant="caption">{formData.certificate.name || formData.certificate}</Typography>}
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Resume
//               <input type="file" hidden name="resume" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//             {formData.resume && <Typography variant="caption">{formData.resume.name || formData.resume}</Typography>}
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Aadhar
//               <input type="file" hidden name="aadhar" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//             {formData.aadhar && <Typography variant="caption">{formData.aadhar.name || formData.aadhar}</Typography>}
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload PAN Card
//               <input type="file" hidden name="panDoc" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//             {formData.panDoc && <Typography variant="caption">{formData.panDoc.name || formData.panDoc}</Typography>}
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Button variant="contained" component="label" fullWidth>
//               Upload Photo
//               <input type="file" hidden name="photo" accept=".jpg,.jpeg,.png" onChange={handleChange} />
//             </Button>
//             {formData.photo && <Typography variant="caption">{formData.photo.name || formData.photo}</Typography>}
//           </Grid>
//         </Grid>

//         {/* ---------------- BANK DETAILS ---------------- */}
//         <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
//           Bank Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Account Holder Name" name="accountHolder" value={formData.accountHolder} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="IFSC Code" name="ifsc" value={formData.ifsc} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Branch Location" name="branchLocation" value={formData.branchLocation} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Bank Branch" name="bankBranch" value={formData.bankBranch} onChange={handleChange} required />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Tax Payer ID" name="taxPayerId" value={formData.taxPayerId} onChange={handleChange} required />
//           </Grid>
//         </Grid>

//         {/* ---------------- SUBMIT ---------------- */}
//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
//           Update
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default EditEmployee;









// "use client";
// import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import {
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";

// const EditEmployee = () => {
//   const searchParams = useSearchParams();
//   const employeeId = searchParams.get("id");

//   const [formData, setFormData] = useState(null);

//   // ✅ Simulate fetching employee data by ID
//   useEffect(() => {
//     // Replace with API call if available
//     const existingEmployee = {
//       firstName: "Neha",
//       lastName: "Kumari",
//       fatherName: "Mr. Kumar",
//       email: "neha@example.com",
//       phone: "9876543210",
//       altPhone: "9123456780",
//       pan: "ABCDE1234F",
//       gender: "Female",
//       password: "******",
//       confirmPassword: "******",
//       currentAddress: "Delhi, India",
//       permanentAddress: "Patna, Bihar",
//       dob: "1998-05-20",
//       employeeId: "EMP001",
//       branch: "Delhi",
//       department: "IT",
//       designation: "Software Engineer",
//       empCode: "E123",
//       joiningDate: "2024-04-01",
//       role: "Developer",
//       basicSalary: "50000",
//       accountHolder: "Neha Kumari",
//       accountNumber: "1234567890",
//       ifsc: "HDFC0001234",
//       bankName: "HDFC",
//       branchLocation: "Delhi",
//       bankBranch: "Connaught Place",
//       taxPayerId: "TAX12345",
//     };
//     setFormData(existingEmployee);
//   }, [employeeId]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Updated Employee Data:", formData);
//     alert("Employee updated successfully!");
//   };

//   if (!formData) return <p>Loading...</p>;

//   return (
//     <Paper sx={{ p: 4, m: 3 }}>
//       <Typography variant="h5" gutterBottom>
//         Edit Employee
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         {/* Personal Detail */}
//         <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
//           Personal Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Father Name" name="fatherName" value={formData.fatherName} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Alternative Phone" name="altPhone" value={formData.altPhone} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="PAN" name="pan" value={formData.pan} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Gender</InputLabel>
//               <Select name="gender" value={formData.gender} onChange={handleChange}>
//                 <MenuItem value="Male">Male</MenuItem>
//                 <MenuItem value="Female">Female</MenuItem>
//                 <MenuItem value="Other">Other</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField type="date" fullWidth label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} InputLabelProps={{ shrink: true }} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Current Address" name="currentAddress" value={formData.currentAddress} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Permanent Address" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />
//           </Grid>
//         </Grid>

//         {/* Company Detail */}
//         <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
//           Company Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Employee ID" name="employeeId" value={formData.employeeId} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Branch" name="branch" value={formData.branch} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Department" name="department" value={formData.department} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Employee Code" name="empCode" value={formData.empCode} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField type="date" fullWidth label="Joining Date" name="joiningDate" value={formData.joiningDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Role" name="role" value={formData.role} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Basic Salary" name="basicSalary" value={formData.basicSalary} onChange={handleChange} />
//           </Grid>
//         </Grid>

//         {/* Bank Details */}
//         <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
//           Bank Details
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Account Holder Name" name="accountHolder" value={formData.accountHolder} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Account Number" name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="IFSC Code" name="ifsc" value={formData.ifsc} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Bank Name" name="bankName" value={formData.bankName} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Branch Location" name="branchLocation" value={formData.branchLocation} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Bank Branch" name="bankBranch" value={formData.bankBranch} onChange={handleChange} />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField fullWidth label="Tax Payer ID" name="taxPayerId" value={formData.taxPayerId} onChange={handleChange} />
//           </Grid>
//         </Grid>

//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
//           Update Employee
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default EditEmployee;























// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";

// const EditEmployee = ({ employee, handleUpdate, handleClose }) => {
//   const [formData, setFormData] = useState(employee || {});

//   // ✅ Sync formData when employee changes
//   useEffect(() => {
//     if (employee) {
//       setFormData(employee);
//     }
//   }, [employee]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleUpdate(formData); // ✅ send updated employee back
//   };

//   if (!formData) return <p>Loading...</p>;

//   return (
//     <Paper sx={{ p: 4, m: 3 }}>
//       <Typography variant="h5" component="h5" gutterBottom>
//         Edit Employee
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         {/* Personal Detail */}
//         <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
//           Personal Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="First Name"
//               name="firstName"
//               value={formData.firstName || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Last Name"
//               name="lastName"
//               value={formData.lastName || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Father Name"
//               name="fatherName"
//               value={formData.fatherName || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Email"
//               name="email"
//               value={formData.email || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Phone"
//               name="phone"
//               value={formData.phone || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Alternative Phone"
//               name="altPhone"
//               value={formData.altPhone || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="PAN"
//               name="pan"
//               value={formData.pan || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <FormControl fullWidth>
//               <InputLabel>Gender</InputLabel>
//               <Select
//                 name="gender"
//                 value={formData.gender || ""}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="Male">Male</MenuItem>
//                 <MenuItem value="Female">Female</MenuItem>
//                 <MenuItem value="Other">Other</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               type="date"
//               fullWidth
//               label="Date of Birth"
//               name="dob"
//               value={formData.dob || ""}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Current Address"
//               name="currentAddress"
//               value={formData.currentAddress || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Permanent Address"
//               name="permanentAddress"
//               value={formData.permanentAddress || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//         </Grid>

//         {/* Company Detail */}
//         <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
//           Company Detail
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Employee ID"
//               name="employeeId"
//               value={formData.employeeId || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Branch"
//               name="branch"
//               value={formData.branch || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Department"
//               name="department"
//               value={formData.department || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Designation"
//               name="designation"
//               value={formData.designation || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Employee Code"
//               name="empCode"
//               value={formData.empCode || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               type="date"
//               fullWidth
//               label="Joining Date"
//               name="joiningDate"
//               value={formData.joiningDate || ""}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Role"
//               name="role"
//               value={formData.role || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Basic Salary"
//               name="basicSalary"
//               value={formData.basicSalary || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//         </Grid>

//         {/* Bank Details */}
//         <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
//           Bank Details
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Account Holder Name"
//               name="accountHolder"
//               value={formData.accountHolder || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Account Number"
//               name="accountNumber"
//               value={formData.accountNumber || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="IFSC Code"
//               name="ifsc"
//               value={formData.ifsc || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Bank Name"
//               name="bankName"
//               value={formData.bankName || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Branch Location"
//               name="branchLocation"
//               value={formData.branchLocation || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Bank Branch"
//               name="bankBranch"
//               value={formData.bankBranch || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               label="Tax Payer ID"
//               name="taxPayerId"
//               value={formData.taxPayerId || ""}
//               onChange={handleChange}
//             />
//           </Grid>
//         </Grid>

//         <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
//           Update Employee
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default EditEmployee;











// 'use client';

// import React, { useState, useEffect } from "react";
// import { Box, Button, Grid, TextField } from "@mui/material";

// const EditEmp = ({ employee, handleUpdate, handleClose }) => {
//   const [formData, setFormData] = useState(employee || {});

//   useEffect(() => {
//     if (employee) setFormData(employee);
//   }, [employee]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "document") {
//       setFormData({ ...formData, document: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleUpdate(formData); // ✅ updates employee
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={6}><TextField fullWidth name="firstName" label="First Name" value={formData.firstName || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="lastName" label="Last Name" value={formData.lastName || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="fatherName" label="Father Name" value={formData.fatherName || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="email" label="Email" value={formData.email || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="phone" label="Phone" value={formData.phone || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="altPhone" label="Alt Phone" value={formData.altPhone || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="pan" label="PAN" value={formData.pan || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="gender" label="Gender" value={formData.gender || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="dob" type="date" InputLabelProps={{ shrink: true }} value={formData.dob || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="currentAddress" label="Current Address" value={formData.currentAddress || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="permanentAddress" label="Permanent Address" value={formData.permanentAddress || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="branch" label="Branch" value={formData.branch || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="department" label="Department" value={formData.department || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="designation" label="Designation" value={formData.designation || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="empCode" label="Employee Code" value={formData.empCode || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="joiningDate" type="date" InputLabelProps={{ shrink: true }} value={formData.joiningDate || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="role" label="Role" value={formData.role || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="basicSalary" label="Basic Salary" value={formData.basicSalary || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="accountHolder" label="Account Holder" value={formData.accountHolder || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="accountNumber" label="Account Number" value={formData.accountNumber || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="ifsc" label="IFSC" value={formData.ifsc || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="bankName" label="Bank Name" value={formData.bankName || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="branchLocation" label="Branch Location" value={formData.branchLocation || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="bankBranch" label="Bank Branch" value={formData.bankBranch || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={6}><TextField fullWidth name="taxPayerId" label="Tax Payer ID" value={formData.taxPayerId || ""} onChange={handleChange} /></Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             name="document"
//             type="file"
//             InputLabelProps={{ shrink: true }}
//             onChange={handleChange}
//           />
//         </Grid>
//       </Grid>

//       <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2, gap: 1 }}>
//         <Button onClick={handleClose} color="secondary">Cancel</Button>
//         <Button type="submit" variant="contained" color="primary">Update</Button>
//       </Box>
//     </Box>
//   );
// };

// export default EditEmp;

























"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";

const EditEmployee = ({ employee, handleUpdate, handleClose }) => {
  const [formData, setFormData] = useState(employee || {});

  useEffect(() => {
    if (employee) setFormData(employee);
  }, [employee]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  return (
    <Paper sx={{ p: 4, m: 3, maxHeight: "80vh", overflowY: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Edit Employee
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          Personal Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="First Name" name="firstName" value={formData.firstName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Last Name" name="lastName" value={formData.lastName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Father Name" name="fatherName" value={formData.fatherName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Email" name="email" value={formData.email || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Phone" name="phone" value={formData.phone || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Alternate Phone" name="altPhone" value={formData.altPhone || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="PAN No" name="panNo" value={formData.panNo || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}>
            <TextField select fullWidth label="Gender" name="gender" value={formData.gender || ""} onChange={handleChange}>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}><TextField type="password" fullWidth label="Password" name="password" value={formData.password || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="password" fullWidth label="Confirm Password" name="confirmPassword" value={formData.confirmPassword || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Current Address" name="currentAddress" value={formData.currentAddress || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12}><TextField fullWidth label="Permanent Address" name="permanentAddress" value={formData.permanentAddress || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="date" fullWidth label="Date of Birth" name="dob" InputLabelProps={{ shrink: true }} value={formData.dob || ""} onChange={handleChange} /></Grid>
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
              {formData[doc.name] && (
                <Typography variant="caption">{formData[doc.name]?.name || formData[doc.name]}</Typography>
              )}
            </Grid>
          ))}
        </Grid>

        {/* Company Details */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Company Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="Employee ID" name="employeeId" value={formData.employeeId || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Branch Name" name="branchName" value={formData.branchName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Department" name="department" value={formData.department || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Designation" name="designation" value={formData.designation || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Employee Code" name="employeeCode" value={formData.employeeCode || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField type="date" fullWidth label="Joining Date" name="joiningDate" InputLabelProps={{ shrink: true }} value={formData.joiningDate || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Role" name="role" value={formData.role || ""} onChange={handleChange} /></Grid>
        </Grid>

        {/* Bank Details */}
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Bank Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}><TextField fullWidth label="Account Holder Name" name="accountHolderName" value={formData.accountHolderName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Account Number" name="accountNumber" value={formData.accountNumber || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Bank Name" name="bankName" value={formData.bankName || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="IFSC Code" name="ifsc" value={formData.ifsc || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Bank Branch" name="bankBranch" value={formData.bankBranch || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Branch Location" name="branchLocation" value={formData.branchLocation || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Tax Payer ID" name="taxPayerId" value={formData.taxPayerId || ""} onChange={handleChange} /></Grid>
          <Grid item xs={12} md={6}><TextField fullWidth label="Basic Salary" name="basicSalary" value={formData.basicSalary || ""} onChange={handleChange} /></Grid>
        </Grid>

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>Update Employee</Button>
      </form>
    </Paper>
  );
};

export default EditEmployee;


