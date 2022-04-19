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
    py-5
    `};
  .divContainer {
    width: 80%;
    ${tw`
       h-full
       m-auto
      `};
  }
  `; 

export { 
  ContactContainer,
}