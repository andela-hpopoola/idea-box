import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand mb-0 h1">IDEA.ME</span>
        <div className="float-right">
          <div className="dropdown">
            <div
              className="dropdown-toggle"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="d-inline-flex justify-content-center align-items-center rounded-circle user-profile">
                H
              </div>
            </div>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
