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

export function Title({ className, text, type, ...props }) {
  const titleContent = {
    h1: <h1>{text}</h1>,
    h2: <h2>{text}</h2>
  }[type];

  return (
    <TitleType className={className} text={text} type={type}>{titleContent}</TitleType>
  );
}

// I may have asked ChatGPT if there was a cleaner way of writing. 
// They suggested this; The output is interesting and clean but I don't fully understand it...

// export function Title({ text, type, ...props }) {

//   const titleTags = {
//     h1: "h1",
//     h2: "h2"
//   };

//   const TitleTag = titleTags[type] || "h3";

//   return (
//     <TitleTag>{text}</TitleTag>
//   );
// }


Title.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
};

Title.defaultProps = {
  text: "Hello",
  type: "h1",
};
