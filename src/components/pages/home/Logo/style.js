import styled from "styled-components";
import tw from "twin.macro";

const PhotoContainer = styled.div`
  ${tw`
    lg:w-1/2
    lg:h-full
    w-full
    h-1/2
    lg:right-2
    absolute
    flex
    justify-center
  `};
  z-index: 0;
  opacity: 1;
  bottom: 0;

  .solid-logo {
    ${tw`
    absolute
    h-4/5
    lg:h-auto
    lg:right-1
  `}
    bottom: 0;
    z-index: 1;
    animation: fadeIn 1s 2.4s backwards; 
  }
`; 



export { 
  PhotoContainer
};
