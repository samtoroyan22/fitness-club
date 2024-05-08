import React, { useState } from 'react';
import { nav } from '../data';
import { header } from '../data';
import RegistrationModal from './RegistrationModal';

const NavMobile = ({ navMobile }) => {
  const { btnLoginText, btnSignupText } = header;
  const [section, setSection] = useState('login');
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
  };

  return (
    <nav className={`${navMobile ? 'min-h-screen' : 'min-h-0'}
   lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0 opacity-80`} >
      NavMobile
      <ul className='w-full h-full flex flex-col justify-center items-center gap-y-8'>
        {nav.map((item, idx) => {
          return (
            <li key={idx} className=''>
              <a href={item.href} className='text-white text-body-md hover:text-primary-200 transition'>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      <div className='-mt-44 flex justify-center gap-8'>
        <button
          className={`btn btn-sm text-white hover:text-primary-200 hover:border-emerald-400 transition border-[2px] rounded-lg ${section === 'login' ? 'border-emerald-400' : ''}`}
          style={{ marginTop: 40 }}
          onClick={() => {
            handleSectionChange('login');
            setRegistrationModalVisible(true);
          }}
        >
          {btnLoginText}
        </button>
        <button
          className={`btn btn-sm btn-primary rounded-lg ${section === 'registration' ? 'bg-emerald-400' : ''}`}
          style={{ marginTop: 40 }}
          onClick={() => {
            handleSectionChange('registration');
            setRegistrationModalVisible(true);
          }}
        >
          {btnSignupText}
        </button>
      </div>
      <RegistrationModal visible={registrationModalVisible} onClose={() => setRegistrationModalVisible(false)} initialSection={section} />
    </nav>
  );
};

export default NavMobile;
