import React from "react";
import Navbar from "../../header/NavBar"; 
import { projects } from "../../helpers/projects";
import { FaGithub } from "react-icons/fa";
import { ButtonProjects, ProjectSectionWrapper, ProjectsSectionContainer } from "./style";
import './index.scss'
import ReactCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import AnimatedLetters from "../../AnimatedLetters";
import { i18n } from '../../translate/i18n'


const handleDragStart = (e) => e.preventDefault();

let desktopBreakpoints = {
  stagePadding: {
    paddingLeft: 50, // in pixels
    paddingRight: 50
  },
  responsive: {
    0: {
      items: 1
    },
    820: {
      items: 2
    },

    1024: {
      items: 3
    }
  }
};

let options = {
  mouseTrackingEnabled: true,
  dotsDisabled: true,
  swipeDisabled: false,
  preservePosition: true
};

function ProjectsSection() {
  const titles = i18n.t('titles',{ returnObjects: true });
  const messages = i18n.t('messages',{ returnObjects: true });
 
const sliderOptions = {
  ...options,
  ...desktopBreakpoints
};
  return ( 
    <ProjectsSectionContainer name="Projects">      
        <div className="divContainer">
          <Navbar />
          <main className="mx-auto max-w-7xl px-4 mt-6 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-15">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <AnimatedLetters
              letterClass='white text-animate-hover'
              strArray={titles.titleArray}
            />
            <AnimatedLetters
              letterClass='text-animate-hover'
              strArray={titles.projectArray}
            />
              </h1>
              <p className="mt-3 text-lg text-gray-400 ">
                {messages.projText}
              </p>
            </div>
    
            <ProjectSectionWrapper >    
              < ReactCarousel
              alice-carousel
              autoWidth  
              infinite
              disableDotsControls={true} 
              {...sliderOptions}
              controlsStrategy="alternate" 
              items= {projects.map((project, idx) => {
                  return (                                      
                    <div class="card item" onDragStart={handleDragStart} data-value={idx + 1} role="presentation">
                      <div class="card__header">
                        <img src={project.img} alt={project.name} class="card__image" width="600" />
                      </div>
                      <div class="card__body">
                      <span class="tag tag-blue">Front End</span>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                      </div>
                      <div class="card__footer">
                        
                          <div className="flex justify-center">
                            <ButtonProjects href={project.linkProject}  target="_blank" rel="noreferrer">
                              Go Project
                            </ButtonProjects>        
                
                            <ButtonProjects href={project.linkGit} target="_blank" rel="noreferrer">
                              <span><FaGithub className="mr-2"/></span>
                              <span>Go Git</span> 
                            </ButtonProjects>
                          </div>
                      </div>
                    </div>
                )})} />
            </ProjectSectionWrapper>
          </main>
        </div>
    </ProjectsSectionContainer>
   );
}

export default ProjectsSection;