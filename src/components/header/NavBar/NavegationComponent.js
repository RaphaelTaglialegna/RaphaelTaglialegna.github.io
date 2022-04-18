
import { i18n } from '../../translate/i18n'
import TranslateCheckButton from './translateCheck';
import { Link } from 'react-scroll/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function NavegationComponent(){ 
  const navigation = i18n.t('navigation',{ returnObjects: true });

  return (
    <div className='w-full flex justify-between'>  
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-xl font-medium text-gray-400 hover:text-gray-900 hover:bg-yellow-400"
                smooth={"easeInOutQuad"}
                duration={1500}
              >
                {item.name}
              </Link>
            ))}           
                      
          </div>
          <div>
          <ul>
          <li> 
            <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/raphaeltaglialegna/'
            > 
              <FontAwesomeIcon  icon={faLinkedin} color='#0077b5' />
            </a>
          </li>
          <li> 
            <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/RaphaelTaglialegna'
            > 
              <FontAwesomeIcon  icon={faGithub} color='green' />
            </a>
          </li>
          <li> 
            <a
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