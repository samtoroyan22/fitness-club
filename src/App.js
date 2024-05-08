import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Workouts from './components/Workouts';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Join from './components/Join';
import Footer from './components/Footer';
import Timetable from './components/TimeTable';
import Contact from './components/Contact';

const App = () => {
  
  Aos.init({
    duration:2500,
    delay: 400
  });
  return (
    <div className='max-w-[1920px] mx-auto bg-page overflow-hidden relative' style={{scrollbarGutter:'auto'}}>
      <Header />
      <Banner />
      <About/>
      <Workouts/>
      <Timetable/>
      <Community/>
      <Pricing/>
      <Join />
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;