import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <div>
      <Nav />
      <div className="header mt-5">
        <h5 className="text-center font-weight-normal">Hello Haruna</h5>
        <h1 className="text-uppercase text-center">Get Stuff Done</h1>
      </div>
    </div>
  );
};

export default Header;
