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
    flex-col
    lg:flex
    
  `};
  .divContainer {
    ${tw`
       h-full
       m-auto
       w-full
       lg:w-4/5      
    `};

  }
  `; 
const ButtonProjects = styled.a`  
${tw`
   mx-4 w-28 h-7 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 flex justify-center items-center
`};
`;  
  
  const ProjectSectionWrapper = styled.div`
    ${tw`
      w-full
      flex
      justify-center
      mt-5
      xl:mt-6
      2xl:mt-10
      overflow-auto
    `}    
  `;

const CardProject = styled.div`

  display: flex;
  flex-direction: column;
  width: 95%;
  height: 28rem;
  overflow: hidden;
  box-shadow: 0 .2rem 2rem rgba(131, 129, 129, 0.1);
  border-radius: 1em;
  background: #ECE9E6;
  background: linear-gradient(to right, #FFFFFF, #ECE9E6);
  transition: all 0.3s ease-in-out;

`;
;



  export { 
    ProjectSectionWrapper,
    ProjectsSectionContainer,
    ButtonProjects,
    CardProject,
  }