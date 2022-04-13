import React, { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import { HomeContainer } from "./style";
import Navbar from "../../header/NavBar";
import raphaCat from '../../../assets/images/raphaCat.png';
import AnimatedLetters from "../../AnimatedLetters";
import ImageEffect from "./Logo";


function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const jobArray = ['F','u','l','l',' ','S','t','a','c','k',' ','d','e','v','e','l','o','p','e','r','.'];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    
    <HomeContainer name="Home">
      <Navbar />
        <div className="reletive left-0 top-24 h-full z-10 pb-8 bg-white sm:pb-16 w-full ">
          <main className="z-0, w-1/2 h-full absolute left-1 m-auto flex align-baseline content-end justify-end">
            <div className=" m-auto sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hello world!!! I'm </span> <br/>
                <span className="block xl:inline">Raphael Taglialegna</span>
                <br/>
              <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={2}
            />
                {/* <span className="block text-indigo-600 xl:inline">Full Stack developer</span> */}
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              New dreams, new goals and new career to make a difference to the people's lives using technology. Let's do it!              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    type="button"
                    to="Projects"
                    smooth={"easeInOutQuad"}
                    duration={1500}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </main>
      
        <ImageEffect/>
        </div>
    </HomeContainer>
  );
};

export default Home;