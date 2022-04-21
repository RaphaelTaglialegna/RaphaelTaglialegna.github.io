
import { i18n } from '../../translate/i18n'
import TranslateCheckButton from './translateCheck';
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function NavegationComponent(){ 
  const navigation = i18n.t('navigation',{ returnObjects: true });

  return (
    <div className='w-full Menu flex justify-around items-center'>  
      <div className="hidden md:block mx-4 md:space-x-8 ">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className=" text-lg xl:text-xl  font-extrabold text-gray-500 hover:text-gray-900 hover:bg-yellow-400"
                smooth={"easeInOutQuad"}
                duration={1500}
              >
                {item.name}
              </Link>
            ))}           
                      
          </div>
          <div className='relative'>
          <div className='socialIcons'>
          <div className='socialIconContainer'> 
            <a
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/raphaeltaglialegna/'
            > 
              <FontAwesomeIcon  icon={faLinkedin} color='#0077b5' />
            </a>
          </div>
          <div className='socialIconContainer'> 
            <a
            className='mx-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/RaphaelTaglialegna'
            > 
              <FontAwesomeIcon  icon={faGithub} color='green' />
            </a>
          </div>
          <div className='socialIconContainer'> 
            <a
            className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/raphaeltaglialegna'
            > 
              <FontAwesomeIcon  icon={faInstagram} color='red' />
            </a>
          </div>
      </div>
          </div>
          {/* Checkbox do translate.  */}
          <TranslateCheckButton />
    </div>
  );
};