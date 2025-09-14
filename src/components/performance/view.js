import React from "react";

const ViewIndicator = ({ viewData }) => {
  return (
    <div style={{ width: "450px", lineHeight: "1.8" }}>
      <h3>
        <b>Employee ID:</b> {viewData?.employeeID}
      </h3>
      <h3>
        <b>Employee Name:</b> {viewData?.employeeName}
      </h3>
      <h3>
        <b>Department:</b> {viewData?.department}
      </h3>
      <h3>
        <b>Designation:</b> {viewData?.designation}
      </h3>

      <h3>
        <b>Review Period:</b> {viewData?.reviewPeriod}
      </h3>
      <h3>
        <b>Goals & KPIs:</b> {viewData?.goals}
      </h3>
      <h3>
        <b>Self Rating:</b> {viewData?.selfRating}
      </h3>
      <h3>
        <b>Manager Rating:</b> {viewData?.managerRating}
      </h3>
      <h3>
        <b>Feedback Notes:</b> {viewData?.feedback}
      </h3>
      <h3>
        <b>Final Score:</b> {viewData?.finalScore}
      </h3>
      <h3>
        <b>Status:</b> {viewData?.status}
      </h3>
      <h3>
        <b>Promotion / Increment Recommendation:</b>{" "}
        {viewData?.recommendation ? "Yes" : "No"}
      </h3>
    </div>
  );
};

export default ViewIndicator;
