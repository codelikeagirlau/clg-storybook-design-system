import React from "react";
import PropTypes from "prop-types";
import * as styles from "./Greeting.module.scss";

/**
 * A greeting component that accepts custom text and a jaunty angle
 */

const Greeting = ({ greeting_text }) => {
  return (
    <>
      <div className={styles.greeting}>
        <p>{greeting_text}</p>
      </div>
    </>
  );
};
export default Greeting;

Greeting.propTypes = {
  greeting: PropTypes.shape({
    /**
    The text you want your greeting component to display
    */
    greeting_text: PropTypes.string,
  }),
};

Greeting.defaultProps = {
  greeting_text: "hi there!",
};
