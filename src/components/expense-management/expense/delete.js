// "use client";
// import React from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   Typography,
//   Box,
// } from "@mui/material";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber";

// export default function ConfirmDeleteDialog({ open, onClose, onConfirm }) {
//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       aria-labelledby="confirm-dialog-title"
//       aria-describedby="confirm-dialog-description"
//     >
//       {/* Icon + Title */}
//       <DialogTitle
//         id="confirm-dialog-title"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           textAlign: "center",
//           paddingTop: "20px",
//         }}
//       >
//         <Box sx={{ fontSize: 60, color: "#f0ad4e", mb: 1 }}>
//           <WarningAmberIcon fontSize="inherit" />
//         </Box>
//         <Typography variant="h6" fontWeight="bold">
//           Are you sure?
//         </Typography>
//       </DialogTitle>

//       {/* Content */}
//       <DialogContent style={{ textAlign: "center" }}>
//         <Typography variant="body1" color="textSecondary">
//           You won’t be able to revert this
//         </Typography>
//       </DialogContent>

//       {/* Buttons */}
//       <DialogActions sx={{ justifyContent: "center", paddingBottom: "20px" }}>
//         <Button
//           variant="outlined"
//           onClick={onClose}
//           sx={{ minWidth: "100px" }}
//         >
//           Cancel
//         </Button>
//         <Button
//           variant="contained"
//           color="error"
//           onClick={onConfirm}
//           sx={{ minWidth: "100px" }}
//         >
//           Delete
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// }





"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const DeleteConfirmation = () => {
  const [open, setOpen] = useState(true); // open by default for demo

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    alert("Item Deleted!"); // replace with your delete logic
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        style: { borderRadius: 16, textAlign: "center", padding: "10px" },
      }}
    >
      {/* Title with Close Button */}
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Warning Icon and Text */}
      <DialogContent>
        <WarningAmberIcon
          sx={{ fontSize: 60, color: "orange", marginBottom: "10px" }}
        />
        <Typography variant="h6" gutterBottom>
          Are you sure?
        </Typography>
        <Typography variant="body2" color="textSecondary">
          You won't be able to revert this
        </Typography>
      </DialogContent>

      {/* Action Buttons */}
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button onClick={handleClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleDelete} variant="contained" color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmation;
