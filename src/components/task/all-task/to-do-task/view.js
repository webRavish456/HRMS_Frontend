// import React from "react";

// const Viewtodo = ({ viewData }) => {
//   return (
//     <div style={{width:"400px"}}>
//       <p><b>Employee Name:</b> {viewData?.empName}</p>
//       <p><b>Task:</b> {viewData?.task}</p>
//       <p><b>Deadline:</b> {viewData?.deadline}</p>
//        <p><b>Assigned By:</b> {viewData?.assignedBy}</p>
//         <p><b>Status:</b> {viewData?.status}</p>
//          <p><b>Action:</b> {viewData?.action}</p>
        
//     </div>
//   );
// };

// export default Viewtodo;


"use client";
import React from "react";

const ViewTodo = ({ viewData }) => {
  if (!viewData) return <p>No Data</p>;

  return (
    <div>
      <h3>View To Do Task</h3>
      <p><b>Employee Name:</b> {viewData.empName}</p>
      <p><b>Task:</b> {viewData.task}</p>
      <p><b>Status:</b> {viewData.status}</p>
    </div>
  );
};

export default ViewTodo;
