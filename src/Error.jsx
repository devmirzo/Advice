import React from "react";

const Error = ({ message }) => {
  return (
    <div className="error-container">
      <h2 className="error-title">Something Went Wrong!</h2>
      <p className="error-message">{message || "An unknown error occurred."}</p>
    </div>
  );
};

export default Error;
