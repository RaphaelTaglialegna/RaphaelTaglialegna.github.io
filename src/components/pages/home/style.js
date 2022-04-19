import styled from "styled-components";
import tw from "twin.macro";

const HomeContainer = styled.div`
  ${tw`
    width[85%]
    relative
    m-auto
    h-screen
    bg-white
    overflow-hidden
    flex-auto
    justify-center
    lg:flex
    flex-col

  `};
  .divContainer {
    ${tw`
      w-full h-full static box-sizing[border-box]
    `};
  }
`; 

const MainContent = styled.main`
  ${tw`
      z-0 
      w-1/2 
      h-full 
      left-1
      bottom-0
      flex 
      align-baseline 
      content-end 
      justify-end      
  `};
  
  .div1 {
    ${tw`
      m-auto sm:text-center lg:text-left
    `};
  }

  .h1 {
    ${tw`
     tracking-tight font-extrabold text-gray-900   `};
    font-size: 3.5vw;
    line-height: 1;
  }
  
  .p1 {
    ${tw`
     mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 flex justify-between
    `};
  }
 
`; 

export { 
  HomeContainer,
  MainContent,
};
