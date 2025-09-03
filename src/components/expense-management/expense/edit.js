// "use client";

// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   Grid,
//   TextField,
//   Button,
//   MenuItem,
//   Typography,
//   DialogActions,
// } from "@mui/material";

// const EditExpense = () => {
//   const [open, setOpen] = useState(true);

//   const [formData, setFormData] = useState({
//     category: "Printing and Stationery",
//     personName: "ABC",
//     amount: "2000",
//     paymentMode: "Cash",
//     description: "abcd",
//     file: null,
//   });

//   const categories = ["Printing and Stationery", "Travel", "Food", "Others"];
//   const paymentModes = ["Cash", "Card", "UPI", "Bank Transfer"];

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleUpdate = () => {
//     console.log("Updated Data: ", formData);
//     setOpen(false);
//   };

//   return (
//     <Dialog open={open} fullWidth maxWidth="md">
//       <DialogTitle>Edit Expense</DialogTitle>
//       <DialogContent>
//         <Grid container spacing={2} mt={1}>
//           {/* Category */}
//           <Grid item xs={6}>
//             <TextField
//               select
//               label="Category"
//               fullWidth
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//             >
//               {categories.map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           {/* Person Name */}
//           <Grid item xs={6}>
//             <TextField
//               label="Enter Person Name"
//               fullWidth
//               name="personName"
//               value={formData.personName}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Amount */}
//           <Grid item xs={6}>
//             <TextField
//               label="Enter Amount"
//               fullWidth
//               type="number"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Payment Mode */}
//           <Grid item xs={6}>
//             <TextField
//               select
//               label="Select Payment Mode"
//               fullWidth
//               name="paymentMode"
//               value={formData.paymentMode}
//               onChange={handleChange}
//             >
//               {paymentModes.map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>

//           {/* File Upload */}
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               component="label"
//               sx={{ backgroundColor: "#0077b6" }}
//             >
//               Bill Attachment File
//               <input
//                 type="file"
//                 hidden
//                 name="file"
//                 accept=".pdf,.jpeg,.jpg,.png"
//                 onChange={handleChange}
//               />
//             </Button>
//             <Typography variant="body2" mt={1}>
//               (Upload only pdf, jpeg, jpg, png format and file size minimum 100
//               kb)
//             </Typography>
//           </Grid>

//           {/* Description */}
//           <Grid item xs={12}>
//             <TextField
//               label="Description"
//               fullWidth
//               multiline
//               rows={3}
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </Grid>
//         </Grid>
//       </DialogContent>

//       {/* Buttons */}
//       <DialogActions>
//         <Button
//           onClick={() => setOpen(false)}
//           sx={{ border: "1px solid #0077b6", color: "#0077b6" }}
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           onClick={handleUpdate}
//           sx={{ backgroundColor: "#0077b6" }}
//         >
//           Update
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default EditExpense;




"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EditExpense = () => {
  const [open, setOpen] = useState(true);

  const [formData, setFormData] = useState({
    category: "Printing and Stationery",
    personName: "ABC",
    amount: "2000",
    paymentMode: "Cash",
    description: "abcd",
    file: null,
  });

  const categories = ["Printing and Stationery", "Travel", "Food", "Others"];
  const paymentModes = ["Cash", "Card", "UPI", "Bank Transfer"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleUpdate = () => {
    console.log("Updated Data: ", formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
      {/* Title with cross button */}
      <DialogTitle sx={{ pr: 6 }}>
        Edit Expense
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          size="small"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={2} mt={1}>
          {/* Category */}
          <Grid item xs={6}>
            <TextField
              select
              label="Category"
              fullWidth
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Person Name */}
          <Grid item xs={6}>
            <TextField
              label="Enter Person Name"
              fullWidth
              name="personName"
              value={formData.personName}
              onChange={handleChange}
            />
          </Grid>

          {/* Amount */}
          <Grid item xs={6}>
            <TextField
              label="Enter Amount"
              fullWidth
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </Grid>

          {/* Payment Mode */}
          <Grid item xs={6}>
            <TextField
              select
              label="Select Payment Mode"
              fullWidth
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
            >
              {paymentModes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* File Upload */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
              sx={{ backgroundColor: "#0077b6" }}
            >
              Bill Attachment File
              <input
                type="file"
                hidden
                name="file"
                accept=".pdf,.jpeg,.jpg,.png"
                onChange={handleChange}
              />
            </Button>
            <Typography variant="body2" mt={1}>
              (Upload only pdf, jpeg, jpg, png format and file size minimum 100
              kb)
            </Typography>
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>

      {/* Buttons */}
      <DialogActions>
        <Button
          onClick={() => setOpen(false)}
          sx={{ border: "1px solid #0077b6", color: "#0077b6" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleUpdate}
          sx={{ backgroundColor: "#0077b6" }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditExpense;