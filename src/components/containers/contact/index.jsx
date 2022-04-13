import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import tw from "twin.macro";
import Navbar from "../../header/NavBar";
import contactRapha from '../../../assets/images/contactRapha.png';
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import FooterSection from "../../Footer"


const ContactContainer = styled.div`
  ${tw`
    w-full
    h-screen
    bg-black
    overflow-hidden
    flex-auto
    justify-center
    lg:flex
  `};
`;  

export default function Contact() {
  const isBigScreen = useMediaQuery({minWidth: 1024});
  return ( 
    <ContactContainer name="Contact">
      <div className="max-w-7xl" >
        <div className="z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:h-screen lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

          <Navbar />

          <main className="mt-7 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Let's work</span>{' '}
                <span className="block text-indigo-600 xl:inline">together</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Send a message to me and I'll be really glad to talk about everything with you, even about my career's future!              </p>
              
              <div className="flex col-auto">
                <div className="my-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start flex flex-col">
                <a href="https://www.instagram.com/raphaeltaglialegna/" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank" rel="noreferrer" alt="instagram" className="mt-5 lg:w-52 lg:hover:w-60"/>
                </a> 
                
                <a href="https://www.linkedin.com/in/raphaeltaglialegna" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" className="mt-5 lg:w-52 lg:ml-32 lg:hover:w-60" />
                </a>  
              
                <a href = "mailto:raphael.trcosta@gmail.com?subject=Hello%20Raphael" target="_blank" rel="noreferrer">
                  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" alt="gmail" className="mt-5 lg:w-52 lg:ml-72 lg:hover:w-60"/>
                </a>
                </div>
                {!isBigScreen &&
        <div className="lg:max-w-2xl" >
        <img
          className="w-60 object-cover "
          src={contactRapha}
          alt="Raphael Taglialegna"
        />
      </div>}

              </div>             
              <div className="my-8">
                <p className="mt-5 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 flex items-center">
                  You also can call, text, &nbsp; 
                  <a href="https://api.whatsapp.com/send?phone=5519984261112&text=Hello Raphael! " target="_blank" rel="noreferrer"><FaWhatsapp className="text-green-400 hover:text-4xl"/> </a>
                  &nbsp; or &nbsp; 
                  
                  <a href="https://t.me/Raphael_Taglialegna" target="_blank" rel="noreferrer">
                    <FaTelegram className="text-blue-400 hover:text-4xl" />
                  </a>&nbsp; me!!
                </p>
                <p className="mt-3 text-base text-gray-00 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-semibold flex items-center">
                 <MdOutlinePhoneIphone />&nbsp; + 55 19 98426-1112
                </p>      
              </div>          
            </div>
          </main>
        <FooterSection/>
        </div>

      </div>
      {isBigScreen &&
        <div className="lg:max-w-2xl" >
        <img
          className=" w-full lg:h-screen object-cover sm:h-72 md:h-96 "
          src={contactRapha}
          alt="Raphael Taglialegna"
        />
      </div>}

    </ContactContainer>
   );
} 
