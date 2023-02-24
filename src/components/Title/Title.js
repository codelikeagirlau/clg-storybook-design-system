import React from "react";
import PropTypes from "prop-types";
import "./title.module.scss";

export const types = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

const Title = ({ className, text, type, ...props }) => {
  const titleContent = {
    h1: <h1>{text}</h1>,
    h2: <h2>{text}</h2>,
    h3: <h3>{text}</h3>,
  }[type];

  return (
    <div className={className} text={text} type={type}>
      {titleContent}
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
};

Title.defaultProps = {
  text: "Hello, this is a title",
  type: "h1",
};

export default Title;
