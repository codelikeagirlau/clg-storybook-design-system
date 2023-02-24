import React from "react";
import PropTypes from "prop-types";
import "./username.module.scss";

const Username = ({ username_text }) => {
  return (
    <div className="username">
      <p>{username_text}</p>
    </div>
  );
};
export default Username;

Username.propTypes = {
  username: PropTypes.shape({
    username_text: PropTypes.string.isRequired,
  }),
};
