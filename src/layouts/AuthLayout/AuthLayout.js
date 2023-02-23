import React from "react";
import PropTypes from "prop-types";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";

const AuthLayout = ({ src }) => {
  return (
    <div className="auth-layout">
      <Greeting />
      <Logo src={src} />
    </div>
  );
};
export default AuthLayout;
