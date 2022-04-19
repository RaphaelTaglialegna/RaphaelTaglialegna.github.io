import React, { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import { HomeContainer, MainContent } from "./style";
import Navbar from "../../header/NavBar";
import AnimatedLetters from "../../AnimatedLetters";
import ImageEffect from "./Logo";
import './index.scss'
import { i18n } from '../../translate/i18n'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const titles = i18n.t('titles',{ returnObjects: true });
  const buttons = i18n.t('buttons',{ returnObjects: true });

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    
    <HomeContainer name="Home">
      <Navbar />
        <div className="divContainer ">
          <MainContent>
            <div className="div1">
              <h1 className="h1">
                <span className="block xl:inline">Hello world!!! {titles.homeMe}</span> <br/>
                <span className="block xl:inline">Raphael Taglialegna</span>
                <br/>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={titles.jobArray}
              idx={2}
            />
              </h1>
              <p className="p1">
                <span >JavaScript</span><span >|</span>
                <span >React.js   </span><span >|</span>
                <span >TypeScript</span><span >|</span>
                <span >Node.js</span>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    type="button"
                    to="Projects"
                    smooth={"easeInOutQuad"}
                    duration={1500}
                    className="buttonStart"
                  >
                    {buttons.getStart}
                  </Link>
                </div>
              </div>
            </div>
          </MainContent>
      
        <ImageEffect/>
        </div>
    </HomeContainer>
  );
};

export default Home;