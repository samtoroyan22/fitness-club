import React, { useState } from 'react';
import RegistrationModal from './RegistrationModal';
import { join } from '../data';

const Join = () => {

  const {image, title, title2, title3, subtitle, btnText} = join;
  const [section, setSection] = useState('login');
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
  };

  return(
    <section className='section min-h-[537px] bg-[#000000] '>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0'>
          <div className='-mt-[80px] max-w-[276px] md:max-w-[442px] lg:max-w-full' data-aos='fade-right' data-aos-delay='300' data-aos-offset='200'>
            <img src={image} alt=''/>
          </div>
          <div className='max-w-[350px] lg:max-w-[492px] ml-[30px]'>
            <h2 className='h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 text-white' data-aos='fade-down' data-aos-delay='100' data-aos-offset='200'>{title} <span className='text-primary-200'>{title2}</span> {title3}</h2>
            <p className='text-body-sm text-white md:text-body-md mb-4 lg:mb-6 max-w-[348px] md:max-w-[470px] lg:max-w-[492px]' data-aos-offset='200' data-aos='fade-left' data-aos-delay='300'>{subtitle}</p>
            <button onClick={() => {
              handleSectionChange('registration');
              setRegistrationModalVisible(true);
              }} className='bg-primary-200 text-neutral-500 btn btn-lg rounded-lg hover:bg-primary-200/90 transition' data-aos='fade-up' data-aos-delay='500' data-aos-offset='200'>{btnText}</button>
          </div>
        </div>
      </div>
      <RegistrationModal visible={registrationModalVisible} onClose={() => setRegistrationModalVisible(false)} initialSection={section} />
    </section>
  );
};

export default Join;
