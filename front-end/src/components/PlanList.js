import React, {useState} from 'react';
import {BsCheckCircleFill} from 'react-icons/bs';
import RegistrationModal from './RegistrationModal';

const PlanList = ({plans}) => {

  const [index, setIndex] = useState(0);
  const [section, setSection] = useState('login');
  const [registrationModalVisible, setRegistrationModalVisible] = useState(false);
  const handleSectionChange = (selectedSection) => {
    setSection(selectedSection);
  };

  return(
    <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1280px] mx-auto gap-y-4'>
      {
        plans.map((plan, currentIndex) => {
          const {name, price, list, delay} = plan;
          return <div onClick={() => setIndex(currentIndex)} key={currentIndex} className='w-full transition hover:cursor-pointer hover:cursor-pointer md:max-w-[620px] lg:max-w-[400px] rounded-sm px-4 lg:min-h-[650px]'
                    data-aos='fade-up' data-aos-delay={delay} data-aos-offset="200">
            <div className={`${
              currentIndex === index
               ? 'bg-neutral-500 text-white'
               : 'bg-neutral-400/20 text-neutral-500'
            } hover:scale-105 flex justify-center items-center py-[40px] px-[40px] lg:min-h-[650px] transition duration-500`}>
              <div className='flex flex-row lg:flex-col gap-x-8 gap-y-8 lg:gap-x-0 items-center '>
                <div>
                  <div className={`${currentIndex === index ? 'bg-primary-200 text-neutral-500' : 'bg-neutral-500 text-white'} h-[46px] rounded-lg font-primary text-md font-semibold min-w-min mx-auto px-[24px] flex itmes-center justify-center mb-10 text-[32px]`}>{name}</div>
                  <div>
                    <div className='text-[72px] font-primary font-extrabold text-center flex'>
                      <span className='tracking-[1px]'>{price}</span><span className='text-[44px] font-primary font-semibold'>₽</span>
                    </div>
                    <span className='text-[24px] font-primary font-semibold'>В месяц</span>
                  </div>
                </div>
                <div>
                  <ul className='flex flex-col gap-y-4 mb-8'>
                    {
                      list.map((item, idx) => {
                        return <li key={idx} className='flex items-center gap-x-[10px]'>
                          <BsCheckCircleFill className='text-lg'/>
                          <div>{item.name}</div>
                        </li>
                      })
                    }
                  </ul>
                  <button onClick={() => {
                    handleSectionChange('registration');
                    setRegistrationModalVisible(true);
                    }} className={`${currentIndex === index ? 'bg-primary-200 text-neutral-500' : 'border border-neutral-500'} btn btn-lg rounded-lg  lg:mx-auto`}>Приобрести</button>
                </div>
              </div>
            </div>
          </div>
        })
      }
      <RegistrationModal visible={registrationModalVisible} onClose={() => setRegistrationModalVisible(false)} initialSection={section} />
    </div>
  );
};

export default PlanList;
