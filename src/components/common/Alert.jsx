import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, type: type = "danger" }) =>
  message && (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );

Alert.propTypes = {
  message: PropTypes.string.isRequired
};

export default Alert;
