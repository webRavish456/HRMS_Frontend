import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const ViewBranch = ({ selectedBranch, handleClose, getStatusColor }) => {
  if (!selectedBranch) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
        <Typography>No branch selected</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "1rem 0" }}>
      <Grid container spacing={2}>
          <Grid  size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Branch ID:</Typography>
            <Typography>{selectedBranch.id || "N/A"}</Typography>
          </Box>
        </Grid>
        <Grid  size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Branch Name:</Typography>
            <Typography>{selectedBranch.branchName || "N/A"}</Typography>
          </Box>
        </Grid>
        <Grid  size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Branch Location:</Typography>
            <Typography>{selectedBranch.branchLocation || "N/A"}</Typography>
          </Box>
        </Grid>
            <Grid  size={{xs:12, md:6}}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Status:</Typography>
            <Box className={`hrms-badge ${getStatusColor ? getStatusColor(selectedBranch.status) : 'hrms-badge-success'}`}>
              {selectedBranch.status || "N/A"}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewBranch;