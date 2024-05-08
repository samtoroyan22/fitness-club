import React, { useState } from 'react';
import {about} from "../data";
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import RegistrationModal from './RegistrationModal';

const About = () => {
  const {title, title2, subtitle1, subtitle2, icon, link} = about;
  const [section, setSection] = useState('login');
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
  };

  return(
    <section className='py-[80px] md:py-[110px] lg:pt-[120px] lg:pb-[50px]' id='about'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        <div className='section-title-group justify-start'
        data-aos='fade-down' data-aos-delay='100'>
          <img src={icon} alt=''/>
          <h2 className='h2 section-title'>{title} &nbsp; <span className='text-primary-200'>{title2}</span></h2>
        </div>
        <p className='md:text-body-md mb-12 text-justify' data-aos='fade-down' data-aos-delay='300'>{subtitle1}</p>
        <p className='md:text-body-md mb-8 text-justify' data-aos='fade-down' data-aos-delay='500'>{subtitle2}</p>
        <div className='section-title-group' data-aos='fade-down' data-aos-delay='500'>
          <button onClick={() => {
            handleSectionChange('registration');
            setRegistrationModalVisible(true);
            }} className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'>
            {link}
            <IoIosArrowDroprightCircle className='text-2xl'/>
          </button>
        </div>
      </div>
      <RegistrationModal visible={registrationModalVisible} onClose={() => setRegistrationModalVisible(false)} initialSection={section} />
    </section>
  );
};

export default About;
