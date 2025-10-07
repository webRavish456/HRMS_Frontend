"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const ViewAssign = ({ selectedTask, getStatusColor, getPriorityColor }) => {
  if (!selectedTask) return <p>No Data</p>;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Grid container spacing={2}>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Task ID:</Typography>
          <Typography>{selectedTask.id}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Status:</Typography>
          <Box className={`hrms-badge ${getStatusColor(selectedTask.status)}`}>
            {selectedTask.status}
          </Box>
        </Grid>
        <Grid size={{xs:12}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Task Title:</Typography>
          <Typography>{selectedTask.taskTitle}</Typography>
        </Grid>
        <Grid size={{xs:12}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Description:</Typography>
          <Typography>{selectedTask.description}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Assigned To:</Typography>
          <Typography>{selectedTask.assignedTo}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Assigned By:</Typography>
          <Typography>{selectedTask.assignedBy}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Priority:</Typography>
          <Box className={`hrms-badge ${getPriorityColor(selectedTask.priority)}`}>
            {selectedTask.priority}
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Progress:</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Box sx={{ width: "100px", height: "8px", backgroundColor: "#e5e5e5", borderRadius: "4px", overflow: "hidden" }}>
              <Box 
                sx={{ 
                  width: `${selectedTask.progress}%`, 
                  height: "100%", 
                  backgroundColor: selectedTask.progress === 100 ? "#10b981" : "#3b82f6"
                }} 
              />
            </Box>
            <Typography variant="caption">{selectedTask.progress}%</Typography>
          </Box>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Due Date:</Typography>
          <Typography>{selectedTask.dueDate}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Created Date:</Typography>
          <Typography>{selectedTask.createdDate}</Typography>
        </Grid>
        {selectedTask.notes && (
          <Grid size={{xs:12}}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Notes:</Typography>
            <Typography>{selectedTask.notes}</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ViewAssign;