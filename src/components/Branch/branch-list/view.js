import React from "react";

const ViewBranch = ({ viewData }) => {
  return (
    <div style={{width:"400px"}}>
      <h3><b>Branch Name:</b> {viewData?.BranchName}</h3>
       <h3><b>Location: </b>{viewData?.Location}</h3>
   <h3><b>Status:</b>{viewData?.Status}</h3>
    </div>
  );
};

export default ViewBranch;
