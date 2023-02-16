import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color } from "./shared/styles";
//import { glow } from "./shared/animation";
// import { Icon } from "./Icon";
export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};
export const types = {
  h1: 'h1',
  h2: 'h2',
};
const TitleType = styled.div`
  background: ${(props) => (!props.loading ? "transparent" : color.light)};
  overflow: hidden;
  text-transform: uppercase;


  ${(props) =>
    props.size === "tiny" &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.loading && "#37D5D3"};
    `}

`;


export function Title({ loading, username, src, size, text, type, ...props }) {

  let titleContent = text;

  return (
    // <TitleType size={size} loading={loading} src={src} {...a11yProps} {...props}>
    //   {avatarFigure}
    // </TitleType>

    <TitleType text={text} type={type}>{titleContent}</TitleType>
  );


  // const types = {
  //   h1: '<h1>'+{titleContent}+'</h1>',
  //   h2: '<h2>'+{titleContent}+'</h2>',
  // };

  // if (types === 'h1') {
  //   h1Title = (
  //     <TitleType text={text}><h1>{titleContent}</h1></TitleType>
  //   );
  // }

  // return (
  //   // <TitleType size={size} loading={loading} src={src} {...a11yProps} {...props}>
  //   //   {avatarFigure}
  //   // </TitleType>

  //   <TitleType text={text} type={type}>
    
  //     {h1Title}
      
  //   </TitleType>
  // );

  // // if (types === 'h1') {
  // //   let h1Title = (
  // //     <TitleType text={text}><h1>{titleContent}</h1></TitleType>
  // //   );
  // // }

  // // return (
  // //     {h1Title}
  // // );


}

Title.propTypes = {
  
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(types)),
  username: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Title.defaultProps = {
  text: "Hello",
  type: "h1",
  username: "loading",
  src: null,
  size: "medium",
};
