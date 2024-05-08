import React from 'react';
import {workouts} from "../data";
import WorkoutSlider from "../components/WorkoutSlider";

const Workouts = () => {

  const {title, title2, icon} = workouts;
  
  return(
    <section id='workouts' className='section bg-[#000000] pb-[80px] pt-[80px] md:pb-[110px] md:pt-[110px] lg:pb-[120px] lg:pt-[120px]' >
      <div className='section-title-group max-x-[540px] mx-auto px-4 lg:px-0' data-aos='fade-up' data-aos-delay='100'>
        <img src={icon} alt=''/>
        <h2 className='h2 section-title text-white'>{title} &nbsp; <span className='text-primary-200'>{title2}</span></h2>
      </div>

      <div data-aos='fade-left' data-aos-delay='200' className='hover:cursor-pointer'>
        <WorkoutSlider/>
      </div>
    
    </section>  
  );
};

export default Workouts;
