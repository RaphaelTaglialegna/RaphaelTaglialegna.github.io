import styled from "styled-components";
import tw from "twin.macro";

const HomeContainer = styled.div`
  ${tw`
    w-full
    relative
    m-auto
    h-screen
    bg-white
    overflow-hidden
    flex-auto
    justify-center
    flex-col
    lg:flex
    lg:w-10/12

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
      w-full 
      h-1/2
      lg:h-full 
      bottom-0
      flex 
      align-baseline 
      content-end 
      justify-end
      lg:w-1/2      
  `};
  
  .div1 {
    ${tw`
      mx-auto my-auto lg:m-auto sm:text-center lg:text-left
    `};
  }

  .h1 {
    ${tw`
     tracking-tight font-extrabold text-gray-900   
     lg:text-6xl
     lg:line-height[1]

     `};
    font-size: 30px;
    line-height: 0.7;
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
