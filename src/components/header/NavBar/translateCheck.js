import React, {useState} from 'react'

const I18N_STORAGE_KEY = 'i18nextLng'
const RELOAD = window.location;

export default function TranslateCheckButton() {
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
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
    );
}