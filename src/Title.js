import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const types = {
  h1: 'h1',
  h2: 'h2',
};

const TitleType = styled.div`
  overflow: hidden;
  text-transform: uppercase;
  color: red;
`;

const Title = ({className, text, type, ...props}) => {

  const titleContent = {
    h1: <h1>{text}</h1>,
    h2: <h2>{text}</h2>
  }[type];

  return (
    <TitleType className={className} text={text} type={type}>{titleContent}</TitleType>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
};

Title.defaultProps = {
  text: "Hello",
  type: "h1",
};
