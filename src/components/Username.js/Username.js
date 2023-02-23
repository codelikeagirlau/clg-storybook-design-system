import React from "react";
import PropTypes from "prop-types";
import "./username.css";

/**
 * A username component that accepts a single string
 */

const Username = (props) => {
  return (
    <>
      <div className="username">
        <p>{props.username_text}</p>
      </div>
    </>
  );
};
export default Username;

Username.propTypes = {
  username: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
