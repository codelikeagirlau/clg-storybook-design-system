import React from "react";
import PropTypes from "prop-types";
import "./greeting.css";

const Greeting = (props) => {
  return (
    <>
      <div className="greeting">
        <p>{props.greeting_text || "hi there!"}</p>
      </div>
    </>
  );
};
export default Greeting;

Greeting.propTypes = {
  greeting: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
};

// greeting accepts a prop of `greeting_text` and a prop of `rotation`
