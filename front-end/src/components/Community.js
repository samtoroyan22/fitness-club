import React from 'react';
import { community } from '../data';
import CommunitySlider from "../components/CommunitySlider";

const Community = () => {

  const {icon, title, testimonials} = community;

  return(
  <section id='community' className='section bg-[#000000] pb-[80px] pt-[80px] md:pb-[110px] md:pt-[110px] lg:pb-[120px] lg:pt-[120px]'>
    <div className='section-title-group max-x-[540px] mx-auto px-4 lg:px-0' data-aos='fade-up' data-aos-delay='100'>
      <img src={icon} alt=''/>
      <h2 className='h2 section-title text-primary-200'>{title}</h2>
    </div>
    <div className='hover:cursor-pointer'>
      <CommunitySlider testimonials={testimonials}/>
    </div>
  </section>);
};

export default Community;
