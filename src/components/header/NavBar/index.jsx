import React  from 'react';
import { Fragment } from 'react';
import { i18n } from '../../translate/i18n'
import { Link } from 'react-scroll/modules';

import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import LogoRapha from '../../../assets/images/logoFace.png';
import NavegationComponent from './NavegationComponent';
import './index.scss';

export default function Navbar() {
  const navigation = i18n.t('navigation',{ returnObjects: true });

  
    return (  
        <Popover className="z-20 mt-3 pt-6 px-4 w-full h-20  lg:px-8">
          <nav className="flex" aria-label="Global">
            <div className="">
              <div className="flex items-center justify-between md:w-auto">            
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
            className="absolute z-10 inset-x-0 p-2 transition transform origin-top-right  md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden flex">
              <div className="flex flex-col">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className=" m-2 text-xl font-bold text-gray-500 hover:text-gray-900 hover:bg-yellow-400"
                  smooth={"easeInOutQuad"}
                  duration={1500}
                >
                  {item.name}
                </Link>
              ))}           
              </div>
              <div className="absolute self-end justify-self-end right-2">
                <Popover.Button className="popoverButton">
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>              
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
}