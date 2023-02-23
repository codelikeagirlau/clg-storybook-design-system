import React from "react";
import PropTypes from "prop-types";

/**
 * A component to display a logo
 */

const Logo = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
export default Logo;

Logo.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};
