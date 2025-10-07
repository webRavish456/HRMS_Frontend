"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";

const ViewTodo = ({ selectedTask, getStatusColor, getPriorityColor }) => {
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
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Category:</Typography>
          <Typography>{selectedTask.category}</Typography>
        </Grid>
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Priority:</Typography>
          <Box className={`hrms-badge ${getPriorityColor(selectedTask.priority)}`}>
            {selectedTask.priority}
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
        <Grid size={{xs:12, sm:6}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>Completed:</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {selectedTask.completed ? (
              <CheckCircle sx={{ color: "#10b981", fontSize: "20px" }} />
            ) : (
              <RadioButtonUnchecked sx={{ color: "#6b7280", fontSize: "20px" }} />
            )}
            <Typography variant="body2">
              {selectedTask.completed ? "Completed" : "Pending"}
            </Typography>
          </Box>
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

export default ViewTodo;
