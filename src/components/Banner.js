import React, { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import {banner} from "../data";

const Banner = () => {
  const {titlePart1, titlePart2, subtitle, textBtn} = banner;
  const [section, setSection] = useState('login');
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
  };

  return <section id='home' className='bg-neutral-500 h-[1024px]'>
    <div className='container mx-auto w-full h-full'>
      <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
        <div className='text-white flex-1 z-10 pl-6 lg:pl-0'>
          <h1 className='h1 text-white mb-8' data-aos='fade-right' data-aos-delay='500'>
            {titlePart1} <br/> <span className='text-primary-200'>{titlePart2}</span>
          </h1>
          <p className='max-w-[415px] text-body-md lg:text-body-lg md-8' data-aos='fade-left' data-aos-delay='600'>{subtitle}</p><br/>
          <button onClick={() => {
            handleSectionChange('registration');
            setRegistrationModalVisible(true);
            }} className='bg-primary-200 text-neutral-500 btn btn-lg rounded-lg  lg:mx-auto hover:bg-primary-200/90 transition' data-aos='fade-up' data-aos-delay='700'>{textBtn}</button>
        </div>
        <div className='bg-blue-300 w-fill h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1' data-aos='fade-left' data-aos-delay='900'></div>
      </div>
    </div>
    <RegistrationModal visible={registrationModalVisible} onClose={() => setRegistrationModalVisible(false)} initialSection={section} />
  </section>;
};

export default Banner;
