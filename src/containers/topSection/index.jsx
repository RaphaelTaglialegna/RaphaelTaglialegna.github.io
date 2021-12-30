import React from "react";
import { Link } from "react-scroll/modules";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/header/NavBar";
import raphaCat from '../../images/raphaCat.png';

const TopSectionContainer = styled.div`
  ${tw`
    w-full
    h-screen
    bg-white
    overflow-hidden
    flex-auto
    justify-center
    lg:flex
  `};
`;    
function TopSection() {
  return ( 
    <TopSectionContainer name="Home">
      <div className="max-w-7xl" >
        <div className="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:h-screen lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

          <Navbar />

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hello world!!! I'm Raphael Taglialegna</span>{' '}
                <span className="block text-indigo-600 xl:inline">Front-End developer</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              New dreams, new goals, new career to make a difference the people's lives using technology. Let's do it!              </p>
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
        </div>
      </div>
      <div className="lg:max-w-2xl" >
        <img
          className=" w-full lg:h-screen object-cover sm:h-72 md:h-96 "
          src={raphaCat}
          alt="Raphael Taglialegna"
        />
      </div>
    </TopSectionContainer>
   );
}

export default TopSection;