// import React from "react";
// import { Typography, Grid } from "@mui/material";

// const View = ({ employee }) => {
//   if (!employee) return null;

//   return (
//     <Grid container spacing={2}>
//       {Object.entries(employee).map(([key, value]) => (
//         <Grid item xs={6} key={key}>
//           <Typography variant="body2"><strong>{key.toUpperCase()}:</strong> {value}</Typography>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default View;











"use client";
import React from "react";
import { Grid, Typography, Paper } from "@mui/material";

const ViewEmployee = ({ employee }) => {
  if (!employee) return <Typography>No data available</Typography>;

  return (
    <Paper sx={{ p: 4, m: 3, maxHeight: "80vh", overflowY: "auto" }}>
      <Typography variant="h5" gutterBottom>
        View Employee Details
      </Typography>

      {/* Personal Details */}
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Personal Details
      </Typography>
      <Grid container spacing={2}>
        {[
          { label: "First Name", value: employee.firstName },
          { label: "Last Name", value: employee.lastName },
          { label: "Father Name", value: employee.fatherName },
          { label: "Email", value: employee.email },
          { label: "Phone", value: employee.phone },
          { label: "Alternate Phone", value: employee.altPhone },
          { label: "PAN No", value: employee.panNo },
          { label: "Gender", value: employee.gender },
          { label: "Current Address", value: employee.currentAddress },
          { label: "Permanent Address", value: employee.permanentAddress },
          { label: "Date of Birth", value: employee.dob },
        ].map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Typography><b>{item.label}:</b> {item.value}</Typography>
          </Grid>
        ))}
      </Grid>

      {/* Documents */}
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Documents</Typography>
      <Grid container spacing={2}>
        {[
          { label: "Certificate", value: employee.certificate },
          { label: "Resume", value: employee.resume },
          { label: "Aadhar Document", value: employee.aadharDoc },
          { label: "PAN Card Document", value: employee.panDoc },
          { label: "Photo", value: employee.photo },
        ].map((doc, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Typography>
              <b>{doc.label}:</b> {doc.value ? (doc.value.name || doc.value) : "Not Uploaded"}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {/* Company Details */}
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Company Details</Typography>
      <Grid container spacing={2}>
        {[
          { label: "Employee ID", value: employee.employeeId },
          { label: "Branch Name", value: employee.branchName },
          { label: "Department", value: employee.department },
          { label: "Designation", value: employee.designation },
          { label: "Employee Code", value: employee.employeeCode },
          { label: "Joining Date", value: employee.joiningDate },
          { label: "Role", value: employee.role },
        ].map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Typography><b>{item.label}:</b> {item.value}</Typography>
          </Grid>
        ))}
      </Grid>

      {/* Bank Details */}
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>Bank Details</Typography>
      <Grid container spacing={2}>
        {[
          { label: "Account Holder Name", value: employee.accountHolderName },
          { label: "Account Number", value: employee.accountNumber },
          { label: "Bank Name", value: employee.bankName },
          { label: "IFSC Code", value: employee.ifsc },
          { label: "Bank Branch", value: employee.bankBranch },
          { label: "Branch Location", value: employee.branchLocation },
          { label: "Tax Payer ID", value: employee.taxPayerId },
          { label: "Basic Salary", value: employee.basicSalary },
        ].map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Typography><b>{item.label}:</b> {item.value}</Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ViewEmployee;
