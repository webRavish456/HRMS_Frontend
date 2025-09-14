"use client";
import React from "react";

const ViewAssign = ({ viewData }) => {
  if (!viewData) return <p>No Data</p>;

  return (
    <div>
      <h3>View Assign Task</h3>
      <h3><b>Task Name:</b> {viewData.taskName}</h3>
      <h3><b>Priority:</b> {viewData.priority}</h3>
      <h3><b>Status:</b> {viewData.status}</h3>
    </div>
  );
};

export default ViewAssign;