import React from "react";

const AppContainer = props => {
  return (
    <div className="app-container d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
};

export default AppContainer;
