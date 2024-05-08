import React, { useState, useEffect } from 'react';
import { header } from '../data';
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import RegistrationModal from './RegistrationModal';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const [modalSection, setModalSection] = useState('login');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 250 ? setIsActive(true) : setIsActive(false);
    })
  });

  const { logo, btnLoginText, btnSignupText } = header;

  const handleOpenModal = (section) => {
    setModalSection(section);
    setRegistrationModalVisible(true);
  };

  return (
    <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'}
       fixed max-w-[1920px] z-30 left-0 right-0 mx-auto flex justify-between
        items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
      <a href='/#'>
        <img className='h-[50px]' src={logo} alt='' />
      </a>
      <Nav />
      <div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm text-white hover:text-primary-200 hover:border-emerald-400 transition border-[2px] rounded-lg' onClick={() => handleOpenModal('login')}>{btnLoginText}</button>
        <button className='btn btn-sm btn-primary rounded-lg text-neutral-500' onClick={() => handleOpenModal('registration')}>{btnSignupText}</button>
      </div>

      <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden absolute right-4'>
        {navMobile ? <RiCloseFill className='text-primary-200 text-3xl cursor-pointer' /> : <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />}
      </div>
      <NavMobile navMobile={navMobile} />
      <RegistrationModal visible={registrationModalVisible} onClose={() => setRegistrationModalVisible(false)} initialSection={modalSection} />
    </header>
  );
};

export default Header;
