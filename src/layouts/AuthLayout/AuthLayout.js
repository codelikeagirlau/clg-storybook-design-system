import React from "react";
import PropTypes from "prop-types";

const AuthLayout = ({ custom_text }) => {
  return (
    <div className="auth-layout">
      <p>this is the auth layout</p>
      <p>{custom_text}</p>
    </div>
  );
};
export default AuthLayout;

AuthLayout.defaultProps = {
  custom_text: PropTypes.string.isRequired,
};
