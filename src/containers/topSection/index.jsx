import React, { useState } from "react";
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

const I18N_STORAGE_KEY = 'i18nextLng'
const RELOAD = window.location;
function TopSection() {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY))
  const [checked, setChecked] = useState(language === 'pt-BR'? false : true);
  
  const handleSelectChange = () => {
    if(!checked) {
      localStorage.setItem(I18N_STORAGE_KEY, 'en-US')
      setChecked(!checked)
    } else { 
      localStorage.setItem(I18N_STORAGE_KEY, 'pt-BR')
      setChecked(!checked)
    }
    window.location = RELOAD;
    }         
        
  return (
    
    <TopSectionContainer name="Home">
      <div className="max-w-7xl" >
        <div className="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:h-screen lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <div className="flex justify-around items-center">
          <Navbar />

          <div className='flex justify-end items-center space-x-2 h-fit'>
              <span className='text-sm font-medium text-gray-400'>PT</span>
              <div>
                <input 
                type="checkbox" 
                name="" 
                id="toggle" 
                className="hidden"
                checked={checked}
                onChange={() => handleSelectChange()} 
                />
                <label for='toggle' className='cursor-pointer'>
                  <div className='w-9 h-5 flex items-center bg-gray-300 rounded-full p-1'>
                    <div className='toggle-dot w-4 h-4 bg-blue-500 rounded-full shadow-md transform duration-300 ease-out'/>
                  </div>
                </label>  
              </div>
              <span className='text-sm font-medium text-gray-400'>EN</span>
            </div>      

        </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hello world!!! I'm Raphael Taglialegna</span>{' '}
                <span className="block text-indigo-600 xl:inline">Front-End developer</span>
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
};

export default TopSection;