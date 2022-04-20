import styled from "styled-components";
import tw from "twin.macro";

const PhotoContainer = styled.div`
  ${tw`
    lg:w-1/2
    w-full
  `};
  z-index: 0;
  opacity: 1;
  position: absolute;
  right: 1%;
  bottom: 0;
  left: auto;
  display: flex;
  align-items:flex-end;
  align-content:flex-end;
  justify-content: right;
  box-sizing: border-box;

  .solid-logo {
    ${tw`
    lg:w-9/12
    w-1/2
    lg:right-0
    right-1/4
  `};
    position: absolute;
    top: auto;
    bottom: auto;
    margin: auto;
    z-index: 1;
    animation: fadeIn 1s 2.4s backwards; 
  }
`; 



export { 
  PhotoContainer
};
