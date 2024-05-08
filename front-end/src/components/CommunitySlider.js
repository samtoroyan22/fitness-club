import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';
import {Navigation} from 'swiper';

const CommunitySlider = ({testimonials}) => {
  return <Swiper slidesPerView={5} spaceBetween={32} navigation={true} modules={[Navigation]} className='workoutSlider' data-aos='fade-left' data-aos-delay='200'>
    {
      testimonials.map((testimonial, idx) => {
        const {image, name, message} = testimonial;
        return <SwiperSlide key={idx} className='max-w-[320px] max-h-[320px] relative'>
          <div className='relative'>
            <img src={image} alt='' className='w-full h-[520px] object-cover' />
            <div className='absolute bottom-[30px] text-white p-[20px] text-center'>
              <div className='mb-8 italic font-light text-[14px]'>{message}</div>
              <div className='flex items-center justify-center gap-x-[3px]'>
                <span className='text-[30px] text-primary-200 font-bold'>~</span>
                <div className='text-[20px] font-bold '>{name}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      })
    }
  </Swiper>;
};

export default CommunitySlider;
