import styled from "styled-components";
import tw from "twin.macro";

const ProjectsSectionContainer = styled.div`  
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
    width: 80%;
    ${tw`
       h-full
       m-auto
      `};

  }
  `; 
const ButtonProjects = styled.a`  
${tw`
   mx-4 w-32 h-8 sm:h-10 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 flex justify-center items-center
`};
`; 
  const ProjectCard = styled.div`
 
    ${tw`
      width[280px]
      sm:width[380px]
      sm:m-5
      border-radius[2rem]
      bg-white
      text-align[center]
      text-black
      p-2.5    
      flex
      flex-col
      mt-4
    `}
  `;
  
  const ProjectSectionWrapper = styled.div`
    scrollbar-width: thin;
    scrollbar-color: black;
  
    ::-webkit-scrollbar {
    width: 12px;
    }
  
    ::-webkit-scrollbar-track {
    background: black;
    }
  
    ::-webkit-scrollbar-thumb {
    background-color:black;
    border-radius: 20px;
    border: 3px solid black;
    }  
    
  ${tw`
    w-full
    flex
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    overflow-auto
    `}    
  `;

  export { 
    ProjectSectionWrapper,
    ProjectCard,
    ProjectsSectionContainer,
    ButtonProjects
  }