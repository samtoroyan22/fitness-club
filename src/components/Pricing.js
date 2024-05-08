import React from 'react';
import {pricing} from '../data';
import PlanList from './PlanList';

const Pricing = () => {

  const { icon, title, title2, plans } = pricing;

  return(
    <section id='pricing' className='section pb-[80px] pt-[80px] md:pb-[110px] md:pt-[110px] lg:pb-[120px] lg:pt-[120px]'>
      <div className='section-title-group max-x-[540px] mx-auto px-4 lg:px-0' data-aos='fade-down' data-aos-delay='100'>
        <img src={icon} alt=''/>
        <h2 className='h2 section-title'>{title} &nbsp; <span className='text-primary-200'>{title2}</span></h2>
      </div>

      <PlanList plans={plans}/>
    </section>
  );
};

export default Pricing;
