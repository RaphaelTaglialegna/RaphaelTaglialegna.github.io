import React  from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import LogoRapha from '../../../assets/images/logoFace.png';
import NavegationComponent from './NavegationComponent';
import './index.scss';

export default function Navbar() {
  
    return (  
        <Popover className="z-20 mt-3 pt-6 px-4 w-full h-20 lg:px-8">
          <nav className="flex justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">            
                <img
                    className="lg:w-20 w-10"
                    src={LogoRapha}
                    alt="Raphael Logo"
                  />
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="popoverButton">
                 
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            {/*Inicio dos Links de Navegação  */}
            <NavegationComponent />
          </nav>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10  inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex justify-end">
                <div className="-mr-2">
                  <Popover.Button className="popoverButton">
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
}