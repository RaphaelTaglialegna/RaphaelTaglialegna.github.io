import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/header/NavBar";
import { projects } from "../../helpers/projects";
import { FaGithub } from "react-icons/fa";


const ProjectsSectionContainer = styled.div`  
  ${tw`
    w-full
    lg:min-w-max
    h-screen
    bg-black
    overflow-hidden
    flex
    justify-center
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
    h-[400px]
    flex
    flex-wrap
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    overflow-auto
    `}    
  `;

function ProjectsSection() {
  return ( 
    <ProjectsSectionContainer name="Projects">      
        <div className="z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:h-screen max-w-7xl lg:w-full lg:pb-28 xl:pb-32">

          <Navbar />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">My front end</span>{' '}
                <span className="block text-indigo-600 xl:inline">projects</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Most of the projects was made with using HTML, CSS, JS, React JS and the frameworks Bulma or Bootstrap. Curiosity this site I made using Tailwind ;)
              </p>
            </div>
    
            <ProjectSectionWrapper >

              
              {projects.map((project) => {
                return (
                  <>
                    <ProjectCard key={project.name}>
                          <h2 className=" text-xl tracking-tight font-extrabold">{project.name}</h2>            
                        <div className="relative group m-3">
                          <img src={project.img} alt={project.name} />
                          <div class="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 right-0 bottom-0 h-full w-full justify-center items-end text-sm bg-gray-200 text-black">
                          <p className="mt-2">{project.description}</p>
                          </div>  
                        </div>                  
                      <div className="flex justify-center">
                        <a href={project.linkProject} className=" mx-4 w-40 h-8 sm:h-10 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 flex justify-center items-center" target="_blank" rel="noreferrer">
                          Go Project
                        </a>
      

                        <a href={project.linkGit} className="mx-4 w-40 h-8 sm:h-10 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 flex justify-center items-center" target="_blank" rel="noreferrer">
                          <span><FaGithub className="mr-2"/></span>
                          <span>Go Git</span> 
                        </a>
                      </div>
                      </ProjectCard>
                  </>
                )
              } )}

            </ProjectSectionWrapper>
          </main>
        </div>

    </ProjectsSectionContainer>
   );
}

export default ProjectsSection;