
import { i18n } from '../../translate/i18n'
import TranslateCheckButton from './translateCheck';
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function NavegationComponent(){ 
  const navigation = i18n.t('navigation',{ returnObjects: true });

  return (
    <div className='w-full lg:flex lg:justify-between'>  
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-xl font-extrabold text-gray-500 hover:text-gray-900 hover:bg-yellow-400"
                smooth={"easeInOutQuad"}
                duration={1500}
              >
                {item.name}
              </Link>
            ))}           
                      
          </div>
          <div className='absolute left-1/3 lg:left-0 lg:relative'>
          <ul>
          <li> 
            <a
            className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/raphaeltaglialegna/'
            > 
              <FontAwesomeIcon  icon={faLinkedin} color='#0077b5' />
            </a>
          </li>
          <li> 
            <a
            className='mx-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/RaphaelTaglialegna'
            > 
              <FontAwesomeIcon  icon={faGithub} color='green' />
            </a>
          </li>
          <li> 
            <a
            className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl'
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/raphaeltaglialegna'
            > 
              <FontAwesomeIcon  icon={faInstagram} color='red' />
            </a>
          </li>
      </ul>
          </div>
          {/* Checkbox do translate.  */}
          <TranslateCheckButton />
    </div>
  );
};