import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../header/NavBar";
import AnimatedLetters from "../../AnimatedLetters";
import raphaMeditation from '../../../assets/images/raphaMeditation.png';
import { AboutContainer, ImageContainer, ParagraphAbout } from "./styled";
import { i18n } from '../../translate/i18n'


function About() {
  const titles = i18n.t('titles',{ returnObjects: true });
  const messages = i18n.t('messages',{ returnObjects: true });
  const isBigScree = useMediaQuery({minWidth: 1024}); 
  
  return ( 
    <AboutContainer name="About">
      <div className="divContainer" >
        <Navbar />
        <div className="containerContent">
            {isBigScree && <div className="containerAbout">
              <ImageContainer
              src={raphaMeditation}
              alt="Raphael Taglialegna"
              />
            </div>}
          <div className="containerAbout" >
            <main >
              <div >
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <AnimatedLetters
                  letterClass='black text-animate-hover'
                  strArray={titles.titleWhat}
                />
                <AnimatedLetters
                  letterClass='text-animate-hover'
                  strArray={titles.titleAbout}
                />
                </h1>
                <div className="my-4 lg:my-10 pb-5 overflow-auto">
                  
                  <ParagraphAbout>
                  {messages.about.p1}
                  </ParagraphAbout>
                  
                  <ParagraphAbout>
                  {messages.about.p2}
                  </ParagraphAbout>
                  
                  <ParagraphAbout>
                  {messages.about.p3}
                  </ParagraphAbout>
                  <div className="flex justify-around mt-5">
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title = "JAVASCRIPT"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title = "TYPESCRIPT"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" title = "NODEJS"/>
                    
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" title = "CSS3"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title = "GIT"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title = "REACT"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" title = "MYSQL"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" title = "MONGO"/>
                  </div>
    
                  <ParagraphAbout>
                  {messages.about.p4}<br/>
                  {messages.about.p5}
                  </ParagraphAbout>

                  <div className="flex justify-around mt-5">
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title = "JAVA"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title = "LINUX"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" title = "PYTHON"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" title = "ANGULARJS"/>
                    <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" title = "PHP"/>
                  
                  </div>
                </div>
              </div>
            </main>     
          </div>
        </div>
      </div>
    </AboutContainer>
   );
}

export default About;