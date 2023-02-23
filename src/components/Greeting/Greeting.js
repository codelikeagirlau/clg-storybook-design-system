import React from "react";
import PropTypes from "prop-types";
import "./greeting.css";

/**
 * A greeting component that accepts custom text and a jaunty angle
 */

const Greeting = ({ greeting_text }) => {
  return (
    <>
      <div className="greeting">
        <p>{greeting_text || "hi there!"}</p>
      </div>
    </>
  );
};
export default Greeting;

Greeting.propTypes = {
  greeting: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
