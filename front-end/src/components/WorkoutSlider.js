import React from 'react';
import {workouts} from "../data";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import '../workoutSlider.css';
import {Navigation} from 'swiper';
  
const WorkoutSlider = () => {

  const {programs} = workouts;

  return <Swiper slidesPerView={5} spaceBetween={32} navigation={true} modules={[Navigation]} className='workoutSlider'>
    {programs.map((program, idx) => {
      const {image, name} = program;
      return(
        <SwiperSlide key={idx} className='max-w-[320px] max-h-[520px] relative'>
          <img src={image} alt='' className='w-full h-full object-cover'/>
          <div className='absolute left-[20px] bottom-[20px] bg-black text-white h-[26px] px-[14px] flex items-center rounded-[5px]'>
            <div className='font-primary font-semibold text-md'>{name}</div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>;
};

export default WorkoutSlider;
