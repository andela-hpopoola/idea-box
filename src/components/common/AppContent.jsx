import React from "react";

const AppContent = props => {
  return (
    <div className="app-content d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
};

export default AppContent;
