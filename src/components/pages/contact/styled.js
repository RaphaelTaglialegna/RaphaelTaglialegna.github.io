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
    img { 
      ${tw`
        absolute
        h-4/5
        lg:h-auto        
      `}
    bottom: 0;
    z-index: 1;
      }
    }
  }
  `; 

export { 
  ContactContainer,
}