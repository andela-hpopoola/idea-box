import React from "react";
import PropTypes from "prop-types";

const Button = props => <button onClick={props.onClick}> {props.name} </button>;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
