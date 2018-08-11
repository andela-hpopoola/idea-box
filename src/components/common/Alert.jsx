import PropTypes from "prop-types";
const Alert = ({ message }) => message;

Alert.propTypes = {
  message: PropTypes.string.isRequired
};

export default Alert;
