import styled from "styled-components";
import tw from "twin.macro";

const ContactContainer = styled.div`
 ${tw`
    w-full
    relative
    m-auto
    h-screen
    bg-black
    overflow-hidden
    flex-auto
    justify-center
    lg:flex
    flex-col
    `};
  .divContainer {
    ${tw`
       h-full
       m-auto
       w-full
       lg:w-4/5 
      `};

.containerContact { 
  ${tw`
      h-full
      mt-2
      mx-4
      w-full
      lg:w-1/2
      lg:mt-20
      `};
}
  }
  `; 

export { 
  ContactContainer,
}