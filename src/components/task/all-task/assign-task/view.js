"use client";
import React from "react";

const ViewAssign = ({ viewData }) => {
  if (!viewData) return <p>No Data</p>;

  return (
    <div style={{width:'400px'}}>  
   
      <h3>View Assign Task</h3>
      <h3><b>Task Name:</b> {viewData.taskName}</h3>
      <h3><b>Priority:</b> {viewData.priority}</h3>
       <h3><b>Start Date:</b> {viewData.startDate}</h3>
        <h3><b>Due Date:</b> {viewData.dueDate}</h3>
         <h3><b>Assignee:</b> {viewData. assignee}</h3>
          <h3><b>Description:</b> {viewData.description}</h3>
         
           <h3><b>Remarks:</b> {viewData.remarks}</h3>
      <h3><b>Status:</b> {viewData.status}</h3>
    </div>
  );
};

export default ViewAssign;