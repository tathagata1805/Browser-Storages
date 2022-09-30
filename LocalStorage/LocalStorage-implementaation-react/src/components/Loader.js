import React from "react";
import "./Loader.css";

export default function LoadingSpinner() {
  return (
    <React.Fragment>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </React.Fragment>
  );
}
