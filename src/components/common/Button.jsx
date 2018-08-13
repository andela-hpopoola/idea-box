import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button className={`btn ${props.className}`} onClick={props.onClick}>
    {" "}
    {props.name}{" "}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {},
  className: ""
};

export default Button;
