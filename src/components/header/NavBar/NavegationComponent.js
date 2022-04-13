
import { i18n } from '../../translate/i18n'
import TranslateCheckButton from './translateCheck';
import { Link } from 'react-scroll/modules';

export default function NavegationComponent(){ 
  const navigation = i18n.t('navigation',{ returnObjects: true });

  return (
    <div className='w-full flex justify-between'>  
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="font-medium text-gray-400 hover:text-gray-900 hover:bg-primary"
                smooth={"easeInOutQuad"}
                duration={1500}
              >
                {item.name}
              </Link>
            ))}           
                      
          </div>
          {/* Checkbox do translate.  */}
          <TranslateCheckButton />
    </div>
  );
};