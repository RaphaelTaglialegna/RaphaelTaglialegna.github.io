import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../header/NavBar";
import contactRapha from '../../../assets/images/contactRapha.png';
import FooterSection from "../../Footer";
import { ContactContainer } from "./styled";
import './index.scss';
import emailjs from '@emailjs/browser';
import AnimatedLetters from "../../AnimatedLetters";
import { i18n } from '../../translate/i18n'

export default function Contact() {
  const titles = i18n.t('titles',{ returnObjects: true });
  const messages = i18n.t('messages',{ returnObjects: true });
  const buttons = i18n.t('buttons',{ returnObjects: true });
  const isBigScreen = useMediaQuery({minWidth: 1024});
  const form = useRef()

  const sendEmail = (e) => {
  e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_nt8dz7w',
        form.current,
        'VEDZLuPtDcgCAIfIv'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


  return (     
    <ContactContainer name="Contact">
      <div className="divContainer" >
        <Navbar />
        <div className="flex h-full">
          <main className="h-full w-full lg:w-1/2 mt-10 mx-2">
            <div className="lg:w-full w-11/12">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <AnimatedLetters
                  letterClass='white text-animate-hover'
                  strArray={titles.titleLets}
                />  
                 <AnimatedLetters
                  letterClass='text-animate-hover'
                  strArray={titles.titleTogether}
                />
              </h1>
              <p className="mt-3 text-base break-words text-gray-400 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">{messages.contact}
              </p>
            </div>      

            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
               
                    <input placeholder="Name" type="text" name="name" required />
                 
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                 
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                
                    <input type="submit" className="flat-button" value={buttons.send} />
                
              </form>
            </div>
          </main>        
        
        {isBigScreen &&
          <div className="containerContact w-full h-full" >
          <img
            className="w-full h-full"
            src={contactRapha}
            alt="Raphael Taglialegna"
            />
        </div>}
        </div>
      </div>

      <FooterSection/>
    </ContactContainer>
   );
} 
