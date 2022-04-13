import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../header/NavBar";
import raphaMeditation from '../../../assets/images/raphaMeditation.png';

const AboutContainer = styled.div`
  ${tw`
    w-full
    h-screen
    bg-white
    flex-auto
    justify-center
    lg:flex
  `};
`;  

function About() {
  const isBigScree = useMediaQuery({minWidth: 1024}); 
  return ( 
    <AboutContainer name="About">
      <div className="max-w-7xl" >
        <div className="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:h-screen lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

          <Navbar />
          {isBigScree &&
              <img
              className=" w-full lg:h-screen object-cover"
              src={raphaMeditation}
              alt="Raphael Taglialegna"
              />
          }
        </div>
      </div>
      <div className="lg:max-w-2xl" >
          <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="inline">What about</span>{' '}
                <span className=" text-indigo-600 inline">me?</span>
              </h1>
              <div className="my-10 pb-5 overflow-auto lg:h-[550px] sm:h-[500px] h-[400px] ">
                
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I have been working with people for a long time, teaching them acting skills. Technology has become my passion, too, and I wish to combine both areas together, so I can transform people's lives. Now, I feel prepared and excited to start working, and to combine my new career with my old background.
  
                </p>
                
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I am a 34-years-old Brazilian guy, I live in Brazil and I have a beautiful family (a wife and one daughter, she is cute). We plan to move to Canada in the near future.
                </p>
                
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Front-end is the stack I enjoy the most, but I am also learning back-end, so I can become a full stack developer. I've being studying, and building projects with the following technologies:
                </p>
                <div className="flex justify-around mt-5">
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" title = "HTML5"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" title = "CSS3"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title = "GIT"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" title = "GITHUB"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title = "REACT"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title = "JAVASCRIPT"/>
                </div>
  
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Furthermore, we cannot stop studying, we should expose ourselves to new challenges and technologies, so we can grow.
                Here are other technologies, I have been also studying:
                </p>
                <div className="flex justify-around mt-5">
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" title = "JAVA"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title = "LINUX"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" title = "PYTHON"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" title = "NODEJS"/>
                  <img width="40px" alt="technologies" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" title = "NODEJS"/>
                </div>
              </div>
            </div>
          </main>
     
      </div>
    </AboutContainer>
   );
}

export default About;